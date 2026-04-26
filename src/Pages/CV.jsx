// About page shell with a sidebar for nested sections.
import { NavLink, Outlet } from "react-router-dom";
import '../styles/CV_stylesheet.css';

// Sidebar configuration for the about section.
const sections = [
  { label: 'The Engineer', path: '/app/about' },
  { label: 'On the Job', path: '/app/about/experience' },
  { label: 'Education', path: '/app/about/education' },
  { label: 'Tech Stack', path: '/app/about/skills' },
];

function CV() {
  return (
    <section id="cv">
      <aside id="cv-navigator">
        {/* NavLink automatically applies active state styling for the current sub-route. */}
        {sections.map((section) => (
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
