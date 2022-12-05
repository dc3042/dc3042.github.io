import './style.css';

import * as THREE from 'three';

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import * as BufferGeometryUtils from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader.js';
import Stats from 'three/examples/jsm/libs/stats.module.js';

class EntityManager {
  constructor() {
    this._ids = 0;
    this._entitiesMap = {};
    this._entities = [];
  }

  _GenerateName() {
    this._ids += 1;

    return '__name__' + this._ids;
  }

  Get(n) {
    return this._entitiesMap[n];
  }

  Filter(cb) {
    return this._entities.filter(cb);
  }

  Add(e, n) {
    if (!n) {
      n = this._GenerateName();
    }

    this._entitiesMap[n] = e;
    this._entities.push(e);

    e.SetParent(this);
    e.SetName(n);
  }

  SetActive(e, b) {
    const i = this._entities.indexOf(e);
    if (i < 0) {
      return;
    }

    this._entities.splice(i, 1);
  }

  Update(timeElapsed) {
    for (let e of this._entities) {
      e.Update(timeElapsed);
    }
  }
}

class Entity {
  constructor() {
    this._name = null;
    this._components = {};

    this._position = new THREE.Vector3();
    this._rotation = new THREE.Quaternion();
    this._handlers = {};
    this._parent = null;
  }

  _RegisterHandler(n, h) {
    if (!(n in this._handlers)) {
      this._handlers[n] = [];
    }
    this._handlers[n].push(h);
  }

  SetParent(p) {
    this._parent = p;
  }

  SetName(n) {
    this._name = n;
  }

  get Name() {
    return this._name;
  }

  SetActive(b) {
    this._parent.SetActive(this, b);
  }

  AddComponent(c) {
    c.SetParent(this);
    this._components[c.constructor.name] = c;

    c.InitComponent();
  }

  GetComponent(n) {
    return this._components[n];
  }

  FindEntity(n) {
    return this._parent.Get(n);
  }

  Broadcast(msg) {
    if (!(msg.topic in this._handlers)) {
      return;
    }

    for (let curHandler of this._handlers[msg.topic]) {
      curHandler(msg);
    }
  }

  SetPosition(p) {
    this._position.copy(p);
    this.Broadcast({
        topic: 'update.position',
        value: this._position,
    });
  }

  SetQuaternion(r) {
    this._rotation.copy(r);
    this.Broadcast({
        topic: 'update.rotation',
        value: this._rotation,
    });
  }

  Update(timeElapsed) {
    for (let k in this._components) {
      this._components[k].Update(timeElapsed);
    }
  }
};

class Component {
  constructor() {
    this._parent = null;
  }

  SetParent(p) {
    this._parent = p;
  }

  InitComponent() {}

  GetComponent(n) {
    return this._parent.GetComponent(n);
  }

  FindEntity(n) {
    return this._parent.FindEntity(n);
  }

  Broadcast(m) {
    this._parent.Broadcast(m);
  }

  Update(_) {}

  _RegisterHandler(n, h) {
    this._parent._RegisterHandler(n, h);
  }
};

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

  Update(timeElapsed, input) {
    if (input._keys.forward ) {
      return;
    } else if (input._keys.shift){
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

  Update(timeElapsed, input) {
    if (input._keys.backward) {
      return;
    } else if (input._keys.shift){
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

  Update(_, input) {
    if (input._keys.forward) {
      this._parent.SetState('walk');
    } else if (input._keys.backward){
      this._parent.SetState('walk_back');
    } else if (input._keys.shift){
      this._parent.SetState('shoot');
    }
  }
};

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

  Update(timeElapsed, input) {
      if (this._currentState) {
      this._currentState.Update(timeElapsed, input);
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
    this._AddState('idle', IdleState);
    this._AddState('walk', WalkState);
    this._AddState('walk_back', WalkBackState);
    this._AddState('shoot', ShootState);
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


class BasicCharacterController extends Component {
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
  
    this._target = new THREE.Mesh(new THREE.BoxGeometry(1,1,1), new THREE.MeshPhongMaterial({color: 0x30ab78}));
    this._target.material.visible = false;

    this._LoadCharacter();
  }

  get target() {
    return this._target;
  }


  _LoadCharacter() {
    const loader = new FBXLoader();
    loader.load('./Y Bot.fbx', (fbx) => {
      fbx.scale.setScalar(0.01);
      this._target.attach(fbx);
      
      this._bones = {};

      for(let b of fbx.children[1].skeleton.bones) {
          this._bones[b.name] = b;
      }

      console.log(this._bones);

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
    });
  }

  Update(timeInSeconds) {
    if (!this._stateMachine._currentState) {
      return;
    }

    const input = this.GetComponent('BasicCharacterControllerInput');
    this._stateMachine.Update(timeInSeconds, input);

    if (this._mixer) {
      this._mixer.update(timeInSeconds);
    }

    if (this._stateMachine._currentState._action) {
      this.Broadcast({
        topic: 'person.action',
        action: this._stateMachine._currentState.Name,
        time: this._stateMachine._currentState._action.time,
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
    if (input._keys.space) {
      acc.multiplyScalar(0.0);
    }

    if (input._keys.forward) {
      velocity.z += acc.z * timeInSeconds;
    }
    if (input._keys.backward) {
      velocity.z -= acc.z * timeInSeconds;
    }
    if (input._keys.left) {
      _A.set(0, 1, 0);
      _Q.setFromAxisAngle(_A, 4.0 * Math.PI * timeInSeconds * this._acceleration.y);
      _R.multiply(_Q);
    }
    if (input._keys.right) {
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
};

class BasicCharacterControllerInput extends Component {
  constructor(params) {
    super();
    this._params = params;
    this._Init();
  }

  _Init() {
    this._keys = {
      forward: false,
      backward: false,
      left: false,
      right: false,
      space: false,
      shift: false,
    };
    this._raycaster = new THREE.Raycaster();
    document.addEventListener('keydown', (e) => this._onKeyDown(e), false);
    document.addEventListener('keyup', (e) => this._onKeyUp(e), false);
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
};

class ShootController extends Component {
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
      const target = this.GetComponent('BasicCharacterController').target;
      
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
      
      const localInertia = new Ammo.btVector3( 0, 0, 0 );
      ballShape.calculateLocalInertia( ballMass, localInertia );

      const transform = new Ammo.btTransform();
      transform.setIdentity();
      transform.setOrigin( new Ammo.btVector3( pos.x, pos.y, pos.z ) );
      transform.setRotation( new Ammo.btQuaternion( quat.x, quat.y, quat.z, quat.w ) );
      const motionState = new Ammo.btDefaultMotionState( transform );
  
      const rbInfo = new Ammo.btRigidBodyConstructionInfo( ballMass, motionState, ballShape, localInertia );
      const ballBody = new Ammo.btRigidBody( rbInfo );

      ballBody.setFriction( 1 );

      ball.userData.physicsBody = ballBody;

      this._params.scene.add(ball);
      this._params.rigid_bodies.push( ball );
      this._params.physics_world.addRigidBody( ballBody );

      //console.log(forward);
      ballBody.setLinearVelocity( new Ammo.btVector3( 10 * forward.x, 10 * forward.y, 10 * forward.z ) );      
    }

    else if(this._timeElapsed >= 3){
      this._action = null;
    }
  }
};

class CharacterShooter {
  constructor() {

    this._Initialize();
  }

  _Initialize() {

    this._Init_Graphics();

    this._Init_Physics();

    this._LoadPlane();

    this._entityManager = new EntityManager();

    this._LoadSoftBodies();

    this._previousRAF = null;
    this._LoadAnimatedModel();
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

    const pos = new THREE.Vector3( 0, 1, 0 );
    const quat = new THREE.Quaternion( 0, 0, 0, 1 );

    const params = {
      scene: this._scene,
      physics_world: this._physics_world,
      rigid_bodies: this._rigid_bodies,
      timing: 0.5
    }

    const player = new Entity();
    player.AddComponent(new BasicCharacterControllerInput(params));
    player.AddComponent(new BasicCharacterController(params));
    player.AddComponent(new ShootController(params));
    this._entityManager.Add(player, 'player');

    const target = player.GetComponent('BasicCharacterController').target;

    let scale = new THREE.Vector3();
    scale.copy(target.scale);

    console.log("scale");
    console.log(scale);

    const shape = new Ammo.btBoxShape( new Ammo.btVector3( scale.x* 0.5, scale.y* 0.5, scale.z* 0.5 ) );
    shape.setMargin( 0.05 );

    this._CreateRigidBody(target, shape, 0, pos, quat);

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
      this._RAF();
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

    _APP._RAF();
  
  } );
});