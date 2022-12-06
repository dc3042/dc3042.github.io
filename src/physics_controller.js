import * as BufferGeometryUtils from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import * as THREE from 'three';
import {entity} from './entity.js';


export const physics_controller = (() => {

  class PhysicsController extends entity.Component {
    constructor(params) {
      super();
      this._params = params;
    }

    InitComponent() {
      this._RegisterHandler('body.load.rigid', (m) => { this._OnRigidBodyLoad(m); });
      this._RegisterHandler('body.load.soft', (m) => { this._OnSoftBodyLoad(m); });
      this._RegisterHandler('update.position', (m) => { this._OnModelMovePosition(m); });
      this._RegisterHandler('update.rotation', (m) => { this._OnModelMoveRotation(m); });
    }

    _OnModelMovePosition(m){
        const physicsBody = this._physicsBody;
        
        const ammoTmpPos = new Ammo.btVector3(m.value.x, m.value.y, m.value.z);
      
        const ms = physicsBody.getMotionState();
    
        if(ms){
            let transform = this._physicsBody.getWorldTransform();
            transform.setOrigin(ammoTmpPos);
        
            ms.setWorldTransform(transform);
        }
    }

    _OnModelMoveRotation(m){
      
      const physicsBody = this._physicsBody;
      const ammoTmpQuat = new Ammo.btQuaternion(m.value.x,m.value.y,m.value.z,m.value.w);
    
      const ms = physicsBody.getMotionState();
  
      if(ms){
          let transform = this._physicsBody.getWorldTransform();
          transform.setRotation(ammoTmpQuat);
      
          ms.setWorldTransform(transform);
      }
  }

    _OnRigidBodyLoad(m) {

        const body = this._CreateRigidBody(m.body, m.shape, m.mass, m.pos, m.quat);

        if(m.velocity){
            body.setLinearVelocity( new Ammo.btVector3( 10 * m.velocity.x, 10 * m.velocity.y, 10 * m.velocity.z ) );  
        }
        else{
          this._physicsBody= body;
        }
    }

    _CreateRigidBody( threeObject, physicsShape, mass, pos, quat ) {

        threeObject.position.copy( pos );
        threeObject.quaternion.copy( quat );
      
        let transform = new Ammo.btTransform();
        transform.setIdentity();
        transform.setOrigin( new Ammo.btVector3( pos.x, pos.y, pos.z ) );
        transform.setRotation( new Ammo.btQuaternion( quat.x, quat.y, quat.z, quat.w ) );
        let motionState = new Ammo.btDefaultMotionState( transform );
      
        let localInertia = new Ammo.btVector3( 0, 0, 0 );
        physicsShape.calculateLocalInertia( mass, localInertia );
      
        let rbInfo = new Ammo.btRigidBodyConstructionInfo( mass, motionState, physicsShape, localInertia );
        let body = new Ammo.btRigidBody( rbInfo );

        threeObject.userData.physicsBody = body;
      
        this._params.scene.add( threeObject );
      
        if ( mass > 0 ) {
            this._params.rigid_bodies.push( threeObject );
        }
        else{
          body.setCollisionFlags( 2 );
        }
    
        body.setActivationState( 4 );
      
        this._params.physics_world.addRigidBody( body );
      
        return body;
      
      }

      _OnSoftBodyLoad(m){

        
        const body = this._CreateSoftBody(m.bufferGeometry, this._params.mass, this._params.pressure)

        this._physicsBody = body;
      }

      _CreateSoftBody(bufferGeometry, mass, pressure ){

        this._processGeometry(bufferGeometry);

        const volume = new THREE.Mesh( bufferGeometry, new THREE.MeshPhongMaterial( { color: 0xFFFFFF } ) );
        volume.castShadow = true;
        volume.receiveShadow = true;
        volume.frustumCulled = false;
        this._params.scene.add( volume );
        console.log("scene added");

        if (this._params.texture){
          console.log(this._params.texture);

          const textureLoader = new THREE.TextureLoader();
          textureLoader.load( this._params.texture, function ( texture ) {
        
            volume.material.map = texture;
            volume.material.needsUpdate = true;
        
          } );
        }

        const volumeSoftBody = this._params.softBodyHelpers.CreateFromTriMesh(
          this._params.physics_world.getWorldInfo(),
          bufferGeometry.ammoVertices,
          bufferGeometry.ammoIndices,
          bufferGeometry.ammoIndices.length / 3,
          true );
      
        const sbConfig = volumeSoftBody.get_m_cfg();
        sbConfig.set_viterations( 40 );
        sbConfig.set_piterations( 40 );
      
        // Soft-soft and soft-rigid collisions
        sbConfig.set_collisions( 0x11 );
      
        // Friction
        sbConfig.set_kDF( 0.1 );
        // Damping
        sbConfig.set_kDP( 0.01 );
        // Pressure
        sbConfig.set_kPR( pressure );
        // Stiffness
        volumeSoftBody.get_m_materials().at( 0 ).set_m_kLST( 0.9 );
        volumeSoftBody.get_m_materials().at( 0 ).set_m_kAST( 0.9 );
      
        volumeSoftBody.setTotalMass( mass, false );
        Ammo.castObject( volumeSoftBody, Ammo.btCollisionObject ).getCollisionShape().setMargin( 0.05 );
        this._params.physics_world.addSoftBody( volumeSoftBody, 1, - 1 );
        volume.userData.physicsBody = volumeSoftBody;
        // Disable deactivation
        volumeSoftBody.setActivationState( 4 );

        this._params.soft_bodies.push(volume);

        return volume;
      }

      _processGeometry( bufGeometry ) {

        // Ony consider the position values when merging the vertices
        const posOnlyBufGeometry = new THREE.BufferGeometry();
        posOnlyBufGeometry.setAttribute( 'position', bufGeometry.getAttribute( 'position' ) );
        posOnlyBufGeometry.setIndex( bufGeometry.getIndex() );
      
        // Merge the vertices so the triangle soup is converted to indexed triangles
        const indexedBufferGeom = BufferGeometryUtils.mergeVertices( posOnlyBufGeometry );
      
        // Create index arrays mapping the indexed vertices to bufGeometry vertices
        this._mapIndices( bufGeometry, indexedBufferGeom );
      
      }
    
      _isEqual( x1, y1, z1, x2, y2, z2 ) {
    
        const delta = 0.000001;
        return Math.abs( x2 - x1 ) < delta &&
            Math.abs( y2 - y1 ) < delta &&
            Math.abs( z2 - z1 ) < delta;
      
      }
      
      _mapIndices( bufGeometry, indexedBufferGeom ) {
      
        // Creates ammoVertices, ammoIndices and ammoIndexAssociation in bufGeometry
      
        const vertices = bufGeometry.attributes.position.array;
        const idxVertices = indexedBufferGeom.attributes.position.array;
        const indices = indexedBufferGeom.index.array;
      
        const numIdxVertices = idxVertices.length / 3;
        const numVertices = vertices.length / 3;
      
        bufGeometry.ammoVertices = idxVertices;
        bufGeometry.ammoIndices = indices;
        bufGeometry.ammoIndexAssociation = [];
      
        for ( let i = 0; i < numIdxVertices; i ++ ) {
      
          const association = [];
          bufGeometry.ammoIndexAssociation.push( association );
      
          const i3 = i * 3;
      
          for ( let j = 0; j < numVertices; j ++ ) {
      
            const j3 = j * 3;
            if ( this._isEqual( idxVertices[ i3 ], idxVertices[ i3 + 1 ], idxVertices[ i3 + 2 ],
              vertices[ j3 ], vertices[ j3 + 1 ], vertices[ j3 + 2 ] ) ) {
      
              association.push( j3 );
      
            }
      
          }
      
        }
      
      }


  };

  return {
      PhysicsController: PhysicsController,
  };
})();