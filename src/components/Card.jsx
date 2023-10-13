import React from "react";
import { motion } from "framer-motion";
export default function Card({ name, description, icon }) {
  return (
    <div className="w-full h-full p-3  bg-gradient-to-tr hover:bg-gray-400  my-3hover:translate-y-2  translate-x-1 transform  shadow-[0px_3px_8px_0px_#00000024] mx-3 ">
      <div className="h-6 w-6 mb-3 ">{icon}</div>
      <motion.h1 id="text" className=" text-[1d1d1c] hover:text-gray-100 font-BodoniModa text-md  sm:text-[10px]  capitalize md:text-[13px] lg:text-[19px] space-x-2  space-y-4 ">
        {name}{" "}
      </motion.h1>{" "}
      <p className="font-manrope text-[12px]  font-medium sm:-[6px] mr-4 mt-2 text-slate-600 hover:text-yellow-50 "> {description}</p>
    </div>
  );
}
 