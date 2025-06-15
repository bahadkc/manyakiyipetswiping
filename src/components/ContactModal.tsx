import React from 'react';

interface ContactModalProps {
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl p-8 max-w-md w-full relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <h2 className="text-2xl font-bold text-primary mb-6">Contact Information</h2>
        
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-gray-700">Name</h3>
            <p className="text-gray-600">Casper</p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-700">Address</h3>
            <p className="text-gray-600">Bilgiyi Ticarileştirme Merkezi</p>
            <p className="text-gray-600">Fulya, İstanbul</p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-700">Phone</h3>
            <p className="text-gray-600">+90 (XXX) XXX XX XX</p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-700">Email</h3>
            <p className="text-gray-600">contact@petmatchpro.com</p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-700">Business Hours</h3>
            <p className="text-gray-600">Monday - Friday: 9:00 - 17:00</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactModal; 