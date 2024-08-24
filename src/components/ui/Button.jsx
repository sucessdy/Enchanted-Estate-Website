import React from "react";
import { motion } from "framer-motion";

export default function Button() {
  return (
    <div>
      {" "}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "tween", duration: 0.3 }}
        className=" text-center text-white hover:text-black text-xs border bg-[#1d1d1c] hover:bg-[#ffffff] p-4  h-12 w-2/2  uppercase       para "
      >
        {" "}
        Contact us
      </motion.button>
    </div>
  );
}
