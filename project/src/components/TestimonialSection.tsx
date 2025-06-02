import React from 'react';
import { testimonials } from '../data/testimonials';
import { Star, Quote } from 'lucide-react';

const TestimonialSection: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Testimoni Klien</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Apa kata klien kami tentang layanan dan properti Wikyaproperti
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map(testimonial => (
            <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow relative">
              <div className="absolute -top-4 right-6 text-red-600">
                <Quote className="h-10 w-10 rotate-180" />
              </div>
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.imageUrl} 
                  alt={testimonial.name} 
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">{testimonial.name}</h3>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <div className="mb-4 flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700">{testimonial.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;