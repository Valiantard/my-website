import React from 'react';
import { services } from '../data/services';
import { Building, Hammer, PenTool, Users } from 'lucide-react';

const getIcon = (iconName: string) => {
  switch (iconName) {
    case 'Building':
      return <Building className="h-10 w-10 text-red-600" />;
    case 'Hammer':
      return <Hammer className="h-10 w-10 text-red-600" />;
    case 'PenTool':
      return <PenTool className="h-10 w-10 text-red-600" />;
    case 'Users':
      return <Users className="h-10 w-10 text-red-600" />;
    default:
      return <Building className="h-10 w-10 text-red-600" />;
  }
};

const AboutSection: React.FC = () => {
  return (
    <section id="tentang\" className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Tentang Wikyaproperti</h2>
            <p className="text-gray-600 mb-6">
              Wikyaproperti adalah pengembang dan kontraktor properti terkemuka di Jawa Tengah yang berdedikasi untuk menciptakan hunian berkualitas dengan harga terjangkau. Dengan pengalaman lebih dari 10 tahun di industri properti, kami telah membangun reputasi yang kuat dalam mengembangkan proyek perumahan dan komersial yang inovatif.
            </p>
            <p className="text-gray-600 mb-6">
              Visi kami adalah menjadi pengembang properti terpercaya yang memberikan solusi hunian berkualitas untuk masyarakat Indonesia. Kami berkomitmen untuk membangun properti dengan standar kualitas tinggi, desain yang menarik, dan lokasi strategis.
            </p>
            <p className="text-gray-600 mb-8">
              Tim kami terdiri dari para profesional berpengalaman di bidang arsitektur, konstruksi, dan manajemen properti yang selalu bekerja keras untuk memberikan yang terbaik bagi klien kami.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-red-600 font-bold text-xl">10+</span>
                </div>
                <span className="text-gray-700">Tahun Pengalaman</span>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-red-600 font-bold text-xl">50+</span>
                </div>
                <span className="text-gray-700">Proyek Selesai</span>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-red-600 font-bold text-xl">200+</span>
                </div>
                <span className="text-gray-700">Klien Puas</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg" 
              alt="Tim Wikyaproperti" 
              className="w-full h-auto rounded-lg shadow-lg"
            />
            <div className="absolute -bottom-6 -left-6 bg-red-600 text-white p-6 rounded-lg shadow-lg hidden md:block">
              <p className="text-lg font-semibold">"We build your dreams"</p>
            </div>
          </div>
        </div>

        {/* Services */}
        <div className="mt-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Layanan Kami</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Kami menyediakan berbagai layanan untuk memenuhi kebutuhan properti Anda
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map(service => (
              <div key={service.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="mb-4">
                  {getIcon(service.icon)}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;