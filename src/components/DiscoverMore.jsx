import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import house from "../data/house";
import ItemTitle from "../components/ItemTitle";

import "react-vertical-timeline-component/style.min.css";
import Home from "../Home";

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

const DiscoverMoreCard = ({ house }) => (
  <VerticalTimelineElement
    className=""
    contentStyle={{ background: "white", color: "#1d1d1c" }}
    contentArrowStyle={{ borderRight: "5px solid #1d1d1c" }}
    count={house.count}
    Title={house.Title}
    description={house.description}
    iconStyle={{ background: house.iconBg }}
    icon={
      <div className="flex justify-center items-center w-full h-full object-cover ">
        {" "}
        <img
          src={house.icon}
          alt={`jouse`}
          className=" object-cover rounded-full w-[50%] h-[50%]"
        />{" "}
      </div>
    }
  >
    <div className="">
      <p className=" text-stone-500 text-xs">{house.count}</p>
      <h3 className="text-stone-700 text-[24px]"> {house.Title}</h3>
      <p className={`text-stone-500 font-manrope   text-sm`}>
        {house.description}
      </p>

      <a href="./contact">
        <button className="font-cinzel first-letter:font-bold text-amber-900 first-letter:text-orange-800 font-semibold pt-5">
          {house.button}
        </button>
      </a>
    </div>
  </VerticalTimelineElement>
);

const DiscoverMore = () => {
  return (

    <> 
    <Home /> 
    <motion.div className="discover" variants={textVariant()}>
      <motion.div
        variants={variants}
        initial="initial"
        animate="animate"
        className="w-full px-8 mt-9 h-full"
      >
        <p className="text-sm font-raleway uppercase text-white  font-medium">
          {" "}
          Exlpore our New Type of Houses Model
        </p>

        <ItemTitle> Houses</ItemTitle>
      </motion.div>
      <div className="mt-20 flex flex-col ">
        <VerticalTimeline>
          {house.map((house, index) => (
            <DiscoverMoreCard key={index} house={house}>
              {" "}
            </DiscoverMoreCard>
          ))}
        </VerticalTimeline>
      </div>
    </motion.div>
    </>
  );
};

export default DiscoverMore;
