import React, { useState } from 'react';
import { Camera, Send, Download } from 'lucide-react';
import axios from 'axios';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceType: '',
    date: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState<{
    submitted: boolean;
    success: boolean;
    message: string;
  }>({
    submitted: false,
    success: false,
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      await axios.post('http://localhost:8000/api/bookings', formData);
      
      setFormStatus({
        submitted: true,
        success: true,
        message: 'Thank you! Your booking request has been received. We will contact you shortly.'
      });
      
      setFormData({
        name: '',
        email: '',
        phone: '',
        serviceType: '',
        date: '',
        message: ''
      });
    } catch (error) {
      setFormStatus({
        submitted: true,
        success: false,
        message: 'There was an error submitting your request. Please try again.'
      });
    }
  };

  const handleExport = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/export');
      const link = document.createElement('a');
      link.href = `http://localhost:8000/downloads/${response.data.filename}`;
      link.download = response.data.filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Error exporting data:', error);
    }
  };

  const serviceOptions = [
    'Wedding Photography',
    'Pre-Wedding Shoot',
    'Maternity Photography',
    'Newborn Photography',
    'Portrait Photography',
    'Candid Photography',
    'Commercial Photography',
    'Fashion Photography',
    'Videography',
    'Other'
  ];

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 lg:p-8">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <Camera size={28} className="text-primary-600" />
          <h3 className="text-2xl font-heading text-gray-900">Book Your Session</h3>
        </div>
        {/* Admin Export Button */}
        <button
          onClick={handleExport}
          className="flex items-center text-sm text-primary-600 hover:text-primary-700"
        >
          <Download size={16} className="mr-1" />
          Export Bookings
        </button>
      </div>

      {formStatus.submitted ? (
        <div className={`p-4 rounded-md ${formStatus.success ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}>
          <p>{formStatus.message}</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-300 focus:border-primary-500 focus:outline-none transition-colors"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-300 focus:border-primary-500 focus:outline-none transition-colors"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-300 focus:border-primary-500 focus:outline-none transition-colors"
                placeholder="(555) 123-4567"
              />
            </div>

            <div>
              <label htmlFor="serviceType" className="block text-sm font-medium text-gray-700 mb-1">
                Service Type *
              </label>
              <select
                id="serviceType"
                name="serviceType"
                value={formData.serviceType}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-300 focus:border-primary-500 focus:outline-none transition-colors appearance-none bg-white"
              >
                <option value="" disabled>Select a service</option>
                {serviceOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
                Preferred Date
              </label>
              <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-300 focus:border-primary-500 focus:outline-none transition-colors"
              />
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-300 focus:border-primary-500 focus:outline-none transition-colors"
              placeholder="Tell us about your photography needs..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="btn btn-primary w-full flex items-center justify-center"
          >
            <Send size={18} className="mr-2" />
            Send Booking Request
          </button>

          <p className="text-xs text-gray-500 mt-2">
            * Required fields. We'll respond to your inquiry within 24 hours.
          </p>
        </form>
      )}
    </div>
  );
};

export default ContactForm;