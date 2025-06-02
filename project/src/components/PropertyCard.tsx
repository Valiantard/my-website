import React from 'react';
import { MapPin, Bed, Bath, Move, Heart } from 'lucide-react';
import { Property } from '../types';

interface PropertyCardProps {
  property: Property;
}

const formatPrice = (price: number): string => {
  if (price >= 1000000000) {
    return `${(price / 1000000000).toFixed(1)} Miliar`;
  } else {
    return `${(price / 1000000).toFixed(0)} Juta`;
  }
};

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
      <div className="relative">
        <img 
          src={property.imageUrl} 
          alt={property.title} 
          className="w-full h-56 object-cover"
        />
        <div className="absolute top-0 right-0 m-4">
          <button className="bg-white p-2 rounded-full shadow hover:bg-gray-100 transition-colors">
            <Heart className="h-5 w-5 text-red-500" />
          </button>
        </div>
        {property.featured && (
          <div className="absolute top-0 left-0 bg-red-600 text-white px-3 py-1 m-2 rounded-br-lg text-sm font-medium">
            Featured
          </div>
        )}
        <div className="absolute bottom-0 left-0 bg-red-600 text-white px-3 py-1 m-2 rounded-tr-lg text-sm font-medium">
          {property.type === 'rumah' ? 'Rumah' : property.type === 'apartemen' ? 'Apartemen' : 'Tanah'}
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{property.title}</h3>
        <div className="flex items-center text-gray-600 mb-2">
          <MapPin className="h-4 w-4 mr-1" />
          <span className="text-sm">{property.location}</span>
        </div>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{property.description}</p>
        
        {(property.type === 'rumah' || property.type === 'apartemen') && (
          <div className="flex justify-between mb-4">
            <div className="flex items-center">
              <Bed className="h-4 w-4 text-gray-500 mr-1" />
              <span className="text-sm text-gray-600">{property.bedrooms} Kamar</span>
            </div>
            <div className="flex items-center">
              <Bath className="h-4 w-4 text-gray-500 mr-1" />
              <span className="text-sm text-gray-600">{property.bathrooms} KM</span>
            </div>
            <div className="flex items-center">
              <Move className="h-4 w-4 text-gray-500 mr-1" />
              <span className="text-sm text-gray-600">{property.area} m²</span>
            </div>
          </div>
        )}
        {property.type === 'tanah' && (
          <div className="flex mb-4">
            <div className="flex items-center">
              <Move className="h-4 w-4 text-gray-500 mr-1" />
              <span className="text-sm text-gray-600">{property.area} m²</span>
            </div>
          </div>
        )}
        
        <div className="flex justify-between items-center">
          <p className="text-red-600 font-bold text-xl">Rp {formatPrice(property.price)}</p>
          <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded text-sm transition-colors">
            Detail
          </button>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;