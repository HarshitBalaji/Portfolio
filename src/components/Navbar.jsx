import { useState } from 'react'
import ReactDOM from "react-dom/client";
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { Menubar } from 'primereact/menubar';
import Logo from '../assets/logo.png'

function Navbar() {
  const pageTitles = {
  '/app/about': 'The Engineer',
  '/app/about/intro': 'The Engineer',
  '/app/about/experience': 'Professional Experience',
  '/app/about/education': 'Education',
  '/app/about/skills': 'Tech Stack',
  '/app/work': 'Projects',
  '/app/contact': 'Get in Touch',
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
          <span className="options" onClick={() => {navigate('/app/about')}}>The Engineer</span>
          <span className="options" onClick={() => {navigate('/app/work')}}>Projects</span>
          <span className="options" onClick={() => {navigate('/app/contact')}}>Get in touch</span>
        </span>
      </div>
  )
}

export default Navbar

{/*<Menubar model={items} start={start} pt={{ menu: { style:{marginLeft:'60%'} } }} />*/}