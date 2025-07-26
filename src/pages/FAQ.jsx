import React from 'react';
import Navbar from '../components/home/Navbar';
import FAQsection from '../components/home/FAQsection';
import ContactForm from '../components/home/ContactForm';
import Footer from '../components/home/Footer';
import FooterMenu from '../components/home/FooterMenu';

const FAQ = () => (
  <div>
    <Navbar />
    <FAQsection />
    <ContactForm />
    <FooterMenu />
    <Footer />
  </div>
);

export default FAQ;