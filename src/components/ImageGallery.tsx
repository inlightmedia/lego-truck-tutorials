import React, { useState, useEffect } from 'react';

interface NumberCircleProps {
  number: number;
}

const NumberCircle: React.FC<NumberCircleProps> = ({ number }) => {
  return (
    <div
      style={{
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        backgroundColor: 'red',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 'bold',
        fontSize: '20px',
        fontFamily: 'Helvetica, Arial, sans-serif',
        color: 'white',
        position: 'absolute',
        bottom: '10px',
        right: '10px',
      }}
    >
      {number}
    </div>
  );
};

const loadImages = async (imageGlob: Record<string, () => Promise<any>>) => {
  const imagePaths = Object.keys(imageGlob).sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));
  const images = await Promise.all(
    imagePaths.map((path) => imageGlob[path]().then((module) => module.default))
  );
  return images;
};

const ImageCarousel = ({ photos }: { photos: string[] }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const nextImage = () => {
    if (currentIndex < photos.length - 1) {
      setCurrentIndex((prevIndex: number) => prevIndex + 1);
    }
  };

  const prevImage = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex: number) => prevIndex - 1);
    }
  };

  return (
    <div className="flex items-center justify-center max-w-[80%] mx-auto">
      {/* Previous Button */}
      <button
        onClick={prevImage}
        disabled={currentIndex === 0}
        className={`px-4 py-2 bg-gray-500 text-white rounded ${currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-700'}`}
      >
        Previous
      </button>

      {/* Image container with the number circle in the bottom-right corner */}
      <div style={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'center' }}>
        <img
          src={photos[currentIndex]}
          alt={`Image ${currentIndex}`}
          className="w-full object-cover"
          style={{ aspectRatio: '840 / 500' }} // Enforces the aspect ratio of 840/500
        />
        {/* Number Circle */}
        <NumberCircle number={currentIndex + 1} />
      </div>

      {/* Next Button */}
      <button
        onClick={nextImage}
        disabled={currentIndex === photos.length - 1}
        className={`px-4 py-2 bg-gray-500 text-white rounded ${currentIndex === photos.length - 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-700'}`}
      >
        Next
      </button>
    </div>
  );
};

export default ImageCarousel;
