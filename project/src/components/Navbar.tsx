import React, { useState, useEffect } from 'react';
import { Menu, X, Home, Phone, Info, Building } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <a href="#" className="flex items-center">
            <Building className="h-8 w-8 text-red-600 mr-2" />
            <span className={`text-xl font-bold ${isScrolled ? 'text-red-600' : 'text-white'}`}>
              Wikyaproperti
            </span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#beranda" className={`flex items-center hover:text-red-600 transition-colors ${isScrolled ? 'text-gray-800' : 'text-white'}`}>
              <Home className="h-4 w-4 mr-1" />
              <span>Beranda</span>
            </a>
            <a href="#properti" className={`flex items-center hover:text-red-600 transition-colors ${isScrolled ? 'text-gray-800' : 'text-white'}`}>
              <Building className="h-4 w-4 mr-1" />
              <span>Properti</span>
            </a>
            <a href="#tentang" className={`flex items-center hover:text-red-600 transition-colors ${isScrolled ? 'text-gray-800' : 'text-white'}`}>
              <Info className="h-4 w-4 mr-1" />
              <span>Tentang Kami</span>
            </a>
            <a href="#kontak" className={`flex items-center hover:text-red-600 transition-colors ${isScrolled ? 'text-gray-800' : 'text-white'}`}>
              <Phone className="h-4 w-4 mr-1" />
              <span>Kontak</span>
            </a>
            <a href="#" className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors">
              Hubungi Kami
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={toggleMenu}>
            {isOpen ? 
              <X className={`h-6 w-6 ${isScrolled ? 'text-red-600' : 'text-white'}`} /> : 
              <Menu className={`h-6 w-6 ${isScrolled ? 'text-red-600' : 'text-white'}`} />
            }
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white mt-4 p-4 rounded-lg shadow-lg">
            <div className="flex flex-col space-y-4">
              <a href="#beranda" className="flex items-center text-gray-800 hover:text-red-600 transition-colors" onClick={toggleMenu}>
                <Home className="h-4 w-4 mr-2" />
                <span>Beranda</span>
              </a>
              <a href="#properti" className="flex items-center text-gray-800 hover:text-red-600 transition-colors" onClick={toggleMenu}>
                <Building className="h-4 w-4 mr-2" />
                <span>Properti</span>
              </a>
              <a href="#tentang" className="flex items-center text-gray-800 hover:text-red-600 transition-colors" onClick={toggleMenu}>
                <Info className="h-4 w-4 mr-2" />
                <span>Tentang Kami</span>
              </a>
              <a href="#kontak" className="flex items-center text-gray-800 hover:text-red-600 transition-colors" onClick={toggleMenu}>
                <Phone className="h-4 w-4 mr-2" />
                <span>Kontak</span>
              </a>
              <a href="#" className="bg-red-600 text-white px-4 py-2 rounded text-center hover:bg-red-700 transition-colors">
                Hubungi Kami
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;