import React from "react";
import { useState } from "react";



function Carrocel(){
  const images = [
    "https://blog.venturas.com.br/wp-content/uploads/2017/07/104137-fotografia-outdoor-quer-dicas-de-como-tirar-fotos-de-paisagem.jpg",
    "https://coisadefotografa.com/wp-content/uploads/2021/09/como-ter-fotos-mais-nitidas-scaled.jpg",
    "https://static-cse.canva.com/blob/1173240/screen3.jpg",
    "https://static.vecteezy.com/ti/fotos-gratis/t1/11215319-planeta-terra-com-nascer-do-sol-no-espaco-foto.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="flex flex-col items-center justify-start h-screen bg-gray-10 cursor-default my-2">
      <div className="relative w-full h-[600px] overflow-hidden rounded-lg shadow-lg">
        {/* Imagens */}
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Foto ${index + 1}`}
            className={`absolute inset-0 w-full h-full  object-cover transition-transform duration-700 ${
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

      {/* Indicadores */}
      <div className="flex space-x-2 mt-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-0.5 h-0.5 rounded-full ${
              currentIndex === index ? "bg-pink-600" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
    </div>
  )
}

export default Carrocel;

