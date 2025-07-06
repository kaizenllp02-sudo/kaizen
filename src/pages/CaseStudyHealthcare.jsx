import React from 'react';
import Navbar from '../components/home/Navbar';
import FooterMenu from '../components/home/FooterMenu';
import Footer from '../components/home/Footer';
import ContactForm from '../components/home/ContactForm';
import { useNavigate } from 'react-router-dom';
import '../styles/caseStudyDetail.css';

const CaseStudyHealthcare = () => {
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
                    <h1 className="csd-title">Healthcare – Doctor-Recommended Wellness Launch</h1>
                </div>

                <section className="csd-section">
                    <h2><i className="fas fa-bullseye csd-h2-icon" aria-hidden="true"></i> Objective</h2>
                    <div className="csd-section-desc">
                        Launch a <strong>doctor-recommended wellness product line</strong> without entering crowded OTC channels—building medical credibility and customer trust.
                    </div>
                </section>

                <section className="csd-section">
                    <h2><i className="fas fa-exclamation-triangle csd-h2-icon" aria-hidden="true"></i> Challenge</h2>
                    <div className="csd-section-desc">
                        Drive <strong>prescription-like positioning</strong> while enabling real-time trials and sales <strong>within gated communities</strong>.
                    </div>
                </section>

                <section className="csd-section">
                    <h2><i className="fas fa-lightbulb csd-h2-icon" aria-hidden="true"></i> Kaizen’s Solution</h2>
                    <ul className="csd-bullets">
                        <li>Activated <strong>200 gated societies</strong> with on-site health camps.</li>
                        <li>Included <strong>free consultations</strong> by certified doctors and nurses.</li>
                        <li>Integrated product awareness + trial into the <strong>health check-up flow</strong>.</li>
                        <li>Gathered <strong>live feedback</strong> on packaging, pricing, and benefit communication.</li>
                    </ul>
                </section>

                <section className="csd-section">
                    <h2><i className="fas fa-chart-line csd-h2-icon" aria-hidden="true"></i> ROI & Outcomes</h2>
                    <ul className="csd-bullets">
                        <li>Exposed <strong>1.2 lakh+ consumers</strong>, resulting in <strong>6,000+ paid trials</strong> during the campaign.</li>
                        <li><strong>62% conversion</strong> from trial to repeat purchase over the next 60 days.</li>
                        <li>Cost per lead was <strong>40% lower</strong> than traditional ATL marketing (TV, print).</li>
                        <li>Built <strong>5+ verified doctor testimonials</strong> used for pan-India campaign rollout—cutting endorsement costs for future launches.</li>
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

export default CaseStudyHealthcare;