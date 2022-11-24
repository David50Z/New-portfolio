<script>
    import * as THREE from 'three';
    import Core from '../stores/Core'
    import {get} from 'svelte/store'
    import Transition from '../hooks/Transition'



    let visible = true
    let core = {}

    let height = window.innerHeight
    console.log(height)

    Core.subscribe((data) => {
        core = data
    })

    const back = () => {
        visible = true
        setTimeout(() => {
            Transition()
        }, 1200)
    }

    setTimeout(() => {
        visible = false
        Core.update(cores => {
            let data = cores
            data.brighten = false
			
            return data
        })
    }, 2000);



</script>

<main class:invisible={visible === false}>
    <div id="mainContainer">
        <div id="netflixContainer" class="projectContainer">
            <a href="https://david50z.github.io/Project-2/">
                <div class="background"></div>
                <div class="projectTitleContainer">
                    <h2 class="projectTitle" >Netflix imitation</h2>
                </div>
            </a>

                <img class="projectPic" src="projects/Screenshot (173).png" alt="netflix imitation pic">

        </div>

        <div id="dog-search" class="projectContainer">
            <a href="https://dog-search-app.herokuapp.com/client">
                <div class="background"></div>
                <div class="projectTitleContainer">
                    <h2 class="projectTitle" >Dog-search-app</h2>
                </div>
            </a>

                <img class="projectPic" src="projects/dog-search-app.herokuapp.com_client.png" alt="Dog-search-app pic">

        </div>

        <div id="ICBINP" class="projectContainer">
            <a href="https://icbinp.github.io/ICBINP-Client/">
                <div class="background"></div>
                <div class="projectTitleContainer">
                    <h2 class="projectTitle" >Make your own adventure game</h2>
                </div>
            </a>
                <img class="projectPic" src="projects/Screenshot (218).png" alt="Make your own adventure game pic">

        </div>

        <div id="toDoList" class="projectContainer">
            <a href="https://deft-moonbeam-e0bc2c.netlify.app/">
                <div class="background"></div>
                <div class="projectTitleContainer">
                    <h2 class="projectTitle" >3D To do list</h2>
                </div>
            </a>

                <img class="projectPic" src="projects/Screenshot (219).png" alt="toDoList pic">

        </div>

        <div id="Code-Space" class="projectContainer">
            <a href="https://code-space-client.netlify.app/">
                <div class="background"></div>
                <div class="projectTitleContainer">
                    <h2 class="projectTitle" >Code-Space</h2>
                </div>
            </a>

                <img class="projectPic" src="projects/code-space-client.netlify.app_home_Img.png" alt="Web Space pic">

        </div>


        <h1 style="opacity: 0; font-size: 50px;">Yo</h1>
    </div>

    <h1 id="back" on:click={back}>back</h1>

</main>

<style>
    main {
        background-image: url('/imgs/broken glass background.jpg');
        background-size: 100% 100% ;
        position: absolute;
        opacity: 0;
        transition: 1s;
        z-index: 5;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        overflow-x: hidden;
    }

    #mainContainer {
        position:absolute;
        left: 50%;
        transform: translateX(-50%)
    }

    .projectContainer {
        position: relative;
        margin: 30px;
        transition: 0.5s;
    }

    .background {
        position: absolute;
        width: 100%;
        height: 100%;
        z-index: 6;
        background: black;
        opacity: 0;
        transition: 0.5s
    }

    .projectContainer:hover .background {
        opacity: 0.5
    }

    #netflixContainer:hover .projectTitle {
        opacity: 1
    }

    #dog-search:hover .projectTitle {
        opacity: 1
    }

    #ICBINP:hover .projectTitle {
        opacity: 1
    }

    #toDoList:hover .projectTitle {
        opacity: 1
    }

    #Code-Space:hover .projectTitle {
        opacity: 1
    }

    .projectTitleContainer {
        position: absolute;
        height: 100%;
        width: 100%;
        text-align: center;
    }

    .projectTitle {
        position: relative;
        top: 50%;
        transform: translateY(-50%);
        opacity: 0;
        color: white;
        transition: 0.5s;
        z-index: 10;
        font-family: 'Nanum Gothic Coding', monospace;
    }

    #back {
        position: fixed;
        left: 50%;
        bottom: 5px;
        transform: translateX(-50%);
        color: white;
        font-size: 50px;
        cursor: pointer;
        font-family: 'Nanum Gothic Coding', monospace;
    }



    .projectPic {
        width: 400px
    }

    .invisible {
        opacity: 1
    }
</style>