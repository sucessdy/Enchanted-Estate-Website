import React, { useState , useEffect } from "react";
import {Link}  from "react-router-dom"
import { AiOutlineMenu, AiOutlineCloseCircle } from "react-icons/ai";


const Links = [
  { name: "Home", link: "/home" },
  { name: "About", link: "/about" },

  { name: "Service", link: "/service" },
  { name: "Work", link: "/work" },
];
const HomePage = () => {
  const [open, setOpen] = useState("");
  const [toggle , setToggle]  = useState(false)

  const handleToggle = ()=> {
    setToggle(!toggle)
  }
  return (
    <div className="bg-black absolute z-10 w-full ">
      <div id="content" className="mx-auto px-4 sm:px-20 lg:px-6 overflow-auto  w-full h-full ">
        <div className="flex item-center overflow-hidden  justify-between h-16">
          <div className="flex items-center   ">
            <a href="#" className="text-white">
              Enchanted
            </a>
          </div>
          {/* nalinks */}
          <div className="md:block hidden md:items-center list-none overflow-hidden z-40 ">
            <div className="ml-10 flex items-center space-x-4 ">
              {Links.map((link, index) => (
                <Link
                  key={index}
               to={link.link}
               onClick={() => {
                setOpen(link.name);  setToggle(false) ; 
                window.scrollTo(0, 0)
               }}
                  className="text-white hover:text-gray-500 px-3 py-4 list-none "
                >
                  {" "}
                  {link.name}
                </Link>
              ))};
            </div>
          </div>
          
          <div className=" -mr-2 flex md:hidden">
            <button
              type="button" id="menu-button"
              onClick={handleToggle}
              className=" fixed z-50 top-4 right-4 inline-flex items-center justify-center  p-2 rounded-md text-gray-500 hover:text-white bg-gray-700 hover:bg-gray-800 focus:outline-none text-center focus:ring-offset-2 focus:ring-offset-gray-800"
            >
              <span className="sr-only "> Main </span>

              {open == false ? (
                <AiOutlineMenu className="" />
              ) : (
                <AiOutlineCloseCircle />
              )}
            </button>
          </div>
        </div>
        {/* hambur */}
      </div>
      {/*  mobile menu */}
      {open ? (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-2 space-y-1 sm:px-3 z-100  "> 
          {Links.map((link , index) => ( 
            <Link key={index}  className="z-50 text-gray-600 hover:text-white block p-3 px-4 py-2 rounded-md font-raleway font-md "> {link.name}</Link>
          ))}
          </div>
        </div>
      ) : null}
      ;
    </div>
  );
};
export default HomePage;
