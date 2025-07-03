import React from 'react'
import Navbar from '../components/home/Navbar.jsx'
import BlogPostContent from '../components/home/BlogPostContent.jsx'
import ContactForm from '../components/home/ContactForm.jsx'
import FAQ from '../components/home/FAQ.jsx'
import FooterMenu from '../components/home/FooterMenu.jsx'
import Footer from '../components/home/Footer.jsx'

const BlogPost = () => {
  return (
    <>
      <Navbar />
      <BlogPostContent />
      <ContactForm />
      <FAQ />
      <FooterMenu />
      <Footer />
    </>
  )
}

export default BlogPost