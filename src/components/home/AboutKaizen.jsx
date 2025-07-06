import React from 'react';
import '../../styles/aboutkaizen.css';

export default function AboutKaizen() {
  return (
    <section className="about-kaizen">
      <div className="about-container">
        <h2 className="about-heading">Who We Are</h2>
        <p className="about-description">
          Kaizen is a research and marketing company inspired by the Japanese philosophy of continuous improvement. Our mission is to deliver better solutions every day for every client, driven by a deep understanding of consumers and real-time execution.
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

        <div className="about-leadership">
          <h3 className="about-leadership-heading">Leadership Team</h3>
          <div className="about-leadership-list">
            <div className="about-leader">
              <div className="about-leader-name">Kamlesh Shukla</div>
              <div className="about-leader-role">Founder &amp; Managing Director</div>
              <div className="about-leader-desc">Ex-Nielsen, 30+ yrs in Market Research &amp; Promotions</div>
            </div>
            <div className="about-leader">
              <div className="about-leader-name">Suneeta Bhagatjee</div>
              <div className="about-leader-role">Executive Director</div>
              <div className="about-leader-desc">Ex-BPL, Essel Group, Gitanjali Gems</div>
            </div>
            <div className="about-leader">
              <div className="about-leader-name">Shyam Karmakar</div>
              <div className="about-leader-role">Executive Director</div>
              <div className="about-leader-desc">Ex-MarketRx, Nielsen, Fortis; MR &amp; Social Sector Specialist</div>
            </div>
            <div className="about-leader">
              <div className="about-leader-name">Pooja Shukla</div>
              <div className="about-leader-role">Interim CEO, Research Expert</div>
              <div className="about-leader-desc">17+ Years of experience</div>
            </div>
          </div>
        </div>
        <button className="about-cta" onClick={() => window.location.href = "/about"} aria-label="Learn more about Kaizen">
          Learn More About Us
        </button>
      </div>
    </section>
  );
}