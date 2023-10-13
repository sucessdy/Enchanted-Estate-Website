import React, { useState, useEffect } from "react";
import sectionWrapper from "./hoc/sectionWrapper";

const imgUrl = {
  modern:
    "https://da28rauy2a860.cloudfront.net/completehome/wp-content/uploads/2021/01/07115205/Hero-5.jpg",
  simple:
    "https://assets.architecturaldigest.in/photos/6051d3284cfb7d2fe3ff6bfa/4:3/w_1439,h_1079,c_limit/Coimbatore-home-architecture-interiors-photo.jpg ",
  bungalow:
    "https://cadacon.ca/wp-content/uploads/2019/03/53192483_1198460040312723_6106851532454494208_o-1536x1207.jpg",
  luxury:
    "https://i.pinimg.com/564x/7e/e2/56/7ee2569fb6fe306ecaad1d18c78ea362.jpg",
};

const typeVariants = ["modern", "simple", "bungalow", "luxury"];

// const imgSrc = [selectedRoom(room) + selectedType(house)]
function ProductPage() {
  const [selectedType, setselectedType] = useState("modern");

  return (
    <main id='style' className="style w-[100%] h-[100%] flex flex-col lg:flex-row bg-white p-2z  ">
      <div id="style" className="relative lg:w-1/2 w-full h-[99%]  sm:items-center sm:flex sm:justify-center drop-shadow-sm ">
        <img
          src={imgUrl[selectedType]}
          className="w-[100%] min-h-[70%]  sm:w-[80%] sm:h-[80%] rounded-md object-cover  drop-shadow-lg items-center flex  justify-center 
 "
          alt="house "
        />
      </div>
      {/* all the right side  */}

      <div className="w-full lg:w-1/2 flex  justify-start  p-5 items-baseline  sm:items-center sm:justify-center sm:flex  flex-col  lg:flex lg:justify-start lg:items-start">
        <h2 className="text-[#1d1d1c] font-BodoniModa  p-[2%] pt-12  text-[2.3rem]   flex-col capitalize text-regular ">
          {" "}
          Exclusive Modern House{" "}
        </h2>

        <p className=" text-[#1d1d1c] text-[1.3rem] font-bold  p-2 first-letter:left-0 flex  items-start  border-purple-50  justify-start    ">
          {" "}
          $400,900 USD{" "}
        </p>

        <section className=" lg:flex flex-col lg:justify-start lg:items-start ">
          <h2 className="text-stone-900 uppercase font-semibold  pt-2 left-0 flex  items-start mb-4  justify-start sm:text-center sm:justify-center sm:items-center bg-white mx-2 ">
            {" "}
            House
          </h2>

          <div className="flex gap-2   flex-wrap">
            {" "}
            {typeVariants.map((house, index) => (
              <button
                key={index}
                className={`bg-gray-50 px-4 py-1   rounded-full border-2 mb-4 m-0 ${
                  selectedType === house
                    ? "border-[#1d1d1c]"
                    : "border-stone-100 "
                }`}
                onClick={() => setselectedType(house)}
              >
                {house.charAt(0).toLocaleUpperCase() + house.slice(1)}{" "}
              </button>
            ))}
          </div>
        </section>

        <a href="./contact" className=" mt-3">
          <button className=" text-sm  text-[#ffffff]  py-3 border border-gray-200  bg-[#1d1d1c] rounded-full  my-4  font-manrope  text-center sm:text-sm  hover:bg-white hover:text-[#1d1d1c]  px-8 shadow-lg   transition-400 scroll-smooth  font-bold whitespace-nowrap  leading-6 tracking-wider  m-0   ">
            Contact Now
          </button>
        </a>
      </div>
    </main>
  );
}
export default sectionWrapper(ProductPage, "");
