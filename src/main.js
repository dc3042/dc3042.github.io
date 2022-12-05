import './style.css';
import Stats from 'three/examples/jsm/libs/stats.module.js';

import * as THREE from 'three';
import {entity_manager} from './entity_manager.js';
import {entity} from './entity.js';
import {person_entity} from './person_entity.js'
import {person_input} from './person_input.js';
import {shoot_controller} from './shoot_controller.js';
import {physics_controller} from './physics_controller.js';

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import * as BufferGeometryUtils from 'three/examples/jsm/utils/BufferGeometryUtils.js';


class CharacterShooter {
  constructor() {

    this._Initialize();
  }

  _Initialize() {

    this._Init_Graphics();

    this._Init_Physics();

    this._LoadPlane();

    this._entityManager = new entity_manager.EntityManager();

    this._LoadSoftBodies();

    this._previousRAF = null;
    this._LoadAnimatedModel();

    this._RAF();
  }


  _Init_Physics(){

    const gravityConstant = -10;
    const collisionConfiguration = new Ammo.btSoftBodyRigidBodyCollisionConfiguration();
    const dispatcher = new Ammo.btCollisionDispatcher( collisionConfiguration );
    const broadphase = new Ammo.btDbvtBroadphase();
    const solver = new Ammo.btSequentialImpulseConstraintSolver();
    
    const softBodySolver = new Ammo.btDefaultSoftBodySolver();
    this._physics_world = new Ammo.btSoftRigidDynamicsWorld( dispatcher, broadphase, solver, collisionConfiguration, softBodySolver );
    this._physics_world.getWorldInfo().set_m_gravity( new Ammo.btVector3( 0, gravityConstant, 0 ) );
    
    //this._physics_world = new Ammo.btDiscreteDynamicsWorld( dispatcher, broadphase, solver, collisionConfiguration);
    this._physics_world.setGravity( new Ammo.btVector3( 0, gravityConstant, 0 ) );

    this.transformAux1 = new Ammo.btTransform();
    this.softBodyHelpers = new Ammo.btSoftBodyHelpers();

    this._soft_bodies = [];
    this._rigid_bodies = [];

  }

  _Init_Graphics(){
    let container = document.getElementById( 'container' );
    document.body.appendChild( container );

    this._threejs = new THREE.WebGLRenderer({
      antialias: true,
    });
    this._threejs.outputEncoding = THREE.sRGBEncoding;
    this._threejs.shadowMap.enabled = true;
    this._threejs.shadowMap.type = THREE.PCFSoftShadowMap;
    this._threejs.setPixelRatio(window.devicePixelRatio);
    this._threejs.setSize(window.innerWidth, window.innerHeight);

    container.appendChild(this._threejs.domElement);

    window.addEventListener('resize', () => {
      this._OnWindowResize();
    }, false);

    const fov = 50;
    const aspect = window.innerWidth / window.innerHeight;
    const near = 0.2;
    const far = 2000;
    this._camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    this._camera.position.set( 0, 1, 7 );

    this._scene = new THREE.Scene();

    let light = new THREE.DirectionalLight(0xFFFFFF, 1.0);
    light.position.set(-100, 100, 100);
    light.target.position.set(0, 0, 0);
    light.castShadow = true;
    light.shadow.bias = -0.001;
    light.shadow.mapSize.width = 4096;
    light.shadow.mapSize.height = 4096;
    light.shadow.camera.near = 0.1;
    light.shadow.camera.far = 500.0;
    light.shadow.camera.near = 0.5;
    light.shadow.camera.far = 500.0;
    light.shadow.camera.left = 50;
    light.shadow.camera.right = -50;
    light.shadow.camera.top = 50;
    light.shadow.camera.bottom = -50;
    this._scene.add(light);

    light = new THREE.AmbientLight(0xFFFFFF, 0.25);
    this._scene.add(light);

    const controls = new OrbitControls(
      this._camera, this._threejs.domElement);
    controls.target.set(0, 0.5, 0);
    controls.update();

    this._scene.background = new THREE.Color( 0xbfd1e5 );

    this._stats = new Stats();
    this._stats.domElement.style.position = 'absolute';
    this._stats.domElement.style.top = '0px';
    container.appendChild( this._stats.domElement );
  }

  _LoadPlane() {

    const plane = new THREE.Mesh(
      new THREE.BoxGeometry( 100, 1, 100 ),
      new THREE.MeshStandardMaterial({
          color: 0x808080,
        }));
      
    plane.castShadow = false;
    plane.receiveShadow = true;

    const shape = new Ammo.btBoxShape( new Ammo.btVector3( 50, 0.5, 50 ) );
    shape.setMargin( 0.05 );

    const pos = new THREE.Vector3(0, - 0.5, 0);
    const quat = new THREE.Quaternion( 0, 0, 0, 1 );

    this._CreateRigidBody( plane, shape, 0, pos, quat );


    /**
    const ball = new THREE.Mesh( new THREE.SphereGeometry( 0.5, 18, 16 ), new THREE.MeshPhongMaterial( { color: 0x202020 } ) );
    ball.castShadow = true;
    ball.receiveShadow = true;
    const ballShape = new Ammo.btSphereShape( 0.5 );
    ballShape.setMargin( 0.05 );

    this._CreateRigidBody( ball, ballShape, 5, new THREE.Vector3(0, 15, 3), new THREE.Quaternion( 0, 0, 0, 1 ) );
    */
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
  
    this._scene.add( threeObject );
  
    if ( mass > 0 ) {
      this._rigid_bodies.push( threeObject );
    }
    else{
      body.setCollisionFlags( 2 );
    }

    body.setActivationState( 4 );
  
    this._physics_world.addRigidBody( body );
  
    return body;
  
  }

  processGeometry( bufGeometry ) {

    // Ony consider the position values when merging the vertices
    const posOnlyBufGeometry = new THREE.BufferGeometry();
    posOnlyBufGeometry.setAttribute( 'position', bufGeometry.getAttribute( 'position' ) );
    posOnlyBufGeometry.setIndex( bufGeometry.getIndex() );
  
    // Merge the vertices so the triangle soup is converted to indexed triangles
    const indexedBufferGeom = BufferGeometryUtils.mergeVertices( posOnlyBufGeometry );
  
    // Create index arrays mapping the indexed vertices to bufGeometry vertices
    this.mapIndices( bufGeometry, indexedBufferGeom );
  
  }

  isEqual( x1, y1, z1, x2, y2, z2 ) {

    const delta = 0.000001;
    return Math.abs( x2 - x1 ) < delta &&
        Math.abs( y2 - y1 ) < delta &&
        Math.abs( z2 - z1 ) < delta;
  
  }
  
  mapIndices( bufGeometry, indexedBufferGeom ) {
  
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
        if ( this.isEqual( idxVertices[ i3 ], idxVertices[ i3 + 1 ], idxVertices[ i3 + 2 ],
          vertices[ j3 ], vertices[ j3 + 1 ], vertices[ j3 + 2 ] ) ) {
  
          association.push( j3 );
  
        }
  
      }
  
    }
  
  }
  

  _CreateSoftBody(bufferGeom, mass, pressure ) {

    this.processGeometry( bufferGeom );
  
    const volume = new THREE.Mesh( bufferGeom, new THREE.MeshPhongMaterial( { color: 0xFFFFFF } ) );
    volume.castShadow = true;
    volume.receiveShadow = true;
    volume.frustumCulled = false;
    this._scene.add( volume );
  
    const textureLoader = new THREE.TextureLoader();
    textureLoader.load( 'colors.png', function ( texture ) {
  
      volume.material.map = texture;
      volume.material.needsUpdate = true;
  
    } );
  
    // Volume physic object
  
    const volumeSoftBody = this.softBodyHelpers.CreateFromTriMesh(
      this._physics_world.getWorldInfo(),
      bufferGeom.ammoVertices,
      bufferGeom.ammoIndices,
      bufferGeom.ammoIndices.length / 3,
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
    this._physics_world.addSoftBody( volumeSoftBody, 1, - 1 );
    volume.userData.physicsBody = volumeSoftBody;
    // Disable deactivation
    volumeSoftBody.setActivationState( 4 );
  
    this._soft_bodies.push( volume );
  
  }

  _LoadSoftBodies() {

    const sphereGeometry = new THREE.SphereGeometry( 1, 40, 25 );
    sphereGeometry.translate( 3.5, 3, 0 );
    this._CreateSoftBody( sphereGeometry, 15, 250 );

    const boxGeometry = new THREE.BoxGeometry( 1, 1, 5, 4, 4, 20 );
    boxGeometry.translate( - 3.5, 3, 0 );
    this._CreateSoftBody( boxGeometry, 15, 120 );

  }

  _LoadAnimatedModel() {

    const params = {
      scene: this._scene,
      physics_world: this._physics_world,
      rigid_bodies: this._rigid_bodies,
      timing: 0.5
    }

    const player = new entity.Entity();
    player.AddComponent(new person_input.BasicCharacterControllerInput(params));
    player.AddComponent(new person_entity.BasicCharacterController(params));
    player.AddComponent(new shoot_controller.ShootController(params));
    player.AddComponent(new physics_controller.PhysicsController(params));
    this._entityManager.Add(player, 'player');

  }

  _OnWindowResize() {
    this._camera.aspect = window.innerWidth / window.innerHeight;
    this._camera.updateProjectionMatrix();
    this._threejs.setSize(window.innerWidth, window.innerHeight);
  }

  _RAF() {
    requestAnimationFrame((t) => {
      if (this._previousRAF === null) {
        this._previousRAF = t;
      }

      this._Step(t - this._previousRAF);
      this._threejs.render(this._scene, this._camera);
      this._stats.update();

      this._previousRAF = t;
      
      setTimeout(() => {
        this._RAF();
      }, 1);
    });
  }

  _Step(timeElapsed) {
    const timeElapsedS = timeElapsed * 0.001;

    this._entityManager.Update(timeElapsedS);

    if(this._physics_world){
      this._StepPhysics(timeElapsedS)
    }
  }

  _StepPhysics(timeElapsed) {
    this._physics_world.stepSimulation( timeElapsed, 10 );

    // Update soft volumes
    for ( let i = 0, il = this._soft_bodies.length; i < il; i ++ ) {

      const volume = this._soft_bodies[ i ];
      const geometry = volume.geometry;
      const softBody = volume.userData.physicsBody;
      const volumePositions = geometry.attributes.position.array;
      const volumeNormals = geometry.attributes.normal.array;
      const association = geometry.ammoIndexAssociation;
      const numVerts = association.length;
      const nodes = softBody.get_m_nodes();
      for ( let j = 0; j < numVerts; j ++ ) {

        const node = nodes.at( j );
        const nodePos = node.get_m_x();
        const x = nodePos.x();
        const y = nodePos.y();
        const z = nodePos.z();
        const nodeNormal = node.get_m_n();
        const nx = nodeNormal.x();
        const ny = nodeNormal.y();
        const nz = nodeNormal.z();

        const assocVertex = association[ j ];

        for ( let k = 0, kl = assocVertex.length; k < kl; k ++ ) {

          let indexVertex = assocVertex[ k ];
          volumePositions[ indexVertex ] = x;
          volumeNormals[ indexVertex ] = nx;
          indexVertex ++;
          volumePositions[ indexVertex ] = y;
          volumeNormals[ indexVertex ] = ny;
          indexVertex ++;
          volumePositions[ indexVertex ] = z;
          volumeNormals[ indexVertex ] = nz;

        }

      }

      geometry.attributes.position.needsUpdate = true;
      geometry.attributes.normal.needsUpdate = true;

    }

    
    // Update rigid bodies
    for ( let i = 0, il = this._rigid_bodies.length; i < il; i ++ ) {

      const objThree = this._rigid_bodies[ i ];
      const objPhys = objThree.userData.physicsBody;
      const ms = objPhys.getMotionState();

      if ( ms ) {

        let transform = new Ammo.btTransform();
        ms.getWorldTransform( transform );
        const p = transform.getOrigin();
        const q = transform.getRotation();
        objThree.position.set( p.x(), p.y(), p.z() );
        objThree.quaternion.set( q.x(), q.y(), q.z(), q.w() );

      }
    }
  }

}


let _APP = null;

window.addEventListener('DOMContentLoaded', () => {
  Ammo().then( function ( AmmoLib ) {

    Ammo = AmmoLib;
  
    _APP = new CharacterShooter();
  
  } );
});