import { useState } from 'react'
import ReactDOM from "react-dom/client";
import { useNavigate } from 'react-router-dom';
import { Menubar } from 'primereact/menubar';
import Logo from '../assets/logo.png'

function Navbar() {
  const [count, setCount] = useState(0)
  const navigate = useNavigate();
  return (
      <div className="navbar">
        <span style={{ display: 'flex', alignItems: 'center' }}>
          <img className="logoButton" src={Logo} alt="logo" height="50" onClick={() => navigate('/')} />
          <span style={{ marginLeft:"1rem", fontSize: '2rem', fontFamily: 'Bropella' }}>Sai Harshit B</span>
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