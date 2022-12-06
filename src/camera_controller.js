import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.118/build/three.module.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import {entity} from './entity.js';


export const camera_controller = (() => {
  
  class ThirdPersonCamera extends entity.Component {
    constructor(params) {
      super();

      this._params = params;
      this._camera = params.camera;

      this._controls = new OrbitControls(
        this._camera, this._params.domElement);
      this._controls.target.set(0, 0.5, 0);
      this._controls.update();

      this._defaultPosition = new THREE.Vector3(0,10,7);

      this._currentPosition = new THREE.Vector3();
      this._currentLookat = new THREE.Vector3();

      this.third_person = true;
      this._controls.enabled = false;

      document.addEventListener('keydown', (e) => this._onKeyDown(e), false);
    }

    _onKeyDown(event) {
        switch (event.keyCode) {
          case 13: // w

            this._controls.enabled = this.third_person;

            if(this._controls.enabled){
                this._camera.position.copy(this._defaultPosition);
                this._camera.lookAt(this._controls.target);
            }

            this.third_person = !this.third_person;
            break;
        }


        console.log(this._controls.enabled);
    }
    

    _CalculateIdealOffset() {
      const idealOffset = new THREE.Vector3(-0, 2, -4);
      idealOffset.applyQuaternion(this._params.target._rotation);
      idealOffset.add(this._params.target._position);
      return idealOffset;
    }

    _CalculateIdealLookat() {
      const idealLookat = new THREE.Vector3(0, -2, 7);
      idealLookat.applyQuaternion(this._params.target._rotation);
      idealLookat.add(this._params.target._position);
      return idealLookat;
    }

    Update(timeElapsed) {

      if( this.third_person){
        const idealOffset = this._CalculateIdealOffset();
        const idealLookat = this._CalculateIdealLookat();

        // const t = 0.05;
        // const t = 4.0 * timeElapsed;
        const t = 1.0 - Math.pow(0.01, timeElapsed);

        this._currentPosition.lerp(idealOffset, t);
        this._currentLookat.lerp(idealLookat, t);

        this._camera.position.copy(this._currentPosition);
        this._camera.lookAt(this._currentLookat);
      }
    }
  }

  return {
    ThirdPersonCamera: ThirdPersonCamera
  };

})();