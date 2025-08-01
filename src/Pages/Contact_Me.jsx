import { useState } from 'react'
import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function ContactMe() {

  return (
    <div>
      <h1>Contact Page</h1>
      <p>If you have any questions, feel free to reach out!</p>
      <p>Email:
        <a href="mailto:sai.harshitbalaji@gmail.com">sai.harshitbalaji@gmail.com</a>
      </p>
    </div>
  )
}

export default ContactMe
