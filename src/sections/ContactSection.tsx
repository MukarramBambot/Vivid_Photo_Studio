import React from 'react';
import ContactForm from '../components/ContactForm';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const ContactSection: React.FC = () => {
  const contactInfo = [
    {
      id: 1,
      icon: Phone,
      title: 'Phone',
      content: '+91 97899 11305',
      link: 'tel:+919789911305',
    },
    {
      id: 2,
      icon: Mail,
      title: 'Email',
      content: 'VividPhotoStudio@gmail.com',
      link: 'mailto:VividPhotoStudio@gmail.com',
    },
    {
      id: 3,
      icon: MapPin,
      title: 'Studio Location',
      content: 'Anjaneyar Kovil St, Sabapathy Nagar, Noothencheri, Vengavasal, Chennai, Tamil Nadu 600126',
      link: 'https://maps.google.com',
    },
    {
      id: 4,
      icon: Clock,
      title: 'Business Hours',
      content: 'Mon-Fri: 9am-6pm, Sat: 10am-4pm',
      link: null,
    },
  ];

  return (
    <section id="contact" className="section bg-gray-100">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-sm font-medium uppercase tracking-wider text-primary-600">Contact Us</span>
          <h2 className="font-heading text-4xl mb-4 mt-2">Book Your Photo Session</h2>
          <p className="text-gray-600">
            Ready to capture your special moments? Get in touch with us to discuss your photography needs
            and book your session. We'll get back to you within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div>
            <ContactForm />
          </div>

          {/* Contact Information */}
          <div>
            <div className="bg-white rounded-lg shadow-lg p-6 lg:p-8 h-full">
              <h3 className="text-2xl font-heading text-gray-900 mb-6">Get In Touch</h3>
              
              <div className="space-y-6">
                {contactInfo.map((item) => (
                  <div key={item.id} className="flex">
                    <div className="bg-primary-50 p-3 rounded-full h-12 w-12 flex items-center justify-center mr-4 flex-shrink-0">
                      <item.icon size={20} className="text-primary-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">{item.title}</h4>
                      {item.link ? (
                        <a 
                          href={item.link} 
                          className="text-gray-600 hover:text-primary-600 transition-colors"
                        >
                          {item.content}
                        </a>
                      ) : (
                        <p className="text-gray-600">{item.content}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Map or Studio Image */}
              <div className="mt-8 rounded-lg overflow-hidden h-64">
                <img 
                  src="https://images.pexels.com/photos/1595236/pexels-photo-1595236.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Studio" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;