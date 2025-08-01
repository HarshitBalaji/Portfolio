import { useState } from 'react'
import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function CV_Education() {

  return (
    <div id="cv-education">
        <li>
          <strong>Bachelor of Science in Computer Science</strong>
          <p>XYZ University, 2020</p>
        </li>
        <li>
          <strong>Master of Science in Software Engineering</strong>
          <p>ABC University, 2022</p>
        </li>
        <li>
          <strong>Certification in Full Stack Development</strong>
          <p>Online Course, 2021</p>
        </li>
      
    </div>
  )
}

export default CV_Education;
