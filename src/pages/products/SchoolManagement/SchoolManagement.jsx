import React from 'react';
import productInfo from '../../../data/schooolmanagement';
import './SchoolManagement.css';

const SchoolManagement = () => {
  const product = productInfo.school;

  return (
    <div className="product-details-container">
      <section className="hero-section">
        <div className="content-wrapper">
          <h1>{product.title}</h1>
          <p className="tagline">{product.tagline}</p>
          <p className="description">{product.description}</p>
          <div className="hero-cta">
            <button className="demo-button">Schedule Live Demo</button>
            <button className="quote-button">Request Pricing</button>
          </div>
        </div>
      </section>

      <section className="user-roles">
        <h2>User-Specific Portals</h2>
        <div className="roles-grid">
          {product.userRoles?.map((role, index) => (
            <div className="role-card" key={index}>
              <span className="role-icon">{role.icon}</span>
              <h3>{role.title}</h3>
              <ul>
                {role.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="main-modules">
        <h2>Core Modules</h2>
        <div className="modules-grid">
          {product.mainModules?.map((module, index) => (
            <div className="module-card" key={index}>
              <span className="module-icon">{module.icon}</span>
              <h3>{module.title}</h3>
              <ul>
                {module.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

       <section className="main-features">
        <h2>Main Features</h2>
        <div className="content-wrapper">
          {product.mainFeatures?.map((feature, index) => (
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


        {/* <section className="detailed-features">
        <div className="content-wrapper">
          {product.detailedFeatures && Object.entries(product.detailedFeatures).map(([category, items]) => (
            <div className="feature-category" key={category}>
              <h2>{category}</h2>
              <ul>
                {items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section> */}

      <section className="benefits-grid">
        <div className="content-wrapper">
          {product.benefits?.map((benefit, index) => (
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
          <button className="quote-button">Get Price Quote</button>
        </div>
      </section>


      {/* ...existing sections... */}
    </div>
  );
};

export default SchoolManagement;
