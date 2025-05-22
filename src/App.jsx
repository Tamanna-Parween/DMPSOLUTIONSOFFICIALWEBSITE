import { Routes, Route } from 'react-router-dom';
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Services from './components/Services/Services'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import WebDevelopment from './pages/WebDevelopment/WebDevelopment'
import { ThemeProvider } from './context/ThemeContext';
import SchoolManagement from './pages/products/SchoolManagement/SchoolManagement';
import MobileApp from './pages/products/MobileApplication/MobileApp';
import BillingSoftware from './pages/products/BillingSoftware/BillingSoftware';
import ERPSolutions from './pages/ERPSolutions/ERPSolutions';

function App() {
  return (
    <ThemeProvider>
      <div className="app">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <Services />
                <About />
                <Contact />
              </>
            } />
            <Route path="/services/web-development" element={<WebDevelopment />} />
            <Route path="/services/erp" element={<ERPSolutions />} />
            <Route path="/products/school" element={<SchoolManagement />} />
            <Route path="/products/mobile" element={<MobileApp />} />
            <Route path="/products/billing" element={<BillingSoftware />} />
          </Routes>
        </main>
        <footer className="footer">
          <p>&copy; 2024 DMPS Solutions. All rights reserved.</p>
        </footer>
      </div>
    </ThemeProvider>
  )
}

export default App
