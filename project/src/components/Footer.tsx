import React from 'react';
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin, Building } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Building className="h-8 w-8 text-red-500 mr-2" />
              <span className="text-xl font-bold">Wikyaproperti</span>
            </div>
            <p className="text-gray-400 mb-4">
              Pengembang dan kontraktor properti terkemuka di Jawa Tengah. Kami membangun hunian berkualitas untuk keluarga Indonesia.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-red-600 hover:bg-red-700 p-2 rounded-full transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-red-600 hover:bg-red-700 p-2 rounded-full transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-red-600 hover:bg-red-700 p-2 rounded-full transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="bg-red-600 hover:bg-red-700 p-2 rounded-full transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Properti</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Rumah</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Apartemen</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Tanah</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Properti Komersial</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Properti Baru</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Layanan</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Pengembangan Properti</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Konstruksi Bangunan</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Desain Arsitektur</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Konsultasi Properti</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Investasi Properti</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Kontak</h3>
            <ul className="space-y-4">
              <li className="flex">
                <MapPin className="h-5 w-5 text-red-500 mr-2 flex-shrink-0" />
                <span className="text-gray-400">
                  Jalan Mr Koesbiyono Tjondro Wibowo dk. Muntal 01/06 Pakintelan Gunungpati, Semarang, Indonesia 50227
                </span>
              </li>
              <li className="flex">
                <Phone className="h-5 w-5 text-red-500 mr-2 flex-shrink-0" />
                <span className="text-gray-400">+62 8123 4567 890</span>
              </li>
              <li className="flex">
                <Mail className="h-5 w-5 text-red-500 mr-2 flex-shrink-0" />
                <span className="text-gray-400">info@wikyaproperti.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Wikyaproperti. Hak Cipta Dilindungi.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Syarat & Ketentuan</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Kebijakan Privasi</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Peta Situs</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;