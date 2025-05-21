import React from 'react';
import Hero from '../components/Hero';
import ServicesSection from '../sections/ServicesSection';
import GallerySection from '../sections/GallerySection';
import AboutSection from '../sections/AboutSection';
import TestimonialsSection from '../sections/TestimonialsSection';
import ContactSection from '../sections/ContactSection';

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <ServicesSection />
      <GallerySection />
      <AboutSection />
      <TestimonialsSection />
      <ContactSection />
    </>
  );
};

export default HomePage;