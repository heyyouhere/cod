import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Background from './blocks/Background';
import './blocks/Background.css'


import './blocks/Tracks.css'

import PartnersMenu from './blocks/Partners'
import './blocks/Partners.css'

import TracksMenu from './blocks/Tracks'
import './blocks/Tracks.css'


import VendorScreen from './blocks/VendorScreen.js'
import './blocks/VendorScreen.css'


import {BackButton, HomeButton, TrackRightButton, TrackLeftButton} from './blocks/Buttons.js'
import './blocks/Buttons.css'


import Control from './blocks/Control.js'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Background></Background>
    <TracksMenu></TracksMenu>
    <PartnersMenu></PartnersMenu>
    <BackButton/>
    <HomeButton/>
    <Control/>
    <TrackLeftButton/>
    <TrackRightButton/>
    <VendorScreen></VendorScreen>

  </>
);

/*

*/

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
