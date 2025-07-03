import React from 'react'
import Navbar from '../components/home/Navbar.jsx'
import BlogSection from '../components/home/BlogSection.jsx'
import ContactForm from '../components/home/ContactForm.jsx'
import FAQ from '../components/home/FAQ.jsx'
import FooterMenu from '../components/home/FooterMenu.jsx'
import Footer from '../components/home/Footer.jsx'

const Blog = () => {
  return (
    <>
      <Navbar />
      <BlogSection />
      <ContactForm />
      <FAQ />
      <FooterMenu />
      <Footer />
    </>
  )
}

export default Blog