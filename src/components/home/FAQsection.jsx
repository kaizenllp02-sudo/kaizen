import React, { useState, useEffect } from 'react';
import ReactGA from 'react-ga4';
import { env } from '../../lib/env';
import '../../styles/faq.css';

const FAQS_API_URL = `${env.GOOGLE_SCRIPT_URL}?type=get-faqs`;

export default function FAQsection() {
    const [faqs, setFaqs] = useState([]);
    const [activeIndex, setActiveIndex] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(FAQS_API_URL)
            .then(res => res.json())
            .then(data => {
                setFaqs(Array.isArray(data) ? data : []);
                setLoading(false);
            })
            .catch(err => {
                setError('Failed to load FAQs.');
                setLoading(false);
            });
    }, []);

    const toggleFAQ = (index) => {
        setActiveIndex(prev => (prev === index ? null : index));
    };

    return (
        <section className="faq-section">
            <div className="faq-container">
                <h2 className="faq-title">Frequently Asked Questions</h2>
                {loading && <div className="faq-loading">Loading FAQs...</div>}
                {error && <div className="faq-error">{error}</div>}
                <div className="faq-list">
                    {faqs.map((item, index) => (
                        <div
                            key={index}
                            className={`faq-item ${activeIndex === index ? 'active' : ''}`}
                            onClick={() => {
                              ReactGA.event({
                                category: 'Button',
                                action: 'Click',
                                label: `FAQ Toggle: ${index}`
                              });
                              toggleFAQ(index);
                            }}
                        >
                            <div className="faq-question">
                                <span>{item.question}</span>
                                <i className={`fas ${activeIndex === index ? 'fa-minus' : 'fa-plus'}`}></i>
                            </div>
                            <div className="faq-answer">
                                <p>{item.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}