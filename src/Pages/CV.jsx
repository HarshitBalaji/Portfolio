// About page shell with a sidebar for nested sections.
import { NavLink, Outlet } from "react-router-dom";
import '../styles/CV_stylesheet.css';
import { usePortfolio } from "../context/usePortfolio";

function CV() {
  const { content } = usePortfolio();

  return (
    <section id="cv">
      <aside id="cv-navigator">
        {/* NavLink automatically applies active state styling for the current sub-route. */}
        {content.cvNav.map((section) => (
          <NavLink
            key={section.path}
            to={section.path}
            end={section.path === '/app/about'}
            className={({ isActive }) => `sidebar ${isActive ? 'is-active' : ''}`}
          >
            {section.label}
          </NavLink>
        ))}
      </aside>

      <div className="cv-panel">
        {/* Nested about content is rendered here. */}
        <Outlet />
      </div>
    </section>
  )
}

export default CV
