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
    <span data-cal-namespace="30min" data-cal-link="sai-harshit-b/30min" data-cal-config='{"layout":"month_view"}'>Schedule a Call!</span>
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
      <span onClick={() => {navigate('/app/about')}}>More About Me!</span>
      <span onClick={() => {downloadCV()}}>Download my CV</span>
      <span onClick={() => {navigate('/app/work')}}>View my Work</span>
      <Cal />
    </p>
    
  </div>
  )
}


function Home() {

  return (
    <div id = "home">
      <div className="flex align-items-center">
            <img src={Logo} alt="logo" height="65" />
      </div>
      <h3>Hello, I'm</h3>
      <h1 id="Name">Sai Harshit B</h1>
      <p>Building Platforms | Automating Workflows | Engineering Robotic Systems — Together.</p>
      <CTA />
      <p id="bottomline">sai.harshitbalaji@gmail.com</p>
    </div>
  )
}

export default Home
