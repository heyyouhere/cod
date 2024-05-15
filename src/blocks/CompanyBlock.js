
import { useEffect } from "react"
import { motion, useAnimate } from "framer-motion"
import gif from "../images/icons_gif_loop_1.gif"

export default function CompanyBlock() {
   return (
     <>
        <div id='company_gif_continaer' className="company_gif_container">
            <img className='company_gif' src={gif}></img>
        </div>
        <div className="company_name"><b> ИНФРАСТРУКТУРА УПРАВЛЕНИЯ ПРОЕКТАМИ </b></div>
         <div id='company_text_contaier' className="company_text_contaier">
         </div>
         <div id='company_next_button' className='company_next_button'></div>
    </>
    )
}
