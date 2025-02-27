import { NavLink } from "react-router-dom";
import logoImg from "/shared/logo.svg";
import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="header-logo">
        <img className="logo-img" src={logoImg} alt="Logo" />
        <div className="horizontal-line"></div>
      </div>
      <nav>
        <ul className="main-nav text-preset-8">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : undefined)}
            >
              00 Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/destination"
              className={({ isActive }) => (isActive ? "active" : undefined)}
            >
              01 Destination
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/crew"
              className={({ isActive }) => (isActive ? "active" : undefined)}
            >
              02 Crew
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/technology"
              className={({ isActive }) => (isActive ? "active" : undefined)}
            >
              03 Technology
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
