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

        <div className="logo-carousel">
          <div className="logo-track">
            <img src="/logos/britannia.png" alt="Britannia" />
            <img src="/logos/lorealparis.jpg" alt="L’Oréal Paris" />
            <img src="/logos/unilever.png" alt="Unilever" />
            <img src="/logos/colors.svg" alt="Colors HD" />
            <img src="/logos/cavinkare.jpg" alt="CavinKare" />
            <img src="/logos/nivea.png" alt="Nivea" />
            <img src="/logos/ub.svg" alt="United Breweries Limited" />
            <img src="/logos/garnier.jpg" alt="Garnier" />
            <img src="/logos/chateau.png" alt="Chateau Indage" />
            <img src="/logos/apb.png" alt="Asia Pacific Breweries Singapore" />
            
            <img src="/logos/britannia.png" alt="Britannia" />
            <img src="/logos/lorealparis.jpg" alt="L’Oréal Paris" />
            <img src="/logos/unilever.png" alt="Unilever" />
            <img src="/logos/colors.svg" alt="Colors HD" />
            <img src="/logos/cavinkare.jpg" alt="CavinKare" />
            <img src="/logos/nivea.png" alt="Nivea" />
            <img src="/logos/ub.svg" alt="United Breweries Limited" />
            <img src="/logos/garnier.jpg" alt="Garnier" />
            <img src="/logos/chateau.png" alt="Chateau Indage" />
            <img src="/logos/apb.png" alt="Asia Pacific Breweries Singapore" />
          </div>
        </div>
        <h4 className="clients-title">Brands That Trust Kaizen</h4>
      </div>
    </section>
  );
}