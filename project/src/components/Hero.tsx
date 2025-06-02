import React from 'react';
import { Search } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="beranda" className="relative h-screen">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
        style={{ 
          backgroundImage: 'url(https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg)',
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col justify-center items-center text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-2 animate-fade-in">
          <span className="text-red-500">Wikya</span>properti
        </h1>
        <p className="text-xl md:text-2xl mb-4">Perumahan Semarang</p>
        <p className="text-lg md:text-xl mb-2">Pengembang & Kontraktor Jawa Tengah</p>
        <p className="text-xl md:text-2xl font-semibold italic mb-8">"We build your dreams"</p>
        
        <div className="w-full max-w-4xl bg-white/10 backdrop-blur-md rounded-lg p-6 mt-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-grow">
              <select className="w-full px-4 py-3 rounded-lg bg-white text-gray-800 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500">
                <option value="">Tipe Properti</option>
                <option value="rumah">Rumah</option>
                <option value="apartemen">Apartemen</option>
                <option value="tanah">Tanah</option>
              </select>
            </div>
            <div className="flex-grow">
              <select className="w-full px-4 py-3 rounded-lg bg-white text-gray-800 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500">
                <option value="">Lokasi</option>
                <option value="tembalang">Tembalang</option>
                <option value="banyumanik">Banyumanik</option>
                <option value="gunungpati">Gunungpati</option>
                <option value="ngaliyan">Ngaliyan</option>
                <option value="pedurungan">Pedurungan</option>
              </select>
            </div>
            <div className="flex-grow">
              <select className="w-full px-4 py-3 rounded-lg bg-white text-gray-800 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500">
                <option value="">Rentang Harga</option>
                <option value="500-1000">500 - 1.000 Juta</option>
                <option value="1000-1500">1.000 - 1.500 Juta</option>
                <option value="1500-2000">1.500 - 2.000 Juta</option>
                <option value="2000+">2.000+ Juta</option>
              </select>
            </div>
            <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg transition-colors flex items-center justify-center">
              <Search className="h-5 w-5 mr-2" />
              Cari
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;