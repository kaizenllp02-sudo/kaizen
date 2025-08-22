import React, { useState } from 'react';
import ReactGA from 'react-ga4';
import { env } from '../../lib/env';
import '../../styles/footerMenu.css';

export default function FooterMenu() {
    const [openSections, setOpenSections] = useState({});
    const [newsletterData, setNewsletterData] = useState({ email: '' });
    const [newsletterMessage, setNewsletterMessage] = useState(null);

    const toggleSection = (sectionName) => {
        setOpenSections(prev => ({
            ...prev,
            [sectionName]: !prev[sectionName]
        }));
    };

    const handleNewsletterChange = (e) => {
        setNewsletterData({ email: e.target.value });
    };

    const handleNewsletterSubmit = async (e) => {
        e.preventDefault();

        if (!newsletterData.email) {
            setNewsletterMessage('Please enter your email address.');
            return;
        }

        // AbstractAPI email validation
        try {
            const ABSTRACT_API_KEY = env.ABSTRACT_API_KEY;
            if (!ABSTRACT_API_KEY) {
                throw new Error('AbstractAPI key not configured');
            }
            const email = newsletterData.email;
            const validateUrl = `https://emailvalidation.abstractapi.com/v1/?api_key=${ABSTRACT_API_KEY}&email=${encodeURIComponent(email)}`;
            const res = await fetch(validateUrl);
            const data = await res.json();
            if (data.deliverability !== 'DELIVERABLE') {
                setNewsletterMessage('Please enter a valid, deliverable email address.');
                setTimeout(() => setNewsletterMessage(null), 5000);
                return;
            }

            const GOOGLE_SCRIPT_URL = env.GOOGLE_SCRIPT_URL;
            if (!GOOGLE_SCRIPT_URL) {
                throw new Error('Google Apps Script URL not configured');
            }

            const params = new URLSearchParams();
            params.append('type', 'newsletter');
            params.append('email', newsletterData.email);
            params.append('timestamp', new Date().toISOString());

            await fetch(`${GOOGLE_SCRIPT_URL}?${params.toString()}`, {
                method: 'GET',
                mode: 'no-cors'
            });

            setNewsletterMessage('Successfully subscribed to newsletter!');
            setNewsletterData({ email: '' });
            setTimeout(() => setNewsletterMessage(null), 5000);
        } catch (error) {
            console.error('Error submitting newsletter:', error);
            setNewsletterMessage('Failed to subscribe. Please try again.');
            setTimeout(() => setNewsletterMessage(null), 5000);
        }
    };
    return (
        <section className="footer-menu-section">
            <div className="footer-menu-container">
                {/* Brand & Company Info */}
                <div className="footer-menu-brand">
                    <div className="footer-menu-logo">
                        <div className="footer-menu-logo-icon">
                            <img src="/kaizen.png" alt="Kaizen Logo" className="footer-logo-img" />
                        </div>
                        <div className="footer-menu-logo-text">
                            <h2>Kaizen</h2>
                            <span>Promotions</span>
                        </div>
                    </div>
                    <p className="footer-menu-tagline">
                        Transforming businesses through innovative marketing strategies and creative excellence.
                    </p>

                    {/* Newsletter Subscription */}
                    {newsletterMessage && (
                        <div style={{
                            padding: '12px 16px',
                            borderRadius: '6px',
                            backgroundColor: newsletterMessage.includes('Successfully') ? '#4caf50' : '#f44336',
                            color: '#fff',
                            fontSize: '14px',
                            marginBottom: '12px',
                            textAlign: 'center',
                            fontWeight: '500',
                            boxShadow: '0 2px 8px rgba(0,0,0,0.2)'
                        }}>
                            {newsletterMessage}
                        </div>
                    )}
                    <form className="newsletter-form" onSubmit={e => {
                        ReactGA.event({
                            category: 'Button',
                            action: 'Click',
                            label: 'Newsletter Subscribe'
                        });
                        handleNewsletterSubmit(e);
                    }}>
                        <input
                            type="email"
                            placeholder="Subscribe to our newsletter"
                            value={newsletterData.email}
                            onChange={handleNewsletterChange}
                            required
                        />
                        <button type="submit" aria-label="Subscribe to newsletter">
                            <i className="fa-solid fa-paper-plane" aria-hidden="true"></i>
                        </button>
                    </form>
                    <p className="footer-menu-newsletter-desc">
                        Stay updated on consumer trends, marketing tools, and research insights.
                    </p>
                </div>

                {/* Navigation Links */}
                <div className="footer-menu-nav">
                    <div className="footer-menu-nav-column">
                        <h4 className="footer-menu-nav-header" onClick={() => {
                            ReactGA.event({
                                category: 'Button',
                                action: 'Click',
                                label: 'Footer Navigate Accordion'
                            });
                            toggleSection('navigate');
                        }}>
                            <i className="fa-solid fa-compass"></i>
                            Navigate
                            <i className={`fa-solid fa-chevron-down footer-menu-accordion-icon ${openSections.navigate ? 'open' : ''}`}></i>
                        </h4>
                        <ul className={`footer-menu-nav-list ${openSections.navigate ? 'open' : ''}`}>
                            <li><a href="/">Home</a></li>
                            <li><a href="/about">About Us</a></li>
                            <li><a href="#services" onClick={e => {
                                e.preventDefault();
                                ReactGA.event({
                                    category: 'Button',
                                    action: 'Click',
                                    label: 'Footer Services Link'
                                });
                                if (window.location.pathname !== '/') {
                                    sessionStorage.setItem('scrollToServices', 'true');
                                    window.location.href = '/';
                                    return;
                                }
                                const el = document.querySelector('.services-offered, #services, [class*="services"]');
                                if (el) {
                                    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                }
                            }}>Services</a></li>
                            <li><a href="/faq">FAQ</a></li>
                            <li><a href="#contact" onClick={e => {
                                e.preventDefault();
                                ReactGA.event({
                                  category: 'Button',
                                  action: 'Click',
                                  label: 'Footer Contact Link'
                                });
                                if (window.location.pathname !== '/') {
                                  sessionStorage.setItem('scrollToContact', 'true');
                                  window.location.href = '/';
                                  return;
                                }
                                const el = document.querySelector('.kaizen-contact-section, #contact, [class*="contact"]');
                                if (el) {
                                  el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                }
                            }}>Contact</a></li>
                        </ul>
                    </div>

                    <div className="footer-menu-nav-column">
                        <h4 className="footer-menu-nav-header" onClick={() => {
                            ReactGA.event({
                                category: 'Button',
                                action: 'Click',
                                label: 'Footer Services Accordion'
                            });
                            toggleSection('services');
                        }}>
                            <i className="fa-solid fa-briefcase"></i>
                            Services
                            <i className={`fa-solid fa-chevron-down footer-menu-accordion-icon ${openSections.services ? 'open' : ''}`}></i>
                        </h4>
                        <ul className={`footer-menu-nav-list ${openSections.services ? 'open' : ''}`}>
                            {[
                              { href: '/sampling', label: 'Sampling' },
                              { href: '/kiosk', label: 'Kiosk' },
                              { href: '/digital-marketing', label: 'Digital Marketing' },
                              { href: '/influencer-connection', label: 'Influencer Connection' },
                              { href: '/brand-strategy', label: 'Brand Strategy' }
                            ].map(item => (
                              <li key={item.href}>
                                <a href="#services" onClick={e => {
                                  e.preventDefault();
                                  ReactGA.event({
                                    category: 'Button',
                                    action: 'Click',
                                    label: `Footer Service Link: ${item.label}`
                                  });
                                  if (window.location.pathname !== '/') {
                                    sessionStorage.setItem('scrollToServices', 'true');
                                    window.location.href = '/';
                                    return;
                                  }
                                  const el = document.querySelector('.services-offered, #services, [class*="services"]');
                                  if (el) {
                                    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                  }
                                }}>{item.label}</a>
                              </li>
                            ))}
                        </ul>
                    </div>

                    <div className="footer-menu-nav-column">
                        <h4 className="footer-menu-nav-header" onClick={() => {
                            ReactGA.event({
                                category: 'Button',
                                action: 'Click',
                                label: 'Footer Company Accordion'
                            });
                            toggleSection('company');
                        }}>
                            <i className="fa-solid fa-users"></i>
                            Miscellaneous
                            <i className={`fa-solid fa-chevron-down footer-menu-accordion-icon ${openSections.company ? 'open' : ''}`}></i>
                        </h4>
                        <ul className={`footer-menu-nav-list ${openSections.company ? 'open' : ''}`}>
                            {/* <li><a href="/careers">Careers</a></li> */}
                            <li><a href="/blog">Blog</a></li>
                            {/* <li><a href="/news">News</a></li> */}
                            <li><a href="/testimonials" onClick={e => {
                                e.preventDefault();
                                ReactGA.event({
                                  category: 'Button',
                                  action: 'Click',
                                  label: 'Footer Testimonials Link'
                                });
                                if (window.location.pathname !== '/') {
                                  sessionStorage.setItem('scrollToTestimonials', 'true');
                                  window.location.href = '/';
                                  return;
                                }
                                const el = document.querySelector('.testimonials-section, #testimonials, [class*="testimonial"]');
                                if (el) {
                                  el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                }
                            }}>Testimonials</a></li>
                            {/* <li><a href="/support">Support</a></li> */}
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
                            <span className="contact-label">Head Office:</span>
                            <span>F-220 First  Floor, The Dreams Mall, L.B.S.Marg, Bhandup (West), Mumbai – 400078</span>
                        </div>
                    </div>
                    <div className="footer-menu-contact-item">
                        <i className="fa-solid fa-headset"></i>
                        <div>
                            <span className="contact-label">Contact</span>
                            <a href="mailto:pooja@kaizenevents&promotionllp.com">pooja@kaizenevents&promotionllp.com</a>
                            <span style={{ display: 'block' }}>+91 9892787127</span>
                        </div>
                    </div>
                    <div className="footer-menu-contact-item">
                        <i className="fa-solid fa-briefcase"></i>
                        <div>
                            <span className="contact-label">Offices</span>
                            <span>Delhi, Ahmedabad, Pune, Kolkata, Chennai, Bangalore, Hyderabad, Indore, Cochin, Kanpur, Lucknow</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}