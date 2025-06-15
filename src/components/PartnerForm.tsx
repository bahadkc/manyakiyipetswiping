import React, { useState } from 'react';
import { submitPartnerForm } from '../services/emailService';

interface FormData {
  name: string;
  businessType: string;
  businessName: string;
  petTypes: string[];
  city: string;
  district: string;
}

const PartnerForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    businessType: '',
    businessName: '',
    petTypes: [],
    city: '',
    district: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const success = await submitPartnerForm(formData);
      
      if (success) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          businessType: '',
          businessName: '',
          petTypes: [],
          city: '',
          district: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handlePetTypeChange = (petType: string) => {
    setFormData(prev => ({
      ...prev,
      petTypes: prev.petTypes.includes(petType)
        ? prev.petTypes.filter(type => type !== petType)
        : [...prev.petTypes, petType]
    }));
  };

  return (
    <div className="max-w-2xl mx-auto p-8 bg-white rounded-2xl shadow-soft">
      <h2 className="text-3xl font-bold text-primary mb-8 text-center">Partner with Us</h2>
      
      {submitStatus === 'success' ? (
        <div className="text-center p-6 bg-green-50 rounded-xl">
          <h3 className="text-xl font-semibold text-green-700 mb-2">Thank You!</h3>
          <p className="text-green-600">We've received your application and will contact you soon.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              required
              value={formData.name}
              onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
            />
          </div>

          <div>
            <label htmlFor="businessType" className="block text-sm font-medium text-gray-700 mb-1">
              Business Type
            </label>
            <select
              id="businessType"
              required
              value={formData.businessType}
              onChange={(e) => setFormData(prev => ({ ...prev, businessType: e.target.value }))}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
            >
              <option value="">Select your business type</option>
              <option value="veterinary">Veterinary Clinic</option>
              <option value="petShop">Pet Shop</option>
              <option value="grooming">Grooming Service</option>
              <option value="training">Training Center</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label htmlFor="businessName" className="block text-sm font-medium text-gray-700 mb-1">
              Business Name
            </label>
            <input
              type="text"
              id="businessName"
              required
              value={formData.businessName}
              onChange={(e) => setFormData(prev => ({ ...prev, businessName: e.target.value }))}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Pet Types You Work With
            </label>
            <div className="grid grid-cols-2 gap-3">
              {['Dog', 'Cat', 'Bird', 'Fish', 'Reptile', 'Other'].map((petType) => (
                <label key={petType} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={formData.petTypes.includes(petType)}
                    onChange={() => handlePetTypeChange(petType)}
                    className="rounded text-primary focus:ring-primary"
                  />
                  <span className="text-gray-700">{petType}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                City
              </label>
              <input
                type="text"
                id="city"
                required
                value={formData.city}
                onChange={(e) => setFormData(prev => ({ ...prev, city: e.target.value }))}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
              />
            </div>
            <div>
              <label htmlFor="district" className="block text-sm font-medium text-gray-700 mb-1">
                District
              </label>
              <input
                type="text"
                id="district"
                required
                value={formData.district}
                onChange={(e) => setFormData(prev => ({ ...prev, district: e.target.value }))}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full btn btn-primary text-lg py-3 rounded-xl shadow-soft hover:shadow-lg transition-all duration-300 disabled:opacity-50"
          >
            {isSubmitting ? 'Submitting...' : 'Submit Application'}
          </button>

          {submitStatus === 'error' && (
            <p className="text-red-600 text-center">
              There was an error submitting your application. Please try again.
            </p>
          )}
        </form>
      )}
    </div>
  );
};

export default PartnerForm; 