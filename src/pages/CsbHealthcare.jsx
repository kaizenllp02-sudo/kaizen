import React from 'react'
import '../styles/csb-template.css'
import Navbar from '../components/home/Navbar'
import ContactForm from '../components/home/ContactForm'
import FooterMenu from '../components/home/FooterMenu'
import Footer from '../components/home/Footer'
import { FaBullseye, FaExclamationTriangle, FaChartLine, FaLightbulb, FaCheckCircle, FaCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const caseStudyContent = {
    title: 'Healthcare – Doctor-Recommended Wellness Launch',
    excerpt: 'Launching a doctor-recommended wellness product line with medical credibility and customer trust, bypassing crowded OTC channels.',
    objective: {
        icon: <FaBullseye style={{ marginRight: 6, color: '#4299e1' }} />,
        title: 'Objective',
        desc: 'Launch a doctor-recommended wellness product line without entering crowded OTC channels—building medical credibility and customer trust.'
    },
    challenge: {
        icon: <FaExclamationTriangle style={{ marginRight: 6, color: '#e53e3e' }} />,
        title: 'Challenge',
        desc: 'Drive prescription-like positioning while enabling real-time trials and sales within gated communities.'
    },
    solution: {
        icon: <FaLightbulb style={{ marginRight: 6, color: '#f6c700' }} />,
        title: 'Kaizen’s Solution',
        points: [
            'Activated 200 gated societies with on-site health camps.',
            'Included free consultations by certified doctors and nurses.',
            'Integrated product awareness + trial into the health check-up flow.',
            'Gathered live feedback on packaging, pricing, and benefit communication.'
        ]
    },
    roi: {
        icon: <FaChartLine style={{ marginRight: 6, color: '#38a169' }} />,
        title: 'ROI & Outcomes',
        points: [
            { icon: <FaCheckCircle style={{ marginRight: 8, color: '#38a169', fontSize: '1em', verticalAlign: 'middle' }} />, text: 'Exposed 1.2 lakh+ consumers, resulting in 6,000+ paid trials during the campaign.' },
            { icon: <FaCheckCircle style={{ marginRight: 8, color: '#38a169', fontSize: '1em', verticalAlign: 'middle' }} />, text: '62% conversion from trial to repeat purchase over the next 60 days.' },
            { icon: <FaCheckCircle style={{ marginRight: 8, color: '#38a169', fontSize: '1em', verticalAlign: 'middle' }} />, text: 'Cost per lead was 40% lower than traditional ATL marketing (TV, print).' },
            { icon: <FaCheckCircle style={{ marginRight: 8, color: '#38a169', fontSize: '1em', verticalAlign: 'middle' }} />, text: 'Built 5+ verified doctor testimonials used for pan-India campaign rollout—cutting endorsement costs for future launches.' }
        ]
    }
};

const images = [
    {
        src: 'https://placehold.co/400x250?text=Image+1',
        caption: 'On-site health camp in a gated society.',
    },
    {
        src: 'https://placehold.co/400x250?text=Image+2',
        caption: 'Certified doctors and nurses providing free consultations.',
    },
    {
        src: 'https://placehold.co/400x250?text=Image+3',
        caption: 'Product awareness and trial integrated into health check-up flow.',
    },
    {
        src: 'https://placehold.co/400x250?text=Image+4',
        caption: 'Doctor testimonials and campaign ROI.',
    },
];

const CsbHealthcare = () => {
    const navigate = useNavigate();
    return (
        <>
            <Navbar />
            <main className="csb-template-main">
                <section className="csb-template-content">
                    <div className="csb-template-left">
                        <div className="csb-title-row" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '0.5rem', marginBottom: '0.5em' }}>
                            <button
                                onClick={() => navigate(-1)}
                                className="csd-back-btn"
                                aria-label="Back to previous page"
                                style={{ margin: 0, minWidth: 90 }}
                            >
                                <i className="fas fa-arrow-left" aria-hidden="true"></i>
                                Back
                            </button>
                            <h1 style={{ margin: 0, display: 'flex', alignItems: 'center' }}>{caseStudyContent.title}</h1>
                        </div>
                        <p className="csb-template-excerpt">{caseStudyContent.excerpt}</p>
                        <h2 style={{ marginTop: '1.5em' }}>{caseStudyContent.objective.icon}{caseStudyContent.objective.title}</h2>
                        <p>{caseStudyContent.objective.desc}</p>
                        <h2>{caseStudyContent.challenge.icon}{caseStudyContent.challenge.title}</h2>
                        <p>{caseStudyContent.challenge.desc}</p>
                        <h2>{caseStudyContent.solution.icon}{caseStudyContent.solution.title}</h2>
                        <div className="csb-solution-list-nobullets">
                            {caseStudyContent.solution.points.map((pt, i) => (
                                <div key={i}><FaCircle style={{ marginRight: 8, color: '#f6c700', fontSize: '0.7em', verticalAlign: 'middle' }} />{pt}</div>
                            ))}
                        </div>
                        <h2>{caseStudyContent.roi.icon}{caseStudyContent.roi.title}</h2>
                        <div className="csb-roi-list-nobullets">
                            {caseStudyContent.roi.points.map((pt, i) => (
                                <div key={i}>{pt.icon}{pt.text}</div>
                            ))}
                        </div>
                    </div>
                    <div className="csb-template-right">
                        {images.map((img, idx) => (
                            <figure key={idx} className="csb-template-image-block">
                                <img src={img.src} alt={img.caption} className="csb-template-image" />
                                <figcaption className="csb-template-caption">{img.caption}</figcaption>
                            </figure>
                        ))}
                    </div>
                </section>
            </main>
            <ContactForm />
            <FooterMenu />
            <Footer />
        </>
    )
}

export default CsbHealthcare