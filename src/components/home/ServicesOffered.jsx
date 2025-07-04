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
      text: "Strategic Planning Brand", 
      color: "#81c784",
      icon: "fas fa-chess-knight",
      description: "Comprehensive brand strategy development and market positioning",
      slug: "strategic-planning-brand"
    },
    { 
      text: "Mall Promotion", 
      color: "#64b5f6",
      icon: "fas fa-shopping-bag",
      description: "High-impact promotional campaigns in shopping centers",
      slug: "mall-promotion"
    },
    { 
      text: "Sampling Campaign", 
      color: "#ffb74d",
      icon: "fas fa-gift",
      description: "Product sampling and trial campaigns for maximum reach",
      slug: "sampling-campaign"
    },
    { 
      text: "Market Research", 
      color: "#ba68c8",
      icon: "fas fa-chart-line",
      description: "Data-driven insights and consumer behavior analysis",
      slug: "market-research"
    },
    { 
      text: "In-store Promotions", 
      color: "#4db6ac",
      icon: "fas fa-store",
      description: "Point-of-sale activations and retail environment marketing",
      slug: "in-store-promotions"
    },
    { 
      text: "Digital Marketing", 
      color: "#ffd54f",
      icon: "fas fa-laptop",
      description: "Complete digital strategy, social media, and online campaigns",
      slug: "digital-marketing"
    },
    { 
      text: "POS Materials", 
      color: "#f06292",
      icon: "fas fa-palette",
      description: "Eye-catching point-of-sale displays and marketing materials",
      slug: "pos-materials"
    },
    { 
      text: "Trade Shows", 
      color: "#7986cb",
      icon: "fas fa-handshake",
      description: "Exhibition booth design and trade show management",
      slug: "trade-shows"
    },
    { 
      text: "Event Sponsorships", 
      color: "#90a4ae",
      icon: "fas fa-users",
      description: "Brand partnerships and collaborative marketing initiatives",
      slug: "collaborations"
    }
  ]

  return (
    <section className="services-offered">
      <div className="services-container">
        {/* Header Section */}
        <div className="services-header">
          <h2 className="services-heading">Our Expertise</h2>
          <p className="services-description">
            From strategy to execution, we deliver comprehensive marketing solutions 
            across all channels to drive your brand's success and growth.
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
          <h3>Ready to elevate your brand?</h3>
          <p>Let's discuss how our services can drive your business forward</p>
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