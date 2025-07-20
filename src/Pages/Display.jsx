import Navbar from '../components/Navbar';
import {Outlet} from "react-router-dom";

function Display() {
  return (
    <>
    <header>
      <Navbar />
    </header>
    <div className='content'>
      <Outlet />
    </div>
    </>
  )
}

export default Display
