import React from 'react'
import {motion }from "framer-motion"

export default function ItemTitle( {children, id}) {
  return (
   <motion.h1 initial={{ opacity: 0 }}
   animate={{ opacity: 1 }}
   transition={{ duration: 1 }} 
id={id && id } className="text-3xl  font-BodoniModa text-[#1d1d1c] dark:text-white m-5 uppercase mx-auto py-4 p-7 items-center flex justify-center leading-7 space-x-3 mt-4 pt-9 tracking-wider word-spacing-2 " >
{children}
   </motion.h1>
  )
}
