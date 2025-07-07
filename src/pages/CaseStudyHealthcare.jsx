import React from 'react';
import Navbar from '../components/home/Navbar';
import FooterMenu from '../components/home/FooterMenu';
import Footer from '../components/home/Footer';
import ContactForm from '../components/home/ContactForm';
import { useNavigate } from 'react-router-dom';
import '../styles/caseStudyDetail.css';
import '../styles/caseStudyTimeline.css';

const CaseStudyHealthcare = () => {
    const navigate = useNavigate();
    const timelineData = [
        {
            icon: 'fas fa-bullseye',
            title: 'Objective',
            dotColor: '#4299e1', // blue
            cardBg: '#232946',
            content: (
                <div className="csd-section-desc">
                    Launch a <strong style={{color:'#4299e1'}}>doctor-recommended wellness product line</strong> without entering crowded OTC channels—building medical credibility and customer trust.
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
                    Drive <strong style={{color:'#e53e3e'}}>prescription-like positioning</strong> while enabling real-time trials and sales <strong style={{color:'#e53e3e'}}>within gated communities</strong>.
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
                    <li>Activated <strong style={{color:'#f6c700'}}>200 gated societies</strong> with on-site health camps.</li>
                    <li>Included <strong style={{color:'#f6c700'}}>free consultations</strong> by certified doctors and nurses.</li>
                    <li>Integrated product awareness + trial into the <strong style={{color:'#f6c700'}}>health check-up flow</strong>.</li>
                    <li>Gathered <strong style={{color:'#f6c700'}}>live feedback</strong> on packaging, pricing, and benefit communication.</li>
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
                    <li>Exposed <strong style={{color:'#38a169'}}>1.2 lakh+ consumers</strong>, resulting in <strong style={{color:'#38a169'}}>6,000+ paid trials</strong> during the campaign.</li>
                    <li><strong style={{color:'#38a169'}}>62% conversion</strong> from trial to repeat purchase over the next 60 days.</li>
                    <li>Cost per lead was <strong style={{color:'#38a169'}}>40% lower</strong> than traditional ATL marketing (TV, print).</li>
                    <li>Built <strong style={{color:'#38a169'}}>5+ verified doctor testimonials</strong> used for pan-India campaign rollout—cutting endorsement costs for future launches.</li>
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
                    <h1 className="csd-title">Healthcare – Doctor-Recommended Wellness Launch</h1>
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
                            alt={`Healthcare Case Study Visual ${n}`}
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

export default CaseStudyHealthcare;