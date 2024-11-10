import * as THREE from 'three';
import {OrbitControls} from "three/addons/controls/OrbitControls.js";

const canvas = document.getElementById('canvas')

// 1. Add the scene
const scene = new THREE.Scene();
scene.background = new THREE.Color('#1c1c1c');

// 3. Add camera and light
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// 2.1 Add object 1
const geometry = new THREE.IcosahedronGeometry();
geometry.scale(1.5,1.5,1.5);
const material = new THREE.MeshLambertMaterial({color: '#021a4a', emissive: '#04192e'});

// 2.2 Add object 2
const geometry2 = new THREE.IcosahedronGeometry();
geometry2.scale(0.2, 0.2, 0.2);
const material2 = new THREE.MeshLambertMaterial({color: '#f6bb24', emissive: '#d58d0a'});

const sphere = new THREE.Mesh(geometry, material);
//sphere.position.z = 3;
scene.add(sphere);

const icosahed = new THREE.Mesh(geometry2, material2);
//icosahed.scale(0.2,0.2,0.2);
scene.add(icosahed);

const orbitRadius = 4;
icosahed.position.set(orbitRadius, 0, 0);


const light = new THREE.DirectionalLight(0x9CDBA6, 25);
light.position.set(1,1,1);
scene.add(light);

// 4. Add renderer
const renderer = new THREE.WebGLRenderer(canvas);
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);

document.body.appendChild(renderer.domElement);

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.05;
controls.enableZoom = true;
controls.enablePan = true;

// 5. Render and animate
function animate(){
    requestAnimationFrame(animate);
    //sphere.rotation.x += 0.01;
    sphere.rotation.y += 0.01;
    sphere.rotation.z += 0.01;


    icosahed.rotation.x += 0.05;

    // Orbitting
    const time = Date.now() * 0.0002  ;
    icosahed.position.x = Math.cos(time) * orbitRadius;
    icosahed.position.y = Math.sin(time) * orbitRadius;

    renderer.render(scene, camera);
}

animate();

/*
window.addEventListener('resize', () => {]
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});
*/