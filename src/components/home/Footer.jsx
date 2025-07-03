import React from 'react';
import '../../styles/footer.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function Footer() {
  return (
    <footer className="kaizen-footer">
      <div className="footer-container">
        {/* Left Side: Copyright */}
        <div className="footer-left">
          © {new Date().getFullYear()} Kaizen. All rights reserved.
        </div>

        {/* Right Side: Social Links */}
        <div className="footer-right">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-x-twitter"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}