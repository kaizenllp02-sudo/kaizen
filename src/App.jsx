import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import StrategicPlanningBrand from './pages/StrategicPlanningBrand';
import CaseStudyFMCG from './pages/CaseStudyFMCG';
import CaseStudyHaircare from './pages/CaseStudyHaircare';
import CaseStudyHealthcare from './pages/CaseStudyHealthcare';
import { BackgroundBeams } from "./components/ui/background-beams";

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
          <Route path="/case-study/fmcg" element={<CaseStudyFMCG />} />
          <Route path="/case-study/haircare" element={<CaseStudyHaircare />} />
          <Route path="/case-study/healthcare" element={<CaseStudyHealthcare />} />
        </Routes>
      </Router>
    </>
  );
}