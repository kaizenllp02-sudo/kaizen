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
          From doorsteps to digital screens, Kaizen delivers seamless online + offline brand activations that generate up to <span style={{ fontWeight: 'bold', color: '#e53e3e' }}>3X higher ROI</span> compared to traditional campaigns.
          We turn research into action and consumer attention into real results.
        </p>
        <button className="hero-cta" aria-label="Get in touch with Kaizen">Get in Touch</button>

        {/* <div className="scroll-down-indicator">
          <i className="fa-solid fa-angle-down"></i>
        </div> */}

        <div className="logo-carousel">
          <div className="logo-track rtl">
            <img src="/logos/emami.png" alt="Emami" width="120" height="60" loading="lazy" decoding="async" />
            <img src="/logos/godrej.png" alt="Godrej" width="120" height="60" loading="lazy" decoding="async" />
            <img src="/logos/itc.png" alt="ITC" width="120" height="60" loading="lazy" decoding="async" />
            <img src="/logos/motherdairy.png" alt="Mother Dairy" width="120" height="60" loading="lazy" decoding="async" />
            <img src="/logos/ndtvimagine.png" alt="NDTV Imagine" width="120" height="60" loading="lazy" decoding="async" />
            <img src="/logos/parleagro.png" alt="Parle Agro" width="120" height="60" loading="lazy" decoding="async" />
            <img src="/logos/sonytv.png" alt="Sony TV" width="120" height="60" loading="lazy" decoding="async" />
            <img src="/logos/startv.png" alt="Star TV" width="120" height="60" loading="lazy" decoding="async" />
            <img src="/logos/wipro.jpg" alt="Wipro" width="120" height="60" loading="lazy" decoding="async" />
            <img src="/logos/zeetv.png" alt="Zee TV" width="120" height="60" loading="lazy" decoding="async" />

            <img src="/logos/emami.png" alt="Emami" width="120" height="60" loading="lazy" decoding="async" />
            <img src="/logos/godrej.png" alt="Godrej" width="120" height="60" loading="lazy" decoding="async" />
            <img src="/logos/itc.png" alt="ITC" width="120" height="60" loading="lazy" decoding="async" />
            <img src="/logos/motherdairy.png" alt="Mother Dairy" width="120" height="60" loading="lazy" decoding="async" />
            <img src="/logos/ndtvimagine.png" alt="NDTV Imagine" width="120" height="60" loading="lazy" decoding="async" />
            <img src="/logos/parleagro.png" alt="Parle Agro" width="120" height="60" loading="lazy" decoding="async" />
            <img src="/logos/sonytv.png" alt="Sony TV" width="120" height="60" loading="lazy" decoding="async" />
            <img src="/logos/startv.png" alt="Star TV" width="120" height="60" loading="lazy" decoding="async" />
            <img src="/logos/wipro.jpg" alt="Wipro" width="120" height="60" loading="lazy" decoding="async" />
            <img src="/logos/zeetv.png" alt="Zee TV" width="120" height="60" loading="lazy" decoding="async" />
          </div>
        </div>
        <div className="logo-carousel">
          <div className="logo-track ltr">
            <img src="/logos/britannia.png" alt="Britannia" width="120" height="60" loading="lazy" decoding="async" />
            <img src="/logos/lorealparis.jpg" alt="L’Oréal Paris" width="120" height="60" loading="lazy" decoding="async" />
            <img src="/logos/unilever.png" alt="Unilever" width="120" height="60" loading="lazy" decoding="async" />
            <img src="/logos/colors.svg" alt="Colors HD" width="120" height="60" loading="lazy" decoding="async" />
            <img src="/logos/cavinkare.jpg" alt="CavinKare" width="120" height="60" loading="lazy" decoding="async" />
            <img src="/logos/nivea.png" alt="Nivea" width="120" height="60" loading="lazy" decoding="async" />
            <img src="/logos/ub.svg" alt="United Breweries Limited" width="120" height="60" loading="lazy" decoding="async" />
            <img src="/logos/garnier.jpg" alt="Garnier" width="120" height="60" loading="lazy" decoding="async" />
            <img src="/logos/chateau.png" alt="Chateau Indage" width="120" height="60" loading="lazy" decoding="async" />
            <img src="/logos/apb.png" alt="Asia Pacific Breweries Singapore" width="120" height="60" loading="lazy" decoding="async" />

            <img src="/logos/britannia.png" alt="Britannia" width="120" height="60" loading="lazy" decoding="async" />
            <img src="/logos/lorealparis.jpg" alt="L’Oréal Paris" width="120" height="60" loading="lazy" decoding="async" />
            <img src="/logos/unilever.png" alt="Unilever" width="120" height="60" loading="lazy" decoding="async" />
            <img src="/logos/colors.svg" alt="Colors HD" width="120" height="60" loading="lazy" decoding="async" />
            <img src="/logos/cavinkare.jpg" alt="CavinKare" width="120" height="60" loading="lazy" decoding="async" />
            <img src="/logos/nivea.png" alt="Nivea" width="120" height="60" loading="lazy" decoding="async" />
            <img src="/logos/ub.svg" alt="United Breweries Limited" width="120" height="60" loading="lazy" decoding="async" />
            <img src="/logos/garnier.jpg" alt="Garnier" width="120" height="60" loading="lazy" decoding="async" />
            <img src="/logos/chateau.png" alt="Chateau Indage" width="120" height="60" loading="lazy" decoding="async" />
            <img src="/logos/apb.png" alt="Asia Pacific Breweries Singapore" width="120" height="60" loading="lazy" decoding="async" />
          </div>
        </div>
        <div className="logo-carousel">
          <div className="logo-track rtl">
            <img src="/logos/camlin.png" alt="Camlin" width="120" height="60" loading="lazy" decoding="async" />
            <img src="/logos/castrol.png" alt="Castrol" width="120" height="60" loading="lazy" decoding="async" />
            <img src="/logos/dell.png" alt="Dell" width="120" height="60" loading="lazy" decoding="async" />
            <img src="/logos/dkt.png" alt="DKT" width="120" height="60" loading="lazy" decoding="async" />
            <img src="/logos/haier.png" alt="Haier" width="120" height="60" loading="lazy" decoding="async" />
            <img src="/logos/lg.png" alt="LG" width="120" height="60" loading="lazy" decoding="async" />
            <img src="/logos/raymonds.png" alt="Raymonds" width="120" height="60" loading="lazy" decoding="async" />
            <img src="/logos/relaince.png" alt="Relaince" width="120" height="60" loading="lazy" decoding="async" />
            <img src="/logos/sahara.png" alt="Sahara" width="120" height="60" loading="lazy" decoding="async" />
            <img src="/logos/samsung.png" alt="Samsung" width="120" height="60" loading="lazy" decoding="async" />

            <img src="/logos/camlin.png" alt="Camlin" width="120" height="60" loading="lazy" decoding="async" />
            <img src="/logos/castrol.png" alt="Castrol" width="120" height="60" loading="lazy" decoding="async" />
            <img src="/logos/dell.png" alt="Dell" width="120" height="60" loading="lazy" decoding="async" />
            <img src="/logos/dkt.png" alt="DKT" width="120" height="60" loading="lazy" decoding="async" />
            <img src="/logos/haier.png" alt="Haier" width="120" height="60" loading="lazy" decoding="async" />
            <img src="/logos/lg.png" alt="LG" width="120" height="60" loading="lazy" decoding="async" />
            <img src="/logos/raymonds.png" alt="Raymonds" width="120" height="60" loading="lazy" decoding="async" />
            <img src="/logos/relaince.png" alt="Relaince" width="120" height="60" loading="lazy" decoding="async" />
            <img src="/logos/sahara.png" alt="Sahara" width="120" height="60" loading="lazy" decoding="async" />
            <img src="/logos/samsung.png" alt="Samsung" width="120" height="60" loading="lazy" decoding="async" />
          </div>
        </div>
        <h4 className="clients-title">Brands That Trust Kaizen</h4>
      </div>
    </section>
  );
}