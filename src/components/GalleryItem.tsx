import React, { useState } from 'react';
import { GalleryItem as GalleryItemType } from '../types';
import { X } from 'lucide-react';

interface GalleryItemProps {
  item: GalleryItemType;
}

const GalleryItem: React.FC<GalleryItemProps> = ({ item }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <div 
        className="overflow-hidden rounded-lg cursor-pointer group relative"
        onClick={toggleExpand}
      >
        <img 
          src={item.image} 
          alt={item.title} 
          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
          <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            <span className="text-accent-500 text-sm font-medium">{item.category}</span>
            <h4 className="text-white text-lg font-medium">{item.title}</h4>
          </div>
        </div>
      </div>

      {/* Expanded View */}
      {expanded && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4">
          <button 
            className="absolute top-4 right-4 text-white hover:text-accent-500 focus:outline-none"
            onClick={toggleExpand}
          >
            <X size={32} />
          </button>
          <div className="max-w-6xl max-h-[90vh] overflow-auto">
            <img 
              src={item.image} 
              alt={item.title} 
              className="w-full h-auto max-h-[80vh] object-contain"
            />
            <div className="text-center mt-4">
              <span className="text-accent-500 text-sm font-medium block">{item.category}</span>
              <h4 className="text-white text-xl font-medium">{item.title}</h4>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default GalleryItem;