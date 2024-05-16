import { useEffect } from "react"
import { motion, useAnimate } from "framer-motion"
import gif from "../images/icons_gif_loop_1.gif"


const scala_data = {
    gif : gif,
    position :
        {x : 0, y: 0},
}
const kaspersky_data = {
    gif : gif,
    position :
        {x : 300, y: -200},
}
const basis_data = {
    gif : gif,
    position :
        {x : 600, y: 0},
}
const yadro_data = {
    gif : gif,
    position :
        {x : 300, y: 200}
}

function TrackGif({track_data}){
    return (
       <motion.div initial={{ x: track_data.position.x, y: track_data.position.y}}>

            <div id='track_gif_continaer_1' className="track_gif_container">
                <div className="gif_button"> </div>
                <img className='track_gif' src={track_data.gif}></img>
            </div>
        </motion.div>
    )
}


export default function TracksMenu() {
    const [scope, animate] = useAnimate()
    // useEffect(()=>{
    //     let track_gif_continaer_1 = document.getElementById("track_gif_continaer_1")
    //     let track_gif_continaer_2 = document.getElementById("track_gif_continaer_2")
    //     let track_gif_continaer_3 = document.getElementById("track_gif_continaer_3")
    //     let track_gif_continaer_4 = document.getElementById("track_gif_continaer_4")
    //     let track_gifs = [
    //         track_gif_continaer_1,
    //         track_gif_continaer_2,
    //         track_gif_continaer_3,
    //         track_gif_continaer_4,
    //     ]

    //     let track_text_contaier = document.getElementById("track_text_contaier")
    //     let track_name = document.getElementById("track_name")

    //     let is_big = false;
    //     for (let i=0; i<track_gifs.length; i++){
    //         track_gifs[i].querySelector('.gif_button').onclick = (event) => {
    //             let self = event.orignalTarget
    //             if (is_big){
    //                 for (let j=0; j<track_gifs.length; j++){
    //                     if (track_gifs[i] != track_gifs[j]){
    //                         animate(track_gifs[j], {scale: 1})
    //                     } else {
    //                         animate(track_gifs[j], { scale: 1, x: 0, y: 0})
    //                     }
    //                 }
    //                 animate(track_name, {y: -400})
    //                 animate(track_text_contaier, {x: +800})
    //                 is_big = false;
    //             } else {
    //                 for (let j=0; j<track_gifs.length; j++){
    //                     if (track_gifs[i] != track_gifs[j]){
    //                         animate(track_gifs[j], {scale: 0})
    //                     } else {
    //                         animate(track_gifs[j], { scale: 1.2, x:  200 - initial_positions[j].x, y: 60 - initial_positions[j].y})
    //                     }
    //                 }
    //                 is_big = true
    //                 animate(track_name, {y: 400})
    //                 animate(track_text_contaier, {x: -800})
    //             }
    //         }
    //     }
    // }, [])
   return (
     <>
       <TrackGif track_data={scala_data}></TrackGif>
       <TrackGif track_data={kaspersky_data}></TrackGif>
       <TrackGif track_data={basis_data}></TrackGif>
       <TrackGif track_data={yadro_data}></TrackGif>
        {/* <div id='track_next_button' className='track_next_button'></div> */}
    </>
    )
}

