
import { useEffect } from "react"
import { motion, useAnimate } from "framer-motion"
import test_video from "../videos/basis_about_video.mp4"
export default function VendorScreen() {
    const [scope, animate] = useAnimate()
   return (
   <>
       <div id='about_title_container' className="about_title_contaier">
           <b id='about_title' className="about_title"> Vendor_name  </b>
       </div>
       <div id='skala_text_container' className="about_text_contaier"></div>
       <div id='basis_text_container' className="about_text_contaier"></div>
       <div id='kaspersky_text_container' className="about_text_contaier"></div>
       <div id='yadro_text_container' className="about_text_contaier"></div>
       <div id='yadro_qr' className="about_qr"></div>
       <div id='skala_qr' className="about_qr"></div>
       <div id='basis_qr' className="about_qr"></div>
       <video id="about_video" className="about_video" autoPlay muted loop> 
            <source src={test_video} type="video/mp4"></source>
       </video>
       <div id="about_watch_button" className="about_watch_button"></div>
   </>
)
}
