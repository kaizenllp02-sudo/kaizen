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
                    <h1 className="csd-title">FMCG – Door-to-Door + Retail Trial</h1>
                </div>

                <section className="csd-section">
                    <h2><i className="fas fa-bullseye csd-h2-icon" aria-hidden="true"></i> Objective</h2>
                    <div className="csd-section-desc">
                        Test a bundled offering (affordable washing machine + premium detergent) to upgrade lower-income households from semi-auto to automatic systems.
                    </div>
                </section>

                <section className="csd-section">
                    <h2><i className="fas fa-exclamation-triangle csd-h2-icon" aria-hidden="true"></i> Challenge</h2>
                    <div className="csd-section-desc">
                        Validate an experimental distribution model combining <strong>door-to-door education</strong>, <strong>kirana store integration</strong>, and <strong>microfinance</strong>.
                    </div>
                </section>

                <section className="csd-section">
                    <h2><i className="fas fa-lightbulb csd-h2-icon" aria-hidden="true"></i> Kaizen’s Solution</h2>
                    <ul className="csd-bullets">
                        <li>Conducted <strong>4,000+ structured door-to-door consumer pitches</strong>.</li>
                        <li>Enabled <strong>live product demos</strong> in appliance stores and kirana shops.</li>
                        <li>Embedded <strong>micro-loan partner onboarding</strong> to ease affordability barriers.</li>
                        <li>Collected <strong>real-time data on trial-to-purchase conversion</strong>.</li>
                    </ul>
                </section>

                <section className="csd-section">
                    <h2><i className="fas fa-chart-line csd-h2-icon" aria-hidden="true"></i> ROI & Outcomes</h2>
                    <ul className="csd-bullets">
                        <li><strong>Conversion rate of 26%</strong> in test clusters – 3x higher than standard trade trials.</li>
                        <li><strong>Cost per trial reduced by 35%</strong> due to integrated field + store deployment.</li>
                        <li><strong>Repeat purchase intent</strong> (detergent only) confirmed in 68% of sampled households post-offer.</li>
                        <li>Validated model scaled to <strong>5 more cities</strong> with predictable ROI benchmarks.</li>
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