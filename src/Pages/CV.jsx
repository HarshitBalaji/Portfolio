import { useState } from 'react'
import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {Outlet} from "react-router-dom";
import '../styles/CV_stylesheet.css';

function CV() {

  const navigate = useNavigate();
  return (
    <div id="cv">
      <div id="cv-navigator">
          <div className="sidebar" onClick={() => {navigate('/app/about')}}>The Engineer</div>
          <div className="sidebar" onClick={() => {navigate('/app/about/experience')}}>On the Job</div>
          <div className="sidebar" onClick={() => {navigate('/app/about/education')}}>Education</div>
          <div className="sidebar" onClick={() => {navigate('/app/about/skills')}}>Tech Stack</div>
      </div>
      <Outlet />
    </div>
  )
}

export default CV
