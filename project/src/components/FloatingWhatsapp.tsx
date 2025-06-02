import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

const FloatingWhatsapp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const sendWhatsapp = () => {
    window.open('https://wa.me/628123456789?text=Halo%20Wikyaproperti,%20saya%20tertarik%20dengan%20properti%20Anda', '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen && (
        <div className="bg-white rounded-lg shadow-lg p-4 mb-4 w-72 animate-fade-in">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center">
              <div className="bg-green-500 p-2 rounded-full mr-2">
                <MessageCircle className="h-5 w-5 text-white" />
              </div>
              <h3 className="font-semibold">Chat WhatsApp</h3>
            </div>
            <button onClick={toggleChat} className="text-gray-500 hover:text-gray-700">
              <X className="h-5 w-5" />
            </button>
          </div>
          <p className="text-gray-600 text-sm mb-4">
            Hai! Ada yang bisa kami bantu tentang properti Wikyaproperti?
          </p>
          <button 
            onClick={sendWhatsapp}
            className="bg-green-500 hover:bg-green-600 text-white w-full py-2 rounded transition-colors flex items-center justify-center"
          >
            <MessageCircle className="h-4 w-4 mr-2" />
            Mulai Chat
          </button>
        </div>
      )}
      
      <button 
        onClick={toggleChat}
        className={`bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all ${isOpen ? 'rotate-90' : ''}`}
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </button>
    </div>
  );
};

export default FloatingWhatsapp;