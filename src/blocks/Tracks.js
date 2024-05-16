import { useEffect } from "react"
import { motion, useAnimate } from "framer-motion"

import app_gif from "../images/loops/App_Loop.gif"
import kaspersky_gif from "../images/loops/Kaspersky_Loop.gif"
import khraneniye_gif from "../images/loops/Khraneniye_Loop.gif"
import upravl_gif from "../images/loops/Upravl_Loop.gif"
import virt_gif from "../images/loops/Virt_Loop.gif"

const default_scale = 1.5

const scala_data = {
    id : 1,
    gif : virt_gif,
    position :
        {x : 600, y: 250},
    scale: default_scale,
}
const kaspersky_data = {
    id : 2,
    gif : app_gif,
    position :
        {x : 1150, y: 50},
    scale: default_scale,
}
const basis_data = {
    id : 3,
    gif : khraneniye_gif,
    position :
        {x : 1400, y: 450},
    scale: default_scale,
}
const yadro_data = {
    id : 4,
    gif : upravl_gif,
    position :
        {x : 800, y: 520},
    scale: default_scale,
}

const next_data = {
    id : 5,
    gif : kaspersky_gif,
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
   return (
     <>
       <div id="track_text_contaier"></div>
       <TrackGif track_data={scala_data}></TrackGif>
       <TrackGif track_data={kaspersky_data}></TrackGif>
       <TrackGif track_data={basis_data}></TrackGif>
       <TrackGif track_data={yadro_data}></TrackGif>
       <TrackGif track_data={next_data}></TrackGif>
       <motion.div initial={{x: 1250, y: 850}}>
            <div id='track_vendors_button' className='track_vendors_button'>
           </div>
        </motion.div>
    </>
    )
}

