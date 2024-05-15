import { useEffect } from "react"
import { motion, useAnimate } from "framer-motion"
import gif from "../images/icons_gif_loop_1.gif"

const initial_positions = [
    {x : 0, y: 0},
    {x : 300, y: -200},
    {x : 600, y: 0},
    {x : 300, y: 200}
]

export default function MainScreen() {
    const [scope, animate] = useAnimate()
    useEffect(()=>{
        let company_gif_continaer_1 = document.getElementById("company_gif_continaer_1")
        let company_gif_continaer_2 = document.getElementById("company_gif_continaer_2")
        let company_gif_continaer_3 = document.getElementById("company_gif_continaer_3")
        let company_gif_continaer_4 = document.getElementById("company_gif_continaer_4")
        let company_gifs = [
            company_gif_continaer_1,
            company_gif_continaer_2,
            company_gif_continaer_3,
            company_gif_continaer_4,
        ]

        let company_text_contaier = document.getElementById("company_text_contaier")
        let company_name = document.getElementById("company_name")

        let is_big = false;
        for (let i=0; i<company_gifs.length; i++){
            company_gifs[i].querySelector('.gif_button').onclick = (event) => {
                let self = event.orignalTarget
                if (is_big){
                    for (let j=0; j<company_gifs.length; j++){
                        if (company_gifs[i] != company_gifs[j]){
                            animate(company_gifs[j], {scale: 1})
                        } else {
                            animate(company_gifs[j], { scale: 1, x: 0, y: 0})
                        }
                    }
                    animate(company_name, {y: -400})
                    animate(company_text_contaier, {x: +800})
                    is_big = false;
                } else {
                    for (let j=0; j<company_gifs.length; j++){
                        if (company_gifs[i] != company_gifs[j]){
                            animate(company_gifs[j], {scale: 0})
                        } else {
                            animate(company_gifs[j], { scale: 1.2, x:  200 - initial_positions[j].x, y: 60 - initial_positions[j].y})
                        }
                    }
                    is_big = true
                    animate(company_name, {y: 400})
                    animate(company_text_contaier, {x: -800})
                }
            }
        }
    }, [])
   return (
     <>
       <motion.div initial={{ x: initial_positions[0].x, y: initial_positions[0].y}}>
        <div id='company_gif_continaer_1' className="company_gif_container">
            <div className="gif_button"> </div>
            <img className='company_gif' src={gif}></img>
        </div>
        </motion.div>

       <motion.div initial={{ x: initial_positions[1].x, y: initial_positions[1].y}}>
        <div id='company_gif_continaer_2' className="company_gif_container">
            <div className="gif_button"> </div>
            <img className='company_gif' src={gif}></img>
        </div>
       </motion.div>
       <motion.div initial={{ x: initial_positions[2].x, y: initial_positions[2].y}}>
        <div id='company_gif_continaer_3' className="company_gif_container">
            <div className="gif_button"> </div>
            <img className='company_gif' src={gif}></img>
        </div>
       </motion.div>
       <motion.div initial={{ x: initial_positions[3].x, y: initial_positions[3].y}}>
        <div id='company_gif_continaer_4' className="company_gif_container">
            <div className="gif_button"> </div>
            <img className='company_gif' src={gif}></img>
        </div>
       </motion.div>
        <div className="company_name" id='company_name'><b> ИНФРАСТРУКТУРА УПРАВЛЕНИЯ ПРОЕКТАМИ </b></div>
        <div id='company_text_contaier' className="company_text_contaier">
            <b className="company_text">
            </b>
         </div>
        {/* <div id='company_next_button' className='company_next_button'></div> */}
    </>
    )
}

