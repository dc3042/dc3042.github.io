
import {entity} from './entity.js';


export const physics_controller = (() => {

  class PhysicsController extends entity.Component {
    constructor(params) {
      super();
      this._params = params;
    }

    InitComponent() {
      this._RegisterHandler('body.load', (m) => { this._OnModelLoad(m); });
      this._RegisterHandler('body.move', (m) => { this._OnModelMove(m); });
    }

    _OnModelMove(m){
        const controlObject = m.controlObject;
        const physicsBody = controlObject.userData.physicsBody;
      
        const ms = physicsBody.getMotionState();
    
        if(ms){
            let ammoTmpPos = new Ammo.btVector3(controlObject.position.x, controlObject.position.y, controlObject.position.z);
            let ammoTmpQuat = new Ammo.btQuaternion(controlObject.quaternion.x,controlObject.quaternion.y,controlObject.quaternion.z,controlObject.quaternion.w);
        
            let transform = new Ammo.btTransform();
            transform.setIdentity();
            transform.setOrigin(ammoTmpPos);
            transform.setRotation(ammoTmpQuat);
        
            ms.setWorldTransform(transform);
        }
    }

    _OnModelLoad(m) {

        console.log("model");
        console.log(m.body);
        console.log(m.shape);

        const body = this._CreateRigidBody(m.body, m.shape, m.mass, m.pos, m.quat);

        if(m.velocity){
            body.setLinearVelocity( new Ammo.btVector3( 10 * m.velocity.x, 10 * m.velocity.y, 10 * m.velocity.z ) );  
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
  };

  return {
      PhysicsController: PhysicsController,
  };
})();