import React, { useState } from 'react';
import './CRMSolutions.css';

const CRMSolutions = () => {
  const [activeFeature, setActiveFeature] = useState('contact');

  const features = {
    contact: {
      title: 'Contact Management',
      description: 'Centralize and organize customer data with advanced contact management capabilities.',
      icon: 'fas fa-address-book',
      benefits: [
        'Unified Customer Profiles',
        '360° Customer View',
        'Interaction History',
        'Real-time Updates'
      ]
    },
    sales: {
      title: 'Sales Management',
      description: 'Streamline your sales process and close deals faster with intelligent pipeline management.',
      icon: 'fas fa-chart-line',
      benefits: [
        'Pipeline Visualization',
        'Lead Scoring',
        'Opportunity Tracking',
        'Sales Forecasting'
      ]
    },
    marketing: {
      title: 'Marketing Automation',
      description: 'Automate and personalize your marketing campaigns for maximum impact and ROI.',
      icon: 'fas fa-bullhorn',
      benefits: [
        'Campaign Automation',
        'Lead Nurturing',
        'Email Marketing',
        'Performance Analytics'
      ]
    },
    support: {
      title: 'Customer Support',
      description: 'Deliver exceptional customer service with integrated support management tools.',
      icon: 'fas fa-headset',
      benefits: [
        'Ticket Management',
        'SLA Tracking',
        'Knowledge Base',
        'Multi-channel Support'
      ]
    }
  };

  const statistics = [
    { value: '45%', label: 'Increase in Customer Retention' },
    { value: '65%', label: 'Sales Productivity Improvement' },
    { value: '50%', label: 'Reduction in Service Costs' },
    { value: '28%', label: 'Revenue Growth' }
  ];

  return (
    <div className="crm-solutions">
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <span className="enterprise-tag">Enterprise CRM Solutions</span>
            <h1>Transform Your Customer Relationships</h1>
            <p>Elevate your business with our enterprise-grade CRM solutions that drive growth, enhance customer satisfaction, and optimize operations.</p>
            <div className="hero-buttons">
              <button className="btn-primary">Request Demo</button>
              <button className="btn-secondary">Download Brochure</button>
            </div>
          </div>
        </div>
      </section>

      <section className="features-section">
        <div className="container">
          <div className="section-header">
            <h2>Comprehensive CRM Features</h2>
            <p>Discover how our CRM can transform your business operations</p>
          </div>
          
          <div className="features-grid">
            <div className="features-nav">
              {Object.entries(features).map(([key, feature]) => (
                <button
                  key={key}
                  className={`feature-tab ${activeFeature === key ? 'active' : ''}`}
                  onClick={() => setActiveFeature(key)}
                >
                  <i className={feature.icon}></i>
                  <span>{feature.title}</span>
                </button>
              ))}
            </div>
            
            <div className="feature-content">
              <div className="feature-details">
                <h3>{features[activeFeature].title}</h3>
                <p>{features[activeFeature].description}</p>
                <ul className="feature-benefits">
                  {features[activeFeature].benefits.map((benefit, index) => (
                    <li key={index}>
                      <i className="fas fa-check-circle"></i>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="statistics-section">
        <div className="container">
          <div className="statistics-grid">
            {statistics.map((stat, index) => (
              <div key={index} className="stat-card">
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CRMSolutions;
