import React from 'react';
import { Testimonial } from '../types';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 h-full flex flex-col">
      <div className="flex items-center mb-4">
        {/* Rating */}
        <div className="flex space-x-1 mr-auto">
          {[...Array(5)].map((_, index) => (
            <Star
              key={index}
              size={18}
              className={index < testimonial.rating ? "text-accent-500 fill-accent-500" : "text-gray-300"}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <p className="text-gray-600 italic mb-6 flex-grow">"{testimonial.content}"</p>

      {/* Author */}
      <div className="flex items-center mt-auto">
        <img
          src={testimonial.avatar}
          alt={testimonial.name}
          className="w-12 h-12 rounded-full object-cover mr-4"
        />
        <div>
          <h4 className="font-medium text-gray-900">{testimonial.name}</h4>
          <p className="text-gray-500 text-sm">{testimonial.role}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;