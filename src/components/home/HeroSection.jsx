import React from 'react';
import '../../styles/herosection.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function HeroSection() {
  return (
    <section className="kaizen-hero">
      <div className="hero-content">
        <h1 className="hero-title">
          Where Insight Meets Impact.<br />
          Integrated marketing solutions that move people—and numbers.
        </h1>
        <p className="hero-subtitle">
          From doorsteps to digital screens, Kaizen delivers seamless online + offline brand activations that generate up to 3X higher ROI compared to traditional campaigns.
          We turn research into action and consumer attention into real results.
        </p>
        <button className="hero-cta" aria-label="Get in touch with Kaizen">Get in Touch</button>

        {/* <div className="scroll-down-indicator">
          <i className="fa-solid fa-angle-down"></i>
        </div> */}

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