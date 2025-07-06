import React from 'react'
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
          {services.map((service, index) => (
            <Link
              key={index}
              to={`/services/${service.slug}`}
              className="service-card-link"
            >
              <div
                className="service-card"
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
                <p className="service-description">{service.description}</p>
                <div className="service-arrow">
                  <i className="fas fa-arrow-right"></i>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA Section */}
        <div className="services-cta">
          <h3>Looking to scale your marketing efforts<br />
            with research-backed campaigns?</h3>
          <p>Let’s make it happen — the Kaizen way.</p>
          <button onClick={scrollToContact} className="services-cta-button">
            Get Started Today
            <i className="fas fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </section>
  )
}

export default ServicesOffered