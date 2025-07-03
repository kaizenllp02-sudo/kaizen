import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import '../../styles/contactform.css';

export default function ContactForm() {
  // Form state for contact form
  const [contactFormData, setContactFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });

  // Form state for newsletter
  const [newsletterData, setNewsletterData] = useState({
    email: '',
  });

  // Success/error messages
  const [contactMessage, setContactMessage] = useState(null);
  const [newsletterMessage, setNewsletterMessage] = useState(null);

  // Handle form input changes
  const handleContactChange = (e) => {
    const { name, value } = e.target;
    setContactFormData({
      ...contactFormData,
      [name]: value,
    });
  };

  const handleNewsletterChange = (e) => {
    const { name, value } = e.target;
    setNewsletterData({
      ...newsletterData,
      [name]: value,
    });
  };

  const textFieldStyle = {
    '& .MuiOutlinedInput-root': {
      backgroundColor: '#1b1f23',
      color: '#f2f2f2',
      '& fieldset': {
        borderColor: '#444',
      },
      '&:hover fieldset': {
        borderColor: '#666',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'rgba(223, 160, 6, 0.9)',
      },
    },
    '& .MuiInputLabel-root': {
      color: 'rgba(245, 245, 245, 0.32)',
      '&.Mui-focused': {
        color: 'rgba(223, 160, 6, 0.9)',
      },
    },
    '& .MuiInputBase-input': {
      color: '#f2f2f2',
    },
  };

  // Custom styling for Buttons to match your theme
  const buttonStyle = {
    backgroundColor: 'rgba(223, 160, 6, 0.9)',
    color: '#000',
    fontWeight: 600,
    '&:hover': {
      backgroundColor: 'rgba(223, 160, 6, 1)',
      transform: 'translateY(-2px)',
    },
    transition: 'background-color 0.3s ease, transform 0.2s ease',
  };

  const handleContactSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: 'b607585b-df32-4754-aa38-e9524e739037',
          subject: 'New Contact Form Submission - Kaizen Marketing',
          from_name: 'Kaizen Website Contact Form',
          ...contactFormData,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setContactMessage('Message sent successfully! We\'ll get back to you soon.');
        setContactFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          message: '',
        });
      } else {
        setContactMessage('Failed to send message. Please try again.');
      }
    } catch (error) {
      setContactMessage('Failed to send message. Please try again.');
    }
  };

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: 'your-web3forms-access-key', // Replace with your actual access key
          subject: 'New Newsletter Subscription - Kaizen Marketing',
          from_name: 'Kaizen Website Newsletter',
          email: newsletterData.email,
          message: 'New newsletter subscription request',
        }),
      });

      const result = await response.json();
      if (result.success) {
        setNewsletterMessage('Successfully subscribed to newsletter!');
        setNewsletterData({ email: '' });
      } else {
        setNewsletterMessage('Failed to subscribe. Please try again.');
      }
    } catch (error) {
      setNewsletterMessage('Failed to subscribe. Please try again.');
    }
  };

  return (
    <section className="kaizen-contact-section">
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h2 style={{
          fontSize: '36px',
          fontWeight: '700',
          color: '#f2f2f2',
          margin: '0 0 10px 0'
        }}>
          Get in Touch
        </h2>
        <p style={{
          fontSize: '18px',
          color: '#ccc',
          margin: '0'
        }}>
          Ready to elevate your brand? Let's create something amazing together.
        </p>
      </div>
      <div className="contact-container">
        {/* Main Contact Form */}
        <form
          onSubmit={handleContactSubmit}
          style={{ display: 'flex', flexDirection: 'column', gap: '1rem', flex: 1, minWidth: '280px', margin: '0 auto', maxWidth: '600px' }}
        >
          {contactMessage && (
            <div style={{
              padding: '15px',
              borderRadius: '6px',
              backgroundColor: contactMessage.includes('successfully') ? '#4caf50' : '#f44336',
              color: '#fff',
              fontSize: '14px',
              textAlign: 'center',
              marginBottom: '10px'
            }}>
              {contactMessage}
            </div>
          )}

          <div style={{ display: 'flex', gap: '1rem' }}>
            <TextField
              name="firstName"
              label="First Name"
              type="text"
              required
              fullWidth
              size="small"
              value={contactFormData.firstName}
              onChange={handleContactChange}
              sx={textFieldStyle}
            />
            <TextField
              name="lastName"
              label="Last Name"
              type="text"
              required
              fullWidth
              size="small"
              value={contactFormData.lastName}
              onChange={handleContactChange}
              sx={textFieldStyle}
            />
          </div>
          <TextField
            name="email"
            label="Email"
            type="email"
            required
            fullWidth
            size="small"
            value={contactFormData.email}
            onChange={handleContactChange}
            sx={textFieldStyle}
          />
          <TextField
            name="phone"
            label="Phone"
            type="tel"
            fullWidth
            size="small"
            value={contactFormData.phone}
            onChange={handleContactChange}
            sx={textFieldStyle}
          />
          <TextField
            name="message"
            label="Your Message"
            multiline
            rows={4}
            required
            fullWidth
            value={contactFormData.message}
            onChange={handleContactChange}
            sx={textFieldStyle}
          />
          <Button
            type="submit"
            variant="contained"
            sx={buttonStyle}
          >
            Send Message
          </Button>
        </form>

      </div>
    </section>
  );
}