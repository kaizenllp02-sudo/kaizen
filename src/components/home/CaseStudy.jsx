import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { env } from '../../lib/env';
import '../../styles/casestudy.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const caseStudies = [
    {
        title: 'FMCG – Door-to-Door + Retail Trial',
        icon: 'fas fa-store',
        color: '#64b5f6',
        link: '/case-study/fmcg',
    },
    {
        title: 'Haircare – New Product Launch & Message Testing',
        icon: 'fas fa-vial',
        color: '#ba68c8',
        link: '/case-study/haircare',
    },
    {
        title: 'Healthcare – RWA-Based Product Introduction',
        icon: 'fas fa-user-md',
        color: '#4db6ac',
        link: '/case-study/healthcare',
    },
];

const CaseStudy = () => {
    const navigate = useNavigate();
    const [modalOpen, setModalOpen] = useState(false);
    const [pendingLink, setPendingLink] = useState(null);
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [submitting, setSubmitting] = useState(false);

    // Check if user has already submitted email
    const hasAccess = () => {
        return !!localStorage.getItem('caseStudyViewerEmail');
    };

    const handleReadMore = (link) => {
        if (hasAccess()) {
            window.scrollTo({ top: 0, behavior: 'instant' });
            navigate(link);
        } else {
            setPendingLink(link);
            setModalOpen(true);
        }
    };

    const handleModalSubmit = async (e) => {
        e.preventDefault();
        setError('');
        const trimmedEmail = email.trim();
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!trimmedEmail || !emailRegex.test(trimmedEmail)) {
            setError('Please enter a valid email address.');
            return;
        }
        setSubmitting(true);
        try {
            const GOOGLE_SCRIPT_URL = env.GOOGLE_SCRIPT_URL;
            if (!GOOGLE_SCRIPT_URL) throw new Error('Google Apps Script URL not configured');
            const params = new URLSearchParams();
            params.append('type', 'case-study-viewer');
            params.append('email', trimmedEmail);
            params.append('timestamp', new Date().toISOString());
            await fetch(`${GOOGLE_SCRIPT_URL}?${params.toString()}`, {
                method: 'GET',
                mode: 'no-cors'
            });
            localStorage.setItem('caseStudyViewerEmail', trimmedEmail);
            setModalOpen(false);
            setSubmitting(false);
            setEmail('');
            setTimeout(() => {
                window.scrollTo({ top: 0, behavior: 'instant' });
                navigate(pendingLink);
            }, 100);
        } catch (err) {
            setError('Failed to submit. Please try again.');
            setSubmitting(false);
        }
    };

    return (
        <section className="case-study-section">
            <div className="case-study-header">
                <h2>Case Studies with ROI Impact</h2>
                <p>Real results from our work with leading brands</p>
            </div>
            <div className="case-study-grid">
                {caseStudies.map((cs, idx) => (
                    <div
                        key={idx}
                        className="service-card"
                        style={{
                            '--service-color': cs.color,
                            '--service-color-light': cs.color + '20',
                            '--service-color-hover': cs.color + '30'
                        }}
                    >
                        <div className="service-icon">
                            <i className={cs.icon} aria-hidden="true"></i>
                        </div>
                        <div className="service-title">{cs.title}</div>
                        <button
                            className="service-readmore-btn"
                            tabIndex={0}
                            aria-label={`Read more about ${cs.title}`}
                            onClick={() => handleReadMore(cs.link)}
                            style={{ cursor: 'pointer' }}
                        >
                            Read more
                        </button>
                    </div>
                ))}
            </div>

            {/* Modal for email submission */}
            {modalOpen && (
                <div style={{
                    position: 'fixed',
                    top: 0, left: 0, right: 0, bottom: 0,
                    background: 'rgba(0,0,0,0.45)',
                    zIndex: 9999,
                    display: 'flex', alignItems: 'center', justifyContent: 'center'
                }}>
                    <div style={{
                        background: 'rgba(30,30,40,0.98)',
                        borderRadius: 16,
                        padding: '2.5rem 2rem 2rem 2rem',
                        minWidth: 320,
                        maxWidth: '90vw',
                        boxShadow: '0 8px 32px rgba(0,0,0,0.25)',
                        textAlign: 'center',
                        color: '#fff',
                        position: 'relative'
                    }}>
                        <button onClick={() => setModalOpen(false)} style={{ position: 'absolute', top: 12, right: 16, background: 'none', border: 'none', color: '#fff', fontSize: 22, cursor: 'pointer' }} aria-label="Close popup">&times;</button>
                        <h3 style={{ marginBottom: 12, fontWeight: 700, fontSize: 22 }}>Access Case Study</h3>
                        <p style={{ marginBottom: 18, color: '#ccc', fontSize: 15 }}>Enter your email to view this case study. You’ll only need to do this once.</p>
                        <form onSubmit={handleModalSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                            <input
                                type="email"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                placeholder="Your email address"
                                required
                                style={{ padding: '10px 14px', borderRadius: 8, border: '1.5px solid #e53e3e', fontSize: 16, outline: 'none', background: '#232946', color: '#fff' }}
                                autoFocus
                                disabled={submitting}
                            />
                            <button
                                type="submit"
                                style={{ background: '#e53e3e', color: '#fff', border: 'none', borderRadius: 8, padding: '10px 0', fontWeight: 700, fontSize: 16, cursor: 'pointer', transition: 'background 0.2s', opacity: submitting ? 0.7 : 1 }}
                                disabled={submitting}
                            >
                                {submitting ? 'Submitting...' : 'Submit & View'}
                            </button>
                            {error && <div style={{ color: '#ff1744', fontSize: 14, marginTop: 4 }}>{error}</div>}
                        </form>
                    </div>
                </div>
            )}
        </section>
    );
};

export default CaseStudy;