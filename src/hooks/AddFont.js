import * as THREE from 'three';
import {FontLoader} from 'three/examples/jsm/loaders/FontLoader'
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import Core from '../stores/Core'
import {get} from 'svelte/store'

const core = get(Core)

const scene = core.scene
const camera = core.camera

function AddFont(name, size, opacity, text, position) {

    const fontLoader = new FontLoader()
    //console.log(fontLoader)
    fontLoader.load(
        'Open Sans_Bold.json',
        function (font) {
            const textGeometry = new TextGeometry(text, {
                height: 2,
                size: size,
                font: font,
            })
            const textMaterial = new THREE.MeshBasicMaterial(
                {
                    color: 'rgb(70, 100, 194)',
                    opacity: opacity,
                    transparent: true,
                    toneMapped: false,
                    shininess: 0,
                })
            const textMaterial2 = new THREE.MeshPhongMaterial()

            const textMesh = new THREE.Mesh(textGeometry, textMaterial)
            textMesh.scale.set(1, 1, 0.1)
            textMesh.name = name
            textMesh.position.x = position[0]
            textMesh.position.y = position[1]
            textMesh.position.z = position[2]
            console.log(textMesh)
            //textMesh.color.set(1, 0, 0)
            scene.add(textMesh)
        }
    )
}


export default AddFont