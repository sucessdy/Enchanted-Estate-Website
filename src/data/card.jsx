import { FaSearch } from "react-icons/fa";
import {AiFillStar}  from  "react-icons/ai"
import {MdOutlineCameraOutdoor} from "react-icons/md"
import {BiWorld} from "react-icons/bi"
export default [
  {
    name: " Advanced Search Filters:",
    description:
      " Allow users to filter properties by location, price range, property type, number of bedrooms/bathrooms, amenities, etc.",
    icon: <FaSearch />,
  },

  {
    name: " High-Quality Property Images:",
    description:
      " Display high-resolution images of each property to showcase its best features.",
    icon: <MdOutlineCameraOutdoor/>,
  }, 

  {
    name: " Virtual Tours:",
    description:
      " Offer virtual tours of select properties to allow users to explore the house remotely.",

    icon: <BiWorld />,
  },

  {
    name: " Property Reviews And Ratings:",
    description:
      " Allow previous buyers/renters to leave reviews and ratings for properties they've interacted with",
    icon: <AiFillStar />,
  },
];
