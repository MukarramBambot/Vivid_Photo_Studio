import React from 'react';
import TestimonialCard from '../components/TestimonialCard';
import { testimonials } from '../utils/data';
import { MessageSquareQuote } from 'lucide-react';

const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="section bg-primary-50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center justify-center mb-3">
            <MessageSquareQuote size={24} className="text-primary-600 mr-2" />
            <span className="text-sm font-medium uppercase tracking-wider text-primary-600">Testimonials</span>
          </div>
          <h2 className="font-heading text-4xl mb-4">What Our Clients Say</h2>
          <p className="text-gray-600">
            Don't just take our word for it. Here's what our clients have to say about their
            experience working with Vivid Photo Studio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="#contact" 
            className="btn btn-primary"
          >
            Book Your Photo Session
          </a>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;