import React, { useState } from "react";
import "./Navbar.css";
import logo from "../assets/logo.svg"


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  // Close menu when a link is clicked (on mobile)
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <a href="#accueil" className="logo">
          <img src={logo} alt="Accueil" />
        </a>

        {/* Hamburger button (visible on small screens) */}
        <button
          className={`nav-toggle ${isOpen ? "open" : ""}`}
          onClick={toggleMenu}
          aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={isOpen}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        {/* Navigation Links */}
        <nav className={`nav-links ${isOpen ? "active" : ""}`}>
          <ul>
            <li>
              <a href="#accueil" onClick={handleLinkClick}>
                Accueil
              </a>
            </li>
            <li>
              <a href="#about" onClick={handleLinkClick}>
                À Propos
              </a>
            </li>
            <li>
              <a href="#services" onClick={handleLinkClick}>
                Services
              </a>
            </li>
            <li>
              <a href="#valeurs" onClick={handleLinkClick}>
                Valeurs
              </a>
            </li>
            <li>
              <a href="#missions" onClick={handleLinkClick}>
                Missions
              </a>
            </li>
            <li>
              <a href="#contact" onClick={handleLinkClick}>
                Contact
              </a>
            </li>
          </ul>
        </nav>

        {/* Contact Button */}
        <a href="#contact" className="btn-contact" onClick={handleLinkClick}>
          Contactez-nous
        </a>
      </div>
    </header>
  );
};

export default Navbar;
