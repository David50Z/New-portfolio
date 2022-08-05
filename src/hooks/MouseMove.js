import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import Core from '../stores/Core'
import {get} from 'svelte/store'

let core = {}

Core.subscribe((data) => {
    core = data
})

const scene = core.scene
const camera = core.camera
const pointer = core.pointer
const raycaster = core.raycaster

const Click = (e, page) => {

    const renderer = new THREE.WebGLRenderer({
        canvas: document.querySelector('#bg'),
    });

    console.log(page)

    pointer.x = (e.clientX / window.innerWidth) * 2 - 1;
    pointer.y = -(e.clientY / window.innerHeight) * 2 + 1;

    raycaster.setFromCamera(pointer, camera)
    const intersects = raycaster.intersectObjects(scene.children)

    //if(intersects.length > 0 && core.invisible === false) {

        //console.log(intersects)
        console.log(scene.children)
        console.log('hello!')

        //let position = intersects[0].point
        let position = {x: 8, y: 10, z: 2}

        let textIn = null

        // for(let i = 0; i < scene.children.length; i++) {
        //     if(scene.children[i].name === page + '-text') {
        //         console.log(i)
        //         textIn = i
        //     }
        // }
        // console.log(textIn)

        // scene.children[textIn].material.opacity = 1

        //console.log(intersects[0].object.name)
        Core.update(cores => {
            let data = cores
            data.position = position
            data.brighten = true
            data.buttons = false
            return data
        })

        setTimeout(() => {
            Core.update(cores => {
                let data = cores
                data.invisible = true
                data.brighten = false
                data.page = page

                return data
            })
        }, 1000)

		//}

}

export default Click


/*    for (let i = 0; i < intersects.length; i++) {
        //console.log(intersects)
        let random = Math.floor(Math.random() * 4);
        //console.log(intersects[i].object.material.color)
        if(random === 1 && intersects[i].object.material.color.r === 1 && intersects[i].object.material.color.g === 1 && intersects[i].object.material.color.b === 1) {
            intersects[i].object.material.color.set('blue')
        } else if(random === 2 && intersects[i].object.material.color.r === 1 && intersects[i].object.material.color.g === 1 && intersects[i].object.material.color.b === 1) {
            intersects[i].object.material.color.set('red')
        } else if(random === 3&& intersects[i].object.material.color.r === 1 && intersects[i].object.material.color.g === 1 && intersects[i].object.material.color.b === 1) {
            intersects[i].object.material.color.set('green')
        }
    }*/