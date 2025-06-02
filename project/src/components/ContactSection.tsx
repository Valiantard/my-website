import React from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

const ContactSection: React.FC = () => {
  return (
    <section id="kontak" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Hubungi Kami</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Tertarik dengan properti kami? Hubungi kami untuk informasi lebih lanjut
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">Informasi Kontak</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-red-100 p-3 rounded-full mr-4">
                    <MapPin className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-1">Alamat</h4>
                    <p className="text-gray-600">
                      Jalan Mr Koesbiyono Tjondro Wibowo dk. Muntal 01/06 Pakintelan Gunungpati, Semarang, Indonesia 50227
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-red-100 p-3 rounded-full mr-4">
                    <Phone className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-1">Telepon</h4>
                    <p className="text-gray-600">+62 8123 4567 890</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-red-100 p-3 rounded-full mr-4">
                    <Mail className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-1">Email</h4>
                    <p className="text-gray-600">info@wikyaproperti.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-red-100 p-3 rounded-full mr-4">
                    <Clock className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-1">Jam Operasional</h4>
                    <p className="text-gray-600">Senin - Jumat: 08:00 - 17:00</p>
                    <p className="text-gray-600">Sabtu: 09:00 - 15:00</p>
                    <p className="text-gray-600">Minggu: Tutup</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">Kirim Pesan</h3>
              
              <form>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 mb-2">Nama</label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                      placeholder="Nama Anda"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                      placeholder="email@example.com"
                    />
                  </div>
                </div>
                
                <div className="mb-4">
                  <label htmlFor="phone" className="block text-gray-700 mb-2">Telepon</label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                    placeholder="+62 8123 4567 890"
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="subject" className="block text-gray-700 mb-2">Subjek</label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                    placeholder="Subjek pesan Anda"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 mb-2">Pesan</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                    placeholder="Tulis pesan Anda di sini..."
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded transition-colors flex items-center justify-center"
                >
                  <Send className="h-5 w-5 mr-2" />
                  Kirim Pesan
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Google Maps Integration */}
        <div className="mt-12">
          <div className="bg-white p-2 rounded-lg shadow-md">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15840.946052596306!2d110.38607233815202!3d-7.024975337276801!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e708b4d3f0d024d%3A0x1e0432b9da5cb9f2!2sGunungpati%2C%20Semarang%20City%2C%20Central%20Java!5e0!3m2!1sen!2sid!4v1633834567890!5m2!1sen!2sid" 
              width="100%" 
              height="450" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Wikyaproperti Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;