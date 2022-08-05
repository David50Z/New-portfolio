import { writable } from "svelte/store"
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const Core = writable({
    scene: new THREE.Scene(),
    camera: new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000),
    pointer: new THREE.Vector2(),
    raycaster: new THREE.Raycaster(),
    position: {x: 8, 7: 10, z: 20},
    invisible: false,
    gone: false,
    page: 'none',
    brighten: false,
    dim: false,
    buttons: true
})  

export default Core