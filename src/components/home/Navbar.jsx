import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import '../../styles/Navbar.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import ReactGA from 'react-ga4';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

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
    if (isMenuOpen) setIsMenuOpen(false);
  };

  const scrollToServices = (e) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      // Use sessionStorage to signal scroll after navigation
      sessionStorage.setItem('scrollToServices', 'true');
      window.location.href = '/'; // Navigate to home WITHOUT hash
      return;
    }
    scrollToServicesSection();
    if (isMenuOpen) setIsMenuOpen(false);
  };

  // Helper to scroll to services section
  const scrollToServicesSection = () => {
    const el = document.querySelector('.services-offered, #services, [class*="services"]');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // On mount, check if we need to scroll to services (after navigation)
  React.useEffect(() => {
    if (location.pathname === '/' && sessionStorage.getItem('scrollToServices')) {
      setTimeout(() => {
        scrollToServicesSection();
        sessionStorage.removeItem('scrollToServices');
      }, 200);
    }
  }, [location]);

  return (
    <>
      <nav className={`kaizen-navbar ${isMenuOpen ? 'mobile-expanded' : ''}`}>
        <section className="kaizen-container">
          <a href="/" className="kaizen-logo" aria-label="Kaizen Home">
            <img src="/kaizen.png" alt="Kaizen Logo" className="kaizen-logo-img" />
            <div className="kaizen-logo-text">
              <div className="kaizen-brand-name">KAIZEN</div>
              <div className="kaizen-brand-tagline">Events & Promotion</div>
            </div>
          </a>

          {/* Hamburger Icon */}
          <button className="kaizen-hamburger" onClick={() => {
            ReactGA.event({
              category: 'Button',
              action: 'Click',
              label: 'Navbar Hamburger'
            });
            toggleMenu();
          }} aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}>
            <i className={`fa-solid ${isMenuOpen ? 'fa-xmark' : 'fa-bars'}`} aria-hidden="true"></i>
          </button>

          {/* Desktop Menu */}
          <ul className="kaizen-menu">
            {/* <li className="kaizen-menu-list">
              <a href="/" className="kaizen-menu-link">Home</a>
            </li> */}
            <li className="kaizen-menu-list">
              <a href="#services" className="kaizen-menu-link" onClick={e => {
                ReactGA.event({
                  category: 'Button',
                  action: 'Click',
                  label: 'Navbar Services Link'
                });
                scrollToServices(e);
              }}>Services</a>
            </li>
            <li className="kaizen-menu-list">
              <a href="/about" className="kaizen-menu-link">About</a>
            </li>
            <li className="kaizen-menu-list">
              <a href="/case-studies" className="kaizen-menu-link">Case Studies</a>
            </li>
            <li className="kaizen-menu-list">
              <a href="/blog" className="kaizen-menu-link">Blog</a>
            </li>
            <li className="kaizen-menu-list">
              <a href="#contact" className="kaizen-menu-link" onClick={e => {
                ReactGA.event({
                  category: 'Button',
                  action: 'Click',
                  label: 'Navbar Contact Link'
                });
                scrollToContactForm(e);
              }}>Contact Us</a>
            </li>
          </ul>
        </section>
      </nav>

      {/* Fullscreen Mobile Menu */}
      {isMenuOpen && (
        <div className="kaizen-fullscreen-menu">
          <button className="kaizen-close" onClick={() => {
            ReactGA.event({
              category: 'Button',
              action: 'Click',
              label: 'Navbar Close Menu'
            });
            toggleMenu();
          }} aria-label="Close menu">
            <i className="fa-solid fa-xmark" aria-hidden="true"></i>
          </button>
          <ul className="kaizen-fullscreen-list">
            {/* <li className="kaizen-menu-list">
              <a href="/" className="kaizen-menu-link" onClick={toggleMenu}>Home</a>
            </li> */}
            <li className="kaizen-menu-list">
              <a href="#services" className="kaizen-menu-link" onClick={e => {
                ReactGA.event({
                  category: 'Button',
                  action: 'Click',
                  label: 'Navbar Services Link (Mobile)'
                });
                scrollToServices(e);
              }}>Services</a>
            </li>
            <li className="kaizen-menu-list">
              <a href="/about" className="kaizen-menu-link" onClick={toggleMenu}>About</a>
            </li>
            <li className="kaizen-menu-list">
              <a href="/case-studies" className="kaizen-menu-link" onClick={toggleMenu}>Case Studies</a>
            </li>
            <li className="kaizen-menu-list">
              <a href="/blog" className="kaizen-menu-link" onClick={toggleMenu}>Blog</a>
            </li>
            <li className="kaizen-menu-list">
              <a href="#contact" className="kaizen-menu-link" onClick={e => {
                ReactGA.event({
                  category: 'Button',
                  action: 'Click',
                  label: 'Navbar Contact Link (Mobile)'
                });
                scrollToContactForm(e);
              }}>Contact Us</a>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}