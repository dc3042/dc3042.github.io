import './style.css';
import * as THREE from 'three';
import Stats from 'three/examples/jsm/libs/stats.module.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import * as BufferGeometryUtils from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { GUI } from 'three/examples/jsm/libs/lil-gui.module.min.js';

// Graphics variables
let container, stats;
let camera, controls, scene, renderer;
let textureLoader;
const clock = new THREE.Clock();
let clickRequest = false;
const mouseCoords = new THREE.Vector2();
const raycaster = new THREE.Raycaster();
const ballMaterial = new THREE.MeshPhongMaterial( { color: 0x202020 } );
const pos = new THREE.Vector3();
const quat = new THREE.Quaternion();

// Physics variables
const gravityConstant = - 9.8;
let physicsWorld;
const rigidBodies = [];
const softBodies = [];
const margin = 0.05;
let transformAux1;
let softBodyHelpers;
let object;

// Animation variables
let model, mixer;
const animations = [];
const crossFadeControls = [];
let currentBaseAction = 'Walk';
const baseActions = {
  Walk: { weight: 1 }
};
let panelSettings;

Ammo().then( function ( AmmoLib ) {

  Ammo = AmmoLib;

  init();
  animate();

} );

function init() {

  initGraphics();

  initPhysics();

  createObjects();

  initName();

  initWalkingBoy();

  initInput();

}

function initWalkingBoy(){

  const loader = new GLTFLoader();
  loader.load( 'WalkingBoy.glb', function ( gltf ) {

    model = gltf.scene;
    model.scale.multiplyScalar(1.4 / 2);
    
    gltf.animations.forEach(function ( animation ) {

      animations.push(animation);
  
    });

    pos.set( 0, 0, 2 );
    quat.set( 0, 0, 0, 1 );

    const volumeMass = 300;
    loadModel(model, pos, quat, volumeMass, 0);

    createAnimations();
  } );

  createPanel();
}

function createAnimations(){
  
  mixer = new THREE.AnimationMixer( model );

  for ( let i = 0; i !== animations.length; ++ i ) {

    let clip = animations[ i ];
    const name = clip.name;

    if ( baseActions[ name ] ) {

      const action = mixer.clipAction( clip ).play();
      activateAction( action );
      baseActions[ name ].action = action;
    } 

  }
}

function createPanel() {

  const panel = new GUI( { width: 300 } );

  panelSettings = {};

  const baseNames = ['None', ...Object.keys( baseActions )];

  for ( let i = 0, l = baseNames.length; i !== l; ++ i ) {

    const name = baseNames[ i ];
    const settings = baseActions[ name ];
    panelSettings[ name ] = function () {

      const currentSettings = baseActions[ currentBaseAction ];
      const currentAction = currentSettings ? currentSettings.action : null;
      const action = settings ? settings.action : null;

      if ( currentAction !== action ) {

        prepareCrossFade( currentAction, action, 0.35 );

      }

    };

    crossFadeControls.push( panel.add( panelSettings, name ) );

  }

  crossFadeControls.forEach( function ( control ) {

    control.setInactive = function () {

      control.domElement.classList.add( 'control-inactive' );

    };

    control.setActive = function () {

      control.domElement.classList.remove( 'control-inactive' );

    };

    const settings = baseActions[ control.property ];

    if (!settings || ! settings.weight ) {

      control.setInactive();

    }

    if (control.property == currentBaseAction){
      control.setActive();
    }

  } );

  panel.open();
}

function activateAction( action ) {

  const clip = action.getClip();
  const settings = baseActions[ clip.name ];
  setWeight( action, settings.weight );
  action.play();

}

function prepareCrossFade( startAction, endAction, duration ) {

  // If the current action is 'idle', execute the crossfade immediately;
  // else wait until the current action has finished its current loop

  if (! startAction || ! endAction ) {

    executeCrossFade( startAction, endAction, duration );

  } else {

    synchronizeCrossFade( startAction, endAction, duration );

  }

  // Update control colors

  if ( endAction ) {

    const clip = endAction.getClip();
    currentBaseAction = clip.name;

  } else {

    currentBaseAction = 'None';

  }

  crossFadeControls.forEach( function ( control ) {

    const name = control.property;

    if ( name === currentBaseAction ) {

      control.setActive();

    } else {

      control.setInactive();

    }

  } );

}

function synchronizeCrossFade( startAction, endAction, duration ) {

  mixer.addEventListener( 'loop', onLoopFinished );

  function onLoopFinished( event ) {

    if ( event.action === startAction ) {

      mixer.removeEventListener( 'loop', onLoopFinished );

      executeCrossFade( startAction, endAction, duration );

    }

  }

}

function executeCrossFade( startAction, endAction, duration ) {

  // Not only the start action, but also the end action must get a weight of 1 before fading
  // (concerning the start action this is already guaranteed in this place)

  if ( endAction ) {

    setWeight( endAction, 1 );
    endAction.time = 0;

    if ( startAction ) {

      // Crossfade with warping

      startAction.crossFadeTo( endAction, duration, true );

    } else {

      // Fade in

      endAction.fadeIn( duration );

    }

  } else {

    // Fade out

    startAction.fadeOut( duration );

  }

}

function setWeight( action, weight ) {

  action.enabled = true;
  action.setEffectiveTimeScale( 1 );
  action.setEffectiveWeight( weight );

}


function initGraphics() {

  container = document.getElementById( 'container' );
  document.body.appendChild( container );

  camera = new THREE.PerspectiveCamera( 50, window.innerWidth / window.innerHeight, 0.2, 2000 );

  scene = new THREE.Scene();
  scene.background = new THREE.Color( 0xbfd1e5 );

  camera.position.set( 0, 1, 7 );

  renderer = new THREE.WebGLRenderer();
  renderer.setPixelRatio( window.devicePixelRatio );
  renderer.setSize( window.innerWidth, window.innerHeight );
  renderer.shadowMap.enabled = true;
  container.appendChild( renderer.domElement );

  controls = new OrbitControls( camera, renderer.domElement );
  controls.target.set( 0, 0.5, 0 );
  controls.update();

  textureLoader = new THREE.TextureLoader();

  const ambientLight = new THREE.AmbientLight( 0x404040 );
  scene.add( ambientLight );

  const light = new THREE.DirectionalLight( 0xffffff, 1 );
  light.position.set( - 10, 10, 5 );
  light.castShadow = true;
  const d = 20;
  light.shadow.camera.left = - d;
  light.shadow.camera.right = d;
  light.shadow.camera.top = d;
  light.shadow.camera.bottom = - d;

  light.shadow.camera.near = 2;
  light.shadow.camera.far = 50;

  light.shadow.mapSize.x = 1024;
  light.shadow.mapSize.y = 1024;

  scene.add( light );

  stats = new Stats();
  stats.domElement.style.position = 'absolute';
  stats.domElement.style.top = '0px';
  container.appendChild( stats.domElement );


  window.addEventListener( 'resize', onWindowResize );
  document.addEventListener( 'mousemove', onDocumentMouseMove, false );
}

function initPhysics() {

  // Physics configuration

  const collisionConfiguration = new Ammo.btSoftBodyRigidBodyCollisionConfiguration();
  const dispatcher = new Ammo.btCollisionDispatcher( collisionConfiguration );
  const broadphase = new Ammo.btDbvtBroadphase();
  const solver = new Ammo.btSequentialImpulseConstraintSolver();
  const softBodySolver = new Ammo.btDefaultSoftBodySolver();
  physicsWorld = new Ammo.btSoftRigidDynamicsWorld( dispatcher, broadphase, solver, collisionConfiguration, softBodySolver );
  physicsWorld.setGravity( new Ammo.btVector3( 0, gravityConstant, 0 ) );
  physicsWorld.getWorldInfo().set_m_gravity( new Ammo.btVector3( 0, gravityConstant, 0 ) );

  transformAux1 = new Ammo.btTransform();
  softBodyHelpers = new Ammo.btSoftBodyHelpers();

}

function loadModel(object, pos, quat, volumeMass, texture) {

  let triangle_mesh = new Ammo.btTriangleMesh();

  object.traverse( function ( child ) {

    if ( child.isMesh ){

      child.castShadow = true;
      child.receiveShadow = true;

      if(texture){
        child.material.map = texture;
        child.material.needsUpdate = true;
      }
      else{
        child.material = new THREE.MeshPhongMaterial( { color: 0x5D6D7E } );
      }

      let verticesPos = child.geometry.getAttribute('position').array;
      let triangles = [];
      for(let i = 0; i < verticesPos.length; i+=3){
        triangles.push({
          x:verticesPos[i],
          y:verticesPos[i+1],
          z:verticesPos[i+2]
        })
      }

      let vecA = new Ammo.btVector3(0,0,0);
      let vecB = new Ammo.btVector3(0,0,0);
      let vecC = new Ammo.btVector3(0,0,0);

      for(let i=0; i<triangles.length - 3; i+= 3){
        vecA.setX(triangles[i].x);
        vecA.setY(triangles[i].y);
        vecA.setZ(triangles[i].z);

        vecB.setX(triangles[i+1].x);
        vecB.setY(triangles[i+1].y);
        vecB.setZ(triangles[i+1].z);

        vecC.setX(triangles[i+2].x);
        vecC.setY(triangles[i+2].y);
        vecC.setZ(triangles[i+2].z);

        triangle_mesh.addTriangle(vecA, vecB, vecC, true);
      }

    }
  });

  const shape = new Ammo.btConvexTriangleMeshShape(triangle_mesh);
  shape.setMargin( margin );

  createRigidBody( object, shape, volumeMass, pos, quat );
}

function initName(){

  const manager = new THREE.LoadingManager();

  // model

  const loader = new OBJLoader( manager );
  loader.load( 'DAVID.obj', function ( obj ) {

    pos.set( 0, 7, 0 );
    quat.set( 0, 0, 0, 1 );

    textureLoader.load('colors.png', function (texture) {
      const volumeMass = 35;
      loadModel(obj, pos, quat, volumeMass, texture);
    });
  });
}

function createObjects() {

  // Ground
  pos.set( 0, - 0.5, 0 );
  quat.set( 0, 0, 0, 1 );
  const ground = createParalellepiped( 40, 1, 40, 0, pos, quat, new THREE.MeshPhongMaterial( { color: 0xFFFFFF } ) );
  ground.castShadow = true;
  ground.receiveShadow = true;
  textureLoader.load( 'grid.png', function ( texture ) {

    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set( 40, 40 );
    ground.material.map = texture;
    ground.material.needsUpdate = true;

  } );

  // Create soft volumes
  const volumeMass = 15;

  const sphereGeometry = new THREE.SphereGeometry( 1, 40, 25 );
  sphereGeometry.translate( 3.5, 3, 0 );
  createSoftVolume( sphereGeometry, volumeMass, 250 );

  const boxGeometry = new THREE.BoxGeometry( 1, 1, 5, 4, 4, 20 );
  boxGeometry.translate( - 3.5, 3, 0 );
  createSoftVolume( boxGeometry, volumeMass, 120 );

}

function processGeometry( bufGeometry ) {

  // Ony consider the position values when merging the vertices
  const posOnlyBufGeometry = new THREE.BufferGeometry();
  posOnlyBufGeometry.setAttribute( 'position', bufGeometry.getAttribute( 'position' ) );
  posOnlyBufGeometry.setIndex( bufGeometry.getIndex() );

  // Merge the vertices so the triangle soup is converted to indexed triangles
  const indexedBufferGeom = BufferGeometryUtils.mergeVertices( posOnlyBufGeometry );

  // Create index arrays mapping the indexed vertices to bufGeometry vertices
  mapIndices( bufGeometry, indexedBufferGeom );

}

function isEqual( x1, y1, z1, x2, y2, z2 ) {

  const delta = 0.000001;
  return Math.abs( x2 - x1 ) < delta &&
      Math.abs( y2 - y1 ) < delta &&
      Math.abs( z2 - z1 ) < delta;

}

function mapIndices( bufGeometry, indexedBufferGeom ) {

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
      if ( isEqual( idxVertices[ i3 ], idxVertices[ i3 + 1 ], idxVertices[ i3 + 2 ],
        vertices[ j3 ], vertices[ j3 + 1 ], vertices[ j3 + 2 ] ) ) {

        association.push( j3 );

      }

    }

  }

}

function createSoftVolume( bufferGeom, mass, pressure ) {

  processGeometry( bufferGeom );

  const volume = new THREE.Mesh( bufferGeom, new THREE.MeshPhongMaterial( { color: 0xFFFFFF } ) );
  volume.castShadow = true;
  volume.receiveShadow = true;
  volume.frustumCulled = false;
  scene.add( volume );

  textureLoader.load( 'colors.png', function ( texture ) {

    volume.material.map = texture;
    volume.material.needsUpdate = true;

  } );

  // Volume physic object

  const volumeSoftBody = softBodyHelpers.CreateFromTriMesh(
    physicsWorld.getWorldInfo(),
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
  Ammo.castObject( volumeSoftBody, Ammo.btCollisionObject ).getCollisionShape().setMargin( margin );
  physicsWorld.addSoftBody( volumeSoftBody, 1, - 1 );
  volume.userData.physicsBody = volumeSoftBody;
  // Disable deactivation
  volumeSoftBody.setActivationState( 4 );

  softBodies.push( volume );

}

function createParalellepiped( sx, sy, sz, mass, pos, quat, material ) {

  const threeObject = new THREE.Mesh( new THREE.BoxGeometry( sx, sy, sz, 1, 1, 1 ), material );
  const shape = new Ammo.btBoxShape( new Ammo.btVector3( sx * 0.5, sy * 0.5, sz * 0.5 ) );
  shape.setMargin( margin );

  createRigidBody( threeObject, shape, mass, pos, quat );

  return threeObject;

}

function createRigidBody( threeObject, physicsShape, mass, pos, quat ) {

  threeObject.position.copy( pos );
  threeObject.quaternion.copy( quat );

  const transform = new Ammo.btTransform();
  transform.setIdentity();
  transform.setOrigin( new Ammo.btVector3( pos.x, pos.y, pos.z ) );
  transform.setRotation( new Ammo.btQuaternion( quat.x, quat.y, quat.z, quat.w ) );
  const motionState = new Ammo.btDefaultMotionState( transform );

  const localInertia = new Ammo.btVector3( 0, 0, 0 );
  physicsShape.calculateLocalInertia( mass, localInertia );

  const rbInfo = new Ammo.btRigidBodyConstructionInfo( mass, motionState, physicsShape, localInertia );
  const body = new Ammo.btRigidBody( rbInfo );

  threeObject.userData.physicsBody = body;

  scene.add( threeObject );

  if ( mass > 0 ) {

    rigidBodies.push( threeObject );

    // Disable deactivation
    body.setActivationState( 4 );

  }

  physicsWorld.addRigidBody( body );

  return body;

}

function onDocumentMouseMove( event ) {

	mouseCoords.set(
    ( event.clientX / window.innerWidth ) * 2 - 1,
    - ( event.clientY / window.innerHeight ) * 2 + 1
  );

}

function initInput() {

  window.addEventListener( 'pointerdown', function ( event ) {

    if (! clickRequest ) {

      mouseCoords.set(
        ( event.clientX / window.innerWidth ) * 2 - 1,
        - ( event.clientY / window.innerHeight ) * 2 + 1
      );

      clickRequest = true;

    }

  } );

}


function processClick() {

  if ( clickRequest ) {

    raycaster.setFromCamera( mouseCoords, camera );

    // Creates a ball
    const ballMass = 3;
    const ballRadius = 0.4;

    const ball = new THREE.Mesh( new THREE.SphereGeometry( ballRadius, 18, 16 ), ballMaterial );
    ball.castShadow = true;
    ball.receiveShadow = true;
    const ballShape = new Ammo.btSphereShape( ballRadius );
    ballShape.setMargin( margin );
    pos.copy( raycaster.ray.direction );
    pos.add( raycaster.ray.origin );
    quat.set( 0, 0, 0, 1 );
    const ballBody = createRigidBody( ball, ballShape, ballMass, pos, quat );
    ballBody.setFriction( 1 );

    pos.copy( raycaster.ray.direction );
    pos.multiplyScalar( 14 );
    ballBody.setLinearVelocity( new Ammo.btVector3( 1.5*pos.x, 1.5*pos.y, 1.5*pos.z ) );

    clickRequest = false;
  }
}

function onWindowResize() {

  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  renderer.setSize( window.innerWidth, window.innerHeight );

}

function animate() {

  requestAnimationFrame( animate );
  render();
  stats.update();

}

function render() {

  const deltaTime = clock.getDelta();

  for ( let i = 0; i !== animations.length; ++ i ) {

    const clip = animations[ i ];
    const name = clip.name;
    const settings = baseActions[ name ];
    const action = mixer.clipAction( clip ).play()
    settings.weight = action.getEffectiveWeight();

  }


  // Update the animation mixer, the stats panel, and render this frame

  if(mixer){
    mixer.update( deltaTime );
  }

  updatePhysics( deltaTime );

  processClick();

  renderer.render( scene, camera );

}

function updatePhysics( deltaTime ) {

  // Step world
  physicsWorld.stepSimulation( deltaTime, 10 );

  // Update soft volumes
  for ( let i = 0, il = softBodies.length; i < il; i ++ ) {

    const volume = softBodies[ i ];
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
  for ( let i = 0, il = rigidBodies.length; i < il; i ++ ) {

    const objThree = rigidBodies[ i ];
    const objPhys = objThree.userData.physicsBody;
    const ms = objPhys.getMotionState();
    if ( ms ) {

      ms.getWorldTransform( transformAux1 );
      const p = transformAux1.getOrigin();
      const q = transformAux1.getRotation();
      objThree.position.set( p.x(), p.y(), p.z() );
      objThree.quaternion.set( q.x(), q.y(), q.z(), q.w() );

    }

  }

}