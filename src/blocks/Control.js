import { useEffect } from "react"
import { motion, useAnimate } from "framer-motion"



const default_scale = 1.5

const scala_data = {
    id : 1,
    position :
        {x : 600, y: 250},
    target_position : 
        {x : 400, y: 50, scale : 3.0},
    scale: default_scale,
}
const kaspersky_data = {
    id : 2,
    position :
        {x : 1150, y: 50},
    target_position : 
        {x : -250, y: 150, scale : 1.8},
    scale: default_scale,
}
const basis_data = {
    id : 3,
    position :
        {x : 1400, y: 450},
    target_position : 
        {x : -150, y: -50, scale : 2.5},
    scale: default_scale,
}
const yadro_data = {
    id : 4,
    position :
        {x : 800, y: 520},
    target_position : 
        {x : -50, y: -100, scale : 1.8},
    scale: default_scale,
}

const next_data = {
    id : 5,
    position :
        {x : 1050, y: 220},
    target_position : 
        {x : -1100, y: 250, scale : 3},
    scale: 0.8,
}

const datas = [
    scala_data,
    kaspersky_data,
    basis_data,
    yadro_data,
    next_data
]




export default function Control() {

    let current_track = null;
    const [scope, animate] = useAnimate()
    useEffect(() => {



        let back_button = document.getElementById('back_button_container')
        animate(back_button, {opacity: 0})

        let right_button = document.getElementById('track_right_button_container')
        let left_button = document.getElementById('track_left_button_container')

        function hide_track_buttons(){
            animate(right_button, {x: -2000})
            animate(left_button, {x: 2000})
        }
        function show_track_buttons(left_text, right_text){
            animate(right_button, {x: 0})
            animate(left_button, {x: 0 })
            console.log("TODO: insert text into divs:", left_text, right_text)
        }

        hide_track_buttons()


        let home_button = document.getElementById('home_button_container')
        home_button.onclick = () => {
            hide_partners_buttons()
            show_tracks()
        }

        function animate_track(track, data){
            animate(track, { 
                scale: data.target_position.scale, 
                x: data.target_position.x, 
                y: data.target_position.y
            })
            console.log(track)
            if (track.id == 'track_gif_continaer_1' || track.id == 'track_gif_continaer_3'){
                show_track_buttons("Left", "Right")
            
            }
        }

        back_button.onclick = () => {
            if (current_track != null){
                animate(bg_video, {opacity: 0});
                for (let j=0; j<track_gifs.length; j++){
                    if (current_track != track_gifs[j]){
                        animate(track_gifs[j], {scale: 1})
                    } else {
                        console.log(current_track.position)
                        animate(track_gifs[j], { scale: 1, x: 0, y: 0})
                    }
                }
                animate(back_button, {opacity: 0})
                animate(vendors_button, {scale: 1});
                hide_track_buttons()
            }
        }

        let partners = document.getElementById('partner_buttons_container_logos');
        let partnerButtons = partners.getElementsByClassName('partner_button');

        function hide_partners_buttons(){
            let partnerButtons = partners.getElementsByClassName('partner_button');
            for (let i = 0; i < partnerButtons.length; i++) {
                let partnerButton = partnerButtons[i]
                animate(partnerButton, {scale : 0}, {delay: i/10})
            }
            animate(home_button, {opacity : 0})
        }
        function show_partners_buttons(){
            let partnerButtons = partners.getElementsByClassName('partner_button');
            for (let i = 0; i < partnerButtons.length; i++) {
                let partnerButton = partnerButtons[i]
                animate(partnerButton, {scale : 1}, {delay: i/10})
            }
            animate(home_button, {opacity : 1})
        }
        hide_partners_buttons()

        let vendors_button = document.getElementById('track_vendors_button')
        vendors_button.onclick = () => {
            hide_tracks()
            show_partners_buttons()
        }





        let track_gif_continaer_1 = document.getElementById("track_gif_continaer_1")
        let track_gif_continaer_2 = document.getElementById("track_gif_continaer_2")
        let track_gif_continaer_3 = document.getElementById("track_gif_continaer_3")
        let track_gif_continaer_4 = document.getElementById("track_gif_continaer_4")
        let track_gif_continaer_5 = document.getElementById("track_gif_continaer_5")
        let track_gifs = [
            track_gif_continaer_1,
            track_gif_continaer_2,
            track_gif_continaer_3,
            track_gif_continaer_4,
            track_gif_continaer_5
        ]
        let bg_video = document.getElementById("bg_video")
        console.log(bg_video)
        function hide_tracks(){
            for (let i=0; i<track_gifs.length; i++){
                animate(track_gifs[i], {scale : 0});
            }
            animate(vendors_button, {scale: 0});
            animate(bg_video, {opacity: 1});
        }

        function show_tracks(){
            for (let i=0; i<track_gifs.length; i++){
                animate(track_gifs[i], {scale : 1});
            }
            animate(vendors_button, {scale: 1});
            animate(bg_video, {opacity: 0});
        }

            animate(bg_video, {opacity: 0});
        let is_big = false;
        for (let i=0; i<track_gifs.length; i++){
            track_gifs[i].querySelector('.gif_button').onclick = (event) => {
                animate(bg_video, {opacity: 1});
                animate(vendors_button, {scale: 0});
                animate(back_button, {opacity: 1})
                let target_track_node = event.target.offsetParent
                target_track_node.position = datas[i].position
                current_track = target_track_node;
                console.log(current_track)
                for (let j=0; j<track_gifs.length; j++){
                    if (current_track != track_gifs[j]){
                        animate(track_gifs[j], {scale: 0})
                    } else {
                        animate_track(current_track, datas[j]);
                    }
                }
            }
        }


    }, [])

    return (
        <div></div>
    )
}
