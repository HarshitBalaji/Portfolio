import { useState } from 'react'
import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
import './Home.css'
import Logo from './assets/logo.png'

function Navigate() {
  
  return (
    <button>
      Book a meeting
    </button>
  );
}


function Home() {

  return (
    <div id = "home">
      <div className="flex align-items-center">
            <img src={Logo} alt="logo" height="55" />
      </div>
      <p>Hi, I'm</p>
      <h1 id="Name">Sai Harshit B</h1>
      <p id="profession">A Full Stack Developer</p>
      <Navigate />
      <p id="bottomline">sai.harshitbalaji@gmail.com</p>
    </div>
  )
}

export default Home
