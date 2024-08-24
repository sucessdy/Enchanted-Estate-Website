import React from "react";
import { motion } from "framer-motion";
import Building from "./assets/Building.jpg";
import {Tilt} from "react-tilt"

import { fadeIn, textVariant, slideIn } from "./utils/motion";
import { Scroll } from "./utils/scroll";

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
      <Tilt
        options={{ max: 45, scale: 1, speed: 450 }}
       
      >
        {" "}
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className=" px-12 my-33 text-white m-34 "
        >
          <img src={Building} className="w-[100%] h-[100%] object-cover mb-5" />
        </motion.div>
      </Tilt>

      <motion.div
        variants={variants}
        initial="initial"
        animate="animate"
        className=" px-11 my-34 text-white m-34 justify-center items-center text-center"
      >
        <p className="flex justify-start  items-start px-2 mb-3 font-cinzel max-sm:text-xs max-sm:text-center max-sm:justify-center ">
          {" "}
          Atudio-23
        </p>
        <motion.h1 className=" max-sm:text-3xl md:text-3xl lg:text-[3.5rem] flex justify-center items-center font-BodoniModa flex-wrap ">
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
          className="justify-start text-sm flex sm:text-sm md:text-sm lg:text-base text-gray-200   mx-auto py-5 mb-5 para"
        >
          The Most Expensive Homes blog updates you with the most beautiful,
          luxurious and expensive houses in the world.
        </motion.p>

        <a href="./discover">
          {" "}
          <button className=" text-center text-white hover:text-black text-xs border bg-[#1d1d1c] hover:bg-[#ffffff] p-2  h-12 w-1/2  uppercase font-semibold para">
            {" "}
            Discover More{" "}
          </button>
        </a>

        {/* scroll up */}
      </motion.div>
      <Scroll />
    </motion.div>
  );
}
