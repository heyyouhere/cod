
import { useEffect } from "react"
import { animate, delay, motion, useAnimate } from "framer-motion"
import gif from "../images/icons_gif_loop_1.gif"

import basis_logo     from "../images/logos/basis_partner_button.png"
import kaspersky_logo from "../images/logos/kaspersky_partner_button.png"
import skala_logo     from "../images/logos/skala_partner_button.png"
import yadro_logo     from "../images/logos/yadro_partner_button.png"


const basis_data = {
    id: 'partner_basis',
    logo : basis_logo,
    position : { x: 1000, y: 250 },
    text: "Вендор решений для организации динамической инфраструктуры, виртуальных рабочих мест и оказания облачных услуг"

}
const kaspersky_data = {
    id: 'partner_kaspersky',
    logo : kaspersky_logo,
    position : { x: 1000, y: 625 },
    text: "Разработчик решений для защиты корпоративной ИТ-инфраструктуры"
}
const skala_data = {
    id: 'partner_skala',
    logo : skala_logo,
    position : { x: 250, y: 250 },
    text: "Производитель модульной платформы для построения корпоративной ИТ-инфраструктуры"
}
const yadro_data = {
    id: 'partner_yadro',
    logo : yadro_logo,
    position : { x: 250, y: 625 },
    text: "Разработчик решений для защиты корпоративной ИТ-инфраструктуры"
}

function PartnerButton({partner_data}) {
   return (
    <motion.div initial={{ x: partner_data.position.x, y: partner_data.position.y}}>
        <div id={partner_data.id} className="partner_button">
            <img className="partner_button_logo"  src={partner_data.logo}></img>
        </div>
    </motion.div>
 )
}


export default function PartnersMenu() {
    return (
        <>
        <div id='vendors_graphics' className="vendors_graphics"> </div>
        <div id='vendors_text' className="vendors_text"> <b> ВЕНДОРЫ </b></div>
        <div id="partner_buttons_container_logos">
                <PartnerButton partner_data={skala_data}></PartnerButton>
                <PartnerButton partner_data={basis_data}></PartnerButton>
                <PartnerButton partner_data={yadro_data}></PartnerButton>
                <PartnerButton partner_data={kaspersky_data}></PartnerButton>
        </div>
        </>
    )
}
