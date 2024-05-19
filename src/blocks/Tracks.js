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
        {x : 550, y: 125},
    scale: default_scale,
}
const kaspersky_data = {
    id : 2,
    gif : app_gif,
    position :
        {x : 1115, y: 15},
    scale: default_scale,
}
const basis_data = {
    id : 3,
    gif : khraneniye_gif,
    position :
        {x : 1725, y: 435},
    scale: 1.7,
}
const yadro_data = {
    id : 4,
    gif : upravl_gif,
    position :
        {x : 775, y: 540},
    scale: default_scale,
}

const next_data = {
    id : 5,
    gif : kaspersky_gif,
    position :
        {x : 1400, y: 175},
    scale: 1.2,
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
       <TrackGif track_data={kaspersky_data}></TrackGif>
       <motion.div initial={{x: 1410, y: 350, scale:1.7}}>
            <div id='tracks_server_image' className='tracks_server_image'>
           </div>
        </motion.div>
       <TrackGif track_data={basis_data}></TrackGif>
       <TrackGif track_data={yadro_data}></TrackGif>
       <TrackGif track_data={scala_data}></TrackGif>
       <TrackGif track_data={next_data}></TrackGif>
       <div id='tracks_texts_alpha' className="tracks_texts_alpha"></div>
       <motion.div initial={{x: 1250, y: 50}}>
            <div id='track_vendors_button' className='track_vendors_button'>
           </div>
        </motion.div>
    </>
    )
}

