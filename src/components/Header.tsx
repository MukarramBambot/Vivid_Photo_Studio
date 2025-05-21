import React, { useState, useEffect } from 'react';
import { Camera, Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="/" className="flex items-center space-x-2">
          <Camera size={32} className={`${isScrolled ? 'text-primary-600' : 'text-white'}`} />
          <span className={`font-heading text-xl font-bold ${isScrolled ? 'text-primary-600' : 'text-white'}`}>
            Vivid Photo Studio
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {['Home', 'Services', 'Gallery', 'About', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`font-medium hover:text-accent-500 transition-colors ${
                isScrolled ? 'text-gray-800' : 'text-white'
              }`}
            >
              {item}
            </a>
          ))}
          <a
            href="#contact"
            className="btn btn-primary py-2 px-4"
          >
            Book Now
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X size={24} className={isScrolled ? 'text-gray-800' : 'text-white'} />
          ) : (
            <Menu size={24} className={isScrolled ? 'text-gray-800' : 'text-white'} />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-md py-4 px-6 animate-fade-in">
          <nav className="flex flex-col space-y-4">
            {['Home', 'Services', 'Gallery', 'About', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-800 font-medium hover:text-primary-600 transition-colors"
                onClick={closeMenu}
              >
                {item}
              </a>
            ))}
            <a
              href="#contact"
              className="btn btn-primary w-full text-center"
              onClick={closeMenu}
            >
              Book Now
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;