import React from 'react';
import Navbar from '../components/home/Navbar';
import FooterMenu from '../components/home/FooterMenu';
import Footer from '../components/home/Footer';
import ContactForm from '../components/home/ContactForm';
import { useNavigate } from 'react-router-dom';
import '../styles/caseStudyDetail.css';
import '../styles/caseStudyTimeline.css';

const CaseStudyHaircare = () => {
    const navigate = useNavigate();
    const timelineData = [
        {
            icon: 'fas fa-bullseye',
            title: 'Objective',
            dotColor: '#4299e1', // blue
            cardBg: '#232946',
            content: (
                <div className="csd-section-desc">
                    Launch a new shampoo with targeted messaging while identifying the strongest <strong style={{color:'#4299e1'}}>re-purchase drivers</strong> and <strong style={{color:'#4299e1'}}>positioning angle</strong>.
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
                    Understand <strong style={{color:'#e53e3e'}}>consumer reaction</strong>, trial motivators, and <strong style={{color:'#e53e3e'}}>message resonance</strong> before investing in mass media or trade expansion.
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
                    <li><strong style={{color:'#f6c700'}}>kiosk activations + home party sampling</strong> in SEC A/B segments.</li>
                    <li>Collected <strong style={{color:'#f6c700'}}>re-purchase feedback</strong> through follow-up interviews and qualitative groups.</li>
                    <li>Conducted <strong style={{color:'#f6c700'}}>message testing</strong> across 3 audience profiles (value-seekers, aspirational, loyalist).</li>
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
                    <li><strong style={{color:'#38a169'}}>Repeat purchase intent rose to 52%</strong> post-messaging refinement.</li>
                    <li>The refined message (focused on <strong style={{color:'#38a169'}}>&ldquo;scalp health + shine&rdquo;</strong>) outperformed original messaging by <strong style={{color:'#38a169'}}>38% in recall tests</strong>.</li>
                    <li>The campaign investment break-even point was projected <strong style={{color:'#38a169'}}>3 weeks earlier</strong> than baseline.</li>
                    <li>Drove <strong style={{color:'#38a169'}}>2.5x higher click-through rates</strong> when tested digitally using revised copy + visual cues.</li>
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
                    <h1 className="csd-title">Haircare – New Product Launch & Message Testing</h1>
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
                            alt={`Haircare Case Study Visual ${n}`}
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

export default CaseStudyHaircare;