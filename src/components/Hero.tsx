import React, { useEffect, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { heroSlides } from '../utils/data';
import { ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  const sliderRef = useRef<Slider | null>(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    fade: true,
    pauseOnHover: false,
  };

  return (
    <section id="home" className="relative h-screen">
      <Slider ref={sliderRef} {...settings} className="h-screen">
        {heroSlides.map((slide, index) => (
          <div key={index} className="relative h-screen">
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-40"></div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center text-center px-4">
              <div className="max-w-4xl mx-auto">
                <h1 className="text-white mb-4 text-shadow animate-fade-in">
                  {slide.title}
                </h1>
                <p className="text-white text-xl md:text-2xl mb-8 animate-slide-up">
                  {slide.subtitle}
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>
                  <a 
                    href="#services" 
                    className="btn btn-primary"
                  >
                    Our Services
                  </a>
                  <a 
                    href="#gallery" 
                    className="btn btn-secondary bg-transparent text-white border-white hover:bg-white hover:text-primary-600"
                  >
                    View Portfolio
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <a href="#services" className="flex flex-col items-center text-white opacity-80 hover:opacity-100">
          <span className="mb-1 text-sm">Scroll Down</span>
          <ChevronRight size={20} className="transform rotate-90" />
        </a>
      </div>
    </section>
  );
};

export default Hero;