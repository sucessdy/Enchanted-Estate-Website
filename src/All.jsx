import React from "react";

import SlideShow from "./SlideShow";

function All() {
  return (
    <div id="all"  className="all grid md:grid-cols-2 overflow-hidden  bg-white mb-0  ">
      { /* div 1 */}
      <div className=" bg-gray-50 md:p-12  ">
        <p className="text-black  my-2 font-manrope text-md"> o/1 </p>
        <h1 className="text-3xl p-3 font-cinzel text-amber-80  uppercase   ">
          {" "}
          Modern architect DEsign{" "}
        </h1>

        <h4 className="font-raleway my-3 p-1  ">
          "With meticulous planning and cutting-edge technology, we crafted an
          awe-inspiring infrastructure that seamlessly blends functionality,
          efficiency, and architectural grandeur, setting new standards for
          excellence."{" "}
        </h4>

        <a className=" mx-5  font-cinzel first-letter:font-bold text-amber-900 first-letter:text-orange-800  font-semibold ">
          Discover More+{" "}
        </a>
      </div>


      {/* di v  2 */}
      <div className="  transition-opacity ease-in duration-300 w-full ml-auto mx-auto  h-96  object-cover    flex">
        <SlideShow />
      </div>
    </div>
  );
}
export default All;
