import React from "react"

export default function WorkHouse({ title,
  icons,
  img,
  icon1,
  icon2,
  icon3,
  name1,
  name2,
  name3,
 button, 
  amount,}) {
    return (

    <div className="bg-slate-200 shadow  w-full  pb-1 ">
      <img src={img} alt="image" className="w-full h-23 md:h-35 object-contain " />
      
      <div className="flex items-center w-full py-3 gap-4 ">
        <div className="flex items-center justify-between px-1">{icons}</div>
        <h2 className="sm:text-[1rem]  md:text-[17px] lg:text-[1.1rem] -m-2   -tracking-tighter  para text-black text-left ">
          {title}
        </h2>
      </div>

      <div className="flex justify-between items-center  ml-2 mr-3 ">
        <div className="flex justify-center items-center content-center">
          <div
            className="justify-center gap-2 items-center text-gray-800 
            "
          >
            {" "}
            {icon1}
          </div>
          <p className="mr-2   para text-sm text-[#1d1d1c] ">
            {" "}
            { name1 }
          </p>
        </div>
        <div className=" flex justify-center items-center content-center text-gray-800   ">
          <div className="mr-2  "> {icon2}</div>
          <p className="items-center flex justify-center text-sm  md:text-[12px] font-fredoka ">
            {" "}
            {name2}
          </p>
        </div>
        <div className=" flex justify-center items-center content-center  text-gray-800  ">
          <div className="mr-2  "> {icon3}</div>
          <p className=" items-center justify-center content-center text-sm  md:text-[12px]  font-fredoka ">
            {" "}
            {name3}
          </p>
        
        </div>
      </div>
      {/* button amount */}

      <div className="flex justify-between items-center my-5  ">
        <a href="/contact">
        <button className="mx-2  items-center  text-center text-white md:text-md  sm:text-sm text-sm  md:text-[12px] lg:text-[14x]   border bg-[#1d1d1c] hover:bg-[#8d8c85]  py-1 px-4  h-8 sm-h-10 w-3/3 uppercase">
          {}Book Now
        </button>
        </a>
        <h4 className="text-center font-acme mx-2 text-sm  md:text-[15px] lg:text-[18x] "> {amount}</h4>
      </div>
    </div>



      )}