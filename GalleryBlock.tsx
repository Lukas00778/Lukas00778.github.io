
import React, { useState } from 'react';
import { GalleryBlock as GalleryBlockType } from '../../types';

interface GalleryBlockProps {
  block: GalleryBlockType;
}

const GalleryBlock: React.FC<GalleryBlockProps> = ({ block }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openLightbox = (src: string) => {
    setSelectedImage(src);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <div>
      {block.title && <h2 className="text-2xl font-bold text-gray-900 mb-4 border-l-4 border-blue-600 pl-4">{block.title}</h2>}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {block.images.map((image, index) => (
          <div key={index} className="group relative cursor-pointer overflow-hidden rounded-lg" onClick={() => openLightbox(image.src)}>
            <img src={image.src} alt={image.caption || `Gallery image ${index + 1}`} className="w-full h-full object-cover aspect-square transition-transform duration-300 group-hover:scale-105" />
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-2">
              <p className="text-white text-center text-sm">{image.caption}</p>
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={closeLightbox}
        >
          <style>{`
            @keyframes fade-in {
              from { opacity: 0; }
              to { opacity: 1; }
            }
            .animate-fade-in { animation: fade-in 0.3s ease-out; }
          `}</style>
          <button className="absolute top-4 right-4 text-white text-4xl font-bold hover:text-gray-300 transition-colors" onClick={closeLightbox}>&times;</button>
          <img 
            src={selectedImage} 
            alt="Full size view" 
            className="max-w-[95vw] max-h-[95vh] rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking on the image
          />
        </div>
      )}
    </div>
  );
};

export default GalleryBlock;
