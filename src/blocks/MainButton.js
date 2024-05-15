import { useEffect } from "react"
import { motion, useAnimate } from "framer-motion"
import video_no_bg from "../videos/back_no_info.mp4"


function InfoButton() {
    const [scope, animate] = useAnimate()

    useEffect(()=>{
        let button = document.getElementById("info_button_container")
        // let title = document.getElementById("main_button")
        let bg__source = document.getElementById("bg__source")
        let bg__video = document.getElementById("bg__video")
        let bg__video_no_logo = document.getElementById("bg__video_no_logo")
        let about_next_button = document.getElementById("about_next_button")
        let about_text_contaier = document.getElementById("about_text_contaier")
        let about_title = document.getElementById("about_title")
        let bg__image_around = document.getElementById("bg__image_around")
        


        document.body.onclick = () => {
            animate(button, { y: -200 });
        }

        button.onclick = () => {
            animate(bg__video_no_logo, {opacity : 1})
            animate(bg__video, {opacity : 0})
            animate(button, {opacity : 0})
            animate(about_next_button, {x: -700})
            animate(about_text_contaier, {x: 2150})
            animate(about_title, {opacity : 1})
            animate(bg__image_around, {scale: 0.9})
        }
    }, [])
   return (
     <>
        <div id='info_button_container' className="info_button_container">
            <b className="info_button"> УЗНАТЬ О КОМПАНИЯХ </b>
        </div>
     </>
   )
}

function MainButton() {
    const [scope, animate] = useAnimate()
    useEffect(()=>{
        let is_small = false
        let button = document.getElementById("main_button")
    }, [])
   return (
     <>
        <div id='main_button' className="main_button_container">
            <b className="main_button"> КОРПОРАТИВНАЯ СТРУКТУРА ЦОД</b>
        </div>
     </>
    )
}

export default function Buttons(){
    return (
        <>
            {/* <MainButton></MainButton> */}
            <InfoButton></InfoButton>
        </>
    )
}
