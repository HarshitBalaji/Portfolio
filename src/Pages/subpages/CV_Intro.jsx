import { useState } from 'react'
import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProfilePicture from '../../assets/profilepic.jpg';

function CV_Intro() {

  return (
    <div id="cv-intro">
      <img src={ProfilePicture} alt="Profile" height="500" />
      <p style={{ marginLeft: '20px' }}>
        Hello! I'm a passionate software developer with a keen interest in building innovative solutions. My journey in tech has been driven by curiosity and a desire to create impactful applications. I enjoy tackling challenges and continuously learning new technologies to enhance my skills. Let's connect and explore opportunities to collaborate!
      </p>
    </div>
  )
}

export default CV_Intro;
