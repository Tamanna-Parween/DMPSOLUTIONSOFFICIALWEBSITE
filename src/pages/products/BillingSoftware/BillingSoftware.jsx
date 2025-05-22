import React from 'react';
import './BillingSoftware.css';

const BillingSoftware = () => {
  const product = {
    title: 'Billing Software',
    tagline: 'Smart Billing Solutions for Modern Businesses',
    description: 'Advanced billing and invoicing solution designed for businesses of all sizes',
    mainFeatures: [
      {
        title: 'Invoice Management',
        icon: '📄',
        items: [
          'Generate Professional Invoices',
          'Customizable Templates',
          'Automatic Calculations',
          'Multiple Currency Support',
          'Digital Signatures'
        ]
      },
      {
        title: 'Payment Processing',
        icon: '💳',
        items: [
          'Multiple Payment Gateways',
          'Online & Offline Payments',
          'Payment Tracking',
          'Receipt Generation',
          'Due Date Reminders'
        ]
      },
      {
        title: 'GST Compliance',
        icon: '📊',
        items: [
          'Automated GST Calculations',
          'GST Return Filing',
          'Input Tax Credit',
          'GST Reports',
          'E-way Bill Generation'
        ]
      }
    ],
    benefits: [
      {
        title: 'Save Time',
        description: 'Automate billing processes and reduce manual work',
        icon: '⚡'
      },
      {
        title: 'Reduce Errors',
        description: 'Accurate calculations and automated processes',
        icon: '✔️'
      },
      {
        title: 'Easy Tracking',
        description: 'Monitor all transactions and payments in real-time',
        icon: '📱'
      }
    ]
  };

  return (
    <main className="product-details-container">
      <section className="hero-section">
        <div className="content-wrapper">
          <h1>{product.title}</h1>
          <p className="tagline">{product.tagline}</p>
          <p className="description">{product.description}</p>
          <div className="hero-cta">
            <button className="demo-button">Schedule Demo</button>
            <button className="quote-button">Get Quote</button>
          </div>
        </div>
      </section>

      <section className="main-features">
        <h2>Key Features</h2>
        <div className="content-wrapper">
          {product.mainFeatures.map((feature, index) => (
            <div className="feature-card" key={index}>
              <span className="feature-icon">{feature.icon}</span>
              <h3>{feature.title}</h3>
              <ul>
                {feature.items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="benefits-grid">
        <h2>Benefits</h2>
        <div className="content-wrapper">
          {product.benefits.map((benefit, index) => (
            <div className="benefit-card" key={index}>
              <span className="benefit-icon">{benefit.icon}</span>
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="cta-section">
        <div className="content-wrapper">
          <button className="demo-button">Schedule Demo</button>
          <button className="quote-button">Get Quote</button>
        </div>
      </section>
    </main>
  );
};

export default BillingSoftware;
