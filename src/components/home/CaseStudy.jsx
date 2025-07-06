import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
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
                        <Link
                            to={cs.link}
                            className="service-readmore-btn"
                            tabIndex={0}
                            aria-label={`Read more about ${cs.title}`}
                            onClick={() => window.scrollTo({ top: 0, behavior: 'instant' })}
                        >
                            {cs.title.includes('FMCG') && 'Read the FMCG Case Study'}
                            {cs.title.includes('Haircare') && 'Read the Haircare Case Study'}
                            {cs.title.includes('Healthcare') && 'Read the Healthcare Case Study'}
                        </Link>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default CaseStudy;