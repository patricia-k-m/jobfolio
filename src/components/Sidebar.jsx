import { NavLink } from 'react-router-dom';

function Sidebar() {
  return (
    <nav className="sidebar-nav" aria-label="Main navigation">
      <ul className="nav-list">
        <li>
          <NavLink to="/" className="nav-link">
            🏠 <span className="nav-label">Home</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/saved" className="nav-link">
            💾 <span className="nav-label">Saved</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/job/123" className="nav-link">
            📄 <span className="nav-label">Job Details</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Sidebar;
