import React from "react";
import {
  AiFillInstagram,
  AiFillTwitterCircle,
  AiFillGoogleCircle,
} from "react-icons/ai";
// import { SiYourtraveldottv } from "react-icons/si";
export default function Footer() {
  return (
    <div className=" w-full h-full bg py-6  cursor-pointer ">
      <div className="mx-auto w-full max-w-screen-xl   pt-20  ">
        <div className="grid grid-cols-1  sm:grid-cols-1  md:grid-cols-2  lg:grid-cols-4  gap-4  px-4  py-6  lg:py-8   ">
          <div className=" my-2 items-center  ">
            <h1 className="text-white  text-2xl  font-BrunoAceSc  flex justify-around   md:justify-start lg:justify-start items-center ">
              {" "}
              Enchanted 
            </h1>
            <div className="flex flex-row text-white pt-5   justify-center md:justify-start lg:justify-start items-center cursor-pointer backdrop-filter gap-3 "> 
              {" "}
              <AiFillInstagram />
              <AiFillTwitterCircle />
              <AiFillGoogleCircle />
              {/* <SiYourtraveldottv /> */}
            </div>
          </div>

          <div>
            <h2 className="font-Raleway text-white mb-4 flex justify-around items-center sm:justify-start  font-bold uppercase   ">
              {" "}
              House 
            </h2>
            <ul className="text-gray-300 text-sm   ">
              <li className="mb-1 flex justify-around items-center sm:justify-start  ">
                <a href="#" className="hover:text-white "> Modern </a>
              </li>
              <li className="mb-1 flex justify-around items-center sm:justify-start ">
                <a href="#" className="hover:text-white">
                  {" "}
                  Simple
                </a>
              </li>
              <li className="mb-1 flex justify-around items-center sm:justify-start ">
                <a href="#" className="hover:text-white"> Luxury </a>
              </li>
              <li className="mb-1 flex justify-around items-center sm:justify-start ">
                <a href="#" className="hover:text-white"> Bungalow</a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-Raleway text-white mb-4 flex justify-around items-center sm:justify-start  font-bold uppercase  " >
              {" "}
            Menu
            </h2>
            <ul className="text-gray-400  text-sm  ">
              <li className="mb-1 flex justify-around items-center sm:justify-start ">
                <a href="/" className="hover:text-white " > Home</a>
              </li>
              <li className="mb-1 flex justify-around items-center sm:justify-start ">
                <a href="./testimonial" className="hover:text-white">
                  {" "}
                 Testiomonial
                </a>
              </li>
              <li className="mb-1 flex justify-around items-center sm:justify-start  ">
                <a href="./contact" className="hover:text-white " > Contact</a>
              </li>
              <li className="mb-1 flex justify-around items-center sm:justify-start ">
                <a href="./style" className="hover:text-white " > Service</a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-Raleway text-gray-50 mb-4 flex justify-around items-center sm:justify-start uppercase  ">
              {" "}
           Legal
            </h2>
            <ul className="text-gray-400 text-sm para">
              <li className="mb-1 flex justify-around items-center sm:justify-start  ">
                <a href="#" className="hover:text-white " > Privacy Policy</a>
              </li>
              <li className="mb-1  flex justify-around items-center sm:justify-start "> 
              <a href="#" className="hover:text-white " > Terms &amp; Conditions</a>
                
              </li>
              <li className="mb-1 flex justify-around items-center sm:justify-start ">
              <a href="#" className="hover:text-white">
                  {" "}
                 Enchanted@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* txt 3
           */}
        </div>
        <div className="py-5  bg my-5 text-center rounded-t-lg para ">
          <a
            className="px-2  block text-xl md:text-2xl font-Raleway text-white hover:text-gray-500"
            href="#"
          >
            "We're the key to your Home"
          </a>
          <a
            className="text-xl md:text-2xl para text-gray-200 hover:text-gray-400"
            href=""
          >
            {" "}
          </a>
          <p className="text-neutral-400  pt-2 para">
            Copyright © 2023 Enchanted.in Exclusive Pvt Ltd {" "}
            {new Date().getFullYear()} | All rights reserved
          </p>
        </div>
      </div>
    </div>
  );
}
