import { useState, useEffect } from 'react';
import './ERPSolutions.css';

const ERPSolutions = () => {    
    const [activeTab, setActiveTab] = useState('Overview');
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const modules = [
        {
            title: 'Financial Management',
            icon: '💰',
            description: 'Complete accounting and financial operations management'
        },
        {
            title: 'HR & Payroll',
            icon: '👥',
            description: 'Employee management, payroll, and HR operations'
        },
        {
            title: 'Inventory Control',
            icon: '📦',
            description: 'Real-time stock tracking and management'
        },
        {
            title: 'Sales & CRM',
            icon: '🤝',
            description: 'Customer relationship and sales management'
        },
        {
            title: 'Production',
            icon: '⚙️',
            description: 'Manufacturing and production process management'
        },
        {
            title: 'Reports & Analytics',
            icon: '📊',
            description: 'Business intelligence and reporting tools'
        }
    ];

    const features = {
        Overview: {
            title: 'Enterprise Resource Planning Solutions',
            content: (
                <div className="overview-section fade-in">
                    <div className="overview-grid">
                        <div className="overview-card">
                            <h3>Streamline Operations</h3>
                            <p>Integrate and automate your business processes</p>
                            <ul>
                                <li>Centralized Data Management</li>
                                <li>Process Automation</li>
                                <li>Real-time Updates</li>
                            </ul>
                        </div>
                        {/* Add more overview cards */}
                    </div>
                </div>
            )
        },
        Features: {
            title: 'Core Features',
            content: (
                <div className="features-grid fade-in">
                    {modules.map((module, index) => (
                        <div className="feature-card" key={index}>
                            <span className="feature-icon">{module.icon}</span>
                            <h3>{module.title}</h3>
                            <p>{module.description}</p>
                        </div>
                    ))}
                </div>
            )
        },
        // Add more tab content...
    };

    return (
        <div className={`erp-container ${isVisible ? 'visible' : ''}`}>
            <section className="hero-section">
                <div className="hero-content">
                    <h1>ERP Solutions</h1>
                    <p className="tagline">Transform Your Business Operations</p>
                    <div className="hero-cta">
                        <button className="demo-button">Schedule Demo</button>
                        <button className="quote-button">Get Quote</button>
                    </div>
                </div>
            </section>

            <section className="features-section">
                <div className="tab-navigation">
                    {Object.keys(features).map(tab => (
                        <button
                            key={tab}
                            className={`tab-button ${activeTab === tab ? 'active' : ''}`}
                            onClick={() => setActiveTab(tab)}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
                <div className="tab-content">
                    <h2>{features[activeTab].title}</h2>
                    {features[activeTab].content}
                </div>
            </section>

            {/* Add more sections as needed */}
        </div>
    );
};

export default ERPSolutions;