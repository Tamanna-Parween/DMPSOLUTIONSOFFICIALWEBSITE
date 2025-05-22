import { useState, useEffect } from 'react';
import './ServiceCarousel.css';

const services = [
  {
    title: 'Custom Software Development',
    description: 'Tailored solutions for your business needs',
    features: [
      'Custom Application Development',
      'Software Integration',
      'Legacy System Modernization',
      'Scalable Architecture'
    ]
  },
  {
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile solutions',
    features: [
      'iOS Development',
      'Android Development',
      'Cross-Platform Apps',
      'Mobile UI/UX Design'
    ]
  },

  {
    title: 'Enterprise Resource Planning (ERP)',
    icon: '/src/assets/custom-software.png',
    description: 'Streamline your business processes with our ERP solutions',
    features: [
      'ERP Implementation',
      'ERP Customization',
      'ERP Integration',
      'ERP Modernization'
    ]
      
  },
  // Add more services...
];

const ServiceCarousel = () => {
  return (
    <div className="service-carousel">
      {services.map((service) => (
        <div key={service.title} className="service-card">
          <h4>{service.title}</h4>
          <p className="service-desc">{service.description}</p>
          <ul className="feature-list">
            {service.features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default ServiceCarousel;
