
import React from 'react';
import Navbar from '../components/home/Navbar';
import FooterMenu from '../components/home/FooterMenu';
import Footer from '../components/home/Footer';
import ContactForm from '../components/home/ContactForm';
import { useNavigate } from 'react-router-dom';
import '../styles/caseStudyDetail.css';
import '../styles/caseStudyTimeline.css';

const CaseStudyFMCG = () => {
    const navigate = useNavigate();
    const timelineData = [
        {
            icon: 'fas fa-bullseye',
            title: 'Objective',
            dotColor: '#4299e1', // blue
            cardBg: '#232946',
            content: (
                <div className="csd-section-desc">
                    Test a bundled offering (<strong style={{color:'#4299e1'}}>affordable washing machine + premium detergent</strong>) to upgrade lower-income households from semi-auto to automatic systems.
                </div>
            ),
        },
        {
            icon: 'fas fa-exclamation-triangle',
            title: 'Challenge',
            dotColor: '#e53e3e', // red
            cardBg: '#2d1e23',
            content: (
                <div className="csd-section-desc">
                    Validate an experimental distribution model combining <strong style={{color:'#e53e3e'}}>door-to-door education</strong>, <strong style={{color:'#e53e3e'}}>kirana store integration</strong>, and <strong style={{color:'#e53e3e'}}>microfinance</strong>.
                </div>
            ),
        },
        {
            icon: 'fas fa-lightbulb',
            title: 'Kaizen’s Solution',
            dotColor: '#f6c700', // yellow
            cardBg: '#2d2a1e',
            content: (
                <ul className="csd-bullets">
                    <li><strong style={{color:'#f6c700'}}>4,000+ structured door-to-door consumer pitches</strong>.</li>
                    <li><strong style={{color:'#f6c700'}}>live product demos</strong> in appliance stores and kirana shops.</li>
                    <li><strong style={{color:'#f6c700'}}>micro-loan partner onboarding</strong> to ease affordability barriers.</li>
                    <li>Collected <strong style={{color:'#f6c700'}}>real-time data on trial-to-purchase conversion</strong>.</li>
                </ul>
            ),
        },
        {
            icon: 'fas fa-chart-line',
            title: 'ROI & Outcomes',
            dotColor: '#38a169', // green
            cardBg: '#1e2d23',
            content: (
                <ul className="csd-bullets">
                    <li><strong style={{color:'#38a169'}}>Conversion rate of 26%</strong> in test clusters – 3x higher than standard trade trials.</li>
                    <li><strong style={{color:'#38a169'}}>Cost per trial reduced by 35%</strong> due to integrated field + store deployment.</li>
                    <li><strong style={{color:'#38a169'}}>Repeat purchase intent</strong> (detergent only) confirmed in 68% of sampled households post-offer.</li>
                    <li>Validated model scaled to <strong style={{color:'#38a169'}}>5 more cities</strong> with predictable ROI benchmarks.</li>
                </ul>
            ),
        },
    ];

    return (
        <>
            <Navbar />
            <section className="case-study-detail-section" style={{ maxWidth: 900, margin: '0 auto', padding: '2rem 1rem' }}>
                <div className="csd-header-row">
                    <button
                        onClick={() => navigate(-1)}
                        className="case-study-back-btn"
                        aria-label="Back to previous page"
                    >
                        <i className="fas fa-arrow-left" aria-hidden="true"></i>
                        Back
                    </button>
                    <h1 className="csd-title">FMCG – Door-to-Door + Retail Trial</h1>
                </div>

                {/* Timeline Layout */}
                <div className="csd-timeline-container">
                    <div className="csd-timeline-line" />
                    <div className="csd-timeline-items">
                        {timelineData.map((item, idx) => (
                            <div className="csd-timeline-item" key={idx}>
                                <div
                                    className="csd-timeline-dot csd-timeline-dot-responsive"
                                    style={{ '--dot-color': item.dotColor }}
                                >
                                    <i className={item.icon} aria-hidden="true"></i>
                                </div>
                                <div
                                    className="csd-timeline-card"
                                    style={{ '--dot-color': item.dotColor, '--card-bg': item.cardBg }}
                                >
                                    <div className="csd-timeline-title-wrap">
                                        <span className="csd-timeline-icon-inside">
                                            <i className={item.icon} aria-hidden="true"></i>
                                        </span>
                                        <h2 className="csd-timeline-title">
                                            {item.title}
                                        </h2>
                                    </div>
                                    <div className="csd-timeline-content">
                                        {item.content}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Timeline Images */}
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1.5rem', margin: '2.5rem 0 2rem 0' }}>
                    {[1,2,3,4].map(n => (
                        <img
                            key={n}
                            src={`https://placehold.co/350x220?text=Image+${n}`}
                            alt={`FMCG Case Study Visual ${n}`}
                            style={{ maxWidth: '100%', width: 350, height: 220, borderRadius: '14px', boxShadow: '0 4px 24px rgba(0,0,0,0.13)', objectFit: 'cover' }}
                        />
                    ))}
                </div>
                <div style={{ margin: '2.5rem 0' }}>
                    <ContactForm />
                </div>
            </section>
            <FooterMenu />
            <Footer />
        </>
    );
};

export default CaseStudyFMCG;