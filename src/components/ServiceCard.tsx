import React from 'react';
import { Service } from '../types';
import * as LucideIcons from 'lucide-react';

interface ServiceCardProps {
  service: Service;
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, index }) => {
  const IconComponent = (LucideIcons as Record<string, React.FC<{ size?: number }>>)[service.icon] || LucideIcons.Camera;
  
  return (
    <div 
      className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="h-48 overflow-hidden">
        <img 
          src={service.image} 
          alt={service.title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center mb-3">
          <div className="bg-primary-50 p-2 rounded-full mr-3">
            <IconComponent size={20} className="text-primary-600" />
          </div>
          <h3 className="text-xl font-medium text-gray-900">{service.title}</h3>
        </div>
        <p className="text-gray-600 mb-4">{service.description}</p>
        <a 
          href="#contact" 
          className="text-primary-600 font-medium inline-flex items-center hover:text-primary-700"
        >
          Book Now
          <LucideIcons.ArrowRight size={16} className="ml-1" />
        </a>
      </div>
    </div>
  );
};

export default ServiceCard;