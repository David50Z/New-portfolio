<script>
    import * as THREE from 'three';
    import Core from '../stores/Core'
    import {get} from 'svelte/store'
    import Transition from '../hooks/Transition'



    let visible = true
    let core = {}

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
    <div class="sk-wrapper">
        <div id="frontEnd-wrapper">
          <h2 class="sk-title">Front end</h2>
          <div>
            <img class="icon" src="/skills/imgs/React-icon.svg.png">
            <h3 class="skill-item">React</h3>
          </div>
          <div>
            <img class="icon" src="/skills/imgs/React-icon.svg.png">
            <h3 class="skill-item">React-Router</h3>
          </div>
          <div>
            <img class="icon" src="/skills/imgs/React-icon.svg.png">
            <h3 class="skill-item">React-three-fiber</h3>
          </div>
          <div>
            <img class="icon" src="/skills/imgs/jquery-512.png">
            <h3 class="skill-item">Jquery</h3>
          </div>
          <div>
            <img class="icon" src="/skills/imgs/800px-Svelte_Logo.svg.png">
            <h3 class="skill-item">Svelte</h3>
          </div>
        </div>
  
        <div id="backEnd-wrapper">
          <h2 class="sk-title">Back end</h2>
          <div>
            <img class="icon" src="/skills/imgs/mongodb-leaf_256x256@2x.png">
            <h3 class="skill-item">MongoDB</h3>
          </div>
          <div>
            <img class="icon" src="/skills/imgs/mongodb-leaf_256x256@2x.png">
            <h3 class="skill-item">Mongoose</h3>
          </div>
          <div>
            <h2 class="icon" id="EX">EX</h2>
            <h3 class="skill-item">Express</h3>
          </div>
          <div>
            <img class="icon" src="/skills/imgs/Postman Logo.png">
            <h3 class="skill-item">Postman</h3>
          </div>
          <div>
            <img class="icon" src="/skills/imgs/Heroku logo.jpg">
            <h3 class="skill-item">Heroku</h3>
          </div>
        </div>
  
        <div id="Fundamentals-wrapper">
          <h2 class="sk-title">Funamentals</h2>
          <div>
            <img class="icon" src="/skills/imgs/800px-HTML5_logo_and_wordmark.svg.png">
            <h3 class="skill-item">HTML</h3>
          </div>
          <div>
            <img class="icon" src="/skills/imgs/CSS3_logo_and_wordmark.svg.png">
            <h3 class="skill-item">CSS</h3>
          </div>
          <div>
            <img class="icon" src="/skills/imgs/800px-WHATWG_JavaScript_logo.svg.png">
            <h3 class="skill-item">Javascript</h3>
          </div>
          <div>
            <img class="icon" src="/skills/imgs/800px-Python-logo-notext.svg.png">
            <h3 class="skill-item">Python</h3>
          </div>
          <div>
            <img class="icon" src="/skills/imgs/GitHub-Mark-EDIT.png">
            <h3 class="skill-item">Git bash/Github</h3>
          </div>
        </div>
      </div>

      <h1 id="back" on:click={back}>Back</h1>
</main>

<style>

    main {
        background-image: url("/imgs/cool-background triangular.png");
        background-size: 100% 100% ;
        position: absolute;
        top: 0;
        left: 0;
        opacity: 0;
        transition: 1s;
        z-index: 4;
        height: 100%;
        width: 100%
    }



    .invisible {
        opacity: 1
    }

    #frontEnd-wrapper {
    position: absolute;
    top: 5%;
    left: 10%;
    transform: translate(-10%, -5%);
}

#backEnd-wrapper {
    position: absolute;
    top: 5%;
    left: 45%;
    transform: translate(-45%, -5%);
}

#Fundamentals-wrapper {
    position: absolute;
    top: 5%;
    right: 10%;
    transform: translate(-10%, -5%);
}

.sk-title {
    position: relative;
    top: 5%;
    left: 10%;
    transform: translate(-5%, -0%);
    z-index: 10;
    color: black;
    font-family: 'Quicksand', sans-serif;
}

.skill-item {
    display:inline-block;
    position: relative;
    margin-top: 10px;
    font-family: 'Quicksand', sans-serif;
}


.icon {
    position: relative;
    width: 60px;
    display: inline-block;
    
}

#EX {
    margin-right: 0px;
    padding: 0
}

#back {
    position: absolute;
    bottom: 5px;
    left: 50%;
    transform: translateX(-50%);
    margin: 0 auto;
    color: white;
    cursor: pointer;
    z-index: 10;
    font-family: 'Quicksand', sans-serif;
}

@media screen and (max-width: 1100px) {
        .sk-title {
            font-size: 20px;
        }

        .icon {
            display:inline-block;
            width: 30px;
        }

        .skill-item {
            font-size: 15px;
        }
        
        #EX {
            font-size: 23px;
            margin-right: 10px
        }
}

@media screen and (max-width: 600px) {

    #frontEnd-wrapper {
        display: block;
    }

    #backEnd-wrapper {
        display: block
    }

    .sk-title {
        font-size: 10px;
    }

    .icon {
        width: 15px;
    }

    .skill-item {
        font-size: 8px;
    }

    #EX {
        font-size: 13px;
    }
}
</style>