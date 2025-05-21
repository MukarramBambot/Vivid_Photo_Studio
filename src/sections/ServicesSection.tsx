import React from 'react';
import ServiceCard from '../components/ServiceCard';
import { services } from '../utils/data';
import { Camera } from 'lucide-react';

const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="section bg-gray-50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center justify-center mb-3">
            <Camera size={24} className="text-primary-600 mr-2" />
            <span className="text-sm font-medium uppercase tracking-wider text-primary-600">Our Services</span>
          </div>
          <h2 className="font-heading text-4xl mb-4">Professional Photography & Videography</h2>
          <p className="text-gray-600">
            At Vivid Photo Studio, we offer a comprehensive range of photography and videography
            services to capture your special moments with artistic excellence and professional quality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;