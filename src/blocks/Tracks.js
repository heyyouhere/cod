import { useEffect } from "react"
import { motion, useAnimate } from "framer-motion"
import gif from "../images/icons_gif_loop_1.gif"


const scala_data = {
    id : 1,
    gif : gif,
    position :
        {x : 240, y: 230},
    scale: 1.2,
}
const kaspersky_data = {
    id : 2,
    gif : gif,
    position :
        {x : 750, y: 120},
    scale: 1.2,
}
const basis_data = {
    id : 3,
    gif : gif,
    position :
        {x : 950, y: 450},
    scale: 1.2,
}
const yadro_data = {
    id : 4,
    gif : gif,
    position :
        {x : 400, y: 520},
    scale: 1.2,
}

const next_data = {
    id : 5,
    gif : gif,
    position :
        {x : 930, y: 320},
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



function TrackGif({track_data}){
    return (
       <motion.div initial={{ x: track_data.position.x, y: track_data.position.y, scale: track_data.scale}}>
            <div id={'track_gif_continaer_'+track_data.id} className="track_gif_container">
                <div className="gif_button"> </div>
                <img className='track_gif' src={track_data.gif}></img>
            </div>
        </motion.div>
    )
}


export default function TracksMenu() {
    const [scope, animate] = useAnimate()
    useEffect(()=>{
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

        let track_text_contaier = document.getElementById("track_text_contaier")
        let track_name = document.getElementById("track_name")

        let is_big = false;
        for (let i=0; i<track_gifs.length; i++){
            track_gifs[i].querySelector('.gif_button').onclick = (event) => {
                let self = event.orignalTarget
                if (is_big){
                    for (let j=0; j<track_gifs.length; j++){
                        if (track_gifs[i] != track_gifs[j]){
                            animate(track_gifs[j], {scale: 1})
                        } else {
                            animate(track_gifs[j], { scale: 1, x: 0, y: 0})
                        }
                    }
                    animate(track_name, {y: -400})
                    animate(track_text_contaier, {x: +800})
                    is_big = false;
                } else {
                    for (let j=0; j<track_gifs.length; j++){
                        if (track_gifs[i] != track_gifs[j]){
                            animate(track_gifs[j], {scale: 0})
                        } else {
                            animate(track_gifs[j], { scale:  show_position.scale, x:  show_position.x - datas[j].position.x, y: show_position.y - datas[j].position.y})
                        }
                    }
                    is_big = true
                    animate(track_name, {y: 400})
                    animate(track_text_contaier, {x: -800})
                }
            }
        }
    }, [])
   return (
     <>
       <div id="track_name"></div>
       <div id="track_text_contaier"></div>
       <TrackGif track_data={scala_data}></TrackGif>
       <TrackGif track_data={kaspersky_data}></TrackGif>
       <TrackGif track_data={basis_data}></TrackGif>
       <TrackGif track_data={yadro_data}></TrackGif>
       <TrackGif track_data={next_data}></TrackGif>
       <motion.div initial={{x: 1330, y: 820, scale: 0.7}}>
            <div id='track_next_button' className='track_next_button'></div>
        </motion.div>
    </>
    )
}

