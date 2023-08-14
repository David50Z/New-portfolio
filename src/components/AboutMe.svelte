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
        <img src="/imgs/My best hair cut.jpg" alt="Profile pic">
        <p>I am a Full-Stack Software Engineer with experience in front-end and back-end technologies. I am committed to continuous learning and growth through technical challenges. My long-term goal is to teach junior developers and work on projects that make a positive impact in the world!</p>
        
    </div>

</main>

<div class="backContainer">
    <div class="backContainer2">
        <h1 id="back" on:click={back}>back</h1>
    </div>
</div>

<style>

    main {
        background-image: url("/imgs/background.png");
        position: absolute;
        opacity: 0;
        transition: 1s;
        z-index: 5;
        top: 0;
        left: 0;
        bottom: 0;
        height: 100%;
        width: 100%;
        overflow-x: hidden;
    }



    #mainContainer {
        position: relative;
        display: grid;
        grid-template-areas: "img" "text";
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 3fr 1px;
        gap: 20px;
    }

    img {
        grid-area: "img";
        grid-row-start: 1;
        grid-row-end: 2;
        border: 5px groove black;
        margin: 10px;
        width: 60%;
        border-radius: 5%;
        position: relative;
        left: 50%;
        transform: translate(-50%, 0%);
    }

    #textContainer {

    }

    p {
        font-family: 'Courier New', monospace;
        color: white;
        font-size: 25px;
        position: relative;
        grid-area: "text";
        grid-row-start: 1;
        grid-row-end: 2;
        line-height: 50pt;
        top: 5%;
        margin-right: 7%;
        padding: 0;
    }

    .backContainer {
        position: absolute;
        height: 100vh;
        width: 100vw;

    }

    .backContainer2 {
        position: relative;
        height: 100vh;
        width: 100vw;

    }

    #back {
        position: absolute;
        color: white;
        text-align: center;
        left: 50%;
        transform: translateX(-50%);
        bottom: 10px;
        cursor: pointer;
        font-family: 'Courier New', monospace;
        z-index: 10;
    }

    .invisible {
        opacity: 1
    }


    @media only screen and (max-width: 1635px) {
        p {
            line-height: 30pt;
            font-size: 20px;
        }


    }

    @media only screen and (max-width: 1100px) {
        img {
            width: 90%;
            margin-left: 20px;
        }


    }

    @media only screen and (max-width: 860px) { 
        p {
            line-height: 23pt;
            font-size: 15px;
        }

        img {
            width: 75%;

        }

        #back {
            
            font-size: 60px;

        }
    }

    @media only screen and (max-width: 700px) { 

        main {

        }

        #mainContainer {
            grid-template-columns: 1fr;
            grid-template-rows: auto auto auto;
        }

        img {
            grid-row-start: 1;
            grid-row-end: 2;
            width: 30%;
        }

        p {
            grid-row-start: 2;
            grid-row-end: 3;
            margin-left: 20px;
        }


    }

    @media only screen and (max-width: 300px) { 
        img{
            width: 80%;
        }

        #back {

            font-size: 35px;
        }
    }
</style>
