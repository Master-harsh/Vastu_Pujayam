import React from "react";
import { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const images = [
  "/Rudraksha.jpeg",
  "/Gemstones.png",
  "/Shaligram.jpeg",
  "/Agarwood.jpeg",
  "/CrystalStone.jpeg",
];

function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000); // Change image every 3 seconds
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full h-[398px] overflow-hidden">
      <img
        src={images[currentIndex]}
        alt="slider"
        className="w-full h-full object-cover object-center transition duration-700 ease-in-out"
      />

       <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-40 text-white p-2 rounded-full hover:bg-opacity-70"
      >
        <FaArrowLeft />
      </button>

      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-40 text-white p-2 rounded-full hover:bg-opacity-70"
      >
        <FaArrowRight />
      </button>
    </div>
  );
}

export default ImageSlider;
