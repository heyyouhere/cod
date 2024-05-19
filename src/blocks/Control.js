import { useEffect } from "react"
import { motion, useAnimate } from "framer-motion"



const default_scale = 1.5

const scala_data = {
    id : 1,
    position :
        {x : 600, y: 250},
    target_position : 
        {x : 400, y: -60, scale : 2.5},
    scale: default_scale,
}
const kaspersky_data = {
    id : 2,
    position :
        {x : 1150, y: 50},
    target_position : 
        {x : -320, y: 150, scale : 1.5},
    scale: default_scale,
}
const basis_data = {
    id : 3,
    position :
        {x : 1400, y: 450},
    target_position : 
        {x : -150, y: -150, scale : 2.1},
    scale: default_scale,
}
const yadro_data = {
    id : 4,
    position :
        {x : 800, y: 520},
    target_position : 
        {x : -100, y: -150, scale : 1.3},
    scale: default_scale,
}

const next_data = {
    id : 5,
    position :
        {x : 1050, y: 220},
    target_position : 
        {x : -800, y: 150, scale : 2.0},
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
    let current_partner = null;
    const [scope, animate] = useAnimate()
    useEffect(() => {

        let is_back_kaspersky = false;
        let is_in_split = false;
        let left_track_button = null;
        let right_track_button = null;
        let is_extra_button = false;
        let is_video = false;
        let button_next = 'kaspersky'
        let is_back_yadro = false;

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
            is_in_split = false;
            left_track_button = null;
            right_track_button = null;
            animate(back_button, {opacity: 0})
            animate(tracks_server_image, {scale:0} )
            animate(tracks_texts_alpha, {opacity:0} )
            if (current_track != null){
                animate(bg_video, {opacity: 0});
                for (let j=0; j<track_gifs.length; j++){
                    if (current_track != track_gifs[j]){
                        animate(track_gifs[j], {scale: 1})
                    } else {
                        animate(track_gifs[j], { scale: 1, x: 0, y: 0})
                        animate(current_track, {opacity : 1});
                    }
                }
                animate(vendors_button, {scale: 1});
                hide_track_buttons()
            }
            hide_partners_buttons()
            show_tracks()
            hide_about()
            hide_track_texts()
        }





        const yadro_track_text = document.getElementById('yadro_track_text');
        const yadro2_track_text = document.getElementById('yadro2_track_text');
        const skala_track_text = document.getElementById('skala_track_text');
        const kaspersky_1_track_text = document.getElementById('kaspersky_1_track_text');
        const kaspersky_2_track_text = document.getElementById('kaspersky_2_track_text');
        const basis_track_text_left  = document.getElementById('basis_track_text_left');
        const basis_track_text_right = document.getElementById('basis_track_text_right');
        const skala_track_text_left  = document.getElementById('skala_track_text_left');
        const skala_track_text_right = document.getElementById('skala_track_text_right');
        const kaspersky_track_next_button = document.getElementById('kaspersky_track_next_button');
        const skala_left_button = document.getElementById('skala_left_button');
        const skala_right_button = document.getElementById('skala_right_button');
        const basis_left_button = document.getElementById('basis_left_button');
        const basis_right_button = document.getElementById('basis_right_button');



        skala_left_button.onclick = () => {
            animate(home_button, {opacity: 1})
            animate(skala_track_text_left, {scale : 1})
            animate(skala_left_button, {scale:0});
            animate(skala_right_button, {scale:0});
            animate(current_track, {opacity : 0});
            is_in_split = true;
            left_track_button = skala_left_button;
            right_track_button = skala_right_button;
        
        }

        skala_right_button.onclick = () => {
            animate(home_button, {opacity: 1})
            animate(skala_track_text_right, {scale : 1})
            animate(skala_left_button, {scale:0});
            animate(skala_right_button, {scale:0});
            animate(current_track, {opacity : 0});
            is_in_split = true;
            left_track_button = skala_left_button;
            right_track_button = skala_right_button;
        }

        basis_left_button.onclick = () => {
            animate(home_button, {opacity: 1})
            animate(basis_track_text_left, {scale : 1})
            animate(basis_left_button, {scale:0});
            animate(basis_right_button, {scale:0});
            animate(current_track, {opacity : 0});
            is_in_split = true;
            left_track_button = basis_left_button;
            right_track_button = basis_right_button;

        }

        basis_right_button.onclick = () => {
            animate(home_button, {opacity: 1})
            animate(basis_track_text_right, {scale : 1})
            animate(basis_left_button, {scale:0});
            animate(basis_right_button, {scale:0});
            animate(current_track, {opacity : 0});
            is_in_split = true;
            left_track_button = basis_left_button;
            right_track_button = basis_right_button;

            let is_video = false;
        }


        kaspersky_track_next_button.onclick = () => {
            console.log(button_next)
            if (button_next == 'kaspersky'){
                animate(home_button, {opacity: 1})
                animate(kaspersky_1_track_text, {scale : 0});
                animate(kaspersky_2_track_text, {scale : 1});
                animate(kaspersky_track_next_button, {scale : 0});
                is_back_kaspersky = true;
            }
            if (button_next == 'yadro') {
                animate(home_button, {opacity: 1})
                animate(yadro_track_text, {scale : 0});
                animate(yadro2_track_text, {scale : 1});
                animate(kaspersky_track_next_button, {scale : 0});
                is_back_yadro = true;
            } 
        }
        function hide_track_texts(){
            animate(yadro_track_text, {scale : 0});
            animate(yadro2_track_text, {scale : 0});
            animate(skala_track_text, {scale : 0});
            animate(kaspersky_1_track_text, {scale : 0});
            animate(kaspersky_2_track_text, {scale : 0});
            animate(basis_track_text_left, {scale : 0});
            animate(basis_track_text_right, {scale : 0});
            animate(skala_track_text_left, {scale : 0});
            animate(skala_track_text_right, {scale : 0});
            animate(kaspersky_track_next_button, {scale : 0});
            animate(skala_left_button, {scale:0});
            animate(skala_right_button, {scale:0});
            animate(basis_left_button, {scale:0});
            animate(basis_right_button, {scale:0});
            is_back_kaspersky = false;
        }
        hide_track_texts()

        function animate_track(track, data){
            console.log(track, data)
            animate(home_button, {opacity: 0})
            animate(track, { 
                scale: data.target_position.scale, 
                x: data.target_position.x, 
                y: data.target_position.y
            })

            if (track.id == 'track_gif_continaer_1'){
                animate(basis_left_button, {scale:1});
                animate(basis_right_button, {scale:1});
            }
            if (track.id == 'track_gif_continaer_2'){
               animate(yadro_track_text, {scale : 1});
               animate(kaspersky_track_next_button, {scale : 1});
               button_next = 'yadro'
            }
            if (track.id == 'track_gif_continaer_3'){
                animate(skala_left_button, {scale:1});
                animate(skala_right_button, {scale:1});
            }
            if (track.id == 'track_gif_continaer_4'){
               animate(skala_track_text, {scale : 1});
            }
            if (track.id == 'track_gif_continaer_5'){
               animate(kaspersky_1_track_text, {scale : 1});
               animate(kaspersky_track_next_button, {scale : 1});
               button_next = 'kaspersky'
            }

        }

        const about_title = document.getElementById('about_title_container')
        const about_title_text= document.getElementById('about_title')
        const about_video = document.getElementById('about_video')
        const about_watch_button = document.getElementById('about_watch_button')
        const skala_text_container     = document.getElementById('skala_text_container');
        const skala_qr     = document.getElementById('skala_qr');
        const yadro_qr     = document.getElementById('yadro_qr');
        const basis_text_container     = document.getElementById('basis_text_container');
        const kaspersky_text_container = document.getElementById('kaspersky_text_container');
        const yadro_text_container     = document.getElementById('yadro_text_container');
        const basis_qr     = document.getElementById('basis_qr');


        

        const skala_left_extra = document.getElementById('skala_left_extra');
        const skala_center_extra = document.getElementById('skala_center_extra');
        const skala_right_extra = document.getElementById('skala_right_extra');

        skala_left_extra.onclick = () => {
            hide_about()
            animate(home_button, {opacity: 1})
            animate(skala_track_text_left, {scale : 1})
            is_in_split = true;
            is_extra_button = true;
        }

        skala_center_extra.onclick = () => {
            hide_about()
            animate(home_button, {opacity: 1})
            current_track = document.getElementById('track_gif_continaer_3')
            animate_track(current_track , datas[2])
            is_in_split = true;
        }

        skala_right_extra.onclick = () => {
            hide_about()
            animate(home_button, {opacity: 1})
            current_track = document.getElementById('track_gif_continaer_4')
            animate_track(current_track , datas[3])
        }

        function hide_about(){
            current_partner = null
            animate(about_title, {y: -700})
            animate(about_video, {x: 800})
            animate(about_watch_button, {x: 800})
            animate(skala_text_container, { x : -1200})
            animate(basis_text_container, { x : -1200})
            animate(kaspersky_text_container, { x : -1200})
            animate(yadro_text_container, { x : -1200})
            animate(yadro_qr, { scale : 0})
            animate(skala_qr, { scale : 0})
            animate(basis_qr, { scale : 0})
            animate(skala_left_extra, {scale : 0})
            animate(skala_center_extra, {scale : 0})
            animate(skala_right_extra, {scale : 0})
        }

        function show_about(event_partner){
            console.log(event_partner.id)
            // TODO: change about page according to partner data???
            if (event_partner.id == "partner_skala"){
                animate(skala_qr, { scale : 3, y: -250, x : 200}, {delay : 0.8})
                about_title_text.innerText = "Скала^р"
                animate(skala_text_container, {x : 0}, {delay: 1})
                animate(skala_left_extra, {scale : 1}, {delay: 1})
                animate(skala_center_extra, {scale : 1}, {delay: 1.1})
                animate(skala_right_extra, {scale : 1}, {delay: 1.2})
            }
            if (event_partner.id == "partner_basis") {
                animate(basis_qr, { scale : 1}, {delay : 1})
                animate(about_video, {x: 0}, {delay: 0.5})
                animate(about_watch_button, {y: -100, x : 150, scale : 0.8}, {delay: 0.5})
                about_title_text.innerText = "Базис"
                animate(basis_text_container, {x : 0}, {delay: 1})
            } 
            if (event_partner.id == "partner_yadro") {
                about_title_text.innerText = "YADRO"
                animate(yadro_qr, { scale : 1})
                animate(yadro_text_container, {x : 0}, {delay: 1})
            } 
            if (event_partner.id == "partner_kaspersky") {
                animate(about_video, {x: 0}, {delay: 0.5})
                animate(about_watch_button, {x: 0}, {delay: 0.5})
                about_title_text.innerText = "Лаборатория Касперского"
                animate(kaspersky_text_container, {x : 0}, {delay: 1})
            }
            current_partner = ""
            animate(about_title, {y: 0}, {delay: 0.5})
        }
        hide_about()
        

        back_button.onclick = () => {
            if (is_video){
                animate(about_video, {scale : 1, x : 0, y: 0})
                is_video = false;
                return
            }
            if (is_extra_button){
                animate(skala_qr, { scale : 3, y: -250, x : 200}, {delay : 0.8})
                about_title_text.innerText = "Скала^р"
                animate(skala_text_container, {x : 0})
                animate(skala_left_extra, {scale : 1})
                animate(skala_center_extra, {scale : 1})
                animate(skala_right_extra, {scale : 1})
                animate(skala_track_text_left, {scale : 0})
                is_extra_button = false;
                return 
            }
            if (is_back_kaspersky) {
                is_back_kaspersky = false;
                animate(kaspersky_1_track_text, {scale : 1});
                animate(kaspersky_2_track_text, {scale : 0});
                animate(kaspersky_track_next_button, {scale : 1});
                animate(home_button, {opacity: 0})
                return;
            }
            if (is_back_yadro){
                is_back_yadro = false;
                animate(yadro_track_text, {scale : 1});
                animate(yadro2_track_text, {scale : 0});
                animate(kaspersky_track_next_button, {scale : 1});
                animate(home_button, {opacity: 0})
                return;
            }
            if (current_track != null){
                animate(current_track, {opacity : 1})
                if (is_in_split){
                    animate(yadro_track_text, {scale : 0});
                    animate(skala_track_text, {scale : 0});
                    animate(kaspersky_1_track_text, {scale : 0});
                    animate(kaspersky_2_track_text, {scale : 0});
                    animate(basis_track_text_left, {scale : 0});
                    animate(basis_track_text_right, {scale : 0});
                    animate(skala_track_text_left, {scale : 0});
                    animate(skala_track_text_right, {scale : 0});
                    animate(kaspersky_track_next_button, {scale : 0});
                    animate(home_button, {opacity: 0})
                    is_in_split = false
                } else { 
                    animate(bg_video, {opacity: 0});
                    for (let j=0; j<track_gifs.length; j++){
                        if (current_track != track_gifs[j]){
                            animate(track_gifs[j], {scale: 1})
                        } else {
                            animate(track_gifs[j], { scale: 1, x: 0, y: 0})
                        }
                    }
                    animate(back_button, {opacity: 0})
                    animate(vendors_button, {scale: 1});
                    hide_track_buttons()
                    hide_track_texts()
                    show_tracks()
                }
                return
            }

            if (current_partner != null){
                hide_about()
                show_partners_buttons()
            } else {
                animate(back_button, {opacity: 0})
                hide_partners_buttons()
                show_tracks()
                hide_about()
            }

        }



        let vendors_button = document.getElementById('track_vendors_button')
        vendors_button.onclick = () => {
            current_track = null
            hide_tracks()
            show_partners_buttons()
        }


        const partner_scala = document.getElementById("partner_skala")
        const partner_kaspersky = document.getElementById("partner_kaspersky")
        const partner_basis = document.getElementById("partner_basis")
        const partner_yadro = document.getElementById("partner_yadro")
        const partnerButtons = [
            partner_scala,
            partner_kaspersky,
            partner_basis,
            partner_yadro
        ]
        const vendors_graphics = document.getElementById('vendors_graphics')
        const vendors_text = document.getElementById('vendors_text')

        for (let i = 0; i < partnerButtons.length; i++) {
            let partnerButton = partnerButtons[i]
            partnerButton.onclick = (e) => {
                hide_partners_buttons()
                animate(home_button, {opacity : 1})
                animate(back_button, {opacity: 1})
                show_about(e.target.parentElement)
            }
        }

        function hide_partners_buttons(){
            for (let i = 0; i < partnerButtons.length; i++) {
                let partnerButton = partnerButtons[i]
                animate(partnerButton, {scale : 0}, {delay: i/10})
            }
            animate(vendors_text, {scale : 0})
            animate(home_button, {opacity : 0})
            animate(vendors_graphics, {scale : 0})
        }
        function show_partners_buttons(){
            for (let i = 0; i < partnerButtons.length; i++) {
                let partnerButton = partnerButtons[i]
                animate(partnerButton, {scale : 1}, {delay: i/10})
            }
            animate(vendors_graphics, {scale : 1})
            animate(vendors_text, {scale : 1})
            animate(back_button, {opacity : 1})
            animate(home_button, {opacity : 1})
        }
        hide_partners_buttons()



        const track_gif_continaer_1 = document.getElementById("track_gif_continaer_1")
        const track_gif_continaer_2 = document.getElementById("track_gif_continaer_2")
        const track_gif_continaer_3 = document.getElementById("track_gif_continaer_3")
        const track_gif_continaer_4 = document.getElementById("track_gif_continaer_4")
        const track_gif_continaer_5 = document.getElementById("track_gif_continaer_5")
        const track_gifs = [
            track_gif_continaer_1,
            track_gif_continaer_2,
            track_gif_continaer_3,
            track_gif_continaer_4,
            track_gif_continaer_5
        ]
        const tracks_server_image= document.getElementById('tracks_server_image')
        const tracks_texts_alpha = document.getElementById('tracks_texts_alpha')
        const bg_video = document.getElementById("bg_video")
        function hide_tracks(){
            for (let i=0; i<track_gifs.length; i++){
                animate(track_gifs[i], {scale : 0});
            }
            animate(vendors_button, {scale: 0});
            animate(tracks_server_image, {scale:0} )
            animate(tracks_texts_alpha, {opacity:0} )
            animate(bg_video, {opacity: 1});
        }

        function show_tracks(){
            for (let i=0; i<track_gifs.length; i++){
                animate(track_gifs[i], {scale : 1});
            }
            animate(vendors_button, {scale: 1});
            animate(tracks_server_image, {scale:1} )
            animate(tracks_texts_alpha, {opacity:1} )
            animate(bg_video, {opacity: 0});
        }

            animate(bg_video, {opacity: 0});
        let is_big = false;
        for (let i=0; i<track_gifs.length; i++){
            track_gifs[i].querySelector('.gif_button').onclick = (event) => {
                animate(bg_video, {opacity: 1});
                animate(vendors_button, {scale: 0});
                animate(back_button, {opacity: 1})
                animate(tracks_server_image, {scale:0} )
                animate(tracks_texts_alpha, {opacity:0} )
                let target_track_node = event.target.offsetParent
                target_track_node.position = datas[i].position
                current_track = target_track_node;
                for (let j=0; j<track_gifs.length; j++){
                    if (current_track != track_gifs[j]){
                        animate(track_gifs[j], {scale: 0})
                    } else {
                        animate_track(current_track, datas[j]);
                    }
                }
            }
        }
    about_watch_button.onclick =  () => {
        console.log(about_video)
        animate(about_video, {scale : 2.5, x : -525, y: 75})
        is_video = true;
    }

    // document.oncontextmenu = document.body.oncontextmenu = function() {return false;}

    }, [])

    return (
        <div></div>
    )
}
