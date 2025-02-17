import './style.css'
import * as THREE from 'three';

const canvas = document.querySelector('.webgl');
console.log(canvas);
const scene = new THREE.Scene();


const geomatry = new THREE.BoxGeometry(1, 1, 1);

const material = new THREE.MeshBasicMaterial({
    color: 'red'
}); 
const mesh = new THREE.Mesh(geomatry, material);
scene.add(mesh);

//camera
const sizes={
    width:800,
    height:600
}
const camera= new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
scene.add(camera);
camera.position.z=3;

//render
const renderer = new THREE.WebGLRenderer( { canvas:canvas } );
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);