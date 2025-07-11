import { useState } from 'react'
import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
import ReactDOM from "react-dom/client";
import Navbar from '../components/Navbar';
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

function Display() {
  return (
    <>
    <header>
      <Navbar />
    </header>
    <div className='w-full h-full'>
      <Outlet />
    </div>
    </>
  )
}

export default Display
