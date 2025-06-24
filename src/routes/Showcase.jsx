import { useState } from "react";
import Image1 from "../assets/PRODUCT3.jpg";
import Image5 from "../assets/PRODUCT2.png";
import Image6 from "../assets/PRODUCT1.png";
import Image3 from "../assets/cof.jpeg";
import Image4 from "../assets/cof2.jpeg";
import Image2 from "../assets/powerbank.jpeg";

import {
  FaChevronCircleLeft,
  FaChevronCircleRight,
  FaTimesCircle,
} from "react-icons/fa";

const Showcase = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [openModal, setOpenModal] = useState(false);

  const galleryImages = [
    { img: Image3 },
    { img: Image2 },
    { img: Image1 },
    { img: Image5 },
    { img: Image4 },
    { img: Image6 },
    { img: Image6 },
    { img: Image5 },
    { img: Image1 },
    { img: Image2 },
  ];

  const handleOpenModal = (index) => {
    setSlideNumber(index);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const prevSlide = () => {
    setSlideNumber((prev) =>
      prev === 0 ? galleryImages.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setSlideNumber((prev) =>
      prev + 1 === galleryImages.length ? 0 : prev + 1
    );
  };

  return (
    <div className="pt-28 px-6 sm:px-10 md:px-16 lg:px-24 pb-12 bg-white">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-800">
        Our Gallery
      </h2>

      {/* Modal */}
      {openModal && (
        <div className="fixed inset-0 z-[999] bg-black bg-opacity-80 flex items-center justify-center w-full h-full">
          <FaTimesCircle
            className="fixed top-10 right-10 text-white text-5xl cursor-pointer opacity-70 hover:opacity-100 z-[9999]"
            onClick={handleCloseModal}
          />
          <FaChevronCircleLeft
            className="fixed left-10 top-1/2 transform -translate-y-1/2 text-white text-5xl cursor-pointer opacity-70 hover:opacity-100 z-[9999]"
            onClick={prevSlide}
          />
          <FaChevronCircleRight
            className="fixed right-10 top-1/2 transform -translate-y-1/2 text-white text-5xl cursor-pointer opacity-70 hover:opacity-100 z-[9999]"
            onClick={nextSlide}
          />
          <div className="w-full h-full flex items-center justify-center p-10">
            <img
              src={galleryImages[slideNumber].img}
              alt=""
              className="max-w-full max-h-full object-contain select-none pointer-events-none"
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
            <div className="flex items-center justify-center w-full h-64 bg-white rounded-md">
              <img
                src={slide.img}
                alt={`Slide ${index + 1}`}
                className="max-h-full max-w-full object-contain"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Showcase;