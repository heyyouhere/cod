import { useEffect } from "react"
import { motion, useAnimate } from "framer-motion"
import video_no_bg from "../videos/back_no_info.mp4"


export function InfoButton() {
   return (
     <>
        <div id='info_button' className="info_button_container">
        </div>
     </>
   )
}

export function MainButton() {
   return (
     <>
        <div id='main_button' className="main_button_container">
        </div>
     </>
    )
}

export function InfoText() {
   return (
     <>
        <div id='info_text' className="info_text_container">
        </div>
     </>
    )
}