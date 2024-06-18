"use client";
import { useState } from "react";

const Gallery = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [active, setActive] = useState({
    exterior: true,
    interior: false,
  });

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const selectImage = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="bg-[#F4F9FF]">
      <div className="container mx-auto p-4 ">
        <div className="flex items-center sm:justify-end gap-3 mb-3">
          <button
            onClick
            className="bg-transparent 
         text-sky-400 font-bold py-2 px-4 rounded hover:bg-[#00357B] border-[2px] border-[#00357B] "
          >
            EXTERIORS
          </button>
          <button
            className="bg-transparent 
         text-sky-400 font-bold py-2 px-4 rounded hover:bg-[#00357B] border-[#00357B] border-[2px] "
          >
            INTERIOR
          </button>
        </div>
        <div className="relative">
          <img
            src={images[currentIndex].src}
            alt={images[currentIndex].alt}
            className="w-full h-auto rounded-lg shadow-lg"
          />
          <button
            onClick={prevImage}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full hover:bg-gray-500"
          >
            &lt;
          </button>
          <button
            onClick={nextImage}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full hover:bg-gray-500"
          >
            &gt;
          </button>
        </div>
        <div className="flex mt-4 space-x-2 w-full items-center justify-between">
          {images.map((image, index) => (
            <div className="flex justify-center w-48 h-28">
              <img
                key={index}
                src={image.src}
                alt={image.alt}
                className={`object-cover  rounded-lg cursor-pointer ${
                  index === currentIndex ? "ring-4 ring-blue-500" : ""
                }`}
                onClick={() => selectImage(index)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
