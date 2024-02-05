import React from "react";
import { motion } from "framer-motion";
import Building from "./assets/Building.jpg";

import { fadeIn, textVariant , slideIn} from "./utils/motion";

const variants = {
  initial: {
    opacity: 0,
    x: "100%",
    transition: {
      type: "spring",
      duration: 0.75,
    },
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      duration: 0.75,
    },
  },
};


export default function Header({}) {
  return (
    <motion.div
      variants={textVariant()}
      className=" justify-center  relative items-center w-full h-full grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2   mb-10"
    >
      <motion.div  variants={slideIn("left", "tween", 0.2, 1)}
         className=" px-12 my-33 text-white m-34 ">
        <img src={Building} className="w-[100%] h-[100%]" />
      </motion.div>

      <motion.div
        variants={variants}
        initial="initial"
        animate="animate"
        className=" px-11 my-44 text-white m-34 justify-center items-center text-center"
      >
        <p className="flex justify-start items-start ml-66  font-cinzel max-sm:text-xs max-sm:text-center max-sm:justify-center">
          {" "}
          Atudio-23
        </p>
        <motion.h1 className="text-5xl max-sm:text-3xl md:text-3xl lg:text-[3rem] flex justify-center items-center font-BodoniModa flex-wrap ">
          Exlusive{" "}
          <span
            variants={fadeIn("", "", 0.1, 1)}
            className="text-red-200 hover:text-rose-300 m-2  text-bold"
          >
            {" "}
            Modern{" "}
          </span>{" "}
          Design{" "}
        </motion.h1>

        <motion.p
          variants={fadeIn("", " ", 0.1, 1)}
          className="justify-start text-md flex sm:text-sm md:text-sm lg:text-base text-gray-200   mx-auto py-5 mb-5 px-9 "
        >
          The Most Expensive Homes blog updates you with the most beautiful,
          luxurious and expensive houses in the world.
        </motion.p>

        <a href="/discover">
          {" "}
          <button className=" text-center text-white hover:text-black text-xs border bg-[#1d1d1c] hover:bg-[#ffffff] p-2  h-12 w-1/2  uppercase font-semibold ">
            {" "}
            Discover More{" "}
          </button>
        </a>

        {/* scroll up */}
      </motion.div>

      <motion.div    variants={variants}
        initial="initial"
        animate="animate" className="absolute xs:bottom-10 bottom-10 p-5 w-full flex justify-end items-end z-50  mb-3">
        <a href="#items">
          <div className=" w-[32px] h-[62px] rounded-3xl border-4 border-secondary flex justify-center  items-start p-2 ">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 8.05,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-stone-500 mb-1"
            />
          </div>
        </a>
      </motion.div>
    </motion.div>
  );
}
