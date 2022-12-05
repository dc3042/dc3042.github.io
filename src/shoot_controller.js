import * as THREE from 'three';

import {entity} from './entity.js';



export const shoot_controller = (() => {

  class ShootController extends entity.Component {
    constructor(params) {
      super();
      this._params = params;
      this._timeElapsed = 0.0;
      this._action = null;
    }

    InitComponent() {
      this._RegisterHandler('person.action', (m) => { this._OnAnimAction(m); });
    }

    _OnAnimAction(m) {

        console.log("message");
      if (this._action == null && m.action == 'shoot' ) {
        console.log("shoot");
        this._action = m.action;
        this._timeElapsed = 0.0;
      }

      const oldTiming = this._timeElapsed;
      this._timeElapsed = m.time;

      if (oldTiming < this._params.timing && this._timeElapsed >= this._params.timing) {

        console.log("shoot bullet");
        const target = this.GetComponent('BasicCharacterController')._target;
        
        const quat = target.quaternion;

        const forward = new THREE.Vector3(0, 0, 1);
        forward.applyQuaternion(quat);
        forward.normalize();
        forward.multiplyScalar(1);

        const pos = new THREE.Vector3(target.position.x + forward.x, target.position.y + 0.6, target.position.z + forward.z);

        // Creates a ball
        const ballMass = 3;
        const ballRadius = 0.4;
    
        const ball = new THREE.Mesh( new THREE.SphereGeometry( ballRadius, 18, 16 ), new THREE.MeshPhongMaterial( { color: 0x202020 } ) );
        ball.castShadow = true;
        ball.receiveShadow = true;
        const ballShape = new Ammo.btSphereShape( ballRadius );
        ballShape.setMargin( 0.05 );

        this.Broadcast({
          topic: 'body.load',
          body: ball,
          shape: ballShape,
          mass: ballMass,
          pos: pos,
          quat: quat,
          velocity: forward
        });
        
      }

      else if(this._timeElapsed >= 3){
        this._action = null;
      }
    }
  };

  return {
      ShootController: ShootController,
  };
})();