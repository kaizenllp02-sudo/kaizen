import React from 'react'
import { Helmet } from 'react-helmet-async';
import Navbar from '../components/home/Navbar.jsx'
import BlogSection from '../components/home/BlogSection.jsx'
import ContactForm from '../components/home/ContactForm.jsx'
import FAQ from '../components/home/FAQ.jsx'
import FooterMenu from '../components/home/FooterMenu.jsx'
import Footer from '../components/home/Footer.jsx'

const Blog = () => {
  return (
    <>
      <Helmet>
        <title>Blog – Kaizen</title>
        <meta name="description" content="Read the latest insights, strategies, and case studies from Kaizen's marketing experts. Stay updated with trends in research-driven and performance marketing." />
        <meta property="og:title" content="Blog – Kaizen" />
        <meta property="og:description" content="Read the latest insights, strategies, and case studies from Kaizen's marketing experts. Stay updated with trends in research-driven and performance marketing." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://kaizzzen.vercel.app/blog" />
        <meta property="og:image" content="https://kaizzzen.vercel.app/og-image.jpg" />
        <link rel="canonical" href="https://kaizzzen.vercel.app/blog" />
      </Helmet>
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