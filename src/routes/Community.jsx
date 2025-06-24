import { useState } from "react";
import Image1 from "../assets/PRODUCT1.png";
import Image2 from "../assets/powerbank.jpeg";
import IbadanImg from "../assets/ibadan.jpg"; // Add your image
import BadagryImg from "../assets/badagry.jpg"; // Add your image

const CommunityPage = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [openModal, setOpenModal] = useState(false);

  const galleryImages = [
    { img: Image1 },
    { img: Image2 },
    { img: Image1 },
    { img: Image2 },
    { img: Image1 },
    { img: Image2 },
  ];

  const handleOpenModal = (index) => {
    setSlideNumber(index);
    setOpenModal(true);
  };

  const handleCloseModal = () => setOpenModal(false);
  const prevSlide = () =>
    setSlideNumber((prev) =>
      prev === 0 ? galleryImages.length - 1 : prev - 1
    );
  const nextSlide = () =>
    setSlideNumber((prev) =>
      prev + 1 === galleryImages.length ? 0 : prev + 1
    );

  return (
    <div className="pt-28 px-6 sm:px-10 md:px-16 lg:px-24 pb-12 bg-white">
      {/* Community Sections */}
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-800">
        Our Communities
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
        {/* Ibadan */}
        <div
          className="relative rounded-xl overflow-hidden shadow-lg group h-64 bg-center bg-cover"
          style={{ backgroundImage: `url(${IbadanImg})` }}
        >
          <div className="absolute inset-0 bg-black/60 flex items-center justify-center transition-opacity duration-300 group-hover:bg-opacity-80">
            <span className="text-white text-2xl md:text-3xl font-bold tracking-wide">
              Ibadan - Coming Soon
            </span>
          </div>
        </div>

        {/* Badagry */}
        <div
          className="relative rounded-xl overflow-hidden shadow-lg group h-64 bg-center bg-cover"
          style={{ backgroundImage: `url(${BadagryImg})` }}
        >
          <div className="absolute inset-0 bg-black/60 flex items-center justify-center transition-opacity duration-300 group-hover:bg-opacity-80">
            <span className="text-white text-2xl md:text-3xl font-bold tracking-wide">
              Badagry - Coming Soon
            </span>
          </div>
        </div>
      </div>

      {/* Gallery Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-800">
        Gallery
      </h2>

      {/* Modal */}
      {openModal && (
        <div className="fixed inset-0 z-[999] bg-black bg-opacity-80 flex items-center justify-center w-full h-full">
          <div
            className="absolute top-10 right-10 text-white text-5xl cursor-pointer"
            onClick={handleCloseModal}
          >
            &times;
          </div>
          <div
            className="absolute left-10 top-1/2 transform -translate-y-1/2 text-white text-4xl cursor-pointer"
            onClick={prevSlide}
          >
            &#10094;
          </div>
          <div
            className="absolute right-10 top-1/2 transform -translate-y-1/2 text-white text-4xl cursor-pointer"
            onClick={nextSlide}
          >
            &#10095;
          </div>
          <div className="w-full h-full flex items-center justify-center p-10">
            <img
              src={galleryImages[slideNumber].img}
              alt={`Gallery ${slideNumber + 1}`}
              className="max-w-full max-h-full object-contain"
            />
          </div>
        </div>
      )}

      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {galleryImages.map((slide, index) => (
          <div
            key={index}
            onClick={() => handleOpenModal(index)}
            className="bg-gray-100 rounded-xl shadow-md p-4 cursor-pointer transition-transform duration-200 hover:scale-105"
          >
            <img
              src={slide.img}
              alt={`Slide ${index + 1}`}
              className="w-full h-64 object-cover rounded-md"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommunityPage;
