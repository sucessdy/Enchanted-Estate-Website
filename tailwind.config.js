// tailwind.config.js
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
        fredoka: ["Fredoka One", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        BodoniModa : ["Bodoni Moda" , "sans-serif"],
        acme: ["Acme", "sans-serif"],
        "bruno-ace-sc": ["Bruno Ace SC", "sans-serif"],
        cinzel: ["Cinzel", "serif"],
        raleway: ["Raleway", "sans-serif"],
        Diphylleias: ["Diphylleia", "sans-serif"],
        Moirai: ["Moirai+One"],
        Montserrat: ["Montserrat", "sans-serif"],
        Outfit: ["Outfit", "sans-serif"],
        Quicksand: ["Quicksand", "sans-serif"],
        CinzelDecorative: ["Cinzel Decorative", "sans-serif"],
      },
      outline: {
        hollow: ["2px solid"], // Customize the outline style
      },
      backgroundColor: {
        "custom-opacity": "rgba(31, 30, 30, var(--bg-opacity))",
      },
      textColor: {
        "custom-opacity": "rgba(31, 30, 30, var(--text-opacity))",
      },
    },
  },
  variants: {},
  plugins: [
    require('tailwind-scrollbar-hide') // No need to import it separately, directly add it to plugins array
  ],
};

// navgiation


// import React from "react";
// import { motion } from "framer-motion";

// export default function Animation() {
//   return (
//     <div className=" max-md:w-[700px] bg-[#1d1717;] bg-gradient-to-t from-slate-100 to-[#1d1717];">
//       <motion.div
//         initial={{ opacity: 0, y: -100 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1 }}
//       >
//         {" "}
//         <h1 className="text-5xl text-center font-cinzel py-6 text-white ">
//           Be Inspired{" "}
//         </h1>
//       </motion.div>
//       <div className="grid grid-cols-2 md:grid-cols-4 gap-4 flex-row  w-[800px]">
//         <div className="grid gap-4 flex-col">
//           <div className="">
//             <img
//               className="h-auto max-w-full "
//               src="https://images.unsplash.com/photo-1630699144035-c0f6311ec482?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
//             />
//           </div>
//           <div>
//             <img
//               className="h-auto max-w-full"
//               src="https://images.unsplash.com/photo-1668067470659-ea022f81f3cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
//             />
//           </div>
//           <div>
//             <img
//               className="h-auto max-w-full"
//               src="https://images.unsplash.com/photo-1531971589569-0d9370cbe1e5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1481&q=80"
//             />
//           </div>
//         </div>

//         <div className="grid gap-4 ">
//           <div>
//             <img
//               className="h-full max-w-full "
//               src=" https://images.unsplash.com/photo-1602003472311-1536c8c49fe8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1565&q=80"
//             />
//           </div>

//           <div>
//             <img
//               src="https://images.unsplash.com/photo-1634237085524-235866af4033?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
//               className="max-w-full h-auto"
//             />
//           </div>
//         </div>
//         <div className="grid gap-4 ">
//           <div>
//             <img
//               className="h-full max-w-full "
//               src=" https://images.unsplash.com/photo-1524627681145-fc98c3317b10?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1557&q=80"
//             />
//           </div>

//           <div>
//             <img
//               className="max-w-full h-auto "
//               src="https://images.unsplash.com/photo-1561560392-39ff98f2d54c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1378&q=80"
//             />
//           </div>
//           <div>
//             <img
//               className="max-w-full h-auto "
//               src="https://images.unsplash.com/photo-1507086182422-97bd7ca2413b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1476&q=80"
//             />
//           </div>
//         </div>
//         {/* col-4  */}
//         <div className="grid gap-4 ">
//           <div>
//             <img
//               className="h-full max-w-full "
//               src=" https://images.unsplash.com/photo-1655106023771-2a8e09cc2a38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
//             />
//           </div>

//           <div>
//             <img
//               src="https://images.unsplash.com/photo-1572382514535-eab102aae137?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
//               className="max-w-full h-auto"
//             />
//           </div>
//           <div>
//             <img src=" https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1474&q=80" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


