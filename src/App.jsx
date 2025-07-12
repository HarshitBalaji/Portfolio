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
import Home from './Pages/Home';  

function App() {
  return (
    <>
      <div className="content">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Display />}>
              <Route index element={<Home />} />
              <Route path="about" element={<CV />} />
              <Route path="projects" element={<Projects />} />
              <Route path="contact" element={<Contact />} />
              <Route path="*" element={<Home />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
      <footer>
        <p>© 2023 My Portfolio</p>
      </footer>
    </>
  )
}

export default App
