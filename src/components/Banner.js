import React, { useState } from "react";
import { HiArrowRight, HiArrowLeft } from "react-icons/hi";

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    "https://images.pexels.com/photos/3944405/pexels-photo-3944405.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/4482896/pexels-photo-4482896.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/34577/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ];
  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 3 : (prev) => prev - 1);
  };
  const nextSlide = () => {
    setCurrentSlide(currentSlide === 3 ? 0 : (prev) => prev + 1);
  };

  return (
    <div className="w-full h-auto overflow-x-hidden">
      <div className="w-screen h-[650px] relative">
        <div
          style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
          className="w-[400vw] h-full flex transition-transform duration-1000"
        >
          <img
            className="w-screen h-full object-cover"
            src={data[0]}
            alt=""
            loading="priority"
          />
          <img
            className="w-screen h-full object-cover"
            src={data[1]}
            alt=""
            loading="priority"
          />
          <img
            className="w-screen h-full object-cover"
            src={data[2]}
            alt=""
            loading="priority"
          />
          <img
            className="w-screen h-full object-cover"
            src={data[3]}
            alt=""
            loading="priority"
          />
        </div>
        <div className="absolute w-fit left-0 right-0 mx-auto flex gap-8 bottom-44">
          <div
            onClick={prevSlide}
            className="w-14 h-12 border-[1px] border-gray-700 flex items-center justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300"
          >
            <HiArrowLeft />
          </div>
          <div
            onClick={nextSlide}
            className="w-14 h-12 border-[1px] border-gray-700 flex items-center justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300"
          >
            <HiArrowRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
