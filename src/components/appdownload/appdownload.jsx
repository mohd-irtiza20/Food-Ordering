import React from 'react';
import './appdown.css';
import { assets } from '../../assets/assets';

const Appdownload = () => {
  return (
    <div className='app-download' id="app-download">
        <p>
            For Better Experience Dowmload <br/> Tomato App
        </p>
        <div className="app-download-platforms">
            <img src={assets.play_store} alt="" />
            <img src={assets.app_store} alt="" />
        </div>
    </div>
  )
}

export default Appdownload;