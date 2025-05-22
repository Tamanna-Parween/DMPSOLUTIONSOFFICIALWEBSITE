import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Navbar.css';
import { useTheme } from '../../context/ThemeContext';

const Navbar = () => {
  const [showServiceMenu, setShowServiceMenu] = useState(false);
  const [showProductMenu, setShowProductMenu] = useState(false);
  const [fontSize, setFontSize] = useState(16);
  const [highContrast, setHighContrast] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { darkMode, toggleDarkMode } = useTheme();

  const smoothScrollTo = (elementId) => {
    if (location.pathname === '/') {
      const element = document.getElementById(elementId);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
          inline: 'nearest'
        });
      }
    } else {
      // Navigate to home page with scroll state
      navigate('/', { state: { scrollTo: elementId } });
    }
  };

  const handleAboutClick = (e) => {
    e.preventDefault();
    smoothScrollTo('about');
  };

  const handleContactClick = (e) => {
    e.preventDefault();
    smoothScrollTo('contact');
  };

  const handleHomeClick = (e) => {
    e.preventDefault();
    smoothScrollTo('home');
  };

  const increaseFontSize = () => {
    if (fontSize < 24) {
      const newSize = fontSize + 2;
      setFontSize(newSize);
      document.documentElement.style.fontSize = `${newSize}px`;
    }
  };

  const decreaseFontSize = () => {
    if (fontSize > 12) {
      const newSize = fontSize - 2;
      setFontSize(newSize);
      document.documentElement.style.fontSize = `${newSize}px`;
    }
  };

  const toggleContrast = () => {
    setHighContrast(!highContrast);
    document.body.classList.toggle('high-contrast');
  };

  useEffect(() => {
    // Add keyboard shortcuts
    const handleKeyPress = (e) => {
      if (e.altKey) {
        switch (e.key) {
          case '1':
            document.querySelector('.nav-links')?.focus();
            break;
          case '2':
            document.querySelector('main')?.focus();
            break;
          case '3':
            document.querySelector('footer')?.focus();
            break;
          default:
            break;
        }
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  return (
    <>
      <div className={`screen-reader-bar ${darkMode ? 'dark-mode' : ''}`} role="alert" aria-live="polite">
        <div className="announcement-container">
          <div className="announcement-content">
            <span role="img" aria-label="Announcement">📢</span>
            <p>Welcome to DMPS! Press Alt+1 for navigation, Alt+2 for main content, Alt+3 for footer.</p>
          </div>
          <div className="accessibility-controls">
            <button onClick={increaseFontSize} aria-label="Increase font size">A+</button>
            <button onClick={decreaseFontSize} aria-label="Decrease font size">A-</button>
            {/* <button onClick={toggleContrast} aria-label="High contrast mode">
              <span role="img" aria-label="Contrast">🌙</span>
            </button> */}
            <button 
              onClick={toggleDarkMode} 
              aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
              className={darkMode ? 'dark-mode-active' : ''}
            >
              <span role="img" aria-label="Theme">{darkMode ? '☀️' : '🌙'}</span>
            </button>
          </div>
        </div>
      </div>
      <nav className="navbar">
        <div className="nav-container">
          <Link to="/" className="logo">
            <img src="/src/assets/dmpslogo.jpg" alt="DMPS" className="logo-small" />
          </Link>
          <div className="nav-links">
            <a href="#home" onClick={handleHomeClick}>Home</a>
            <div className="dropdown"
              onMouseEnter={() => setShowServiceMenu(true)}
            >
              <a href="#services">Solutions <span className="dropdown-arrow">▼</span></a>
              <div className={`dropdown-content ${showServiceMenu ? 'show' : ''}`} 
                   onMouseLeave={() => setShowServiceMenu(false)}>
                <Link to="/services/web-development">Web Development</Link>
                <Link to="/services/erp">ERP Solutions</Link>
                <Link to="/services/custom-software">Custom Enterprise Software Development Services</Link>
                <Link to="/services/mobile">Mobile App Development</Link>
                <Link to="/services/crm">Customer Relationship Management Software</Link>
                <Link to="/services/pos">Point of Sale Solutions</Link>
              </div>
            </div>
            <div className="dropdown"
              onMouseEnter={() => setShowProductMenu(true)}
              onMouseLeave={() => setShowProductMenu(false)}>
              <a href="#products">Products <span className="dropdown-arrow">▼</span></a>
              <div className={`dropdown-content ${showProductMenu ? 'show' : ''}`}>
                <Link to="/products/school">School Management System</Link>
                <Link to="/products/mobile">Mobile Application</Link>
                <Link to="/products/billing">Billing Software</Link>
                <Link to="/products/accounting">Accounting Software</Link>
                <Link to="/products/inventory">Inventory Management</Link>
              </div>
            </div>
            <a href="#about" onClick={handleAboutClick}>About Us</a>
            <a href="#contact" onClick={handleContactClick}>Contact Us</a>
          </div>
          <div className="nav-cta">
            <button className="cta-button-outline">Get a Quote</button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
