import * as THREE from 'three';

import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader.js';

import {entity} from './entity.js';
import {person_state} from './person_state.js';


export const person_entity = (() => {

    class FiniteStateMachine {
        constructor() {
            this._states = {};
            this._currentState = null;
        }

        _AddState(name, type) {
            this._states[name] = type;
        }

        SetState(name) {
            const prevState = this._currentState;
            
            if (prevState) {
            if (prevState.Name == name) {
                return;
            }
            prevState.Exit();
            }

            const state = new this._states[name](this);

            this._currentState = state;
            state.Enter(prevState);
        }

        Update(timeElapsed, key) {
            if (this._currentState) {
              this._currentState.Update(timeElapsed, key);
            }
        }
    };

    class CharacterFSM extends FiniteStateMachine {
        constructor(proxy) {
          super();
          this._proxy = proxy;
          this._Init();
        }
      
        _Init() {
          this._AddState('idle', person_state.IdleState);
          this._AddState('walk', person_state.WalkState);
          this._AddState('walk_back', person_state.WalkBackState);
          this._AddState('shoot', person_state.ShootState);
        }
    };
  
    class BasicCharacterControllerProxy {
        constructor(animations) {
          this._animations = animations;
        }
      
        get animations() {
          return this._animations;
        }
    };


    class BasicCharacterController extends entity.Component {
        constructor(params) {
          super();
          this._Init(params);
        }
      
        _Init(params) {
          this._params = params;
          this._decceleration = new THREE.Vector3(-0.0005, -0.0001, -5.0);
          this._acceleration = new THREE.Vector3(1, 0.1, 5);
          this._velocity = new THREE.Vector3(0, 0, 0);
      
          this._animations = {};
          this._stateMachine = new CharacterFSM(
              new BasicCharacterControllerProxy(this._animations));
        
          this._target = new THREE.Mesh(new THREE.BoxGeometry(1,2,1), new THREE.MeshPhongMaterial({color: 0x30ab78}));
          this._target.material.visible = false;

          this._keys = {
            forward: false,
            backward: false,
            left: false,
            right: false,
            space: false,
            shift: false,
          };
          document.addEventListener('keydown', (e) => this._onKeyDown(e), false);
          document.addEventListener('keyup', (e) => this._onKeyUp(e), false);
      
          this._LoadCharacter();
        }

        get target(){
          return this._target;
        }

        _onKeyDown(event) {
          switch (event.keyCode) {
            case 87: // w
              this._keys.forward = true;
              break;
            case 65: // a
              this._keys.left = true;
              break;
            case 83: // s
              this._keys.backward = true;
              break;
            case 68: // d
              this._keys.right = true;
              break;
            case 32: // SPACE
              this._keys.space = true;
              break;
            case 16: // SHIFT
              this._keys.shift = true;
              break;
          }
        }
      
        _onKeyUp(event) {
          switch(event.keyCode) {
            case 87: // w
              this._keys.forward = false;
              break;
            case 65: // a
              this._keys.left = false;
              break;
            case 83: // s
              this._keys.backward = false;
              break;
            case 68: // d
              this._keys.right = false;
              break;
            case 32: // SPACE
              this._keys.space = false;
              break;
            case 16: // SHIFT
              this._keys.shift = false;
              break;
          }
        }

      
        _LoadCharacter() {
          const loader = new FBXLoader();
          loader.load('./Y Bot.fbx', (fbx) => {
            fbx.scale.setScalar(0.01);
            fbx.position.y -= 1;
            this._target.attach(fbx);
            
            this._bones = {};

            for(let b of fbx.children[1].skeleton.bones) {
                this._bones[b.name] = b;
            }

            //console.log(this._bones);

            fbx.traverse(c => {
              c.castShadow = true;
              c.receiveShadow = true;
              if(c.material && c.material.map){
                c.material.map.encoding = THREE.sRGBEncoding;
              }
            });
      
      
            this._mixer = new THREE.AnimationMixer(fbx);
      
            this._manager = new THREE.LoadingManager();
            this._manager.onLoad = () => {
              this._stateMachine.SetState('idle');
            };
      
            const _OnLoad = (animName, anim) => {
              const clip = anim.animations[0];
              const action = this._mixer.clipAction(clip);
        
              this._animations[animName] = {
                clip: clip,
                action: action,
              };
            };
      
            const loader = new FBXLoader(this._manager);
            loader.load('Walking.fbx', (a) => { _OnLoad('walk', a); });
            loader.load('HappyIdle.fbx', (a) => { _OnLoad('idle', a); });
            loader.load('Walking Backwards.fbx',  (a) => { _OnLoad('walk_back', a); });
            loader.load('Pistol Aim.fbx', (a) => { _OnLoad('shoot', a); });

            let scale = new THREE.Vector3();
            scale.copy(this._target.scale);

            const shape = new Ammo.btBoxShape( new Ammo.btVector3( scale.x* 0.5, scale.y* 0.5, scale.z* 0.5 ) );
            shape.setMargin( 0.05 );

            this.Broadcast({
              topic: 'body.load',
              body: this._target,
              shape: shape,
              mass: 0,
              pos: new THREE.Vector3( 0, 1, 0 ),
              quat: new THREE.Quaternion( 0, 0, 0, 1 ),
              velocity: null,
            });
            
          });
        }
      
        Update(timeInSeconds) {
          if (!this._stateMachine._currentState) {
            return;
          }
      
          const input = this.GetComponent('BasicCharacterControllerInput');

          this._stateMachine.Update(timeInSeconds, this._keys);

          if (this._mixer) {
            this._mixer.update(timeInSeconds);
          }

          if (this._stateMachine._currentState._action) {
            this.Broadcast({
              topic: 'person.action',
              action: this._stateMachine._currentState.Name,
              time: this._stateMachine._currentState._action.time,
              target: this._target,
            });
          }

          const currentState = this._stateMachine._currentState;
          if (currentState.Name == 'shoot') {
            return;
          }
      
          const velocity = this._velocity;
          const frameDecceleration = new THREE.Vector3(
              velocity.x * this._decceleration.x,
              velocity.y * this._decceleration.y,
              velocity.z * this._decceleration.z
          );
          frameDecceleration.multiplyScalar(timeInSeconds);
          frameDecceleration.z = Math.sign(frameDecceleration.z) * Math.min(
              Math.abs(frameDecceleration.z), Math.abs(velocity.z));
      
          velocity.add(frameDecceleration);
      
          const controlObject = this._target;
          const _Q = new THREE.Quaternion();
          const _A = new THREE.Vector3();
          const _R = controlObject.quaternion.clone();
      
          const acc = this._acceleration.clone();
      
          if (this._keys.forward) {
            velocity.z += acc.z * timeInSeconds;
          }
          if (this._keys.backward) {
            velocity.z -= acc.z * timeInSeconds;
          }
          if (this._keys.left) {
            _A.set(0, 1, 0);
            _Q.setFromAxisAngle(_A, 4.0 * Math.PI * timeInSeconds * this._acceleration.y);
            _R.multiply(_Q);
          }
          if (this._keys.right) {
            _A.set(0, 1, 0);
            _Q.setFromAxisAngle(_A, 4.0 * -Math.PI * timeInSeconds * this._acceleration.y);
            _R.multiply(_Q);
          }
      
          controlObject.quaternion.copy(_R);
      
          const oldPosition = new THREE.Vector3();
          oldPosition.copy(controlObject.position);
      
          const forward = new THREE.Vector3(0, 0, 1);
          forward.applyQuaternion(controlObject.quaternion);
          forward.normalize();
      
          const sideways = new THREE.Vector3(1, 0, 0);
          sideways.applyQuaternion(controlObject.quaternion);
          sideways.normalize();
      
          sideways.multiplyScalar(velocity.x * timeInSeconds);
          forward.multiplyScalar(velocity.z * timeInSeconds);
      
          controlObject.position.add(forward);
          controlObject.position.add(sideways);

          this.Broadcast({
            topic: 'body.move',
            controlObject: controlObject,
          });
        }
    };
  
    return {
        BasicCharacterControllerProxy: BasicCharacterControllerProxy,
        BasicCharacterController: BasicCharacterController,
    };

})();