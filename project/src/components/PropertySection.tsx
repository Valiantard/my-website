import React, { useState } from 'react';
import PropertyCard from './PropertyCard';
import { properties } from '../data/properties';
import { ChevronRight, ChevronLeft } from 'lucide-react';

const PropertySection: React.FC = () => {
  const [filter, setFilter] = useState<'semua' | 'rumah' | 'apartemen' | 'tanah'>('semua');
  
  const filteredProperties = filter === 'semua' 
    ? properties 
    : properties.filter(property => property.type === filter);

  const featuredProperties = properties.filter(property => property.featured);

  return (
    <section id="properti" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Properti Kami</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Temukan rumah impian Anda dengan berbagai pilihan properti berkualitas dari Wikyaproperti
          </p>
        </div>

        {/* Featured Properties Carousel */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">Properti Unggulan</h3>
          <div className="relative">
            <div className="flex overflow-x-auto gap-6 pb-4 hide-scrollbar">
              {featuredProperties.map(property => (
                <div key={property.id} className="min-w-[320px] md:min-w-[350px]">
                  <PropertyCard property={property} />
                </div>
              ))}
            </div>
            <button className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 z-10 hidden md:block">
              <ChevronLeft className="h-6 w-6 text-gray-800" />
            </button>
            <button className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 z-10 hidden md:block">
              <ChevronRight className="h-6 w-6 text-gray-800" />
            </button>
          </div>
        </div>

        {/* All Properties with Filters */}
        <div>
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl font-semibold text-gray-800">Semua Properti</h3>
            <div className="flex space-x-2">
              <button 
                className={`px-4 py-2 rounded text-sm ${filter === 'semua' ? 'bg-red-600 text-white' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
                onClick={() => setFilter('semua')}
              >
                Semua
              </button>
              <button 
                className={`px-4 py-2 rounded text-sm ${filter === 'rumah' ? 'bg-red-600 text-white' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
                onClick={() => setFilter('rumah')}
              >
                Rumah
              </button>
              <button 
                className={`px-4 py-2 rounded text-sm ${filter === 'apartemen' ? 'bg-red-600 text-white' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
                onClick={() => setFilter('apartemen')}
              >
                Apartemen
              </button>
              <button 
                className={`px-4 py-2 rounded text-sm ${filter === 'tanah' ? 'bg-red-600 text-white' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
                onClick={() => setFilter('tanah')}
              >
                Tanah
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProperties.map(property => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>

          <div className="text-center mt-8">
            <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded transition-colors">
              Lihat Semua Properti
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertySection;