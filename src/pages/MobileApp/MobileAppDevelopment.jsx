import React from 'react';
import './MobileAppDevelopment.css';

const MobileAppDevelopment = () => {
  const features = [
    { title: "Tailored User Experience", desc: "UI/UX design crafted specifically for your target audience and business logic", icon: "🎨" },
    { title: "Brand Identity Integration", desc: "Custom branding, design, and features to reflect your business's identity", icon: "🎯" },
    { title: "Offline Functionality", desc: "Apps can store data locally to function even without an internet connection", icon: "📱" },
    { title: "Real-Time Updates", desc: "Push notifications and real-time data sync via APIs or WebSockets", icon: "⚡" },
    { title: "Advanced Security", desc: "Implementation of authentication, encryption, and secure APIs", icon: "🔒" },
    { title: "Seamless Integration", desc: "Connect with back-end systems, databases, and third-party services", icon: "🔄" },
    { title: "Scalability", desc: "Designed to grow with your user base and feature demands", icon: "📈" },
    { title: "App Store Deployment", desc: "Custom support for publishing on Google Play and Apple App Store", icon: "🚀" },
    { title: "Analytics", desc: "Integration of tools for user behavior insights", icon: "📊" },
    { title: "Ongoing Maintenance", desc: "Regular updates to fix bugs and improve performance", icon: "🛠️" }
  ];

  const appTypes = [
    {
      type: "Native Apps",
      desc: "Built specifically for a platform (iOS/Android)",
      tech: ["Swift for iOS", "Kotlin for Android"],
      icon: "📱"
    },
    {
      type: "Cross-Platform Apps",
      desc: "Share codebase between Android and iOS",
      tech: ["Flutter", "React Native", "Xamarin"],
      icon: "🔄"
    },
    {
      type: "Hybrid Apps",
      desc: "Built using web technologies inside native wrapper",
      tech: ["Ionic", "Cordova"],
      icon: "🌐"
    },
    {
      type: "Progressive Web Apps",
      desc: "Web apps with native-like features",
      tech: ["HTML5", "CSS3", "JavaScript"],
      icon: "💻"
    }
  ];

  const lifecycle = [
    "Requirement Gathering",
    "Wireframing & Prototyping",
    "UI/UX Design",
    "App Development",
    "Testing",
    "Deployment",
    "Post-Launch Support"
  ];

  return (
    <div className="mobile-app-development">
      <div className="enterprise-hero">
        <div className="content-container">
          <div className="hero-content">
            <h1>Enterprise Mobile Solutions</h1>
            <h2>Transform Your Business with Custom Mobile Applications</h2>
            <p>Leverage our expertise in delivering enterprise-grade mobile solutions that drive digital transformation</p>
            <div className="hero-cta">
              <button className="primary-btn">Schedule Consultation</button>
              <button className="secondary-btn">View Case Studies</button>
            </div>
          </div>
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">500+</span>
              <span className="stat-label">Projects Delivered</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">50+</span>
              <span className="stat-label">Enterprise Clients</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">98%</span>
              <span className="stat-label">Client Satisfaction</span>
            </div>
          </div>
        </div>
      </div>

      <section className="trusted-by">
        <div className="content-container">
          <h3>Trusted By Industry Leaders</h3>
          <div className="client-logos">
            {/* Add client logos here */}
          </div>
        </div>
      </section>

      <section className="solutions-section">
        <div className="content-container">
          <div className="section-header">
            <span className="section-tag">Our Expertise</span>
            <h2>Mobile Solutions Portfolio</h2>
            <p>End-to-end mobile application development services for enterprises</p>
          </div>
          <div className="app-types-grid">
            {appTypes.map((type, index) => (
              <div key={index} className="solution-card">
                <div className="card-header">
                  <span className="type-icon">{type.icon}</span>
                  <h3>{type.type}</h3>
                </div>
                <p>{type.desc}</p>
                <div className="tech-stack">
                  <h4>Technologies</h4>
                  <div className="tech-tags">
                    {type.tech.map((t, i) => (
                      <span key={i} className="tech-tag">{t}</span>
                    ))}
                  </div>
                </div>
                <button className="learn-more">Learn More →</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="enterprise-benefits">
        <div className="content-container">
          <div className="section-header">
            <span className="section-tag">Why Choose Us</span>
            <h2>Enterprise-Grade Excellence</h2>
          </div>
          <div className="benefits-grid">
            {features.map((feature, index) => (
              <div key={index} className="benefit-card">
                <span className="feature-icon">{feature.icon}</span>
                <div className="benefit-content">
                  <h3>{feature.title}</h3>
                  <p>{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="methodology">
        <div className="content-container">
          <div className="section-header">
            <span className="section-tag">Our Approach</span>
            <h2>Development Methodology</h2>
          </div>
          <div className="lifecycle-slider">
            {lifecycle.map((step, index) => (
              <div key={index} className="lifecycle-step">
                <div className="step-content">
                  <div className="step-number">{`0${index + 1}`}</div>
                  <h3>{step}</h3>
                </div>
                <div className="step-connector"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="content-container">
          <div className="cta-content">
            <h2>Ready to Transform Your Mobile Strategy?</h2>
            <p>Let's discuss how we can help you achieve your digital transformation goals</p>
            <div className="cta-buttons">
              <button className="primary-btn">Contact Sales</button>
              <button className="secondary-btn">Download Brochure</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MobileAppDevelopment;
