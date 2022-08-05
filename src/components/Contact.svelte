<script>
    import * as THREE from 'three';
    import Core from '../stores/Core'
    import {get} from 'svelte/store'
    import Transition from '../hooks/Transition'



    let visible = true
    let core = {}

    console.log('hello!')

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
        <div id="background"></div>
        <div id="info">
            <h2 class="cm-item">Phone Number: (725-600-1255)</h2>
            <h2 class="cm-item">Gmail: daviddwkssoftware@gmail.com</h2>
            <h2 class="cm-item"><a href="https://github.com/David50Z">Github</a></h2>
            <h2 class="cm-item"><a href="https://www.linkedin.com/in/david-dawkins/">Linkedin</a></h2>
            <h1 id="back" on:click={back}>Back</h1>
        </div>
    </div>

</main>

<style>
    main {
        background-image: url("/imgs/gradient-background2.jpg");
        background-size: 100% 100% ;
        position: absolute;
        opacity: 0;
        transition: 1s;
        z-index: 5;
        top: 0;
        left: 0;
        bottom: 0;
        height: 100%;
        width: 100%;
    }

    #mainContainer {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
        width: 60%;
        height: 80%;

    }

    #info {
        position: absolute;
        color: white;
        z-index: 50;
        height: 100%;
        width: 100%;
    }

    a {
        color: rgb(52, 77, 218)
    }

    h2 {
        text-align: center;
    }

    #background {
        position: absolute;
        opacity: 0.5;
        border-radius: 5%;
        width: 100%;
        height: 100%;
        background: black;
        z-index: 3;
    }

    #back {
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        cursor: pointer;
    }

    .invisible {
        opacity: 1
    }

    @media only screen and (max-width: 700px) { 
        #mainContainer {
            width: 80%
        }
    }

    @media only screen and (max-width: 400px) { 
        h2 {
            font-size: 15px;
        }
    }
</style>