import React from 'react';
import '../../styles/herosection.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function HeroSection() {
  return (
    <section className="kaizen-hero">
      <div className="hero-content">
        <h1 className="hero-title">
          Marketing that moves <br />
          your business forward.
        </h1>
        <p className="hero-subtitle">
          From digital campaigns to real-world events — we do it all. <br />
          Let’s create something amazing together.
        </p>
        <button className="hero-cta">Get in Touch</button>

        <div className="scroll-down-indicator">
          <i className="fa-solid fa-angle-down"></i>
        </div>
      </div>
    </section>
  );
}