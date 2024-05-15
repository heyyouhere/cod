import image from "../images/lines.png"
import city_video from "../videos/back.mp4"
import video_no_bg from "../videos/back_no_info.mp4"
import { motion, useAnimate } from "framer-motion"
import around_image from "../images/around.png"

 export default function Background() {
   return (
     <div className="bg_div"> 
        <video id="bg__video_no_logo" className="bg__video_no_logo" loop autoPlay muted>
            <source src={video_no_bg} type="video/mp4"></source>
        </video>
       <motion.div initial={{ opacity: 1}}>
        <video id="bg__video" className="bg__video" loop autoPlay muted>
            <source src={city_video} type="video/mp4"></source>
        </video>
       </motion.div>
        <img className="bg__image" src={image}></img>
        <img className="bg__image_rotated" src={image}></img>
        <img id="bg__image_around" className="bg__image_around" src={around_image}></img>
    </div>
   )
 }