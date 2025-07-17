import { useState } from 'react'
import ReactDOM from "react-dom/client";
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { Menubar } from 'primereact/menubar';
import Logo from '../assets/logo.png'

function Navbar() {
  const pageTitles = {
    '/app/about': 'About Me',
    '/app/work': 'My Work',
    '/app/contact': 'Contact',
  };
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;
  const pageTitle = pageTitles[currentPath] || " ";

  return (
      <div className="navbar">
        <span style={{ display: 'flex', alignItems: 'center' }}>
          <img className="logoButton" src={Logo} alt="logo" height="50" onClick={() => navigate('/')} />
          <span id="pageTitle" style={{ marginLeft:"1rem", fontSize: '2rem', fontFamily: 'Bropella' }}>{pageTitle}</span>
        </span>
        <span>
          <span className="options" onClick={() => {navigate('/')}}>Home</span>
          <span className="options" onClick={() => {navigate('/app/about')}}>About Me</span>
          <span className="options" onClick={() => {navigate('/app/work')}}>My Work</span>
          <span className="options" onClick={() => {navigate('/app/contact')}}>Contact</span>
        </span>
      </div>
  )
}

export default Navbar

{/*<Menubar model={items} start={start} pt={{ menu: { style:{marginLeft:'60%'} } }} />*/}