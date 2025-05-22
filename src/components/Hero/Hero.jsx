import './Hero.css';
import HeroImage from '../HeroImage/HeroImage';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-container">
        <div className="hero-content">
          <h1>Transform Your Business with
            <span className="highlight"> DMPS</span> Solutions
          </h1>
          <p className="hero-subtitle">
            Your trusted partner in digital transformation and IT excellence
          </p>
          <div className="hero-cta">
            <button className="cta-button primary">Get Started</button>
            <button className="cta-button secondary">Explore Solutions</button>
          </div>
        </div>
        <div className="hero-image">
          <HeroImage />
        </div>
      </div>
    </section>
  );
};

export default Hero;
