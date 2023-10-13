import React, { useState } from "react";

import { RxDot } from "react-icons/rx";

function SlideShow() {
  const slides = [
    {
      url: " https://i.pinimg.com/564x/ef/16/6e/ef166e14bd211a324c21f7035214ecd8.jpg",
    },
    {
      url: "https://i.pinimg.com/564x/b8/62/17/b86217de8ef2dd7f306c1955434c3b1d.jpg",
    },

    {
      url: " https://i.pinimg.com/564x/61/d4/54/61d4541f1b9b889a77c808bd183694b9.jpg",
    },
    {
      url: "https://i.pinimg.com/564x/3b/3e/ba/3b3eba3f3e71435ccccc38b998179e4a.jpg",    },
  ];



  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;

    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const goToSlide = (SlideIndex) => {
    setCurrentIndex(SlideIndex);
  };

  return (
    <div className="max-w-[1000px] h-[500px]  w-full mx-auto relative  object-cover bg-white">
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="w-full h-full bg-cover  duration-500"
      >
        {" "}
      </div>

      <div className="absolute top-[50%] right-5  text-2xl cursor-pointer bg-white rounded-full py-1 px-1  ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="3"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
            onClick={prevSlide}
          />{" "}
        </svg>
      </div>
      <div className="absolute top-[50%] left-5 rounded-full py-1 px-1 bg-white text-2xl cursor-pointer p-4  ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="3"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
            onClick={nextSlide}
          />
        </svg>
      </div>

      <div className="flex justify-center top-4 w-full h-full items-center   transtion-500 ">
        {slides.map((slide, SlideIndex) => (
          <div
            onClick={() => goToSlide(SlideIndex)}
            className="text-2xl cursor-pointer "
          > 
          
          <div className="">  

          <RxDot />
          </div>
            
          </div>
        ))}
      </div>
    </div>
  );
}

export default SlideShow;
