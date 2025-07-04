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
                    <div className="stat-item">
                      <div className="stat-number">300+</div>
                      <div className="stat-label">Completed Projects</div>
                    </div>
                    <div className="stat-item">
                      <div className="stat-number">50+</div>
                      <div className="stat-label">Satisfied Customers</div>
                    </div>
                    <div className="stat-item">
                      <div className="stat-number">15+</div>
                      <div className="stat-label">Years Of Mastery</div>
                    </div>
                    <div className="stat-item">
                      <div className="stat-number">25+</div>
                      <div className="stat-label">Brand Partners</div>
                    </div>
                  </div>

                  {/* Team Preview & Watch Intro */}
                  <div className="about-bottom">
                    <div className="team-preview">
                      <div className="team-avatars">
                        <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face" alt="Team member" className="avatar" />
                        <img src="https://images.unsplash.com/photo-1494790108755-2616b52f5ca2?w=60&h=60&fit=crop&crop=face" alt="Team member" className="avatar" />
                        <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face" alt="Team member" className="avatar" />
                      </div>
                    </div>
                    <div className="watch-intro">
                      <div className="play-button">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </div>
                      <span>WATCH INTRO</span>
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
                          <div className="blog-header">
                            <span className="blog-tag">Loading...</span>
                          </div>
                          <div className="blog-image-placeholder"></div>
                        </div>
                        <div className="blog-card loading">
                          <div className="blog-header">
                            <span className="blog-tag">Loading...</span>
                          </div>
                          <div className="blog-image-placeholder"></div>
                        </div>
                      </>
                    ) : (
                      latestBlogs.map((blog, index) => (
                        <Link key={blog._id} to={`/blog/${blog.slug.current}`} className="blog-card-link">
                          <div className="blog-card">
                            <div className="blog-header">
                              <span className="blog-tag">Blog</span>
                              {blog.categories && blog.categories[0] && (
                                <span className="blog-tag">{blog.categories[0].title}</span>
                              )}
                            </div>
                            {blog.mainImage ? (
                              <img 
                                src={urlFor(blog.mainImage).width(300).height(200).fit('crop').url()} 
                                alt={blog.title}
                                className="blog-image" 
                              />
                            ) : (
                              <div className="blog-image-placeholder">
                                <span>No Image</span>
                              </div>
                            )}
                            <div className="blog-content">
                              <h4 className="blog-title">{blog.title}</h4>
                              <p className="blog-date">
                                {new Date(blog.publishedAt).toLocaleDateString('en-US', {
                                  month: 'short',
                                  day: 'numeric',
                                  year: 'numeric'
                                })}
                              </p>
                            </div>
                          </div>
                        </Link>
                      ))
                    )}
                  </div>

                  {/* Main Team Image */}
                  <div className="main-team-image">
                    <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=500&h=400&fit=crop" alt="Team working together" />
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

            <div className="about-section full-width">
              <h2>Leadership Team</h2>
              <div className="team-members">
                <div className="team-member">
                  <strong>Kamlesh Shukla (Founder & Managing Director)</strong>
                  Former Nielsen executive with 30 years of expertise in market research and consumer insights.
                </div>
                <div className="team-member">
                  <strong>Suneeta Bhagatjee (Executive Director)</strong>
                  Former Dish TV and Gitanjali Gems executive with 18 years of experience in brand and channel marketing.
                </div>
                <div className="team-member">
                  <strong>Shyam Karmakar (Executive Director)</strong>
                  Former Fortis, MarketRx, and IGIDR consultant with over 30 years of research experience.
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
