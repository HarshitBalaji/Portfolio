import { useState } from 'react'
import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import './Home.css'
import Logo from './assets/logo.png'

function Cal() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({"namespace":"30min"});
      cal("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
    })();
  }, [])
  return (
    <span className="options" data-cal-namespace="30min" data-cal-link="sai-harshit-b/30min" data-cal-config='{"layout":"month_view"}'>Start a Conversation</span>
  )
}

function downloadCV()
{
  const link = document.createElement('a');
  link.href = '/CV/Sai_Harshit_B_CV.pdf'; // Replace with actual CV URL
  link.download = 'Sai Harshit B - CV.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

function CTA() {
  const navigate = useNavigate();
  return (
  <div className="CTA">
    <p>Let's Build something together!</p>
    <p> 
      <span className="options" onClick={() => {navigate('/app/about')}}>About Me</span>
      <span className="options" onClick={() => {downloadCV()}}>Download my CV</span>
      <span className="options" onClick={() => {navigate('/app/work')}}>View my Work</span>
      <Cal />
    </p>
    <p className="options" onClick={() => {navigate('/app/contact')}}>Connect with Me!</p>
  </div>
  )
}


function Home() {

  return (
    <div id = "home">
      <div className="flex align-items-center">
            <img src={Logo} alt="logo" height="50" />
      </div>
      <h3 style={{ marginTop: '50px' }}>Hello, I'm</h3>
      <h1 id="Name">Sai Harshit B</h1>
      <p id="tagline">Building Platforms | Automating Workflows | Engineering Robotic Systems — Together.</p>
      <CTA />
      <p id="bottomline">sai.harshitbalaji@gmail.com</p>
    </div>
  )
}

export default Home
