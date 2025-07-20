import { useState } from 'react'
import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'primereact/resources/themes/md-dark-indigo/theme.css'
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import Logo from './assets/logo.png'
import './App.css'
import Display from './Pages/Display';
import Projects from './Pages/Projects';
import CV from './Pages/CV';
import Contact from './Pages/Contact_Me';
import Home from './Home';  
import CV_Intro from './Pages/subpages/CV_Intro';
import CV_Experience from './Pages/subpages/CV_Experience';
import CV_Education from './Pages/subpages/CV_Education';
import CV_Skills from './Pages/subpages/CV_Skills';

function App() {
  return (
    <>
      <div className="app">
        <BrowserRouter>
          <Routes>
            <Route path= "/" element={<Home />}/>
            <Route path="/app" element={<Display />}>
              <Route index element={<Home />} />
              <Route path="about" element={<CV />}>
                <Route index element={<CV_Intro />} />
                <Route path="experience" element={<CV_Experience />} />
                <Route path="education" element={<CV_Education />} />
                <Route path="skills" element={<CV_Skills />} />
              </Route>
              <Route path="work" element={<Projects />} />
              <Route path="contact" element={<Contact />} />
            </Route>
            <Route path="*" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
