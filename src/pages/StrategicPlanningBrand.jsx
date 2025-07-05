import React, { useState, useEffect, useRef } from 'react';
import Navbar from '../components/home/Navbar';
import Footer from '../components/home/Footer';
import FooterMenu from '../components/home/FooterMenu';
import ContactForm from '../components/home/ContactForm';
import '../styles/strategicPlanningBrand.css';

export default function StrategicPlanningBrand() {
    const [isVisible, setIsVisible] = useState(false);
    const [animatedNumbers, setAnimatedNumbers] = useState([0, 0, 0]);
    const heroRef = useRef(null);

    const heroStats = [
        {
            number: "150+",
            label: "Brands Strategized",
            targetNumber: 150
        },
        {
            number: "85%",
            label: "Market Share Growth",
            targetNumber: 85
        },
        {
            number: "5+",
            label: "Years Experience",
            targetNumber: 5
        }
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !isVisible) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.3 }
        );

        if (heroRef.current) {
            observer.observe(heroRef.current);
        }

        return () => {
            if (heroRef.current) {
                observer.unobserve(heroRef.current);
            }
        };
    }, [isVisible]);

    useEffect(() => {
        if (isVisible) {
            heroStats.forEach((stat, index) => {
                const duration = 2000; // 2 seconds
                const startTime = Date.now();
                const startValue = 0;
                const endValue = stat.targetNumber;

                const animate = () => {
                    const elapsed = Date.now() - startTime;
                    const progress = Math.min(elapsed / duration, 1);

                    // Easing function for smooth animation
                    const easeOutQuart = 1 - Math.pow(1 - progress, 4);
                    const currentValue = Math.floor(startValue + (endValue - startValue) * easeOutQuart);

                    setAnimatedNumbers(prev => {
                        const newNumbers = [...prev];
                        newNumbers[index] = currentValue;
                        return newNumbers;
                    });

                    if (progress < 1) {
                        requestAnimationFrame(animate);
                    }
                };

                // Stagger the start of each animation
                setTimeout(() => {
                    animate();
                }, index * 200);
            });
        }
    }, [isVisible]);

    const formatNumber = (value, index) => {
        if (index === 1) return `${value}%`;
        return `${value}+`;
    };
    return (
        <div className="strategic-planning-page">
            <Navbar />

            {/* Hero Section */}
            <section className="strategic-hero" ref={heroRef}>
                <div className="strategic-hero-container">
                    <div className="strategic-hero-content">
                        <div className="strategic-hero-badge">
                            <i className="fas fa-chess-knight"></i>
                            <span>Strategic Excellence</span>
                        </div>
                        <div className="strategic-hero-visual-mobile">
                            <div className="strategic-chart">
                                <div className="chart-element chart-1"></div>
                                <div className="chart-element chart-2"></div>
                                <div className="chart-element chart-3"></div>
                                <div className="chart-element chart-4"></div>
                            </div>
                        </div>
                        <h1 className="strategic-hero-title">
                            Strategic Planning & Brand Development
                        </h1>
                        <p className="strategic-hero-description">
                            Transform your business vision into market reality with comprehensive brand strategy,
                            positioning, and planning that drives sustainable growth and competitive advantage.
                        </p>
                        <div className="strategic-hero-stats">
                            {heroStats.map((stat, index) => (
                                <div key={index} className="stat-item">
                                    <span className="hero-stat-number">
                                        {isVisible ? formatNumber(animatedNumbers[index], index) : "0"}
                                    </span>
                                    <span className="hero-stat-label">{stat.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="strategic-hero-visual-desktop">
                        <div className="strategic-chart">
                            <div className="chart-element chart-1"></div>
                            <div className="chart-element chart-2"></div>
                            <div className="chart-element chart-3"></div>
                            <div className="chart-element chart-4"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Approach Section */}
            <section className="strategic-approach">
                <div className="strategic-container">
                    <div className="approach-header">
                        <h2>Our Strategic Approach</h2>
                        <p>We follow a proven methodology that transforms insights into actionable strategies</p>
                    </div>

                    <div className="approach-steps">
                        <div className="step-item">
                            <div className="step-number">01</div>
                            <div className="step-content">
                                <h3>Discovery & Analysis</h3>
                                <p>Deep dive into your market, competitors, and consumer behavior to identify opportunities and challenges.</p>
                                <ul>
                                    <li>Market landscape analysis</li>
                                    <li>Competitive intelligence</li>
                                    <li>Consumer insights research</li>
                                    <li>Brand audit and assessment</li>
                                </ul>
                            </div>
                        </div>

                        <div className="step-item">
                            <div className="step-number">02</div>
                            <div className="step-content">
                                <h3>Strategy Development</h3>
                                <p>Craft a comprehensive brand strategy that aligns with your business objectives and market realities.</p>
                                <ul>
                                    <li>Brand positioning strategy</li>
                                    <li>Value proposition design</li>
                                    <li>Target audience segmentation</li>
                                    <li>Messaging framework</li>
                                </ul>
                            </div>
                        </div>

                        <div className="step-item">
                            <div className="step-number">03</div>
                            <div className="step-content">
                                <h3>Implementation Planning</h3>
                                <p>Develop detailed roadmaps and action plans to bring your strategy to life across all touchpoints.</p>
                                <ul>
                                    <li>Go-to-market strategy</li>
                                    <li>Channel strategy optimization</li>
                                    <li>Campaign planning</li>
                                    <li>Timeline and milestone mapping</li>
                                </ul>
                            </div>
                        </div>

                        <div className="step-item">
                            <div className="step-number">04</div>
                            <div className="step-content">
                                <h3>Monitoring & Optimization</h3>
                                <p>Continuously track performance and refine strategies based on market feedback and results.</p>
                                <ul>
                                    <li>KPI tracking and analysis</li>
                                    <li>Market response monitoring</li>
                                    <li>Strategy refinement</li>
                                    <li>ROI optimization</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Breakdown */}
            <section className="strategic-services">
                <div className="strategic-container">
                    <h2>Strategic Planning Services</h2>

                    <div className="services-grid">
                        <div className="service-detail-card">
                            <div className="service-icon">
                                <i className="fas fa-bullseye"></i>
                            </div>
                            <h3>Brand Positioning</h3>
                            <p>Define your unique market position and differentiation strategy that resonates with your target audience.</p>
                            <div className="service-features">
                                <span>Competitive Analysis</span>
                                <span>Market Mapping</span>
                                <span>Positioning Statement</span>
                            </div>
                        </div>

                        <div className="service-detail-card">
                            <div className="service-icon">
                                <i className="fas fa-users"></i>
                            </div>
                            <h3>Target Audience Strategy</h3>
                            <p>Identify and understand your ideal customers to create more effective marketing campaigns.</p>
                            <div className="service-features">
                                <span>Persona Development</span>
                                <span>Behavioral Analysis</span>
                                <span>Journey Mapping</span>
                            </div>
                        </div>

                        <div className="service-detail-card">
                            <div className="service-icon">
                                <i className="fas fa-comments"></i>
                            </div>
                            <h3>Messaging Framework</h3>
                            <p>Develop consistent, compelling messaging that communicates your value across all channels.</p>
                            <div className="service-features">
                                <span>Brand Voice</span>
                                <span>Key Messages</span>
                                <span>Content Strategy</span>
                            </div>
                        </div>

                        <div className="service-detail-card">
                            <div className="service-icon">
                                <i className="fas fa-rocket"></i>
                            </div>
                            <h3>Go-to-Market Strategy</h3>
                            <p>Plan and execute successful product launches and market entry strategies.</p>
                            <div className="service-features">
                                <span>Launch Planning</span>
                                <span>Channel Strategy</span>
                                <span>Timing Optimization</span>
                            </div>
                        </div>

                        <div className="service-detail-card">
                            <div className="service-icon">
                                <i className="fas fa-chart-line"></i>
                            </div>
                            <h3>Growth Strategy</h3>
                            <p>Identify and capitalize on opportunities for sustainable business growth and expansion.</p>
                            <div className="service-features">
                                <span>Market Expansion</span>
                                <span>Revenue Optimization</span>
                                <span>Scalability Planning</span>
                            </div>
                        </div>

                        <div className="service-detail-card">
                            <div className="service-icon">
                                <i className="fas fa-shield-alt"></i>
                            </div>
                            <h3>Brand Protection</h3>
                            <p>Safeguard your brand reputation and maintain consistency across all touchpoints.</p>
                            <div className="service-features">
                                <span>Brand Guidelines</span>
                                <span>Reputation Management</span>
                                <span>Crisis Planning</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Case Study Preview */}
            <section className="strategic-case-study">
                <div className="strategic-container">
                    <div className="case-study-content">
                        <div className="case-study-text">
                            <h2>Success Story</h2>
                            <h3>Transforming a Local Brand into Market Leader</h3>
                            <p>
                                We helped a regional FMCG brand develop a comprehensive strategic plan that resulted in
                                300% revenue growth and expansion into 5 new markets within 18 months.
                            </p>
                            <div className="case-study-results">
                                <div className="result-item">
                                    <span className="result-number">300%</span>
                                    <span className="result-label">Revenue Growth</span>
                                </div>
                                <div className="result-item">
                                    <span className="result-number">5</span>
                                    <span className="result-label">New Markets</span>
                                </div>
                                <div className="result-item">
                                    <span className="result-number">18</span>
                                    <span className="result-label">Months Timeline</span>
                                </div>
                            </div>
                            <button className="case-study-cta">
                                View Full Case Study
                                <i className="fas fa-arrow-right"></i>
                            </button>
                        </div>
                        <div className="case-study-visual">
                            <div className="growth-chart">
                                <div className="chart-bar" style={{ "--height": "20%" }}></div>
                                <div className="chart-bar" style={{ "--height": "35%" }}></div>
                                <div className="chart-bar" style={{ "--height": "50%" }}></div>
                                <div className="chart-bar" style={{ "--height": "75%" }}></div>
                                <div className="chart-bar" style={{ "--height": "100%" }}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="strategic-why-choose">
                <div className="strategic-container">
                    <h2>Why Choose Kaizen for Strategic Planning?</h2>

                    <div className="why-choose-grid">
                        <div className="why-choose-item">
                            <div className="why-icon">
                                <i className="fas fa-brain"></i>
                            </div>
                            <h3>Data-Driven Insights</h3>
                            <p>Every strategy is backed by comprehensive market research and consumer insights.</p>
                        </div>

                        <div className="why-choose-item">
                            <div className="why-icon">
                                <i className="fas fa-cogs"></i>
                            </div>
                            <h3>Proven Methodology</h3>
                            <p>Our structured approach has been refined through years of successful implementations.</p>
                        </div>

                        <div className="why-choose-item">
                            <div className="why-icon">
                                <i className="fas fa-handshake"></i>
                            </div>
                            <h3>Collaborative Partnership</h3>
                            <p>We work closely with your team to ensure alignment and successful execution.</p>
                        </div>

                        <div className="why-choose-item">
                            <div className="why-icon">
                                <i className="fas fa-chart-line"></i>
                            </div>
                            <h3>Measurable Results</h3>
                            <p>Clear KPIs and regular reporting to track progress and optimize performance.</p>
                        </div>
                    </div>
                </div>
            </section>

            <ContactForm />
            <FooterMenu />
            <Footer />
        </div>
    );
}