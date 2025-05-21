import React from 'react';
import { Camera, Users, Calendar, Award } from 'lucide-react';

const AboutSection: React.FC = () => {
  const stats = [
    { id: 1, icon: Calendar, value: '11+', label: 'Years of Experience', description: 'Established in 2014' },
    { id: 2, icon: Users, value: '1,000+', label: 'Happy Clients', description: 'And growing every day' },
    { id: 3, icon: Camera, value: '50,000+', label: 'Photos Delivered', description: 'Capturing precious moments' },
    { id: 4, icon: Award, value: '25+', label: 'Awards Won', description: 'Recognition for excellence' },
  ];

  return (
    <section id="about" className="section">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden rounded-lg">
                <img
                  src="https://images.pexels.com/photos/3379934/pexels-photo-3379934.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Photographer in action"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 hidden md:block">
                <div className="bg-white p-6 rounded-lg shadow-xl">
                  <p className="font-heading text-2xl font-bold">Since</p>
                  <p className="font-heading text-5xl font-bold text-primary-600">2014</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="inline-flex items-center mb-3">
              <span className="text-sm font-medium uppercase tracking-wider text-primary-600">About Us</span>
              <span className="ml-3 h-px w-12 bg-primary-600"></span>
            </div>
            <h2 className="font-heading text-4xl mb-6">Your Moments, Our Passion</h2>
            <p className="text-gray-600 mb-6">
              Vivid Photo Studio was founded in 2014 with a simple mission: to capture life's most precious moments 
              with creativity, passion, and technical excellence. What started as a small portrait studio has grown 
              into a full-service photography and videography company serving clients for weddings, family portraits, 
              commercial projects, and more.
            </p>
            <p className="text-gray-600 mb-6">
              Our team of skilled photographers brings years of experience and a unique artistic vision to every 
              shoot. We believe that great photography isn't just about technical skill—it's about connecting with 
              our subjects, understanding their vision, and creating images that tell their unique story.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <a href="#services" className="btn btn-primary">
                Explore Services
              </a>
              <a href="#contact" className="btn btn-secondary">
                Get in Touch
              </a>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
          {stats.map((stat) => (
            <div key={stat.id} className="bg-white p-6 rounded-lg shadow-md transition-transform duration-300 hover:-translate-y-2">
              <div className="bg-primary-50 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <stat.icon size={32} className="text-primary-600" />
              </div>
              <h3 className="font-heading text-4xl font-bold text-primary-600 mb-2">{stat.value}</h3>
              <p className="font-medium text-gray-900">{stat.label}</p>
              <p className="text-gray-500 text-sm">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;