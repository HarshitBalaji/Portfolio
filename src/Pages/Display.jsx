// Layout shell used by all inner pages under /app.
import Navbar from '../components/Navbar';
import { Outlet } from "react-router-dom";

function Display() {
  return (
    <div className="site-shell">
      <header className="site-header">
        <Navbar />
      </header>
      {/* Outlet renders the active nested page below the shared header. */}
      <main className="site-content">
        <Outlet />
      </main>
    </div>
  )
}

export default Display
