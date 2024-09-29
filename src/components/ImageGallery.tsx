import React, { useState, useEffect } from 'react';

// Import images dynamically using import.meta.glob
const afterburnerImages = import.meta.glob('../assets/afterburner/*.{jpg,JPG}');
const brodozerImages = import.meta.glob('../assets/brodozer/*.{jpg,JPG}');
const bigfootImages = import.meta.glob('../assets/bigfoot20/*.{jpg,JPG}');

// NumberCircle component remains the same
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

// Function to load and sort images
const loadImages = async (imageGlob: Record<string, () => Promise<any>>) => {
  const imagePaths = Object.keys(imageGlob).sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));
  const images = await Promise.all(
    imagePaths.map((path) => imageGlob[path]().then((module) => module.default))
  );
  return images;
};

// ImageCarousel component that will display the current set of images
const ImageCarousel = ({ photos }: { photos: string[] }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  // Reset currentIndex to 0 when the photos array changes (i.e., new carousel)
  useEffect(() => {
    setCurrentIndex(0);
  }, [photos]);

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
    <div className="flex flex-col items-center max-w-[80%] mx-auto">
      {/* Display current image */}
      <div style={{ position: 'relative', width: '100%' }}>
        <img
          src={photos[currentIndex]}
          alt={`Image ${currentIndex}`}
          className="w-full object-cover"
          style={{ aspectRatio: '840 / 500' }} // Enforces the aspect ratio of 840/500
        />
        {/* Number Circle */}
        <NumberCircle number={currentIndex + 1} />
      </div>

      {/* Previous and Next Buttons */}
      <div className="flex justify-between w-full mt-4">
        <button
          onClick={prevImage}
          disabled={currentIndex === 0}
          className={`px-4 py-2 bg-gray-500 text-white rounded ${currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-700'}`}
        >
          Previous
        </button>

        <button
          onClick={nextImage}
          disabled={currentIndex === photos.length - 1}
          className={`px-4 py-2 bg-gray-500 text-white rounded ${currentIndex === photos.length - 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-700'}`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

// Main ImageGallery component with thumbnail buttons below the carousel
const ImageGallery: React.FC = () => {
  const [afterburner, setAfterburner] = useState<string[]>([]);
  const [brodozer, setBrodozer] = useState<string[]>([]);
  const [bigfoot, setBigfoot] = useState<string[]>([]);
  const [currentCarousel, setCurrentCarousel] = useState<string[]>([]); // Holds the current image set being displayed

  useEffect(() => {
    // Load all image sets and ensure they are sorted
    loadImages(afterburnerImages).then(images => {
      setAfterburner(images);
      setCurrentCarousel(images); // Default to afterburner on load
    });
    loadImages(brodozerImages).then(setBrodozer);
    loadImages(bigfootImages).then(setBigfoot);
  }, []);

  return (
    <div className="space-y-8 p-4">
      {/* Display the current carousel */}
      {currentCarousel.length > 0 && <ImageCarousel photos={currentCarousel} />}

      {/* Thumbnail buttons below the carousel */}
      <div className="flex justify-center space-x-4 mt-8">
        {afterburner.length > 0 && (
          <button onClick={() => setCurrentCarousel(afterburner)}>
            <div style={{ position: 'relative', width: '150px', height: '90px' }}>
              <img
                src={afterburner[0]}
                alt="Afterburner thumbnail"
                className="object-cover w-full h-full rounded-lg border-2 border-gray-300 hover:border-gray-500"
                style={{ aspectRatio: '840 / 500' }} // Enforce the aspect ratio for thumbnails
              />
            </div>
          </button>
        )}
        {brodozer.length > 0 && (
          <button onClick={() => setCurrentCarousel(brodozer)}>
            <div style={{ position: 'relative', width: '150px', height: '90px' }}>
              <img
                src={brodozer[0]}
                alt="Brodozer thumbnail"
                className="object-cover w-full h-full rounded-lg border-2 border-gray-300 hover:border-gray-500"
                style={{ aspectRatio: '840 / 500' }} // Enforce the aspect ratio for thumbnails
              />
            </div>
          </button>
        )}
        {bigfoot.length > 0 && (
          <button onClick={() => setCurrentCarousel(bigfoot)}>
            <div style={{ position: 'relative', width: '150px', height: '90px' }}>
              <img
                src={bigfoot[0]}
                alt="Bigfoot thumbnail"
                className="object-cover w-full h-full rounded-lg border-2 border-gray-300 hover:border-gray-500"
                style={{ aspectRatio: '840 / 500' }} // Enforce the aspect ratio for thumbnails
              />
            </div>
          </button>
        )}
      </div>
    </div>
  );
};

export default ImageGallery;
