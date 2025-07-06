import React from 'react';
import Navbar from '../components/home/Navbar';
import FooterMenu from '../components/home/FooterMenu';
import Footer from '../components/home/Footer';
import ContactForm from '../components/home/ContactForm';
import { useNavigate } from 'react-router-dom';
import '../styles/caseStudyDetail.css';

const CaseStudyFMCG = () => {
    const navigate = useNavigate();
    return (
        <>
            <Navbar />
            <section className="case-study-detail-section" style={{ maxWidth: 800, margin: '0 auto', padding: '2rem 1rem' }}>
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

                <section className="csd-section">
                    <h2><i className="fas fa-bullseye csd-h2-icon" aria-hidden="true"></i> Objective</h2>
                    <div className="csd-section-desc">
                        Launch a new shampoo with targeted messaging while identifying the strongest <strong>re-purchase drivers</strong> and <strong>positioning angle</strong>.
                    </div>
                </section>

                <section className="csd-section">
                    <h2><i className="fas fa-exclamation-triangle csd-h2-icon" aria-hidden="true"></i> Challenge</h2>
                    <div className="csd-section-desc">
                        Understand <strong>consumer reaction</strong>, trial motivators, and <strong>message resonance</strong> before investing in mass media or trade expansion.
                    </div>
                </section>

                <section className="csd-section">
                    <h2><i className="fas fa-lightbulb csd-h2-icon" aria-hidden="true"></i> Kaizen’s Solution</h2>
                    <ul className="csd-bullets">
                        <li>Deployed <strong>kiosk activations + home party sampling</strong> in SEC A/B segments.</li>
                        <li>Collected <strong>re-purchase feedback</strong> through follow-up interviews and qualitative groups.</li>
                        <li>Conducted <strong>message testing</strong> across 3 audience profiles (value-seekers, aspirational, loyalist).</li>
                    </ul>
                </section>

                <section className="csd-section">
                    <h2><i className="fas fa-chart-line csd-h2-icon" aria-hidden="true"></i> ROI & Outcomes</h2>
                    <ul className="csd-bullets">
                        <li><strong>Repeat purchase intent rose to 52%</strong> post-messaging refinement.</li>
                        <li>The refined message (focused on “scalp health + shine”) outperformed original messaging by <strong>38% in recall tests</strong>.</li>
                        <li>The campaign investment break-even point was projected <strong>3 weeks earlier</strong> than baseline.</li>
                        <li>Drove <strong>2.5x higher click-through rates</strong> when tested digitally using revised copy + visual cues.</li>
                    </ul>
                </section>

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