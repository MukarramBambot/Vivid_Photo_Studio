import React from 'react';
import { Camera, Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Camera size={28} className="text-accent-500" />
              <span className="font-heading text-xl font-bold">Vivid Photo Studio</span>
            </div>
            <p className="text-gray-400 max-w-xs">
              Capturing life's precious moments since 2014. Professional photography 
              and videography services for all your special occasions.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg mb-4 text-accent-500">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'Services', 'Gallery', 'About', 'Contact', 'Book Now'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase().replace(' ', '-')}`}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading text-lg mb-4 text-accent-500">Our Services</h4>
            <ul className="space-y-2">
              {[
                'Wedding Photography',
                'Pre-Wedding Shoots',
                'Portrait Photography',
                'Maternity Photography',
                'Newborn Photography',
                'Commercial Photography',
                'Videography'
              ].map((item) => (
                <li key={item}>
                  <a 
                    href="#services"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="font-heading text-lg mb-4 text-accent-500">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="text-accent-500 flex-shrink-0 mt-1" />
                <span className="text-gray-400">Anjaneyar Kovil St, Sabapathy Nagar, Noothencheri, Vengavasal, Chennai, Tamil Nadu 600126</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} className="text-accent-500 flex-shrink-0" />
                <span className="text-gray-400">+91 97899 11305</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} className="text-accent-500 flex-shrink-0" />
                <span className="text-gray-400">VividPhotoStudio@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {currentYear} Vivid Photo Studio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;