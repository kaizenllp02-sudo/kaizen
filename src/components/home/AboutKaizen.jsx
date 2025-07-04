import React from 'react';
import '../../styles/aboutkaizen.css';

export default function AboutKaizen() {
  return (
    <section className="about-kaizen">
      <div className="about-container">
        <h2 className="about-heading">Who We Are</h2>
        <p className="about-description">
          Kaizen is a research-driven marketing agency that blends strategy, creativity, and flawless execution.  
We specialize in turning customer insights into campaigns that drive awareness, trial, and loyalty.
        </p>
        
        <div className="about-keywords">
          {[
            { text: "Strategic Planning Brand", color: "#81c784" },
            { text: "Mall Promotion", color: "#64b5f6" },
            { text: "Sampling Campaign", color: "#ffb74d" },
            { text: "Market Research", color: "#ba68c8" },
            { text: "In-store Promotions", color: "#4db6ac" },
            { text: "Digital Marketing", color: "#ffd54f" },
            { text: "POS Materials", color: "#f06292" },
            { text: "Trade Shows", color: "#7986cb" },
            { text: "Event Sponsorships & Collaborations", color: "#90a4ae" }
          ].map((item, idx) => (
            <span
              key={idx}
              className="keyword-tag"
              style={{
                borderColor: item.color,
                '--hover-bg': item.color
              }}
            >
              {item.text}
            </span>
          ))}
        </div>
        
        <button className="about-cta" onClick={() => window.location.href = "/about"}>
          Learn More About Us
        </button>
      </div>
    </section>
  );
}