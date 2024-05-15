import { useEffect } from "react"
import { animate, delay, motion, useAnimate } from "framer-motion"
import gif from "../images/icons_gif_loop_1.gif"

import basis_logo     from "../images/logos/basis_logo.png"
import kaspersky_logo from "../images/logos/kaspersky_logo.png"
import skala_logo     from "../images/logos/skala_logo.png"
import yadro_logo     from "../images/logos/yadro_logo.png"



function CompanyButton({image_src}) {
   return (
      <>
        <div className="company_button">
            <img className="company_button_logo"  src={image_src}></img>
            <div className="company_button_detailes">
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


export default function CompanyMenu() {
    useEffect(()=>{
        let about_next_button = document.getElementById("about_next_button")
        let about_text_contaier = document.getElementById("about_text_contaier")
        let about_title = document.getElementById("about_title")
        let company_buttons_container = document.getElementById('company_buttons_container_logos')
        let partners = document.getElementById("partners")
        let about_perv_button = document.getElementById("about_perv_button")
        about_next_button.onclick = () =>{
            animate(about_next_button, {y: 600})
            animate(about_text_contaier, {y: -1000})
            animate(about_title, {opacity : 0})
            animate(company_buttons_container, {x: -2000})
            animate(partners, {x : 400, delay: 300})
            animate(about_perv_button, {x: 800})
        }
    },{})

    return (
        <>

        <motion.div initial={{x: -400}}> 
            <div id='about_perv_button' className='about_prev_button'></div>
        </motion.div>
        <motion.div initial={{x: -400}}> 
            <div id='partners' className="partners">
                 <b>ПАРТНЕРЫ </b>
            </div>
        </motion.div>
        <motion.div initial={{x : 2000}}> 
        <div id="company_buttons_container_logos">
            <motion.div initial={{ x: 300, y: 200 }}>
                <CompanyButton image_src={skala_logo}></CompanyButton>
            </motion.div>
            <motion.div initial={{ x: 800, y: 200 }}>
                <CompanyButton image_src={yadro_logo}></CompanyButton>
            </motion.div>
            <motion.div initial={{ x: 300, y: 500 }}>
                <CompanyButton image_src={kaspersky_logo}></CompanyButton>
            </motion.div>
            <motion.div initial={{ x: 800, y: 500 }}>
                <CompanyButton image_src={basis_logo}></CompanyButton>
            </motion.div>
        </div>
        </motion.div>
        </>
    )
}
