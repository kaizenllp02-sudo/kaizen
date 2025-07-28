
import React from 'react';
import Navbar from '../components/home/Navbar';
import FAQsection from '../components/home/FAQsection';
import ContactForm from '../components/home/ContactForm';
import Footer from '../components/home/Footer';
import FooterMenu from '../components/home/FooterMenu';
import '../styles/KamaleshShukla.css';

const KamaleshShukla = () => (
  <div>
    <Navbar />
    <section className="kamlesh-hero-section">
      <img
        src="/profile/kamlesh.jpeg"
        alt="Kamlesh Shukla portrait"
        className="kamlesh-portrait"
        onError={e => { e.target.style.display = 'none'; }}
      />
      <div className="kamlesh-intro-text">
        <div className="kamlesh-name">Kamlesh Shukla</div>
        <div className="kamlesh-title">Founder &amp; Managing Director</div>
        <div className="kamlesh-tagline">
          "A visionary leader with over 40 years of pioneering contributions in market research and marketing."
        </div>
      </div>
    </section>
    <section className="kamlesh-about-section">
      <h2>About Kamlesh</h2>
      <div>
        Kamlesh Shukla is the Founder and Managing Director of <b><a href="https://www.fieldnetglobal.com/ourteam.html#:~:text=Kamlesh%20Shukla%2C%20Founder%20and%20Managing,Pathfinders%2C%20Indica%20Research%20and%20ACNielsen" target="_blank" rel="noopener noreferrer" style={{color:'#b6c2d1',textDecoration:'underline'}}>Fieldnet Global</a></b> (est. 2004) and <b>Kaizen Promotion</b> (est. 2010). With over 40+ years in the market research and marketing industry, he is recognized as a stalwart known for his pioneering contributions in the fieldnet.<br /><br />
        He began his career in 1979 at IMRB and rose through senior roles at leading research firms &ndash; including MODE, ORG-MARG, Pathfinders, Indica Research, and AC Nielsen, where he served as National Head of the Field Group.<br /><br />
        In the early 2000s, Kamlesh transitioned to entrepreneurship, establishing <b>Fieldnet Global Research</b> to provide full-service market research solutions, and later founding <b>Kaizen</b> to drive marketing promotions and consumer activations across India.
      </div>
    </section>
    <ContactForm />
    <FooterMenu />
    <Footer />
  </div>
);

export default KamaleshShukla;