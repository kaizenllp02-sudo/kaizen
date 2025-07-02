import React from 'react';
import '../../styles/navbar.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function Navbar() {
  return (
    <nav className="kaizen-navbar">
      <section className="kaizen-container">
        <div className="kaizen-logo">
          <i className="fa-solid fa-shop"></i>
        </div>

        <ul className="kaizen-menu">
          <li className="kaizen-menu-list">
            <a href="" className="kaizen-menu-link">Home</a>
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
            <a href="/contact-us" className="kaizen-menu-link">Contact Us</a>
          </li>
        </ul>
      </section>
    </nav>
  );
}