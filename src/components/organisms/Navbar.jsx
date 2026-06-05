import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../../styles/organisms/navbar.css';

function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__container">

        <ul className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`}>
          <li><NavLink to="/" end onClick={() => setMenuOpen(false)}>Inicio</NavLink></li>
          <li><NavLink to="/projects" onClick={() => setMenuOpen(false)}>Proyectos</NavLink></li>
        </ul>

        <div className="navbar__actions">
          <NavLink to="/contact" className="navbar__cta">Contacto</NavLink>
          <button
            className={`navbar__burger ${menuOpen ? 'navbar__burger--open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Abrir menú"
          >
            <span /><span /><span />
          </button>
        </div>

      </div>
    </nav>
  );
}

export default NavBar;