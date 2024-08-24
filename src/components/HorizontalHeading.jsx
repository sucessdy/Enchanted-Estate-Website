import React from 'react'
import {motion} from "framer-motion"


function HorizontalHeading() {
  return (
    <div>

        <motion.h1 className='text-3xl font-cinzel font-medium text-slate-50  text-center  uppercase mx-auto space my-9 space-y-4 space-x-5  
        ' initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}> Cozy HOMe & Living
            </motion.h1>  
            <p className=" text-stone-400 dark:text-stone-200 text-sm sm:text-sm md:text-[12px] lg:text-[14px]  text-center para "> Just Take a Look at our modern and cozy House List...</p>

    </div>
  )
}

export default HorizontalHeading