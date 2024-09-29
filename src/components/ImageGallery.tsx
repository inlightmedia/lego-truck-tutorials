import React from 'react';
import ABCOVER from '/public/assets/afterburner/main.jpg'
import AB1 from '/public/assets/afterburner/A1.jpg';
import AB2 from '/public/assets/afterburner/A2.jpg';
import AB3 from '/public/assets/afterburner/A3.jpg';
import AB4 from '/public/assets/afterburner/A4.jpg';
import AB5 from '/public/assets/afterburner/A5.jpg';
import AB6 from '/public/assets/afterburner/A6.jpg';
import AB7 from '/public/assets/afterburner/A7.jpg';
import AB8 from '/public/assets/afterburner/A8.jpg';
import AB9 from '/public/assets/afterburner/A9.jpg';
import AB10 from '/public/assets/afterburner/A10.jpg';
import AB11 from '/public/assets/afterburner/A11.jpg';
import AB12 from '/public/assets/afterburner/A12.jpg';
import AB13 from '/public/assets/afterburner/A13.jpg';
import AB14 from '/public/assets/afterburner/A14.jpg';
import AB15 from '/public/assets/afterburner/A15.jpg';
import AB16 from '/public/assets/afterburner/A16.jpg';
import AB17 from '/public/assets/afterburner/A17.jpg';
import AB18 from '/public/assets/afterburner/A18.jpg';
import AB19 from '/public/assets/afterburner/A19.jpg';
import BDCOVER from '/public/assets/brodozer/main.jpg';
import BD1 from '/public/assets/brodozer/B1.jpg';
import BD2 from '/public/assets/brodozer/B2.jpg';
import BD3 from '/public/assets/brodozer/B3.jpg';
import BD4 from '/public/assets/brodozer/B4.jpg';
import BD5 from '/public/assets/brodozer/B5.jpg';
import BD6 from '/public/assets/brodozer/B6.jpg';
import BD7 from '/public/assets/brodozer/B7.jpg';
import BD8 from '/public/assets/brodozer/B8.jpg';
import BD9 from '/public/assets/brodozer/B9.jpg';
import BD10 from '/public/assets/brodozer/B10.jpg';
import BD11 from '/public/assets/brodozer/B11.jpg';
import BD12 from '/public/assets/brodozer/B12.jpg';
import BD13 from '/public/assets/brodozer/B13.jpg';
import BD14 from '/public/assets/brodozer/B14.jpg';
import BD15 from '/public/assets/brodozer/B15.jpg';
import BD16 from '/public/assets/brodozer/B16.jpg';
import BD17 from '/public/assets/brodozer/B17.jpg';
import BD18 from '/public/assets/brodozer/B18.jpg';
import BD19 from '/public/assets/brodozer/B19.jpg';
import BD20 from '/public/assets/brodozer/B20.jpg';
import BD21 from '/public/assets/brodozer/B21.jpg';
import BD22 from '/public/assets/brodozer/B22.jpg';
import BD23 from '/public/assets/brodozer/B23.jpg';
import BD24 from '/public/assets/brodozer/B24.jpg';
import BD25 from '/public/assets/brodozer/B25.jpg';
import BD26 from '/public/assets/brodozer/B26.jpg';
import BD27 from '/public/assets/brodozer/B27.jpg';
import BD28 from '/public/assets/brodozer/B28.jpg';
import BFCOVER from '/public/assets/bigfoot20/main.jpg';
import BF1 from '/public/assets/bigfoot20/F1.jpg';
import BF2 from '/public/assets/bigfoot20/F2.jpg';
import BF3 from '/public/assets/bigfoot20/F3.jpg';
import BF4 from '/public/assets/bigfoot20/F4.jpg';
import BF5 from '/public/assets/bigfoot20/F5.jpg';
import BF6 from '/public/assets/bigfoot20/F6.jpg';
import BF7 from '/public/assets/bigfoot20/F7.jpg';
import BF8 from '/public/assets/bigfoot20/F8.jpg';
import BF9 from '/public/assets/bigfoot20/F9.jpg';
import BF10 from '/public/assets/bigfoot20/F10.jpg';
import BF11 from '/public/assets/bigfoot20/F11.jpg';
import BF12 from '/public/assets/bigfoot20/F12.jpg';
import BF13 from '/public/assets/bigfoot20/F13.jpg';
import BF14 from '/public/assets/bigfoot20/F14.jpg';
import BF15 from '/public/assets/bigfoot20/F15.jpg';
import BF16 from '/public/assets/bigfoot20/F16.jpg';
import BF17 from '/public/assets/bigfoot20/F17.jpg';
import BF18 from '/public/assets/bigfoot20/F18.jpg';
import BF19 from '/public/assets/bigfoot20/F19.jpg';
import BF20 from '/public/assets/bigfoot20/F20.jpg';
import BF21 from '/public/assets/bigfoot20/F21.jpg';
import BF22 from '/public/assets/bigfoot20/F22.jpg';
import BF23 from '/public/assets/bigfoot20/F23.jpg';
import BF24 from '/public/assets/bigfoot20/F24.jpg';
import BF25 from '/public/assets/bigfoot20/F25.jpg';
import BF26 from '/public/assets/bigfoot20/F26.jpg';
import BF27 from '/public/assets/bigfoot20/F27.jpg';
import BF28 from '/public/assets/bigfoot20/F28.jpg';

const images = {
    afterburner: [ABCOVER, AB1, AB2, AB3, AB4,AB5,AB6,AB7,AB8,AB9,AB10, AB11,AB12,AB13,AB14, AB15, AB16,AB17, AB18,AB19],
    brodozer: [BDCOVER,BD1, BD2, BD3, BD4, BD5, BD6, BD7, BD8, BD9, BD10, BD11, BD12, BD13, BD14, BD15, BD16, BD17, BD18, BD19, BD20, BD21, BD22, BD23, BD24, BD25, BD26, BD27, BD28],
    bigfoot20: [BFCOVER, BF1, BF2, BF3,BF4,BF5,BF6,BF7,BF8,BF9,BF10, BF11, BF12, BF13, BF14, BF15, BF16, BF17, BF18, BF19, BF20, BF21, BF22, BF23, BF24, BF25, BF26, BF27, BF28]
}

const ImageCarousel = ({ photos }: { photos: string[] }) => {
  const [currentIndex, setCurrentIndex] = React.useState<number>(0);

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

      {/* Display current image */}
      
      <img
  src={photos[currentIndex]}
  alt={`Image ${currentIndex}`}
  className="w-full object-cover"
  style={{ aspectRatio: '840 / 500' }} // Enforces the aspect ratio of 840/500
/>

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

const ImageGallery: React.FC = () => {
  return (
    <div className="space-y-8 p-4">
      {/* Row 1: Afterburner images */}
      <ImageCarousel photos={images.afterburner} />

      {/* Row 2: Bigfoot20 images */}
      <ImageCarousel photos={images.bigfoot20} />

      {/* Row 3: Brodozer images */}
      <ImageCarousel photos={images.brodozer} />
    </div>
  );
};

export default ImageGallery;