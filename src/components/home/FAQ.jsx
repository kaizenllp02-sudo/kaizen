import React, { useState } from 'react';
import '../../styles/faq.css';

const faqs = [
    {
        question: "What services does Kaizen offer?",
        answer:
            "Kaizen offers both digital and traditional marketing services including brand activations, sampling campaigns, event management, and digital marketing strategies tailored for your business."
    },
    {
        question: "How do I get in touch with Kaizen?",
        answer:
            "You can fill out the contact form in the Contact Us section or reach us directly at contact@kaizenmarketing.com."
    },
    {
        question: "Does Kaizen handle small business marketing?",
        answer:
            "Absolutely! We work with businesses of all sizes and provide scalable strategies suited to your goals and budget."
    },
    {
        question: "Can you help with event promotions?",
        answer:
            "Yes! Event promotions and sponsorship activations are one of our specialties. We’ve worked with major brands and venues."
    }
];

export default function FAQ() {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(prev => (prev === index ? null : index));
    };

    return (
        <section className="faq-section">
            <div className="faq-container">
                <h2 className="faq-title">Frequently Asked Questions</h2>
                <div className="faq-list">
                    {faqs.map((item, index) => (
                        <div
                            key={index}
                            className={`faq-item ${activeIndex === index ? 'active' : ''}`}
                            onClick={() => toggleFAQ(index)}
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