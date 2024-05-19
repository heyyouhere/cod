import { useEffect } from "react"
import { motion, useAnimate } from "framer-motion"
export default function TrackScreen() {
    const [scope, animate] = useAnimate()

   return (
   <>
       <div id='yadro_track_text' className="track_left_info"></div>
       <div id='yadro2_track_text' className="track_left_info"></div>
       <div id='skala_track_text' className="track_left_info"></div>
       <div id='kaspersky_1_track_text' className="track_left_info"></div>
       <div id='kaspersky_2_track_text' className="track_left_info"></div>
       <div id='basis_track_text_left'  className="track_full_info"></div>
       <div id='basis_track_text_right' className="track_full_info"></div>
       <div id='skala_track_text_left'  className="track_full_info"></div>
       <div id='skala_track_text_right' className="track_full_info"></div>
       <div id='kaspersky_track_next_button' className="kaspersky_track_next_button"></div>
       <div id='skala_left_button' className="track_left_button"></div>
       <div id='skala_right_button' className="track_right_button"></div>
       <div id='basis_left_button' className="track_left_button"></div>
       <div id='basis_right_button' className="track_right_button"></div>
       <div id='skala_x_basis_logo' className="tracks_logos"></div>
       <div id='yadro_logo' className="tracks_logos"></div>
       <div id='eps' className="tracks_logos"></div>
       <div id='virtualization' className="tracks_logos"></div>
       <div id='data_managment' className="tracks_logos"></div>
       <div id='skala_logo' className="tracks_logos"></div>
       <div id='skala2_logo' className="tracks_logos"></div>
   </>
)
}
