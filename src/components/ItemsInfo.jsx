import React from "react";

export default function ItemsInfo({ title, description, image }) {
  return (
    <div className="bg-gradient-to-rose-200  grid items-center transform  m-6 text-black text-lg text-bold backdrop-blur-2 rounded-md w-[90%] h-full  p-3">
      <img
        className="w-full max-sm:w-[85%]   h-40 md:h-49 object-cover "
        src={image}
        alt="aimg"
      />
      <h1 className="text-sm uppercase mx-auto font-medium my-4 sm:mx-8 text-[#1d1d1c]">
        {" "}
        {title}{" "}
      </h1>
      <p
        id="text"
        className="text-sm flex text-left text-gray-600 first-letter:capitalize para "
      >
        {description}
      </p>
    </div>
  );
}
