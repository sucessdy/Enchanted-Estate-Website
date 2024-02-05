import React, { useState } from "react";
import linkedin from "./assets/linkedin.png";
import insta from "./assets/insta.png";
import facebook from "./assets/facebook.png";

// here is the interior design
export default function Work() {
  const slides = [
    {
      url: "https://i.pinimg.com/564x/3b/d9/16/3bd9168c49ce4aac7be8d3b63e86a816.jpg",
    },

    {
      url: "https://i.pinimg.com/564x/1c/2a/12/1c2a122645092a2de6edae45e1f60800.jpg",
    },
    {
      url: "https://i.pinimg.com/564x/29/f8/4b/29f84be119f327b4685efbc05698cd19.jpg",
    },
    {
      url: "https://i.pinimg.com/564x/ac/2b/64/ac2b64b89c0d29cbed0557d4374125c1.jpg",
    },
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
  return (
    <div
      id="work"
      className="work relative grid lg:grid-cols-2 md:grid-cols-2  sm:grid-cols-1  bg-white"
    >
      <div className="bg-white  lg:p-16 p-6 mx-auto">
        <h1 className=" lg:py-10 md:py-7 sm:py-5  font-cinzel text-4xl md:text-3xl sm:text-2xl text-[#1d1d1c] ">
          {" "}
          Interior Design Vol.2
        </h1>
        <p className="font-manrope text-sm py-2 text-[#] mx-auto p-4 m-3 mb-8">
          {" "}
          More than a book, a vibrant guide with the best of luxury. This isn't
          just any ordinary book; the second volumne of the interior design. The
          very essence of luxury and mordern design, showing every abiltgy to
          teanform your interior design.. Each page showccase the luxurious that
          our picese art create. Our Design, endless possibities.
        </p>
        <a href="/contact" className="mt-5 ">
        <button className=" text-center text-white text-sm font-medium 
        sm:text-xs border bg-[#1d1d1c] hover:animate-pulse hover:bg-[#000000] p-2  h-12 w-1/2 ml-4  py-33 px-6    uppercase   ">
          {" "}
         Get in touch {" "}
        </button>
        </a>

        <div
          className="  flex-row  space-x-2 md:space-x-3 
 "
        >
          <div className="  inline-flex my-2 mx-2 mt-6 py-3 flex-row">
            <h3 className="font-xl font-cinzel  p-2 font-bold text-center ">
              {" "}
              Share:
            </h3>
            <a href="">
              {" "}
              <img className="w-8 gap-4 ml-3" src={facebook} alt="img" />{" "}
            </a>
            <a href="">
              {" "}
              <img className="w-9 ml-3" src={insta} alt="im" />
            </a>
            <a href="https://www.linkedin.com/in/mukta-kumari-63012a263/   ">
              {" "}
              <img className="w-8 ml-3" src={linkedin} alt="image" />
            </a>
          </div>
        </div>
      </div>
      {/* left  */}



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

 
    </div>
    </div>
  );
}
