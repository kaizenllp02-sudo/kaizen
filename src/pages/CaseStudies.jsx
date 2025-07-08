import React from 'react';
import Navbar from '../components/home/Navbar';
import CaseStudy from '../components/home/CaseStudy';
import ContactForm from '../components/home/ContactForm';
import FooterMenu from '../components/home/FooterMenu';
import Footer from '../components/home/Footer';

const CaseStudies = () => {
  return (
    <>
      <Navbar />
      <CaseStudy />
      <ContactForm />
      <FooterMenu />
      <Footer />
    </>
  );
};

export default CaseStudies;
