import React, { useState } from 'react';
import GalleryItem from '../components/GalleryItem';
import { galleryItems } from '../utils/data';
import { Image } from 'lucide-react';

const GallerySection: React.FC = () => {
  const [filter, setFilter] = useState('All');
  
  const categories = ['All', ...Array.from(new Set(galleryItems.map(item => item.category)))];
  
  const filteredItems = filter === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === filter);

  return (
    <section id="gallery" className="section">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center justify-center mb-3">
            <Image size={24} className="text-primary-600 mr-2" />
            <span className="text-sm font-medium uppercase tracking-wider text-primary-600">Our Portfolio</span>
          </div>
          <h2 className="font-heading text-4xl mb-4">Featured Work</h2>
          <p className="text-gray-600">
            Browse through our portfolio showcasing our best photography across different styles and occasions.
            Each photo tells a unique story captured with passion and creativity.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === category
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <GalleryItem key={item.id} item={item} />
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center mt-10">
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

export default GallerySection;