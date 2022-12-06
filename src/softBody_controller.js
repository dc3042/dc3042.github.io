import * as THREE from 'three';
import {entity} from './entity.js';



export const softBody_controller = (() => {

  class SoftBodyController extends entity.Component {
    constructor(params) {
      super();
      this._Init(params);
    }

    _Init(params) {

        this._params = params;
    }

    InitComponent() {

        const bufferGeometry = this._params.bufferGeometry;
        bufferGeometry.translate(this._params.position.x, this._params.position.y, this._params.position.z);

        console.log(this._parent);

        this.Broadcast({
            topic: 'body.load.soft',
            bufferGeometry: bufferGeometry,
        });
    }
  };

  return {
      SoftBodyController: SoftBodyController,
  };
})();