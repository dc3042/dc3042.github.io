import * as THREE from 'three';


export const person_state = (() => {

    class State {
        constructor(parent) {
            this._parent = parent;
        }
        
        Enter() {}
        Exit() {}
        Update() {}
    };

    class WalkState extends State {
        constructor(parent) {
          super(parent);
        }
      
        get Name() {
          return 'walk';
        }
      
        Enter(prevState) {
          const curAction = this._parent._proxy._animations['walk'].action;
          if (prevState) {
            const prevAction = this._parent._proxy._animations[prevState.Name].action;
      
            curAction.enabled = true;
            curAction.time = 0.0;
            curAction.setEffectiveTimeScale(1.0);
            curAction.setEffectiveWeight(1.0);
            curAction.crossFadeFrom(prevAction, 0.5, true);
            curAction.play();
          } else {
            curAction.play();
          }
        }
      
        Exit() {
        }
      
        Update(timeElapsed, keys) {
          if (keys.forward ) {
            return;
          } else if (keys.shift){
            this._parent.SetState('shoot');
          }
      
          this._parent.SetState('idle');
        }
      };

    class WalkBackState extends State {
        constructor(parent) {
          super(parent);
        }
      
        get Name() {
          return 'walk_back';
        }
      
        Enter(prevState) {
          const curAction = this._parent._proxy._animations['walk_back'].action;
          if (prevState) {
            const prevAction = this._parent._proxy._animations[prevState.Name].action;
      
            curAction.enabled = true;
            curAction.time = 0.0;
            curAction.setEffectiveTimeScale(1.0);
            curAction.setEffectiveWeight(1.0);
            curAction.crossFadeFrom(prevAction, 0.5, true);
            curAction.play();
          } else {
            curAction.play();
          }
        }
      
        Exit() {
        }
      
        Update(timeElapsed, keys) {
          if (keys.backward) {
            return;
          } else if (keys.shift){
            this._parent.SetState('shoot');
          }
      
          this._parent.SetState('idle');
        }
      };
  
    class ShootState extends State {
        constructor(parent) {
            super(parent);
            this._action = null;
        
            this._FinishedCallback = () => { 
              this._Finished();
            }
        }
        
        get Name() {
            return 'shoot';
        }
        
        Enter(prevState) {

            this._action = this._parent._proxy._animations['shoot'].action;
            const mixer = this._action.getMixer();
            mixer.addEventListener('finished', this._FinishedCallback);
        
            if (prevState) {
                const prevAction = this._parent._proxy._animations[prevState.Name].action;
            
                //console.log(curAction._clip.duration);
                this._action.reset();  
                this._action.setLoop(THREE.LoopOnce, 1);
                this._action.clampWhenFinished = true;
                this._action.crossFadeFrom(prevAction, 0.2, true);
                this._action.play();
            } else {
              this._action.play();
            }
        
        }
        
        _Finished() {
            this._Cleanup();
            this._parent.SetState('idle');
        }
        
        _Cleanup() {
            const action = this._parent._proxy._animations['shoot'].action;
            if(this._action){
              this._action.getMixer().removeEventListener('finished', this._FinishedCallback);
            }
        }
        
        Exit() {
            this._Cleanup();
        }
        
        Update(_) {
        }
    };
  
    class IdleState extends State {
        constructor(parent) {
          super(parent);
        }
      
        get Name() {
          return 'idle';
        }
      
        Enter(prevState) {
          const idleAction = this._parent._proxy._animations['idle'].action;
          if (prevState) {
            const prevAction = this._parent._proxy._animations[prevState.Name].action;
            idleAction.time = 0.0;
            idleAction.enabled = true;
            idleAction.setEffectiveTimeScale(1.0);
            idleAction.setEffectiveWeight(1.0);
            idleAction.crossFadeFrom(prevAction, 0.5, true);
            idleAction.play();
          } else {
            idleAction.play();
          }
        }
      
        Exit() {
        }
      
        Update(_, keys) {

          if (keys.forward) {
            this._parent.SetState('walk');
          } else if (keys.backward){
            this._parent.SetState('walk_back');
          } else if (keys.shift){
            this._parent.SetState('shoot');
          }
        }
    };
  
  
  
  
  

  return {
    State: State,
    ShootState: ShootState,
    IdleState: IdleState,
    WalkState: WalkState,
    WalkBackState: WalkBackState,
  };

})();