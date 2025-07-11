import { useState } from 'react'
import ReactDOM from "react-dom/client";
import { useNavigate } from 'react-router-dom';
import { Menubar } from 'primereact/menubar';
import Logo from '../assets/logo.png'

function Navbar() {
  const [count, setCount] = useState(0)
  const navigate = useNavigate();
  const items = [
            { label: 'About', icon: 'pi pi-fw pi-plus', command: () => navigate('/') },
            { label: 'CV', icon: 'pi pi-fw pi-history', command: () => navigate('/about') },
            { label: 'Works', icon: 'pi pi-fw pi-cloud-upload', command: () => navigate('/projects') },
            { label: 'Contact', icon: 'pi pi-fw pi-users', command: () => navigate('/contact') },
  ]
  return (
      <Menubar model={items} style={{ width: '100%' }}/>
  )
}

export default Navbar
