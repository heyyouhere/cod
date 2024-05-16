import { useEffect } from "react"
import { motion, useAnimate } from "framer-motion"



const default_scale = 1.5

const scala_data = {
    id : 1,
    position :
        {x : 600, y: 250},
    scale: default_scale,
}
const kaspersky_data = {
    id : 2,
    position :
        {x : 1150, y: 50},
    scale: default_scale,
}
const basis_data = {
    id : 3,
    position :
        {x : 1400, y: 450},
    scale: default_scale,
}
const yadro_data = {
    id : 4,
    position :
        {x : 800, y: 520},
    scale: default_scale,
}

const next_data = {
    id : 5,
    position :
        {x : 1050, y: 220},
    scale: 0.8,
}

const show_position = {x : 400, y: 350, scale : 1.5}

const datas = [
    scala_data,
    kaspersky_data,
    basis_data,
    yadro_data,
    next_data
]




export default function Control() {

    let current_track = null;
    const [scope, animate] = useAnimate()
    useEffect(() => {



        let back_button = document.getElementById('back_button_container')
        animate(back_button, {opacity: 0})



        back_button.onclick = () => {
            if (current_track != null){
                for (let j=0; j<track_gifs.length; j++){
                    if (current_track != track_gifs[j]){
                        animate(track_gifs[j], {scale: 1})
                    } else {
                        console.log(current_track.position)
                        animate(track_gifs[j], { scale: 1, x: 0, y: 0})
                    }
                }
                animate(back_button, {opacity: 0})
            }
        }



        let home_button = document.getElementById('home_button_container')
        home_button.onclick = () => {
            console.log("This is a HOME button")
        }



        let track_gif_continaer_1 = document.getElementById("track_gif_continaer_1")
        let track_gif_continaer_2 = document.getElementById("track_gif_continaer_2")
        let track_gif_continaer_3 = document.getElementById("track_gif_continaer_3")
        let track_gif_continaer_4 = document.getElementById("track_gif_continaer_4")
        let track_gif_continaer_5 = document.getElementById("track_gif_continaer_5")
        let track_gifs = [
            track_gif_continaer_1,
            track_gif_continaer_2,
            track_gif_continaer_3,
            track_gif_continaer_4,
            track_gif_continaer_5
        ]

        let is_big = false;
        for (let i=0; i<track_gifs.length; i++){
            track_gifs[i].querySelector('.gif_button').onclick = (event) => {
                animate(back_button, {opacity: 1})
                let target_track_node = event.target.offsetParent
                target_track_node.position = datas[i].position
                current_track = target_track_node;
                console.log(current_track)
                for (let j=0; j<track_gifs.length; j++){
                    if (track_gifs[i] != track_gifs[j]){
                        animate(track_gifs[j], {scale: 0})
                    } else {
                        animate(track_gifs[j], { scale:  show_position.scale, x:  show_position.x - datas[j].position.x, y: show_position.y - datas[j].position.y})
                    }
                }
            }
        }


    }, [])

    return (
        <div></div>
    )
}
