import React from 'react';
import './CustomSoftware.css';

const CustomSoftware = () => {
  return (
    <div className="custom-software">
      <section className="hero-section">
        <div className="content-container">
          <h1>Custom Software Development</h1>
          <p>Tailored Enterprise Solutions for Your Unique Business Needs</p>
        </div>
      </section>

      <section className="features-section">
        <div className="content-container">
          <h2>Key Features</h2>
          <div className="features-grid">
            { [
              {
                title: "Tailored Solutions",
                desc: "Built to fit the exact workflows and needs of your business, offering better alignment with internal processes.",
                icon: "🎯"
              },
              {
                title: "Scalability",
                desc: "Designed to grow with your business and easily upgradeable to handle increased workloads.",
                icon: "📈"
              },
              {
                title: "Integration Capability",
                desc: "Seamlessly integrates with existing systems and supports APIs and third-party services.",
                icon: "🔄"
              },
              {
                title: "Enhanced Security",
                desc: "Custom-built security features offering better protection against threats.",
                icon: "🔒"
              },
              {
                title: "Cost Efficiency",
                desc: "Higher upfront investment, but long-term savings on licensing and subscriptions.",
                icon: "💰"
              },
              {
                title: "Ownership & Control",
                desc: "Full ownership of source code and intellectual property with freedom to modify.",
                icon: "⚡"
              },
              {
                title: "Competitive Advantage",
                desc: "Unique features that differentiate your business in the market.",
                icon: "🏆"
              },
              {
                title: "Dedicated Support",
                desc: "Faster response to bugs, updates, and improvements with dedicated support teams.",
                icon: "🛠️"
              }
            ].map((feature, index) => (
              <div key={index} className="feature-card">
                <span className="feature-icon">{feature.icon}</span>
                <h3>{feature.title}</h3>
                <p>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="lifecycle-section">
        <div className="content-container">
          <h2>Development Lifecycle</h2>
          <div className="lifecycle-steps">
            { [
              "Discovery & Planning",
              "Requirement Analysis",
              "UI/UX Design",
              "Software Architecture Design",
              "Development & Coding",
              "Testing & Quality Assurance",
              "Deployment",
              "Support & Maintenance"
            ].map((step, index) => (
              <div key={index} className="lifecycle-step">
                <div className="step-number">{index + 1}</div>
                <div className="step-text">{step}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="tech-stack-section">
        <div className="content-container">
          <h2>Technologies We Use</h2>
          <div className="tech-categories">
            <div className="tech-category">
              <h3>Frontend</h3>
              <ul>
                <li>React</li>
                <li>Angular</li>
                <li>Vue.js</li>
              </ul>
            </div>
            <div className="tech-category">
              <h3>Backend</h3>
              <ul>
                <li>Node.js</li>
                <li>Python</li>
                <li>Java</li>
                <li>.NET</li>
              </ul>
            </div>
            <div className="tech-category">
              <h3>Databases</h3>
              <ul>
                <li>MySQL</li>
                <li>PostgreSQL</li>
                <li>MongoDB</li>
                <li>Oracle</li>
              </ul>
            </div>
            <div className="tech-category">
              <h3>DevOps</h3>
              <ul>
                <li>Docker</li>
                <li>Kubernetes</li>
                <li>AWS</li>
                <li>Azure</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CustomSoftware;
