
import { useEffect } from "react"
import { animate, delay, motion, useAnimate } from "framer-motion"
import gif from "../images/icons_gif_loop_1.gif"

import basis_logo     from "../images/logos/basis_logo.png"
import kaspersky_logo from "../images/logos/kaspersky_logo.png"
import skala_logo     from "../images/logos/skala_logo.png"
import yadro_logo     from "../images/logos/yadro_logo.png"


const basis_data = {
    logo : basis_logo,
    position : { x: 1100, y: 200 },
    text: "Вендор решений для организации динамической инфраструктуры, виртуальных рабочих мест и оказания облачных услуг"

}
const kaspersky_data = {
    logo : kaspersky_logo,
    position : { x: 1100, y: 625 },
    text: "Разработчик решений для защиты корпоративной ИТ-инфраструктуры"
}
const skala_data = {
    logo : skala_logo,
    position : { x: 300, y: 200 },
    text: "Производитель модульной платформы для построения корпоративной ИТ-инфраструктуры"
}
const yadro_data = {
    logo : yadro_logo,
    position : { x: 300, y: 625 },
    text: "Разработчик решений для защиты корпоративной ИТ-инфраструктуры"
}

function PartnerButton({partner_data}) {
   return (
    <motion.div initial={{ x: partner_data.position.x, y: partner_data.position.y}}>
        <div className="partner_button">
            <img className="partner_button_logo"  src={partner_data.logo}></img>
            <div className="partner_text">
                {partner_data.text}
            </div>
            <div className="partner_button_detailes">
            </div>
        </div>
    </motion.div>
 )
}


export default function PartnersMenu() {
    useEffect(()=>{
        let about_text_contaier = document.getElementById("about_text_contaier")
        let about_title = document.getElementById("about_title")
        let partners_buttons_container = document.getElementById('partner_buttons_container_logos')
        let partners = document.getElementById("partners")
        let about_perv_button = document.getElementById("about_perv_button")
    },[])

    return (
        <>
        <motion.div initial={{x: -400}}> 
            <div id='about_perv_button' className='about_prev_button'></div>
        </motion.div>
        <div id="partner_buttons_container_logos">
                <PartnerButton partner_data={skala_data}></PartnerButton>
                <PartnerButton partner_data={basis_data}></PartnerButton>
                <PartnerButton partner_data={yadro_data}></PartnerButton>
                <PartnerButton partner_data={kaspersky_data}></PartnerButton>
        </div>
        </>
    )
}
