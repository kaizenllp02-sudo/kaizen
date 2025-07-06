import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/home/Navbar';
import AboutKaizen from '../components/home/AboutKaizen';
import ContactForm from '../components/home/ContactForm';
import FAQ from '../components/home/FAQ';
import FooterMenu from '../components/home/FooterMenu';
import Footer from '../components/home/Footer';
import { client, urlFor } from '../lib/sanity';
import '../styles/about.css';

export default function About() {
  const [latestBlogs, setLatestBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLatestBlogs = async () => {
      try {
        const blogsQuery = `*[_type == "post" && defined(slug.current)] | order(publishedAt desc)[0...2]{
          _id,
          title,
          slug,
          mainImage,
          publishedAt,
          excerpt,
          categories[]->{
            _id,
            title
          }
        }`;
        
        const blogs = await client.fetch(blogsQuery);
        setLatestBlogs(blogs);
      } catch (error) {
        console.error('Error fetching latest blogs:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchLatestBlogs();
  }, []);
  
  return (
    <div className="about-page">
      <Navbar />
      <main className="about-main">
        <section className="about-content">
          <div className="about-container">
            {/* Hero Section */}
            <div className="about-hero">
              <div className="about-hero-content">
                <div className="about-hero-left">
                  <div className="about-badge">OUR STORY</div>
                  <h1 className="about-hero-title">
                    Traditional promotions create the emotion <span className='highlight'>→</span><br />
                    <span className="highlight">Performance marketing captures the action</span>
                  </h1>
                  <p className="about-hero-description">
                    Kaizen is a research-driven marketing agency that blends strategy, creativity, and flawless execution. 
                    We specialize in turning customer insights into campaigns that drive awareness, trial, and loyalty across 
                    traditional and digital channels.
                  </p>
                  
                  {/* Stats Section */}
                  <div className="about-stats">
                    <div className="about-stat-item">
                      <div className="about-stat-number">300+</div>
                      <div className="about-stat-label">Completed Projects</div>
                    </div>
                    <div className="about-stat-item">
                      <div className="about-stat-number">50+</div>
                      <div className="about-stat-label">Satisfied Customers</div>
                    </div>
                    <div className="about-stat-item">
                      <div className="about-stat-number">15+</div>
                      <div className="about-stat-label">Years Of Mastery</div>
                    </div>
                    <div className="about-stat-item">
                      <div className="about-stat-number">25+</div>
                      <div className="about-stat-label">Brand Partners</div>
                    </div>
                  </div>
                </div>

                <div className="about-hero-right">
                  {/* Blog Cards */}
                  <div className="blog-cards">
                    {loading ? (
                      // Loading placeholder
                      <>
                        <div className="blog-card loading">
                          <div className="blog-content">
                            <div className="blog-title-row">
                              <h4 className="blog-title">Loading...</h4>
                              <p className="blog-date">...</p>
                            </div>
                            <p className="blog-excerpt">Loading content...</p>
                          </div>
                        </div>
                        <div className="blog-card loading">
                          <div className="blog-content">
                            <div className="blog-title-row">
                              <h4 className="blog-title">Loading...</h4>
                              <p className="blog-date">...</p>
                            </div>
                            <p className="blog-excerpt">Loading content...</p>
                          </div>
                        </div>
                      </>
                    ) : (
                      latestBlogs.map((blog, index) => (
                        <Link
                          key={blog._id}
                          to={`/blog/${blog.slug.current}`}
                          className="blog-card-link"
                          aria-label={`Read blog post: ${blog.title}`}
                        >
                          <div className="blog-card">
                            <div className="blog-content">
                              <div className="blog-title-row">
                                <h4 className="blog-title">{blog.title}</h4>
                                <p className="blog-date">
                                  {new Date(blog.publishedAt).toLocaleDateString('en-US', {
                                    month: 'short',
                                    day: 'numeric',
                                    year: 'numeric'
                                  })}
                                </p>
                              </div>
                              {blog.excerpt && (
                                <p className="blog-excerpt">{blog.excerpt}</p>
                              )}
                            </div>
                          </div>
                        </Link>
                      ))
                    )}
                  </div>

                  {/* Main Team Image */}
                  <div className="main-team-image">
                    <img
                      src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=500&h=400&fit=crop&auto=format"
                      alt="Team working together"
                      width="500"
                      height="400"
                      loading="lazy"
                      decoding="async"
                      style={{ borderRadius: '12px', width: '100%', objectFit: 'cover' }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Content Sections */}
            <div className="about-sections-grid">
              <div className="about-section">
                <h2>Why Choose Kaizen?</h2>
                <ul>
                  <li>30+ years of combined leadership experience</li>
                  <li>In-house research and field execution teams</li>
                  <li>Execution tracking built on real-time learning</li>
                  <li>Trusted by some of India's most recognized brands</li>
                </ul>
              </div>

              <div className="about-section">
                <h2>Our Approach</h2>
                <ul>
                  <li>Listen. Learn. Engage.</li>
                  <li>Strategize. Execute. Improve.</li>
                  <li>Use the PDCA (Plan-Do-Check-Act) cycle for every campaign</li>
                </ul>
              </div>
            </div>

            {/* What Sets Us Apart Section */}
            <div className="what-sets-us-apart">
              <div className="what-sets-header">
                <h2 className="what-sets-title">What Sets Us Apart</h2>
                <p className="what-sets-subtitle">Our unique combination of research expertise, execution excellence, and strategic thinking</p>
              </div>

              <div className="what-sets-grid">
                <div className="what-sets-item">
                  <div className="what-sets-number">01</div>
                  <div className="what-sets-content">
                    <h3>Research-Backed Execution</h3>
                    <p>We bridge the gap between market research and marketing execution — ensuring every campaign is grounded in real consumer insights.</p>
                  </div>
                </div>

                <div className="what-sets-item">
                  <div className="what-sets-number">02</div>
                  <div className="what-sets-content">
                    <h3>Data-Driven Campaign Design</h3>
                    <p>Our strategy teams leverage audits, interviews, and usage studies to shape campaigns that resonate with real customer behavior.</p>
                  </div>
                </div>

                <div className="what-sets-item">
                  <div className="what-sets-number">03</div>
                  <div className="what-sets-content">
                    <h3>End-to-End Control</h3>
                    <p>We manage campaigns across the full lifecycle — from planning to staff training, field deployment, and real-time monitoring.</p>
                  </div>
                </div>

                <div className="what-sets-item">
                  <div className="what-sets-number">04</div>
                  <div className="what-sets-content">
                    <h3>Continuous Improvement (Kaizen Philosophy)</h3>
                    <p>True to our name, we apply the PDCA (Plan–Do–Check–Act) loop to constantly optimize campaign performance on the go.</p>
                  </div>
                </div>

                <div className="what-sets-item">
                  <div className="what-sets-number">05</div>
                  <div className="what-sets-content">
                    <h3>Execution Expertise Across India</h3>
                    <p>We've activated campaigns across metros, Tier 2/3 cities, and rural markets — with local teams and on-ground reliability.</p>
                  </div>
                </div>

                <div className="what-sets-item">
                  <div className="what-sets-number">06</div>
                  <div className="what-sets-content">
                    <h3>Experienced Leadership</h3>
                    <p>Led by industry veterans from Nielsen, Fortis, and Dish TV — we bring decades of strategic and operational expertise to every campaign.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <ContactForm />
        <FAQ />
      </main>
      <FooterMenu />
      <Footer />
    </div>
  );
}
