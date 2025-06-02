import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PropertySection from './components/PropertySection';
import AboutSection from './components/AboutSection';
import TestimonialSection from './components/TestimonialSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import FloatingWhatsapp from './components/FloatingWhatsapp';

function App() {
  useEffect(() => {
    // Update page title
    document.title = 'Wikyaproperti - Pengembang & Kontraktor Jawa Tengah';
    
    // Add smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const href = this.getAttribute('href');
        if (!href || href === '#') return;
        
        const targetElement = document.querySelector(href);
        if (!targetElement) return;
        
        window.scrollTo({
          top: targetElement.getBoundingClientRect().top + window.scrollY - 80,
          behavior: 'smooth'
        });
      });
    });
  }, []);

  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <PropertySection />
      <AboutSection />
      <TestimonialSection />
      <ContactSection />
      <Footer />
      <FloatingWhatsapp />
    </div>
  );
}

export default App;