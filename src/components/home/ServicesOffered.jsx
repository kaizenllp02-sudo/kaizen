import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../../styles/servicesOffered.css'

const ServicesOffered = () => {
  // Function to scroll to contact form
  const scrollToContact = () => {
    const contactSection = document.querySelector('.kaizen-contact-section');
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const services = [
    {
      text: "Strategic Brand Planning",
      color: "#81c784",
      icon: "fas fa-chess-knight",
      description: "Comprehensive brand strategy and positioning for long-term growth.",
      slug: "strategic-brand-planning"
    },
    {
      text: "Brand Activation",
      color: "#64b5f6",
      icon: "fas fa-bolt",
      description: "Creative campaigns to bring your brand to life and engage audiences.",
      slug: "brand-activation"
    },
    {
      text: "Promotions & Visibility",
      color: "#ffb74d",
      icon: "fas fa-bullhorn",
      description: "High-impact promotions and visibility solutions across channels.",
      slug: "promotions-visibility"
    },
    {
      text: "Market Research",
      color: "#ba68c8",
      icon: "fas fa-chart-line",
      description: "Data-driven insights and consumer research for informed decisions.",
      slug: "market-research"
    },
    {
      text: "Event Marketing",
      color: "#7986cb",
      icon: "fas fa-calendar-alt",
      description: "End-to-end event planning, management, and brand experiences.",
      slug: "event-marketing"
    },
    {
      text: "BTL Execution & Field Management",
      color: "#4db6ac",
      icon: "fas fa-handshake",
      description: "Seamless below-the-line execution and on-ground team management.",
      slug: "btl-execution-field-management"
    },
    {
      text: "Digital Marketing Support",
      color: "#e57373",
      icon: "fas fa-laptop",
      description: "Integrated digital campaigns and online marketing support.",
      slug: "digital-marketing-support"
    }
  ]

  // Toggle state for all expandable service cards
  const [showDetails, setShowDetails] = useState({
    sbp: false,
    ba: false,
    pv: false,
    mr: false,
    em: false,
    btl: false,
    dms: false
  });

  // Helper to open one and close others
  const openDetails = (key) => {
    setShowDetails({
      sbp: false,
      ba: false,
      pv: false,
      mr: false,
      em: false,
      btl: false,
      dms: false,
      [key]: true
    });
  };
  const closeDetails = (key) => {
    setShowDetails(details => ({ ...details, [key]: false }));
  };

  return (
    <section className="services-offered">
      <div className="services-container">
        {/* Header Section */}
        <div className="services-header">
          <h2 className="services-heading">Our Services</h2>
          <p className="services-description">
            Integrated solutions to drive real consumer engagement, data-backed marketing, and measurable outcomes.
          </p>
        </div>

        {/* Services Grid */}
        <div className="services-grid">
          {services.map((service, index) => {
            const isActive =
              (service.slug === 'strategic-brand-planning' && showDetails.sbp) ||
              (service.slug === 'brand-activation' && showDetails.ba) ||
              (service.slug === 'promotions-visibility' && showDetails.pv) ||
              (service.slug === 'market-research' && showDetails.mr) ||
              (service.slug === 'event-marketing' && showDetails.em) ||
              (service.slug === 'btl-execution-field-management' && showDetails.btl) ||
              (service.slug === 'digital-marketing-support' && showDetails.dms);
            return (
              <div
                key={index}
                className={`service-card${isActive ? ' active' : ''}`}
                style={{
                  '--service-color': service.color,
                  '--service-color-light': service.color + '20',
                  '--service-color-hover': service.color + '30'
                }}
              >
                <div className="service-icon">
                  <i className={service.icon}></i>
                </div>
                <h3 className="service-title">{service.text}</h3>
                {service.slug === 'strategic-brand-planning' ? (
                  <>
                    {!showDetails.sbp ? (
                      <>
                        <p className="service-description">Comprehensive brand strategy and positioning for long-term growth.</p>
                        <button
                          className="service-details-toggle"
                          style={{
                            marginTop: 8,
                            fontSize: 13,
                            color: 'var(--service-color)',
                            background: 'none',
                            border: 'none',
                            cursor: 'pointer',
                            fontWeight: 600,
                            padding: 0,
                            display: 'flex',
                            alignItems: 'center',
                            gap: 6
                          }}
                          onClick={() => openDetails('sbp')}
                          aria-expanded={showDetails.sbp}
                          aria-controls="sbp-details"
                        >
                          Learn More
                          <span style={{ display: 'inline-block', transform: 'translateY(1px)' }}>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </span>
                        </button>
                      </>
                    ) : (
                      <div id="sbp-details" className="service-description" style={{ textAlign: 'left', fontSize: 15, color: '#fff', opacity: 0.92, position: 'relative' }}>
                        <button
                          className="service-details-close"
                          style={{
                            position: 'absolute',
                            top: 8,
                            right: 8,
                            background: 'none',
                            border: 'none',
                            color: 'var(--service-color)',
                            fontSize: 18,
                            fontWeight: 700,
                            cursor: 'pointer',
                            padding: 0,
                            lineHeight: 1
                          }}
                          onClick={() => closeDetails('sbp')}
                          aria-label="Close details"
                        >
                          ×
                        </button>
                        <div style={{ fontWeight: 600, marginBottom: 4, marginTop: 8 }}>What We Do:</div>
                        <div style={{ marginBottom: 10 }}>
                          We co-create brand and campaign strategies using consumer research and market understanding.
                        </div>
                        <div style={{ fontWeight: 600, marginBottom: 4 }}>Key Services:</div>
                        <ul style={{ margin: 0, paddingLeft: 18, marginBottom: 10, listStyle: 'disc' }}>
                          <li>Go-to-market strategy</li>
                          <li>Campaign & messaging development</li>
                          <li>Field team recruitment and onboarding</li>
                        </ul>
                        <div style={{ fontWeight: 600, marginBottom: 4 }}>Why Brands Choose This:</div>
                        <div style={{ marginBottom: 10 }}>
                          To ensure their campaigns are not just creative—but aligned with actual consumer behavior, purchase intent, and channel fit. Ideal for launches, repositioning, or market expansion.
                        </div>
                      </div>
                    )}
                  </>
                ) : service.slug === 'brand-activation' ? (
                  <>
                    {!showDetails.ba ? (
                      <>
                        <p className="service-description">Creative campaigns to bring your brand to life and engage audiences.</p>
                        <button
                          className="service-details-toggle"
                          style={{
                            marginTop: 8,
                            fontSize: 13,
                            color: 'var(--service-color)',
                            background: 'none',
                            border: 'none',
                            cursor: 'pointer',
                            fontWeight: 600,
                            padding: 0,
                            display: 'flex',
                            alignItems: 'center',
                            gap: 6
                          }}
                          onClick={() => openDetails('ba')}
                          aria-expanded={showDetails.ba}
                          aria-controls="ba-details"
                        >
                          Learn More
                          <span style={{ display: 'inline-block', transform: 'translateY(1px)' }}>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </span>
                        </button>
                      </>
                    ) : (
                      <div id="ba-details" className="service-description" style={{ textAlign: 'left', fontSize: 15, color: '#fff', opacity: 0.92, position: 'relative' }}>
                        <button
                          className="service-details-close"
                          style={{
                            position: 'absolute',
                            top: 8,
                            right: 8,
                            background: 'none',
                            border: 'none',
                            color: 'var(--service-color)',
                            fontSize: 18,
                            fontWeight: 700,
                            cursor: 'pointer',
                            padding: 0,
                            lineHeight: 1
                          }}
                          onClick={() => closeDetails('ba')}
                          aria-label="Close details"
                        >
                          ×
                        </button>
                        <div style={{ fontWeight: 600, marginBottom: 4, marginTop: 8 }}>What We Do:</div>
                        <div style={{ marginBottom: 10 }}>
                          On-ground brand engagements that generate awareness, trial, and affinity.
                        </div>
                        <div style={{ fontWeight: 600, marginBottom: 4 }}>Key Services:</div>
                        <ul style={{ margin: 0, paddingLeft: 18, marginBottom: 10, listStyle: 'disc' }}>
                          <li>Mall & In-store Promotions</li>
                          <li>Kiosk Campaigns</li>
                          <li>Society & RWA Activations</li>
                          <li>Rural Outreach (Tier 2–4)</li>
                          <li>Door-to-Door Promotions</li>
                        </ul>
                        <div style={{ fontWeight: 600, marginBottom: 4 }}>Why Brands Choose This:</div>
                        <div style={{ marginBottom: 10 }}>
                          Because physical interaction builds trust. Our activations turn impressions into conversations—and conversations into conversions.
                        </div>
                      </div>
                    )}
                  </>
                ) : service.slug === 'promotions-visibility' ? (
                  <>
                    {!showDetails.pv ? (
                      <>
                        <p className="service-description">High-impact promotions and visibility solutions across channels.</p>
                        <button
                          className="service-details-toggle"
                          style={{
                            marginTop: 8,
                            fontSize: 13,
                            color: 'var(--service-color)',
                            background: 'none',
                            border: 'none',
                            cursor: 'pointer',
                            fontWeight: 600,
                            padding: 0,
                            display: 'flex',
                            alignItems: 'center',
                            gap: 6
                          }}
                          onClick={() => openDetails('pv')}
                          aria-expanded={showDetails.pv}
                          aria-controls="pv-details"
                        >
                          Learn More
                          <span style={{ display: 'inline-block', transform: 'translateY(1px)' }}>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </span>
                        </button>
                      </>
                    ) : (
                      <div id="pv-details" className="service-description" style={{ textAlign: 'left', fontSize: 15, color: '#fff', opacity: 0.92, position: 'relative' }}>
                        <button
                          className="service-details-close"
                          style={{
                            position: 'absolute',
                            top: 8,
                            right: 8,
                            background: 'none',
                            border: 'none',
                            color: 'var(--service-color)',
                            fontSize: 18,
                            fontWeight: 700,
                            cursor: 'pointer',
                            padding: 0,
                            lineHeight: 1
                          }}
                          onClick={() => closeDetails('pv')}
                          aria-label="Close details"
                        >
                          ×
                        </button>
                        <div style={{ fontWeight: 600, marginBottom: 4, marginTop: 8 }}>What We Do:</div>
                        <div style={{ marginBottom: 10 }}>
                          Ensure your product is seen, remembered, and picked from the shelf.
                        </div>
                        <div style={{ fontWeight: 600, marginBottom: 4 }}>Key Services:</div>
                        <ul style={{ margin: 0, paddingLeft: 18, marginBottom: 10, listStyle: 'disc' }}>
                          <li>Product Sampling (Events, Retail, Community)</li>
                          <li>Visual Merchandising</li>
                          <li>POS Branding</li>
                          <li>Retail Trial Generation Campaigns</li>
                        </ul>
                        <div style={{ fontWeight: 600, marginBottom: 4 }}>Why Brands Choose This:</div>
                        <div style={{ marginBottom: 10 }}>
                          To bridge the gap between marketing and purchase behavior—our campaigns focus on conversion, not just visibility.
                        </div>
                      </div>
                    )}
                  </>
                ) : service.slug === 'market-research' ? (
                  <>
                    {!showDetails.mr ? (
                      <>
                        <p className="service-description">Data-driven insights and consumer research for informed decisions.</p>
                        <button
                          className="service-details-toggle"
                          style={{
                            marginTop: 8,
                            fontSize: 13,
                            color: 'var(--service-color)',
                            background: 'none',
                            border: 'none',
                            cursor: 'pointer',
                            fontWeight: 600,
                            padding: 0,
                            display: 'flex',
                            alignItems: 'center',
                            gap: 6
                          }}
                          onClick={() => openDetails('mr')}
                          aria-expanded={showDetails.mr}
                          aria-controls="mr-details"
                        >
                          Learn More
                          <span style={{ display: 'inline-block', transform: 'translateY(1px)' }}>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </span>
                        </button>
                      </>
                    ) : (
                      <div id="mr-details" className="service-description" style={{ textAlign: 'left', fontSize: 15, color: '#fff', opacity: 0.92, position: 'relative' }}>
                        <button
                          className="service-details-close"
                          style={{
                            position: 'absolute',
                            top: 8,
                            right: 8,
                            background: 'none',
                            border: 'none',
                            color: 'var(--service-color)',
                            fontSize: 18,
                            fontWeight: 700,
                            cursor: 'pointer',
                            padding: 0,
                            lineHeight: 1
                          }}
                          onClick={() => closeDetails('mr')}
                          aria-label="Close details"
                        >
                          ×
                        </button>
                        <div style={{ fontWeight: 600, marginBottom: 4, marginTop: 8 }}>What We Do:</div>
                        <div style={{ marginBottom: 10 }}>
                          Get real-time insights that guide strategy, execution, and optimization.
                        </div>
                        <div style={{ fontWeight: 600, marginBottom: 4 }}>Key Services:</div>
                        <ul style={{ margin: 0, paddingLeft: 18, marginBottom: 10, listStyle: 'disc' }}>
                          <li>Product Concept Testing</li>
                          <li>Consumer Feedback Collection</li>
                          <li>Purchase Behavior Tracking</li>
                          <li>Mystery Shopping & Retail Audits</li>
                        </ul>
                        <div style={{ fontWeight: 600, marginBottom: 4 }}>Why Brands Choose This:</div>
                        <div style={{ marginBottom: 10 }}>
                          Because smart decisions begin with sharp insights. We go beyond surveys—we listen, observe, and decode intent.
                        </div>
                        <div style={{ marginTop: 12, fontWeight: 600, color: '#e53935', display: 'flex', alignItems: 'center', gap: 6 }}>
                          Need large-scale research support?
                        </div>
                        <div style={{ marginTop: 2, fontWeight: 600 }}>
                          Explore our sister company: <br /> <a href="https://fieldnetglobal.com" target="_blank" rel="noopener noreferrer" style={{ color: 'blue', textDecoration: 'underline' }}>Fieldnet Global Research</a>
                        </div>
                      </div>
                    )}
                  </>
                ) : service.slug === 'event-marketing' ? (
                  <>
                    {!showDetails.em ? (
                      <>
                        <p className="service-description">End-to-end event planning, management, and brand experiences.</p>
                        <button
                          className="service-details-toggle"
                          style={{
                            marginTop: 8,
                            fontSize: 13,
                            color: 'var(--service-color)',
                            background: 'none',
                            border: 'none',
                            cursor: 'pointer',
                            fontWeight: 600,
                            padding: 0,
                            display: 'flex',
                            alignItems: 'center',
                            gap: 6
                          }}
                          onClick={() => openDetails('em')}
                          aria-expanded={showDetails.em}
                          aria-controls="em-details"
                        >
                          Learn More
                          <span style={{ display: 'inline-block', transform: 'translateY(1px)' }}>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </span>
                        </button>
                      </>
                    ) : (
                      <div id="em-details" className="service-description" style={{ textAlign: 'left', fontSize: 15, color: '#fff', opacity: 0.92, position: 'relative' }}>
                        <button
                          className="service-details-close"
                          style={{
                            position: 'absolute',
                            top: 8,
                            right: 8,
                            background: 'none',
                            border: 'none',
                            color: 'var(--service-color)',
                            fontSize: 18,
                            fontWeight: 700,
                            cursor: 'pointer',
                            padding: 0,
                            lineHeight: 1
                          }}
                          onClick={() => closeDetails('em')}
                          aria-label="Close details"
                        >
                          ×
                        </button>
                        <div style={{ fontWeight: 600, marginBottom: 4, marginTop: 8 }}>What We Do:</div>
                        <div style={{ marginBottom: 10 }}>
                          Turn brand moments into consumer memories through curated event activations.
                        </div>
                        <div style={{ fontWeight: 600, marginBottom: 4 }}>Key Services:</div>
                        <ul style={{ margin: 0, paddingLeft: 18, marginBottom: 10, listStyle: 'disc' }}>
                          <li>Trade Shows & Industry Exhibits</li>
                          <li>Roadshows & Public Activations</li>
                          <li>On-Ground Product Launch Events</li>
                          <li>Sampling at High-Footfall Venues</li>
                        </ul>
                        <div style={{ fontWeight: 600, marginBottom: 4 }}>Why Brands Choose This:</div>
                        <div style={{ marginBottom: 10 }}>
                          To build high-impact, localized brand engagement at scale, especially during festive seasons, launches, or awareness drives.
                        </div>
                      </div>
                    )}
                  </>
                ) : service.slug === 'btl-execution-field-management' ? (
                  <>
                    {!showDetails.btl ? (
                      <>
                        <p className="service-description">Seamless below-the-line execution and on-ground team management.</p>
                        <button
                          className="service-details-toggle"
                          style={{
                            marginTop: 8,
                            fontSize: 13,
                            color: 'var(--service-color)',
                            background: 'none',
                            border: 'none',
                            cursor: 'pointer',
                            fontWeight: 600,
                            padding: 0,
                            display: 'flex',
                            alignItems: 'center',
                            gap: 6
                          }}
                          onClick={() => openDetails('btl')}
                          aria-expanded={showDetails.btl}
                          aria-controls="btl-details"
                        >
                          Learn More
                          <span style={{ display: 'inline-block', transform: 'translateY(1px)' }}>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </span>
                        </button>
                      </>
                    ) : (
                      <div id="btl-details" className="service-description" style={{ textAlign: 'left', fontSize: 15, color: '#fff', opacity: 0.92, position: 'relative' }}>
                        <button
                          className="service-details-close"
                          style={{
                            position: 'absolute',
                            top: 8,
                            right: 8,
                            background: 'none',
                            border: 'none',
                            color: 'var(--service-color)',
                            fontSize: 18,
                            fontWeight: 700,
                            cursor: 'pointer',
                            padding: 0,
                            lineHeight: 1
                          }}
                          onClick={() => closeDetails('btl')}
                          aria-label="Close details"
                        >
                          ×
                        </button>
                        <div style={{ fontWeight: 600, marginBottom: 4, marginTop: 8 }}>What We Do:</div>
                        <div style={{ marginBottom: 10 }}>
                          We take full ownership of campaign delivery with accuracy, control, and quality.
                        </div>
                        <div style={{ fontWeight: 600, marginBottom: 4 }}>Key Services:</div>
                        <ul style={{ margin: 0, paddingLeft: 18, marginBottom: 10, listStyle: 'disc' }}>
                          <li>On-ground Execution & Logistics</li>
                          <li>Field Staff Management & Supervision</li>
                          <li>Live Monitoring & Quality Control</li>
                          <li>PDCA-Based Operational Loop</li>
                        </ul>
                        <div style={{ fontWeight: 600, marginBottom: 4 }}>Why Brands Choose This:</div>
                        <div style={{ marginBottom: 10 }}>
                          Because execution is everything. Our tech-enabled approach (GPS tracking, audit teams, real-time dashboards) ensures precision and accountability.
                        </div>
                      </div>
                    )}
                  </>
                ) : service.slug === 'digital-marketing-support' ? (
                  <>
                    {!showDetails.dms ? (
                      <>
                        <p className="service-description">Integrated digital campaigns and online marketing support.</p>
                        <button
                          className="service-details-toggle"
                          style={{
                            marginTop: 8,
                            fontSize: 13,
                            color: 'var(--service-color)',
                            background: 'none',
                            border: 'none',
                            cursor: 'pointer',
                            fontWeight: 600,
                            padding: 0,
                            display: 'flex',
                            alignItems: 'center',
                            gap: 6
                          }}
                          onClick={() => openDetails('dms')}
                          aria-expanded={showDetails.dms}
                          aria-controls="dms-details"
                        >
                          Learn More
                          <span style={{ display: 'inline-block', transform: 'translateY(1px)' }}>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </span>
                        </button>
                      </>
                    ) : (
                      <div id="dms-details" className="service-description" style={{ textAlign: 'left', fontSize: 15, color: '#fff', opacity: 0.92, position: 'relative' }}>
                        <button
                          className="service-details-close"
                          style={{
                            position: 'absolute',
                            top: 8,
                            right: 8,
                            background: 'none',
                            border: 'none',
                            color: 'var(--service-color)',
                            fontSize: 18,
                            fontWeight: 700,
                            cursor: 'pointer',
                            padding: 0,
                            lineHeight: 1
                          }}
                          onClick={() => closeDetails('dms')}
                          aria-label="Close details"
                        >
                          ×
                        </button>
                        <div style={{ fontWeight: 600, marginBottom: 4, marginTop: 8 }}>What We Do:</div>
                        <div style={{ marginBottom: 10 }}>
                          Extend your on-ground presence with digital amplification and analytics.
                        </div>
                        <div style={{ fontWeight: 600, marginBottom: 4 }}>Key Services:</div>
                        <ul style={{ margin: 0, paddingLeft: 18, marginBottom: 10, listStyle: 'disc' }}>
                          <li>Social Media Content (Activation-focused)</li>
                          <li>Paid Ads (Google, Meta)</li>
                          <li>Influencer Tie-ins for regional relevance</li>
                          <li>Lead Tracking & Campaign Analytics</li>
                        </ul>
                        <div style={{ fontWeight: 600, marginBottom: 4 }}>Why Brands Choose This:</div>
                        <div style={{ marginBottom: 10 }}>
                          To maximize ROI from their offline efforts by syncing them with the consumer’s digital journey—creating a true omnichannel impact.
                        </div>
                      </div>
                    )}
                  </>
                ) : (
                  <p className="service-description">{service.description}</p>
                )}
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="services-cta">
          <h3>Looking to scale your marketing efforts<br />
            with research-backed campaigns?</h3>
          <p>Let’s make it happen — the Kaizen way.</p>
          <button onClick={scrollToContact} className="services-cta-button" aria-label="Get Started Today">
            Get Started Today
            <i className="fas fa-arrow-right" aria-hidden="true"></i>
          </button>
        </div>
      </div>
    </section>
  )
}

export default ServicesOffered