import { useEffect } from "react"
import { motion, useAnimate } from "framer-motion"


export function BackButton() {
   return (
     <>
        <div id='back_button_container' className="back_button_container">
        </div>
     </>
   )
}
export function HomeButton() {
   return (
     <>
        <div id='home_button_container' className="home_button_container">
        </div>
     </>
   )
}
export function TrackLeftButton() {
   return (
     <>
        <div id='track_left_button_container' className="track_left_button_container">
            <h1 className="track_button_text"> Text </h1>
        </div>
     </>
   )
}
export function TrackRightButton() {
   return (
     <>
        <div id='track_right_button_container' className="track_right_button_container">
            <h1 className="track_button_text"> Text </h1>
        </div>
     </>
   )
}

export function SkalaExtraButtons(){
   return (
     <>
        <div id='skala_left_extra' className="extra_button">
        </div>
        <div id='skala_center_extra' className="extra_button">
        </div>
        <div id='skala_right_extra' className="extra_button">
        </div>
     </>
   )

}
