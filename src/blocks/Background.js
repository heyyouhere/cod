import image from "../images/lines.png"
import city_video from "../videos/back.mp4"
import video_no_bg from "../videos/back_no_info.mp4"
import { motion, useAnimate } from "framer-motion"
import around_image from "../images/around.png"
import bg_grid_video from "../videos/start_bg.mp4"
import bg_video from "../videos/back_no_info.mp4"

 export default function Background() {
   return (
     <div className="bg_div"> 
        <video id="bg__video_no_logo" className="bg__video_no_logo" loop autoPlay muted>
            <source src={bg_grid_video} type="video/mp4"></source>
        </video>
        <video id="bg_video" className="bg__video_no_logo" loop autoPlay muted>
            <source src={bg_video} type="video/mp4"></source>
        </video>
    </div>
   )
 }
