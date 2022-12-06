import './style.css';
import Stats from 'three/examples/jsm/libs/stats.module.js';

import * as THREE from 'three';
import {entity_manager} from './entity_manager.js';
import {entity} from './entity.js';
import {person_controller} from './person_controller.js';
import {shoot_controller} from './shoot_controller.js';
import {physics_controller} from './physics_controller.js';
import {softBody_controller} from './softBody_controller.js';
import {plane_controller} from './plane_controller.js';

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';


class CharacterShooter {
  constructor() {

    this._entityManager = new entity_manager.EntityManager();
    this._previousRAF = null;
    
    this._Initialize();
  }

  _Initialize() {

    this._Init_Graphics();

    this._Init_Physics();

    this._LoadAnimatedModel();

    this._LoadPlane();

    this._LoadSoftBodies();

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

    this._scene = new THREE.Scene();
    this._scene.background = new THREE.Color( 0xbfd1e5 );

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

    const fov = 50;
    const aspect = window.innerWidth / window.innerHeight;
    const near = 0.2;
    const far = 2000;
    this._camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    this._camera.position.set( 0, 1, 7 );

    const controls = new OrbitControls(
      this._camera, this._threejs.domElement);
    controls.target.set(0, 0.5, 0);
    controls.update();

    this._stats = new Stats();
    this._stats.domElement.style.position = 'absolute';
    this._stats.domElement.style.top = '0px';
    container.appendChild( this._stats.domElement );
    
  }

  _LoadPlane() {

    const params = {
      scene: this._scene,
      physics_world: this._physics_world,
      rigid_bodies: this._rigid_bodies,
      timing: 0.5
    }

    const plane = new entity.Entity();
    plane.AddComponent(new physics_controller.PhysicsController(params));
    plane.AddComponent(new plane_controller.PlaneController(params));
    this._entityManager.Add(plane, 'plane');
  }

  _LoadSoftBodies() {

    const params_sphere = {
      scene: this._scene,
      physics_world: this._physics_world,
      soft_bodies: this._soft_bodies,
      softBodyHelpers: this.softBodyHelpers,
      bufferGeometry: new THREE.SphereGeometry( 1, 40, 25 ),
      position: new THREE.Vector3(3,3,0),
      mass: 15,
      pressure: 250,
      texture: 'colors.png'
    }

    const sphere_softBody = new entity.Entity();
    sphere_softBody.AddComponent(new physics_controller.PhysicsController(params_sphere));
    sphere_softBody.AddComponent(new softBody_controller.SoftBodyController(params_sphere));
    this._entityManager.Add(sphere_softBody, 'sphere_softBody');

    const params_box = {
      scene: this._scene,
      physics_world: this._physics_world,
      soft_bodies: this._soft_bodies,
      softBodyHelpers: this.softBodyHelpers,
      bufferGeometry: new THREE.BoxGeometry( 1, 1, 5, 4, 4, 20 ),
      position: new THREE.Vector3(-3,3,0),
      mass: 15,
      pressure: 150,
      texture: 'colors.png'
    }

    const box_softBody = new entity.Entity();
    box_softBody.AddComponent(new physics_controller.PhysicsController(params_box));
    box_softBody.AddComponent(new softBody_controller.SoftBodyController(params_box));
    this._entityManager.Add(box_softBody, 'box_softBody');

  }

  _LoadAnimatedModel() {

    const params = {
      scene: this._scene,
      physics_world: this._physics_world,
      rigid_bodies: this._rigid_bodies,
      timing: 0.5
    }

    const player = new entity.Entity();
    player.AddComponent(new person_controller.BasicCharacterController(params));
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

    this._StepPhysics(timeElapsedS);
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