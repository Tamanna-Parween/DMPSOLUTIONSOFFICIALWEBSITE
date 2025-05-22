import './WebDevelopment.css';
import { useState } from 'react';

const WebDevelopment = () => {
  const [activeTab, setActiveTab] = useState('frontend');

  const techCategories = {
    frontend: [
      { name: 'HTML', icon: 'fab fa-html5' },
      { name: 'CSS', icon: 'fab fa-css3-alt' },
      { name: 'JavaScript', icon: 'fab fa-js' },
      { name: 'React', icon: 'fab fa-react' },
      { name: 'Angular', icon: 'fab fa-angular' },
      { name: 'Vue.js', icon: 'fab fa-vuejs' },
    ],
    backend: [
      { name: 'Node.js', icon: 'fab fa-node-js' },
      { name: 'Java', icon: 'fab fa-java' },
      { name: 'Python', icon: 'fab fa-python' },
      { name: '.NET', icon: 'fab fa-windows' },
     ,
      
     
    ],
    databases: [
      { name: 'MySQL', icon: 'fas fa-database' },
      { name: 'PostgreSQL', icon: 'fas fa-database' },
      { name: 'MongoDB', icon: 'fas fa-database' },
    ],
    frameworks: [
      // { name: 'Laravel', icon: 'fab fa-laravel' },
      { name: 'Spring Boot', icon: 'fas fa-cogs' }, // Changed from 'fab fa-leaf' to more appropriate icon
      { name: 'Django', icon: 'fab fa-python' },
      { name: 'Flask', icon: 'fab fa-python' },
      { name: 'Express.js', icon: 'fab fa-node-js' },
    ],
  
  };

  const services = [
    {
      title: 'Custom Website Development',
      description: 'From simple static websites to complex web applications, we build custom solutions tailored to your specific needs and goals',
      icon: 'fas fa-code'
    },
    {
      title: 'E-commerce Development',
      description: 'Launch a powerful online store with features like product catalogs, secure payment gateways, inventory management, and more.',
      icon: 'fas fa-shopping-cart'
    },
    {
      title: 'Web Application Development',
      description: 'Develop robust, dynamic, and scalable web applications using the latest technologies and frameworks.',
      icon: 'fas fa-window-restore'
    },
    {
      title: 'Responsive Web Design',
      description: 'Ensure your website looks great and functions seamlessly on all devices, from desktops to smartphones.',
      icon: 'fas fa-mobile-alt'
    },
    {
      title: 'API Development & Integration',
      description: 'Enhance your website\'s functionality with custom APIs and integrations for third-party services.',
      icon: 'fas fa-plug'
    },
    {
      title: 'Progressive Web Apps (PWA)',
      description: 'Combine the best of web and mobile apps to create fast, reliable, and engaging user experiences.',
      icon: 'fas fa-rocket'
    },
    // {
    //   title: 'Maintenance & Support',
    //   description: 'Keep your website up-to-date, secure, and performing optimally with our ongoing maintenance and support services.',
    //   icon: 'fas fa-tools'
    // }
  ];

  return (
    <div className="web-development">
      <section className="hero-section">
        <div className="container">
          <h1>Web Development Services</h1>
          <p>Today's digital landscape, a strong online presence is crucial. Our web development services provide tailored solutions to help businesses create functional, secure, and scalable websites that drive growth and engage users.</p>
          <button className="quote-button">Get a Free Quote</button>
        </div>
      </section>

      <section className="tech-stack">
        <div className="container">
          <h2 className="section-header">Technologies We Use</h2>
          <div className="tech-tabs">
            {Object.keys(techCategories).map(category => (
              <button 
                key={category}
                className={`tab-btn ${activeTab === category ? 'active' : ''}`}
                onClick={() => setActiveTab(category)}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
          
          <div className="tech-content">
            <div className="tech-grid">
              {techCategories[activeTab].map((tech) => (
                <div className="tech-item" key={tech.name}>
                  <i className={tech.icon}></i>
                  <span>{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="detailed-services">
        <div className="container">
          <h2 className="section-header">We Offer</h2>
          <div className="services-grid">
            {services.map((service) => (
              <div className="service-card" key={service.title}>
                <i className={service.icon}></i>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="benefits-section">
        <div className="container">
          <h2 className="section-header">Benefits of Choosing Us</h2>
          <div className="benefits-list">
            <div className="benefit-item">
              <i className="fas fa-tachometer-alt"></i>
              <div className="benefit-content">
                <h3>Performance Optimized</h3>
                <p>Websites optimized for performance and SEO.</p>
              </div>
            </div>
            <div className="benefit-item">
              <i className="fas fa-expand-arrows-alt"></i>
              <div className="benefit-content">
                <h3>Scalable Solutions</h3>
                <p>Scalable solutions for growing businesses.</p>
              </div>
            </div>
            <div className="benefit-item">
              <i className="fas fa-shield-alt"></i>
              <div className="benefit-content">
                <h3>Secure Development</h3>
                <p>Secure development practices to protect data.</p>
              </div>
            </div>
            <div className="benefit-item">
              <i className="fas fa-clock"></i>
              <div className="benefit-content">
                <h3>Fast Turnaround</h3>
                <p>Fast turnaround times without compromising quality.</p>
              </div>
            </div>
            <div className="benefit-item">
              <i className="fas fa-puzzle-piece"></i>
              <div className="benefit-content">
                <h3>Tailored Solutions</h3>
                <p>Tailored solutions for unique business needs.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="process-section">
        <div className="container">
          <h2 className="section-header">Our Development Process</h2>
          <div className="process-timeline">
            <div className="process-step">
              <div className="process-icon">
                <i className="fas fa-search"></i>
              </div>
              <div className="process-content">
                <h3>1. Discovery & Planning</h3>
                <p>Understanding your requirements, goals, and target audience to create a comprehensive development strategy.</p>
              </div>
            </div>
            <div className="process-step">
              <div className="process-icon">
                <i className="fas fa-pencil-ruler"></i>
              </div>
              <div className="process-content">
                <h3>2. Design & Prototyping</h3>
                <p>Creating wireframes and interactive prototypes to visualize the final product before development.</p>
              </div>
            </div>
            <div className="process-step">
              <div className="process-icon">
                <i className="fas fa-code"></i>
              </div>
              <div className="process-content">
                <h3>3. Development</h3>
                <p>Building your solution using the latest technologies and best practices in web development.</p>
              </div>
            </div>
            <div className="process-step">
              <div className="process-icon">
                <i className="fas fa-vial"></i>
              </div>
              <div className="process-content">
                <h3>4. Testing & QA</h3>
                <p>Rigorous testing across different devices and platforms to ensure optimal performance.</p>
              </div>
            </div>
            <div className="process-step">
              <div className="process-icon">
                <i className="fas fa-rocket"></i>
              </div>
              <div className="process-content">
                <h3>5. Deployment</h3>
                <p>Launching your website with careful attention to security and performance optimization.</p>
              </div>
            </div>
            <div className="process-step">
              <div className="process-icon">
                <i className="fas fa-sync"></i>
              </div>
              <div className="process-content">
                <h3>6. Maintenance & Support</h3>
                <p>Ongoing support and updates to keep your website running smoothly and securely.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WebDevelopment;
