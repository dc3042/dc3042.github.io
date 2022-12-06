import * as THREE from 'three';
import {entity} from './entity.js';



export const plane_controller = (() => {

  class PlaneController extends entity.Component {
    constructor(params) {
      super();
      this._Init(params);
    }

    _Init(params) {

        this._params = params;
    }

    InitComponent() {

        const plane = new THREE.Mesh(
            new THREE.BoxGeometry( 100, 1, 100 ),
            new THREE.MeshStandardMaterial({
                color: 0x808080,
              }));
            
        plane.castShadow = false;
        plane.receiveShadow = true;
    
        const shape = new Ammo.btBoxShape( new Ammo.btVector3( 50, 0.5, 50 ) );
        shape.setMargin( 0.05 );

        this.Broadcast({
            topic: 'body.load.rigid',
            body: plane,
            shape: shape,
            mass: 0,
            pos: new THREE.Vector3(0, - 0.5, 0),
            quat: new THREE.Quaternion( 0, 0, 0, 1 ),
            velocity: null,
          });
    }
  };

  return {
      PlaneController: PlaneController,
  };
})();