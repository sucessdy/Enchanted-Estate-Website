import React from "react";
import ItemTitle from "../components/ItemTitle";
import works from "../data/works";
import WorkHouse from "../components/WorkHouse"
import sectionWrapper from "../hoc/sectionWrapper";

 function Product() {
  return (
    <div id='product' className=" product w-full  ">
      <ItemTitle className="text-white "> Go Big and Go home </ItemTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
        
       {works.map((work, index) =>  (
          <WorkHouse
            key={index}
            img={work.img}
            title={work.title}
            icons={work.icons}
            iconItem={work.iconItem}
            icon1={work.icon1}
            name1={work.name1}
            icon2={work.icon2}
            name2={work.name2}
            icon3={work.icon3}
            name3={work.name3}
            button={work.button}
            amount={work.amount}
          >
            {" "}
          </WorkHouse>
        ))}
      </div>
    </div>
  );
}


export default sectionWrapper(Product, "")