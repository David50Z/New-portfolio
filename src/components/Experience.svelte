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


<div class:invisible={visible === false} class="experience">
    <div id="experiences">
        <img id="experienceBackground" src="projects/WaterBackground.jpg" alt="water background" />
        <div id="Full-Stack-Software-Engineer">
            <div class="background"></div>
            <h1 style="padding: 10px; color: white">Full-stack software engineer</h1>
            <h2 style="color: white">Doka USA (Contract hire) | Las Vegas (Remote) | 12-2022</h2>
            <p class="description" style="color: white">Created features for an internal tracking app that uses Angular 2+ for the front-end, and .NET Core for the back-end. Made classes and services for the front-end, as well as routes and controllers for the back-end. Worked with both the front and back-end engineers in order to learn what was needed to further develop the app. Worked with instructions and todo lists given by my project manager.</p>
        </div>
        <div id="Freelance-Web-Developer">
            <div class="background"></div>
            <h1 style="padding: 10px; color: white">Freelance Web Developer</h1>
            <h2 style="color: white">Self employment | Las Vegas (Remote) | 12-2022</h2>
            <p class="description" style="color: white">Developed multiple websites for clients using various languages, such as Angular, Svelte, and Ruby on Rails</p>
        </div>
    </div>
</div>


<style>

    .experience {
        position: relative;
        width: 100vw;
        min-height: 100vh;
        opacity: 0;
        transition: 1s;
        z-index: 5;
        top: 0;
        left: 0;
    }

    #experiences {
        position: absolute;
        height: 100%;
        width: 100%;
    }

    #experienceBackground {
        position: absolute;
        height: 100vh;
        width: 100vw;
    }

    #Full-Stack-Software-Engineer {
        position: relative;
        margin-top: 30px;
        margin-bottom: 30px;
        min-height: 10vh;
        max-width: 900px;
        width: 90%;
        left: 50%;
        transform: translateX(-50%);
        text-align: center;
    }

    #Freelance-Web-Developer {
        position: relative;
        margin-top: 30px;
        margin-bottom: 30px;
        min-height: 10vh;
        max-width: 900px;
        width: 90%;
        left: 50%;
        transform: translateX(-50%);
        text-align: center;
    }

    .description {
        color: white;
        padding: 20px
    }

    .background {
        position: absolute;
        height: 100%;
        width: 100%;
        background: black;
        opacity: 0.6;
        border-radius: 20px;
        z-index: -1;
    }

    p {
        color: white
    }

    .invisible {
        opacity: 1
    }

</style>