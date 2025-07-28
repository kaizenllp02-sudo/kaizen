import React, { useEffect } from 'react';
import ReactGA from 'react-ga4';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import StrategicPlanningBrand from './pages/StrategicPlanningBrand';
import { BackgroundBeams } from "./components/ui/background-beams";
import CsbTemplate from './pages/CsbFMCG';
import CsbHaircare from './pages/CsbHaircare';
import CsbHealthcare from './pages/CsbHealthcare';
import CaseStudies from './pages/CaseStudies';
import FAQ from './pages/FAQ';
import KamaleshShukla from './pages/KamaleshShukla';

const GA_MEASUREMENT_ID = 'G-F72YZ1B2D1';

export default function App() {
  useEffect(() => {
    ReactGA.initialize(GA_MEASUREMENT_ID);
    ReactGA.send({ hitType: 'pageview', page: window.location.pathname + window.location.search });
    const handleRouteChange = () => {
      ReactGA.send({ hitType: 'pageview', page: window.location.pathname + window.location.search });
    };
    window.addEventListener('popstate', handleRouteChange);
    return () => window.removeEventListener('popstate', handleRouteChange);
  }, []);
  return (
    <>
      <BackgroundBeams />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/services/strategic-brand-planning" element={<StrategicPlanningBrand />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/case-study/fmcg" element={<CsbTemplate />} />
          <Route path="/case-study/haircare" element={<CsbHaircare />} />
          <Route path="/case-study/healthcare" element={<CsbHealthcare />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/kamalesh-shukla" element={<KamaleshShukla />} />
        </Routes>
      </Router>
    </>
  );
}