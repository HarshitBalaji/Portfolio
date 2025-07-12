import { useState } from 'react'
import ReactDOM from "react-dom/client";
import { useNavigate } from 'react-router-dom';
import { Menubar } from 'primereact/menubar';
import Logo from '../assets/logo.png'

function Navbar() {
  const [count, setCount] = useState(0)
  const navigate = useNavigate();
  const start = (
    <div className="flex align-items-center" style={{ marginRight: '0%' }}>
      <img src={Logo} alt="logo" height="45" className="mr-2" />
      <span style={{ fontSize: '1.5rem', fontWeight: 'bold', height: '100%',display: 'inline-block', lineHeight: '1' }}>Sai Harshit B</span>
    </div>
  );
  const items = [
            { label: 'About', icon: 'pi pi-fw pi-plus', command: () => navigate('/') },
            { label: 'CV', icon: 'pi pi-fw pi-history', command: () => navigate('/about') },
            { label: 'Works', icon: 'pi pi-fw pi-cloud-upload', command: () => navigate('/projects') },
            { label: 'Contact', icon: 'pi pi-fw pi-users', command: () => navigate('/contact') },
  ]
  return (
      <Menubar model={items} start={start} pt={{ menu: { style:{marginLeft:'60%'} } }} />
  )
}

export default Navbar
