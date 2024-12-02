import React from "react";
import { useState } from "react";
import imgBanner1 from "../assets/banner.png"


function Carrocel(){
  const images = [
    imgBanner1,
    imgBanner1,
    imgBanner1
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="flex flex-col items-center justify-start bg-gray-10 cursor-default ">
      <div className="relative w-full h-[100vh] max-lg:h-[70vh] max-md:h-[50vh] max-sm:h-[30vh] overflow-hidden rounded-lg shadow-lg">
        {/* Imagens */}
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Foto ${index + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-transform duration-700 ${
              index === currentIndex ? "translate-x-0" : index < currentIndex ? "-translate-x-full" : "translate-x-full"
            }`}
          />
        ))}

        {/* Botão Anterior */}
        <button
          onClick={goToPrevious}
          className="absolute top-1/2 left-4 -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full w-10 h-10 flex items-center justify-center"
        >
          ‹
        </button>

        {/* Botão Próximo */}
        <button
          onClick={goToNext}
          className="absolute top-1/2 right-4 -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full w-10 h-10 flex items-center justify-center"
        >
          ›
        </button>
      </div>

      
    </div>
  )
}

export default Carrocel;

