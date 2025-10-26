import { useState } from 'react'
import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProfilePicture from '../../assets/profilepic.jpg';

function CV_Intro() {

  return (
    <div id="cv-content">
      <img src={ProfilePicture} alt="Profile" height="500" style={{borderRadius: "15px"}} />
      <div style={{ marginLeft: '20px' }}>
        <p style={{ textAlign: 'justify' }}>
          Hello! I'm <b>Sai Harshit Balaji</b>, a software engineer passionate about building efficient, scalable, and meaningful applications that bridge the gap between software and systems. With hands-on experience in <b>C#, FastAPI, ReactJS, SQL Server, and Azure</b>, I enjoy transforming complex ideas into practical solutions that improve real-world workflows. My journey in tech has been fueled by curiosity and the satisfaction of crafting reliable tools that make a difference.
        </p>
        <p style={{ marginTop: '40px', textAlign: 'justify' }}>
         Over the past few years, I’ve worked on projects ranging from <b>device diagnostics automation</b> to <b>robotic system control</b>, gaining experience across backend development, automation testing, and robotics R&D. I’m currently expanding my skills through the <b>Microsoft Full Stack Developer certification</b> and exploring ways to integrate cloud and intelligent automation into my future projects. I’m always open to collaborating on innovative software or robotics initiatives.
        </p>
      </div>
    </div>
  )
}

export default CV_Intro;
