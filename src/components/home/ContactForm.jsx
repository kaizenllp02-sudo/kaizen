import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import { env } from '../../lib/env';
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

  // Success/error messages
  const [contactMessage, setContactMessage] = useState(null);

  // Handle form input changes
  const handleContactChange = (e) => {
    const { name, value } = e.target;
    setContactFormData({
      ...contactFormData,
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
        borderColor: '#e53e3e',
      },
    },
    '& .MuiInputLabel-root': {
      color: 'rgba(245, 245, 245, 0.32)',
      '&.Mui-focused': {
        color: '#e53e3e',
      },
    },
    '& .MuiInputBase-input': {
      color: '#f2f2f2',
    },
  };

  // Custom styling for Buttons to match your theme
  const buttonStyle = {
    backgroundColor: '#e53e3e',
    color: '#fff',
    fontWeight: 600,
    '&:hover': {
      backgroundColor: '#dc2626',
      transform: 'translateY(-2px)',
    },
    transition: 'background-color 0.3s ease, transform 0.2s ease',
  };

  const handleContactSubmit = async (e) => {
    e.preventDefault();

    try {
      // Google Apps Script Web App URL from environment variable
      const GOOGLE_SCRIPT_URL = env.GOOGLE_SCRIPT_URL;
      
      if (!GOOGLE_SCRIPT_URL) {
        throw new Error('Google Apps Script URL not configured');
      }
      
      // Create form data as URL parameters
      const params = new URLSearchParams();
      params.append('firstName', contactFormData.firstName);
      params.append('lastName', contactFormData.lastName);
      params.append('email', contactFormData.email);
      params.append('phone', contactFormData.phone);
      params.append('message', contactFormData.message);
      params.append('timestamp', new Date().toISOString());

      // Use fetch with no-cors mode or create a form submission
      const response = await fetch(`${GOOGLE_SCRIPT_URL}?${params.toString()}`, {
        method: 'GET',
        mode: 'no-cors'
      });

      // Since we can't read the response in no-cors mode, we'll assume success
      setContactMessage('Message sent successfully! We\'ll get back to you soon.');
      setContactFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
      });

    } catch (error) {
      console.error('Error submitting form:', error);
      setContactMessage('Failed to send message. Please try again.');
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
            aria-label="Send Message"
          >
            Send Message
          </Button>
        </form>

      </div>
    </section>
  );
}