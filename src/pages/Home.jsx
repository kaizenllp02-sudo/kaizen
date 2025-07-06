import Navbar from '../components/home/Navbar.jsx';
import HeroSection from '../components/home/HeroSection.jsx';
// import CompaniesWorkedWith from '../components/home/CompaniesWorkedWith';
import AboutKaizen from '../components/home/AboutKaizen';
import Turnover from '../components/home/Turnover';
import CaseStudy from '../components/home/CaseStudy';
import IntegratedMarketing from '../components/home/IntegratedMarketing';
import ServicesOffered from '../components/home/ServicesOffered';
// import PastWorks from '../components/home/PastWorks';
import Testimonials from '../components/home/Testimonials';
import BlogPreview from '../components/home/BlogPreview';
import ContactForm from '../components/home/ContactForm';
import Gallery from '../components/home/Gallery.jsx';
import FAQ from '../components/home/FAQ.jsx';
import FooterMenu from '../components/home/FooterMenu.jsx';
import Footer from '../components/home/Footer';
import { Helmet } from 'react-helmet-async';

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Kaizen</title>
        <meta name="description" content="Kaizen is a research-driven marketing agency blending strategy, creativity, and flawless execution. Discover integrated marketing solutions that move people—and numbers." />
        <meta property="og:title" content="Kaizen – Research-Driven Marketing Agency" />
        <meta property="og:description" content="Kaizen blends strategy, creativity, and flawless execution. Discover integrated marketing solutions that move people—and numbers." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://kaizzzen.vercel.app/" />
        <meta property="og:image" content="https://kaizzzen.vercel.app/og-image.jpg" />
        <link rel="canonical" href="https://kaizzzen.vercel.app/" />
      </Helmet>
      <Navbar />
      <HeroSection />
      {/* <CompaniesWorkedWith /> */}
      <AboutKaizen />
      <Turnover />
      <IntegratedMarketing />
      <ServicesOffered />
      <CaseStudy />
      {/* <PastWorks /> */}
      <Testimonials />
      <BlogPreview />
      <ContactForm />
      <Gallery />
      <FAQ />
      <FooterMenu />
      <Footer />
    </>
  );
}