<script>
	import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
	import * as THREE from 'three';
	import {TTFLoader} from 'three/examples/jsm/loaders/TTFLoader'
	import {FontLoader} from 'three/examples/jsm/loaders/FontLoader'
	import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js'
	import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader'
	import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
	import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
	import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass.js";


	import Core from './stores/Core'
	import Click from './hooks/MouseMove'
	import AddSphere from './hooks/AddSphere'
	import AddFont from './hooks/AddFont'

	import AboutMe from './components/AboutMe.svelte';
	import Skills from './components/Skills.svelte';
	import Contact from './components/Contact.svelte';
	import Projects from './components/Projects.svelte';

	//import {droid} from '../node_modules/three/examples/fonts/droid'

	let core = {}
	let galaxy

//const core = get(Core)

	const threeD = () => {

		Core.subscribe((data) => {
			//console.log(data.page)
			core = data
		})

	

		const scene = core.scene
		const camera = core.camera
		let brightenNum = 0.001 
		let dim = core.dim
		//let position = core.position

		//console.log(scene)
		
		//console.log('hello')
		const renderer = new THREE.WebGLRenderer({
			canvas: document.querySelector('#bg'),
		});
		
		renderer.setPixelRatio(window.devicePixelRatio);
		renderer.setSize(window.innerWidth, window.innerHeight);
		camera.position.setZ(20);
		camera.position.setX(8);
		camera.position.setY(10);

		console.log(renderer)

		//const ambientLight = new THREE.AmbientLight( 0xffffff, 100.4 );
		//scene.add( ambientLight );

		const renderScene = new RenderPass(scene, camera);
		const bloomPass = new UnrealBloomPass(
		new THREE.Vector2(window.innerWidth, window.innerHeight),
		1.5,
		1.3,
		0.10
		);

		//bloomPass.threshold = 0.4

		const ambientlight = new THREE.AmbientLight(0xffffff, 0.1);
		scene.add(ambientlight);

		//const controls = new OrbitControls( camera, renderer.domElement );

		//window.addEventListener('click', Click)

		let x = 8
		let y = 10
		let z = 1



		

		const gltfLoader = new GLTFLoader();

		// gltfLoader.load('models/starCluster/scene.gltf', (gltfScene) => {
		// 	console.log(gltfScene)
		// 	console.log(gltfScene.scene.rotation.x)
		// 	galaxy = gltfScene.scene
		// 	gltfScene.scene.scale.set(100, 100, 100)

		// 	gltfScene.scene.position.setZ(-50);
		// 	gltfScene.scene.position.setX(4572);
		// 	gltfScene.scene.position.setY(795);
		// 	gltfScene.scene.color = "white"
		// 	//gltfScene.scene.rotation.x = 0.001
		// 	scene.add(gltfScene.scene)
		// })

		// gltfLoader.load('models/galaxy/scene.gltf', (gltfScene) => {
		// 	console.log(gltfScene)
		// 	console.log(gltfScene.scene.rotation.x)
		// 	galaxy = gltfScene.scene
		// 	gltfScene.scene.scale.set(80, 80, 80)

		// 	gltfScene.scene.position.setZ(-50);
		// 	gltfScene.scene.position.setX(-100);
		// 	gltfScene.scene.position.setY(-100);
		// 	gltfScene.scene.rotation.x = 0.4
		// 	//gltfScene.scene.rotation.x = 0.001
		// 	scene.add(gltfScene.scene)
		// })

		gltfLoader.load('models/galaxy/scene.gltf', (gltfScene) => {
			console.log(gltfScene)
			console.log(gltfScene.scene.rotation.x)
			galaxy = gltfScene.scene
			gltfScene.scene.scale.set(12, 12, 12)

			gltfScene.scene.position.setZ(-13);
			gltfScene.scene.position.setX(-9.6);
			gltfScene.scene.position.setY(-11.6);
			gltfScene.scene.rotation.x = 1.3

			scene.add(gltfScene.scene)
		})


		//AddFont('about me-aura', 0.07, 0.6, 'hello world!', [7.6, 10, 19])
		//AddFont('about me-text', 0.06, 1, 'hello world!', [7.6, 10, 19])

		let aboutMeX = -3.7
		let aboutmeY = 7
		let aboutMeZ = 1

		let skillsX = 19
		let skillsY = 7
		let skillsZ = 1

		// AddSphere(1, 1, 'blue', 'about me', aboutMeX, aboutmeY, aboutMeZ)
		// AddSphere(1.3, 0.5, '#155fd6', 'about me', aboutMeX, aboutmeY, aboutMeZ)
		// AddSphere(1, 1, 'red', 'skills', skillsX, skillsY, skillsZ)
		// AddSphere(/*Size >*/1.5, 0.7, 'red', 'skills', skillsX, skillsY, skillsZ)
		


		const bloomComposer = new EffectComposer(renderer);
		bloomComposer.setSize(window.innerWidth, window.innerHeight);
		bloomComposer.renderToScreen = true;
		bloomComposer.addPass(renderScene);
		bloomComposer.addPass(bloomPass);


		function animate() {
			requestAnimationFrame(animate)
			//controls.update()
			//X Position
			if(Math.floor(camera.position.x) < Math.floor(core.position.x)) {
                camera.position.x = camera.position.x + 0.4
            } else if(Math.floor(camera.position.x) > Math.floor(core.position.x)) {
                camera.position.x = camera.position.x - 0.4
            }

			//Y Position
			if(Math.floor(camera.position.y) < Math.floor(core.position.y)) {
                camera.position.y = camera.position.y + 0.4
            } else if(Math.floor(camera.position.y) > Math.floor(core.position.y)) {
                camera.position.y = camera.position.y - 0.4
            }



			//Z Position
			if(Math.floor(camera.position.z) < Math.floor(core.position.z)) {
                camera.position.z = camera.position.z + 0.15
            } else if(Math.floor(camera.position.z) > Math.floor(core.position.z)) {
                camera.position.z = camera.position.z - 0.15
            }



			//Glow behavior
			if(core.brighten) {
				bloomPass.strength = bloomPass.strength + 0.1 + brightenNum
				brightenNum += 0.0015
			}

			if(core.dim && bloomPass.strength >= 1.7) {
				bloomPass.strength = bloomPass.strength - 0.05
				if(brightenNum > 0.001) {
					brightenNum -= 0.0015
				}

				if(core.buttons) {
					bloomPass.strength = bloomPass.strength - 0.05
				}

				if(bloomPass.strength <= 1.8) {
					Core.update(cores => {
						let data = cores
						data.dim = false
						return data
					})
				}
				//bloomPass.strength = 1.5
				console.log(bloomPass.strength)
			}
			
			//galaxy.rotation.y = galaxy.rotation.y += 0.01

			bloomComposer.render();

			//renderer.render(scene, camera)
		}

		animate()

		window.addEventListener(
			"resize",
			() => {
				camera.aspect = window.innerWidth / window.innerHeight;
				camera.updateProjectionMatrix();
				renderer.setSize(window.innerWidth, window.innerHeight);
				bloomComposer.setSize(window.innerWidth, window.innerHeight);
			},
			false
			);

		const goneFunc = () => {
				Core.update(cores => {
				let data = cores
				//data.gone = true
					
				return data
			})
		}

		subjects = (e, page) => {
			Click(e, page)
			console.log(page)
			setTimeout(() => {
				Core.update(cores => {
				let data = cores
				data.brighten = false
					
				return data
			})
				goneFunc()
        	}, 1500)
		}

	}

	let subjects = () => {}



	setTimeout(() => {
		//console.log(document)
		threeD()
	}, 1);



</script>

<canvas id="bg" class:invisible={core.invisible} class:gone={core.gone}>

</canvas>
{#if core.buttons}
<div id="navigation" class:noButton={core.buttons === false}> 
	<div id="background" class:noButton={core.buttons === false}></div>
	<h1 id="AboutMeClass" class="nav-item" class:noButton={core.buttons === false} on:click={(e) => subjects(e, 'about me')}>About me</h1>
	<h1 id="SkillsClass" class="nav-item" class:noButton={core.buttons === false} on:click={(e) => subjects(e, "skills")}>Skills</h1>
	<h1 id="ContactClass" class="nav-item" class:noButton={core.buttons === false} on:click={(e) => subjects(e, "contact")}>Contact</h1>
	<h1 id="ProjectsClass" class="nav-item" class:noButton={core.buttons === false} on:click={(e) => subjects(e, "projects")}>Projects</h1>
</div>
{/if}

{#if core.invisible && core.page === 'about me'}
	<AboutMe />
{/if}

{#if core.invisible && core.page === 'skills'}
	<Skills />
{/if}

{#if core.invisible && core.page === 'contact'}
	<Contact />
{/if}

{#if core.invisible && core.page === 'projects'}
	<Projects />
{/if}

<style>

	

	canvas {
		overflow-y: hidden;
		position: absolute;
		height: 100vh;
		width: 100vw;
    	transition: opacity 0.5s;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 3;
		height: 100%;
		
	}

	.invisible {
		transition: 0.5s;
		opacity: 0
	}

	.gone {
		display: none;
	}

	#navigation {
		display: flex;
		justify-content: center;
		justify-content: space-around;
		position:absolute;
		bottom: 0px;
		height: 100px;
		width: 100%;
		z-index: 5;
		overflow-y: hidden;
	}

	#background {
		position: absolute;
		width: 100%;
		height: 100%;
		background: black;
		opacity: 0.5
	}

	.nav-item {
		margin-top: 10px;
		font-family: 'Source Code Pro', monospace;
		color: white;
		top: 50%;
		transform: translateY(-50%);
	}

	.nav-item:hover {
		color: rgb(160, 158, 158)
	}

	#AboutMeClass {
		z-index: 4;
		position: relative;
		
		cursor: pointer;
	}

	#SkillsClass {
		z-index: 4;
		position: relative;
		
		cursor: pointer;
	}

	#ContactClass {
		z-index: 4;
		position: relative;
		
		cursor: pointer;
	}

	#ProjectsClass {
		z-index: 4;
		position: relative;
		
		cursor: pointer;
	}

	.noButton {
		display: none
	}

	@media screen and (max-width: 700px) {
		.nav-item {
			font-size: 17px;

			top: 50%;
			transform: translateY(-50%);
		}

		#navigation {
			height: 60px;
		}
	}
</style>