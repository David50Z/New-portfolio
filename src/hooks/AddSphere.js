
    import * as THREE from 'three';
    import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
    import Core from '../stores/Core'
    import {get} from 'svelte/store'
	//import AddFont from './AddFont';

    const core = get(Core)

    const scene = core.scene
    const camera = core.camera


    const addNewsphereMesh = (size, opacity, color, name, x, y, z) => {
			const sphereGeometry = new THREE.SphereGeometry(1, 32, 16)
			const sphereMaterial = new THREE.MeshBasicMaterial({
				color: color,
				transparent: true,
				opacity: opacity
			})
			const sphereMesh = new THREE.Mesh(sphereGeometry, sphereMaterial)
			sphereMesh.scale.set(size, size, size)

			sphereMesh.position.set(x, y, z)
			//console.log(sphereMesh.material)
			scene.add(sphereMesh)
			sphereMesh.name = name
		}

	export default addNewsphereMesh
