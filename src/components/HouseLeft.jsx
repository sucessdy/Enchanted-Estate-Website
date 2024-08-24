import React from "react";

export default function HouseLeft({ image , count, Title, description ,  button}) {
  return (
    <>

      <img src={image} className="w-full h-[450px] md:49 object-cover p-9 " />
      <div className=" grid grid-rows-2 sm:grid-cols-1">
        <p className="text-black  my-2 para text-md">{count} </p>

        <h1 className="text-3xl p-3 font-cinzel text-amber-80  uppercase  flex-col  ">
          {" "}
          {Title}{" "}
        </h1>

        <p className="para my-3 p-1">{description} </p>
        <button className=" mx-5  font-cinzel first-letter:font-bold text-amber-900 first-letter:text-orange-800  font-semibold"> </button>
      </div>
     
      </>
  );
}
