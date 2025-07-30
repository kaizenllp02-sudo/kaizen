import React from 'react';
import Navbar from '../components/home/Navbar';
import FAQsection from '../components/home/FAQsection';
import ContactForm from '../components/home/ContactForm';
import Footer from '../components/home/Footer';
import FooterMenu from '../components/home/FooterMenu';
import Timeline from '../components/home/Timeline';
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
    <section className="kamlesh-about-section" style={{ marginBottom: '2.5em' }}>
      <h2>About Kamlesh</h2>
      <div>
        Kamlesh Shukla is the Founder and Managing Director of <b><a href="https://www.fieldnetglobal.com/ourteam.html#:~:text=Kamlesh%20Shukla%2C%20Founder%20and%20Managing,Pathfinders%2C%20Indica%20Research%20and%20ACNielsen" target="_blank" rel="noopener noreferrer" style={{ color: '#b6c2d1', textDecoration: 'underline' }}>Fieldnet Global</a></b> (est. 2004) and <b>Kaizen Promotion</b> (est. 2010). With over 40+ years in the market research and marketing industry, he is recognized as a stalwart known for his pioneering contributions in the fieldnet.<br /><br />
        He began his career in 1979 at IMRB and rose through senior roles at leading research firms &ndash; including MODE, ORG-MARG, Pathfinders, Indica Research, and AC Nielsen, where he served as National Head of the Field Group.<br /><br />
        In the early 2000s, Kamlesh transitioned to entrepreneurship, establishing <b>Fieldnet Global Research</b> to provide full-service market research solutions, and later founding <b>Kaizen</b> to drive marketing promotions and consumer activations across India.
      </div>
    </section>
    <Timeline />
    <section className="kamlesh-about-section">
      <h2>Vision & Leadership</h2>
      <div>
        Kamlesh’s leadership is defined by a commitment to integrity, innovation, and excellence. He has always believed in going beyond just delivering data – focusing instead on actionable insights and ethical research practices. Under his guidance, Fieldnet pioneered high-quality standards in fieldwork, emphasizing that “authentic, high-quality fieldwork might come at a premium, but integrity and accurate insights are priceless.” This ethos of transparency and quality is a cornerstone of his companies’ culture.
      </div>
    </section>
    <section className="kamlesh-about-section">
      <div>He also champions adaptability and continuous improvement. “Rooted in Kamlesh’s vision, the company’s commitment [embraces] innovation, adaptability, and the enduring values instilled by him — integrity and a pursuit of excellence,” as his successor noted. Kamlesh fosters a team of future leaders, often mentoring young talent (including the next generation ) to carry forward his mission.</div>
    </section>
    <section className="kamlesh-about-section">
      <div>His motto is to build India’s No.1 market research company while cultivating true leaders for the future, reflecting his focus on long-term growth and mentorship.</div>
    </section>
    <section className="kamlesh-about-section">
      <h2>Achievements at a Glance</h2>
      <ul className="kamlesh-achievements-list">
        <li>
          <div className="kamlesh-achievement-row">
            <i className="fa-solid fa-map-marked-alt kamlesh-achievement-icon" style={{ color: '#e53e3e' }}></i>
            <span className="kamlesh-achievement-title">Nationwide Footprint:</span>
          </div>
          <span className="kamlesh-achievement-desc">Established a pan-India presence with operations spanning over 50 cities, enabling on-ground research reach into diverse markets.</span>
        </li>
        <li>
          <div className="kamlesh-achievement-row">
            <i className="fa-solid fa-briefcase kamlesh-achievement-icon" style={{ color: '#3D4351' }}></i>
            <span className="kamlesh-achievement-title">Projects & Clients:</span>
          </div>
          <span className="kamlesh-achievement-desc">Successfully delivered 600+ research projects across 25+ industries, serving 250+ clients worldwide. Clients range from multinational brands to innovative startups, reflecting a versatile portfolio.</span>
        </li>
        <li>
          <div className="kamlesh-achievement-row">
            <i className="fa-solid fa-users kamlesh-achievement-icon" style={{ color: '#b6c2d1' }}></i>
            <span className="kamlesh-achievement-title">Team & Talent:</span>
          </div>
          <span className="kamlesh-achievement-desc">Grown a combined team of 100+ professionals, nurturing a strong leadership pipeline (each company now in the 51–200 employee range)</span>
        </li>
        <li>
          <div className="kamlesh-achievement-row">
            <i className="fa-solid fa-award kamlesh-achievement-icon" style={{ color: '#eab308' }}></i>
            <span className="kamlesh-achievement-title">Recognition:</span>
          </div>
          <span className="kamlesh-achievement-desc">Fieldnet Global Research was nominated for the prestigious India 5000 Best MSME Awards as one of the fastest-growing organizations in its category, underscoring the company’s impact and growth under Kamlesh’s stewardship.</span>
        </li>
        <li>
          <div className="kamlesh-achievement-row">
            <i className="fa-solid fa-microchip kamlesh-achievement-icon" style={{ color: '#38bdf8' }}></i>
            <span className="kamlesh-achievement-title">Innovation-Driven:</span>
          </div>
          <span className="kamlesh-achievement-desc">Early adopter of tech-driven data collection (online surveys, CAPI/CATI) and AI-enhanced analytics, keeping the companies at the cutting edge of research methodologies.</span>
        </li>
      </ul>
    </section>
    <section className="kamlesh-about-section">
      <h2>Legacy & Impact</h2>
      <div>
        Kamlesh Shukla’s legacy in the industry is profound. Over four decades, he has been instrumental in shaping best practices in field research and marketing activation across India. Many professionals regard him as a mentor and visionary who set benchmarks for quality and ethics in market research. His decision to hand over the reins of Fieldnet to his daughter, Pooja Shukla, in 2018 ensured that his values continue to guide the company’s future. This seamless succession highlights how Kamlesh has built not just businesses, but a family legacy rooted in trust, innovation, and a passion for insightful research.
      </div>
    </section>
    <section className="kamlesh-about-section">
      <div>
        Through Fieldnet and Kaizen, Kamlesh’s impact is seen in the countless successful campaigns and studies that have helped clients make informed decisions. His work has empowered brands to connect more deeply with consumers – from on-ground promotions in rural towns to data-driven strategies in corporate boardrooms. By bridging the gap between “the field and the boardroom,” he has enabled organizations to hear the true voice of the customer and translate it into strategic action. His influence endures in the industry norms and the next-generation leaders he’s mentored.
      </div>
    </section>
    <section className="kamlesh-about-section">
      <h2>Connect with Kamlesh & His Companies</h2>
      <ul className="kamlesh-connect-list">
        <li>
          <b>Fieldnet Global Research LLP </b>
          <a href="https://www.fieldnetglobal.com/" target="_blank" rel="noopener noreferrer" className="kamlesh-connect-link" title="Official Website">
            <i className="fa-solid fa-globe" style={{ fontSize: '1.25em', marginRight: 2, color: '#38bdf8' }}></i>
          </a>
          <span style={{ margin: '0 6px', color: '#38bdf8' }}>|</span>
          <a href="https://www.linkedin.com/company/fieldnet-global-research-llp/" target="_blank" rel="noopener noreferrer" className="kamlesh-connect-link" title="LinkedIn Page">
            <i className="fa-brands fa-linkedin" style={{ fontSize: '1.25em', color: '#38bdf8' }}></i>
          </a>
        </li>
        <li>
          <b>Kaizen Research & Marketing LLP </b>
          <a href="https://www.kaizenpromotion.com/" target="_blank" rel="noopener noreferrer" className="kamlesh-connect-link" title="Official Website">
            <i className="fa-solid fa-globe" style={{ fontSize: '1.25em', marginRight: 2, color: '#38bdf8' }}></i>
          </a>
          <span style={{ margin: '0 6px', color: '#38bdf8' }}>|</span>
          <a href="https://www.linkedin.com/company/kaizen-research-marketing-llp/" target="_blank" rel="noopener noreferrer" className="kamlesh-connect-link" title="LinkedIn Page">
            <i className="fa-brands fa-linkedin" style={{ fontSize: '1.25em', color: '#38bdf8' }}></i>
          </a>
        </li>
      </ul>
    </section>
    <ContactForm />
    <FooterMenu />
    <Footer />
  </div>
);

export default KamaleshShukla;