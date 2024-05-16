import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Background from './blocks/Background';
import './blocks/Background.css'
import MainButton from './blocks/MainButton';
import './blocks/MainButton.css'
import AboutCod from './blocks/AboutCod';
import './blocks/AboutCod.css'


import './blocks/Tracks.css'

import PartnersMenu from './blocks/Partners'
import './blocks/Partners.css'

import TracksMenu from './blocks/Tracks'
import './blocks/Tracks.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Background></Background>
    <MainButton></MainButton>
    <AboutCod></AboutCod>
    <PartnersMenu></PartnersMenu>
  </>
);


//<TracksMenu></TracksMenu>
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
