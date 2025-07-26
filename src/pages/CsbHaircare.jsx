import React from 'react'
import '../styles/csb-template.css'
import Navbar from '../components/home/Navbar'
import ContactForm from '../components/home/ContactForm'
import FooterMenu from '../components/home/FooterMenu'
import Footer from '../components/home/Footer'
import { FaBullseye, FaExclamationTriangle, FaChartLine, FaLightbulb, FaCheckCircle, FaCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const caseStudyContent = {
    title: 'Haircare – New Product Launch & Message Testing',
    excerpt: 'A new shampoo launch with targeted messaging and message testing to identify the strongest re-purchase drivers and positioning angle.',
    objective: {
        icon: <FaBullseye style={{ marginRight: 6, color: '#4299e1' }} />,
        title: 'Objective',
        desc: 'Launch a new shampoo with targeted messaging while identifying the strongest re-purchase drivers and positioning angle.'
    },
    challenge: {
        icon: <FaExclamationTriangle style={{ marginRight: 6, color: '#e53e3e' }} />,
        title: 'Challenge',
        desc: 'Understand consumer reaction, trial motivators, and message resonance before investing in mass media or trade expansion.'
    },
    solution: {
        icon: <FaLightbulb style={{ marginRight: 6, color: '#f6c700' }} />,
        title: 'Kaizen’s Solution',
        points: [
            'Kiosk activations + home party sampling in SEC A/B segments.',
            'Collected re-purchase feedback through follow-up interviews and qualitative groups.',
            'Conducted message testing across 3 audience profiles (value-seekers, aspirational, loyalist).'
        ]
    },
    roi: {
        icon: <FaChartLine style={{ marginRight: 6, color: '#38a169' }} />,
        title: 'ROI & Outcomes',
        points: [
            { icon: <FaCheckCircle style={{ marginRight: 8, color: '#38a169', fontSize: '1em', verticalAlign: 'middle' }} />, text: 'Repeat purchase intent rose to 52% post-messaging refinement.' },
            { icon: <FaCheckCircle style={{ marginRight: 8, color: '#38a169', fontSize: '1em', verticalAlign: 'middle' }} />, text: 'The refined message (focused on “scalp health + shine”) outperformed original messaging by 38% in recall tests.' },
            { icon: <FaCheckCircle style={{ marginRight: 8, color: '#38a169', fontSize: '1em', verticalAlign: 'middle' }} />, text: 'The campaign investment break-even point was projected 3 weeks earlier than baseline.' },
            { icon: <FaCheckCircle style={{ marginRight: 8, color: '#38a169', fontSize: '1em', verticalAlign: 'middle' }} />, text: 'Drove 2.5x higher click-through rates when tested digitally using revised copy + visual cues.' }
        ]
    }
};

const images = [
    {
        src: 'https://placehold.co/400x250?text=Image+1',
        caption: 'Kiosk activation and home party sampling in SEC A/B segments.',
    },
    {
        src: 'https://placehold.co/400x250?text=Image+2',
        caption: 'Follow-up interviews and qualitative groups for re-purchase feedback.',
    },
    {
        src: 'https://placehold.co/400x250?text=Image+3',
        caption: 'Message testing across 3 audience profiles.',
    },
    {
        src: 'https://placehold.co/400x250?text=Image+4',
        caption: 'Campaign ROI and digital click-through rates.',
    },
];

const CsbHaircare = () => {
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
                    {/* <div className="csb-template-right">
                        {images.map((img, idx) => (
                            <figure key={idx} className="csb-template-image-block">
                                <img src={img.src} alt={img.caption} className="csb-template-image" />
                                <figcaption className="csb-template-caption">{img.caption}</figcaption>
                            </figure>
                        ))}
                    </div> */}
                </section>
            </main>
            <ContactForm />
            <FooterMenu />
            <Footer />
        </>
    )
}

export default CsbHaircare