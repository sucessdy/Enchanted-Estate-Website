import React from "react";
import Card from "./components/Card" ;
import card from "./data/card"
import {motion}  from "framer-motion"
import {Tilt} from "react-tilt"
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
    x: 1,
    transition: {
      type: "spring",
      duration: 0.75,
    },
  },
};
export default function ItemCard() {
  return (
    <div className="w-full h-full bg-white py-6 px-4  ">
      <div className=" mx-auto max-w-screen-xl  m-3 ">
        <h1
          className=" text-3xl pt-8  font-cinzel text-[#0f0f06]   text-center uppercase   py-2 mx-auto   space-x-4
         "
        >
          Your Dream Home Awaits{" "}
        </h1>

        <p className=" text-sm font-manrope  my-3 py-1 text-[#5a5a58] text-center font-medium">
          {" "}
          Welcome to our exclusive real estate platform, where we connect you to
          the finest houses in [Caratland].
        </p>
     
        <motion.div
      variants={variants}
      initial="initial"
      animate="animate"  className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2  lg:grid-cols-4 gap-5 m-4 py-7 ">
          

         {card.map((cards, index) => ( 
             <Tilt options={{max: 45, scale: 1, speed: 450}}> 
          <Card key={index} name={cards.name}
          description={cards.description}
          icon={cards.icon}
          className="perspective-1000 transform-style-preserve-3d group hover:rotate-x-10 hover:rotate-y-10"
          ></Card>
          </Tilt>
         ))}
           
        </motion.div>
       
     
      </div>
    </div>
  );
}
