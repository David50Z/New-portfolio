import Core from "../stores/Core";
import {get} from 'svelte/store'


const Transition = (page) => {
    let core = {}
    Core.subscribe((data) => {
        core = data
    })
    if(page != 'none') {
            Core.update(cores => {
                let data = cores
                data.dim = true
                data.gone = false
                data.page = "none"
                data.invisible = false
                data.position = {x: 8, 7: 10, z: 20}

                return data
            })

            setTimeout(() => {
                Core.update(cores => {
                    let data = cores
                    data.dim = true
                    data.gone = false
                    data.invisible = false
                    data.position = {x: 8, 7: 10, z: 20}
    
                    return data
                })
            }, 1000)

            setTimeout(() => {
                Core.update(cores => {
                    let data = cores
                    data.buttons = true
                    //data.dim = false
    
                    return data
                })
            }, 2000)
    }
}

export default Transition