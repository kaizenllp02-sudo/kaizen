import React, { useState } from 'react';
import '../../styles/Navbar.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollToContactForm = (e) => {
    e.preventDefault();
    const contactForm = document.querySelector('.contact-form-section, .contact-form, [class*="contact"]');
    if (contactForm) {
      contactForm.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
    // Close mobile menu if open
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      <nav className={`kaizen-navbar ${isMenuOpen ? 'mobile-expanded' : ''}`}>
        <section className="kaizen-container">
          <div className="kaizen-logo">
            <i className="fa-solid fa-shop"></i>
          </div>

          {/* Hamburger Icon */}
          <div className="kaizen-hamburger" onClick={toggleMenu}>
            <i className={`fa-solid ${isMenuOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
          </div>

          {/* Desktop Menu */}
          <ul className="kaizen-menu">
            <li className="kaizen-menu-list">
              <a href="/" className="kaizen-menu-link">Home</a>
            </li>
            <li className="kaizen-menu-list">
              <a href="/about" className="kaizen-menu-link">About</a>
            </li>
            <li className="kaizen-menu-list">
              <a href="/career" className="kaizen-menu-link">Career</a>
            </li>
            <li className="kaizen-menu-list">
              <a href="/blog" className="kaizen-menu-link">Blog</a>
            </li>
            <li className="kaizen-menu-list">
              <a href="#contact" className="kaizen-menu-link" onClick={scrollToContactForm}>Contact Us</a>
            </li>
          </ul>
        </section>
      </nav>

      {/* Fullscreen Mobile Menu */}
      {isMenuOpen && (
        <div className="kaizen-fullscreen-menu">
          <div className="kaizen-close" onClick={toggleMenu}>
            <i className="fa-solid fa-xmark"></i>
          </div>
          <ul className="kaizen-fullscreen-list">
            <li className="kaizen-menu-list">
              <a href="/" className="kaizen-menu-link" onClick={toggleMenu}>Home</a>
            </li>
            <li className="kaizen-menu-list">
              <a href="/about" className="kaizen-menu-link" onClick={toggleMenu}>About</a>
            </li>
            <li className="kaizen-menu-list">
              <a href="/career" className="kaizen-menu-link" onClick={toggleMenu}>Career</a>
            </li>
            <li className="kaizen-menu-list">
              <a href="/blog" className="kaizen-menu-link" onClick={toggleMenu}>Blog</a>
            </li>
            <li className="kaizen-menu-list">
              <a href="#contact" className="kaizen-menu-link" onClick={scrollToContactForm}>Contact Us</a>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}