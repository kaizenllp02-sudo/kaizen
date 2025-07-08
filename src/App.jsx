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

export default function App() {
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
        </Routes>
      </Router>
    </>
  );
}