import './About.css';
import ServiceCarousel from '../ServiceCarousel/ServiceCarousel';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const About = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo === 'about') {
      setTimeout(() => {
        const element = document.getElementById('about');
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest'
          });
        }
        // Clear the state after scrolling
        window.history.replaceState({}, document.title);
      }, 100);
    }
  }, [location]);

  return (
   <section id="about" className="about-section">
        <div className="about-container">
          <h2>About Us</h2>
          <div className="about-intro">
            <p>Welcome to DMPS Solutions Private Limited, where innovation meets expertise. We are a forward-thinking software development company committed to empowering businesses with cutting-edge technology solutions.</p>
          </div>

          <div className="about-grid">
            <div className="about-card mission">
              <h3>Our Mission</h3>
              <p>To transform businesses with innovative software solutions that drive efficiency, scalability, and growth. At the core of our mission is a dedication to solving real-world challenges with technology that's intuitive, reliable, and impactful.</p>
            </div>
            <div className="about-card vision">
              <h3>Our Vision</h3>
              <p>To make our customer thoughts into reality with software innovation & empowering businesses to unlock their true potential through transformative technology.</p>
            </div>
          </div>

          <div className="services-overview">
            <h3>What We Do</h3>
            <ServiceCarousel />
          </div>

          <div className="values-section">
            <h3>Our Values</h3>
            <div className="values-grid">
              {[
                {
                  title: 'Innovation',
                  desc: 'We thrive on creativity and embrace cutting-edge technologies to deliver future-ready solutions.'
                },
                {
                  title: 'Collaboration',
                  desc: 'Your success is our success. We work closely with our clients to understand their vision and deliver results.'
                },
                {
                  title: 'Quality',
                  desc: 'We prioritize excellence in every line of code, ensuring high-performing and bug-free solutions.'
                },
                {
                  title: 'Integrity',
                  desc: 'Transparency, accountability, and trust are at the heart of everything we do.'
                }
              ].map((value) => (
                <div key={value.title} className="value-card">
                  <h4>{value.title}</h4>
                  <p>{value.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="why-us">
            <h3>Why Choose Us?</h3>
            <div className="benefits-grid">
              {[
                'Customer-Centric Approach: We put our clients first, focusing on understanding and delivering on their unique needs.',
                'Expertise in Modern Technologies: From AI and blockchain to cloud computing, we stay ahead of the curve.',
                'Proven Track Record: Satisfied clients and successful projects stand as a testament to our reliability.',
                'Long-Term Support: Beyond deployment, we offer continuous support and maintenance.'
              ].map((benefit) => (
                <div key={benefit} className="benefit-item">{benefit}</div>
              ))}
            </div>
          </div>

          <div className="about-cta">
            <h3>Let's Build Something Great Together!</h3>
            <p>At DMPS Solutions Pvt. Ltd., we are not just about writing code; we are about creating value, forging partnerships, and building solutions that inspire. Whether you're a startup or a Fortune 500 company, we're here to help you achieve your goals.</p>
            <button className="cta-button">Start Your Journey With Us</button>
          </div>
        </div>
      </section>
  );
};

export default About;