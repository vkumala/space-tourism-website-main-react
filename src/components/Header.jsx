import { NavLink } from "react-router-dom";
import logoImg from "/shared/logo.svg";
import "./Header.css";
import { useEffect, useState } from "react";

export function NavLinks() {
  return (
    <>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "active" : undefined)}
      >
        <strong>00</strong> Home
      </NavLink>
      <NavLink
        to="/destination"
        className={({ isActive }) => (isActive ? "active" : undefined)}
      >
        <strong>01</strong> Destination
      </NavLink>
      <NavLink
        to="/crew"
        className={({ isActive }) => (isActive ? "active" : undefined)}
      >
        <strong>02</strong> Crew
      </NavLink>
      <NavLink
        to="/technology"
        className={({ isActive }) => (isActive ? "active" : undefined)}
      >
        <strong>03</strong> Technology
      </NavLink>
    </>
  );
}
export default function Header() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };

  return (
    <>
      <header className="navbar">
        <img className="logo" src={logoImg} alt="Logo" />
        <nav className="nav-links-desktop text-preset-8">
          <NavLinks />
        </nav>

        <ion-icon
          className="btn-mobile-nav"
          name="menu-outline"
          onClick={toggleSidebar}
        ></ion-icon>
      </header>

      {/* Sidebar for Mobile */}
      <div className={`sidebar ${sidebarOpen ? "open" : ""}`}>
        <ion-icon
          className="btn-mobile-nav"
          style={{ marginLeft: "auto", marginBottom: "2rem" }}
          name="close-outline"
          onClick={toggleSidebar}
        ></ion-icon>
        <nav className="nav-links-mobile text-preset-8">
          <NavLinks />
        </nav>
      </div>

      {/* Overlay */}
      {sidebarOpen && <div className="overlay" onClick={toggleSidebar} />}
    </>
  );
}
