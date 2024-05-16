
import { useEffect } from "react"
import { animate, delay, motion, useAnimate } from "framer-motion"
import gif from "../images/icons_gif_loop_1.gif"

import basis_logo     from "../images/logos/basis_logo.png"
import kaspersky_logo from "../images/logos/kaspersky_logo.png"
import skala_logo     from "../images/logos/skala_logo.png"
import yadro_logo     from "../images/logos/yadro_logo.png"


const basis_data = {
    logo : basis_logo,
    position : { x: 300, y: 250 }
}
const kaspersky_data = {
    logo : kaspersky_logo,
    position : { x: 1000, y: 250 }
}
const skala_data = {
    logo : skala_logo,
    position : { x: 300, y: 550 }
}
const yadro_data = {
    logo : yadro_logo,
    position : { x: 1000, y: 550 }
}

function PartnerButton({partner_data}) {
   return (
      <>
        <div className="partner_button">
            <img className="partner_button_logo"  src={partner_data.logo}></img>
            <div className="partner_button_detailes">
                <div style={{marginTop: "15px"}}>
                    <b>
                    ПОДРОБНЕЕ
                    </b>
                </div>
            </div>
        </div>
      </>
 )
}


export default function PartnersMenu() {
    useEffect(()=>{
        let about_next_button = document.getElementById("about_next_button")
        let about_text_contaier = document.getElementById("about_text_contaier")
        let about_title = document.getElementById("about_title")
        let partners_buttons_container = document.getElementById('partner_buttons_container_logos')
        let partners = document.getElementById("partners")
        let about_perv_button = document.getElementById("about_perv_button")
        about_next_button.onclick = () =>{
            animate(about_next_button, {y: 600})
            animate(about_text_contaier, {y: -1000})
            animate(about_title, {opacity : 0})
            animate(partners_buttons_container, {x: -2000})
            animate(partners, {x : 400, delay: 300})
            animate(about_perv_button, {x: 800})
        }
    },[])

    return (
        <>
        <motion.div initial={{x: -400}}> 
            <div id='about_perv_button' className='about_prev_button'></div>
        </motion.div>
        <motion.div initial={{x: -400}}> 
            <div id='partners' className="partners">
                 <b>ПАРТНЕРЫ</b>
            </div>
        </motion.div>
        <motion.div initial={{x : 2000}}> 
        <div id="partner_buttons_container_logos">
            <motion.div initial={{ x: 300, y: 250 }}>
                <PartnerButton partner_data={skala_data}></PartnerButton>
            </motion.div>
            <motion.div initial={{ x: 1000, y: 250 }}>
                <PartnerButton partner_data={yadro_data}></PartnerButton>
            </motion.div>
            <motion.div initial={{ x: 300, y: 550 }}>
                <PartnerButton partner_data={kaspersky_data}></PartnerButton>
            </motion.div>
            <motion.div initial={{ x: 1000, y: 550 }}>
                <PartnerButton partner_data={basis_data}></PartnerButton>
            </motion.div>
        </div>
        </motion.div>
        </>
    )
}
