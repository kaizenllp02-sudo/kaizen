import React from 'react'
import '../styles/csb-template.css'
import Navbar from '../components/home/Navbar'
import ContactForm from '../components/home/ContactForm'
import FooterMenu from '../components/home/FooterMenu'
import Footer from '../components/home/Footer'
import { FaHandsHelping, FaStore, FaMoneyCheckAlt, FaChartBar, FaCheckCircle, FaCity, FaLightbulb, FaCircle } from 'react-icons/fa';
import { FaBullseye, FaExclamationTriangle, FaChartLine } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const caseStudyContent = {
    title: 'How Door-to-Door Demos Tripled Conversions for a Leading FMCG Brand',
    excerpt: 'A powerful bundled product strategy delivered directly to consumers with measurable impact.',
    objective: {
        icon: <FaBullseye style={{ marginRight: 6, color: '#fdcb6e' }} />,
        title: 'Objective',
        desc: 'To drive measurable adoption of an affordable automatic washing machine and premium detergent bundle in semi-urban India by overcoming affordability and awareness barriers through direct consumer engagement and innovative microfinance solutions.'
    },
    challenge: {
        icon: <FaExclamationTriangle style={{ marginRight: 6, color: '#e17055' }} />,
        title: 'The Challenge',
        desc: 'In semi-urban India, many families still rely on manual washing. A global FMCG brand wanted to change that with an affordable automatic washing machine bundled with their premium detergent. But how do you shift behavior where affordability and awareness are key barriers?'
    },
    solution: {
        icon: <FaLightbulb style={{ marginRight: 6, color: '#fdcb6e' }} />,
        title: 'Kaizen’s Solution',
        points: [
            'Kaizen activated over 4,000 households with trained field teams delivering in-person demos.',
            'Appliance store and kirana-based demos.',
            'Microfinance partners to make the bundle accessible.',
            'Real-time tracking of trials, engagement, and conversion.'
        ]
    },
    roi: {
        icon: <FaChartLine style={{ marginRight: 6, color: '#00b894' }} />,
        title: 'ROI & Outcomes',
        points: [
            { icon: <FaCheckCircle style={{ marginRight: 8, color: '#00b894', fontSize: '1em', verticalAlign: 'middle' }} />, text: '28% conversion rate – 3x industry benchmark.' },
            { icon: <FaCheckCircle style={{ marginRight: 8, color: '#00b894', fontSize: '1em', verticalAlign: 'middle' }} />, text: '35% reduction in cost per trial.' },
            { icon: <FaCheckCircle style={{ marginRight: 8, color: '#00b894', fontSize: '1em', verticalAlign: 'middle' }} />, text: '60% repeat purchase intent for detergent.' },
            { icon: <FaCheckCircle style={{ marginRight: 8, color: '#00b894', fontSize: '1em', verticalAlign: 'middle' }} />, text: 'Model scaled to 5 more cities.' }
        ]
    }
};

const images = [
    {
        src: 'https://placehold.co/400x250?text=Image+1',
        caption: 'Kaizen field team conducting a doorstep washing demo in a semi-urban household',
    },
    {
        src: 'https://placehold.co/400x250?text=Image+2',
        caption: 'Consumers were supported with microfinance options to make product bundle accessible.',
    },
    {
        src: 'https://placehold.co/400x250?text=Image+3',
        caption: 'Bar chart: 3X higher conversion and 35% lower cost per trial',
    },
    {
        src: 'https://placehold.co/400x250?text=Image+4',
        caption: 'Consumer with product bundle after successful demo and microfinance support.',
    },
];

const CsbTemplate = () => {
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
                                <div key={i}><FaCircle style={{ marginRight: 8, color: '#fdcb6e', fontSize: '0.7em', verticalAlign: 'middle' }} />{pt}</div>
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

export default CsbTemplate