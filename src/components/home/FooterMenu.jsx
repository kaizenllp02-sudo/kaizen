import React, { useState } from 'react';
import '../../styles/footerMenu.css';

export default function FooterMenu() {
    const [openSections, setOpenSections] = useState({});

    const toggleSection = (sectionName) => {
        setOpenSections(prev => ({
            ...prev,
            [sectionName]: !prev[sectionName]
        }));
    };
    return (
        <section className="footer-menu-section">
            <div className="footer-menu-container">
                {/* Brand & Company Info */}
                <div className="footer-menu-brand">
                    <div className="footer-menu-logo">
                        <div className="footer-menu-logo-icon">
                            <i className="fa-solid fa-shop"></i>
                        </div>
                        <div className="footer-menu-logo-text">
                            <h2>Kaizen</h2>
                            <span>Marketing</span>
                        </div>
                    </div>
                    <p className="footer-menu-tagline">
                        Transforming businesses through innovative marketing strategies and creative excellence.
                    </p>

                    {/* Newsletter Subscription */}
                    <form className="newsletter-form">
                        <input type="email" placeholder="Subscribe to our newsletter" />
                        <button type="submit">
                            <i className="fa-solid fa-paper-plane"></i>
                        </button>
                    </form>
                </div>

                {/* Navigation Links */}
                <div className="footer-menu-nav">
                    <div className="footer-menu-nav-column">
                        <h4 className="footer-menu-nav-header" onClick={() => toggleSection('navigate')}>
                            <i className="fa-solid fa-compass"></i>
                            Navigate
                            <i className={`fa-solid fa-chevron-down footer-menu-accordion-icon ${openSections.navigate ? 'open' : ''}`}></i>
                        </h4>
                        <ul className={`footer-menu-nav-list ${openSections.navigate ? 'open' : ''}`}>
                            <li><a href="/">Home</a></li>
                            <li><a href="/about">About Us</a></li>
                            <li><a href="/services">Services</a></li>
                            <li><a href="/portfolio">Portfolio</a></li>
                            <li><a href="/contact">Contact</a></li>
                        </ul>
                    </div>

                    <div className="footer-menu-nav-column">
                        <h4 className="footer-menu-nav-header" onClick={() => toggleSection('services')}>
                            <i className="fa-solid fa-briefcase"></i>
                            Services
                            <i className={`fa-solid fa-chevron-down footer-menu-accordion-icon ${openSections.services ? 'open' : ''}`}></i>
                        </h4>
                        <ul className={`footer-menu-nav-list ${openSections.services ? 'open' : ''}`}>
                            <li><a href="/digital-marketing">Digital Marketing</a></li>
                            <li><a href="/brand-strategy">Brand Strategy</a></li>
                            <li><a href="/content-creation">Content Creation</a></li>
                            <li><a href="/social-media">Social Media</a></li>
                            <li><a href="/analytics">Analytics</a></li>
                        </ul>
                    </div>

                    <div className="footer-menu-nav-column">
                        <h4 className="footer-menu-nav-header" onClick={() => toggleSection('company')}>
                            <i className="fa-solid fa-users"></i>
                            Company
                            <i className={`fa-solid fa-chevron-down footer-menu-accordion-icon ${openSections.company ? 'open' : ''}`}></i>
                        </h4>
                        <ul className={`footer-menu-nav-list ${openSections.company ? 'open' : ''}`}>
                            <li><a href="/careers">Careers</a></li>
                            <li><a href="/blog">Blog</a></li>
                            <li><a href="/news">News</a></li>
                            <li><a href="/testimonials">Testimonials</a></li>
                            <li><a href="/support">Support</a></li>
                        </ul>
                    </div>

                    <div className="footer-menu-nav-column">
                        <h4 className="footer-menu-nav-header" onClick={() => toggleSection('legal')}>
                            <i className="fa-solid fa-scale-balanced"></i>
                            Legal
                            <i className={`fa-solid fa-chevron-down footer-menu-accordion-icon ${openSections.legal ? 'open' : ''}`}></i>
                        </h4>
                        <ul className={`footer-menu-nav-list ${openSections.legal ? 'open' : ''}`}>
                            <li><a href="/privacy">Privacy Policy</a></li>
                            <li><a href="/terms">Terms of Service</a></li>
                            <li><a href="/cookies">Cookie Policy</a></li>
                            <li><a href="/disclaimer">Disclaimer</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Contact Information Cards - Bottom Section */}
            <div className="footer-menu-contact-section">
                <h3 className="footer-menu-contact-heading">Contact</h3>
                <div className="footer-menu-contact-container">
                    <div className="footer-menu-contact-item">
                        <i className="fa-solid fa-location-dot"></i>
                        <div>
                            <span className="contact-label">Mumbai HQ:</span>
                            <span>L-355, Dreams Mall, Bhandup west, Mumbai 400078</span>
                        </div>
                    </div>
                    <div className="footer-menu-contact-item">
                        <i className="fa-solid fa-envelope"></i>
                        <div>
                            <span className="contact-label">Email</span>
                            <a href="mailto:pooja@kaizenevents&promotionllp.com">pooja@kaizenevents&promotionllp.com</a>
                        </div>
                    </div>
                    <div className="footer-menu-contact-item">
                        <i className="fa-solid fa-phone"></i>
                        <div>
                            <span className="contact-label">Phone</span>
                            <span>+91 9892787127</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}