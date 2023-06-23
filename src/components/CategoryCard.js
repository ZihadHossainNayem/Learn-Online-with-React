import React from "react";
import { BsArrowUpRight } from "react-icons/bs";

const CategoryCard = ({ icons, title }) => {
  /* category card */
  return (
    <div
      className="bg-white py-4 px-2 sm:px-4 shadow-md rounded-lg flex
     justify-between border-2 border-transparent hover:border-[#2282ff] 
     hover:cursor-pointer transition-transform duration-300 transform hover:scale-105 group/edit "
    >
      {/* icon and name*/}
      <div className="flex items-center sm:gap-3 gap-2">
        {icons}
        <h1 className="sm:text-xl text-medium font-medium customScreen2:max-w-[1000px] max-w-[70px]  truncate">
          {title}
        </h1>
      </div>
      {/* arrow */}
      <div className="flex items-center  group-hover/edit:bg-[#2282ff] p-3 rounded-lg">
        <BsArrowUpRight
          size={20}
          className="text-[#2282ff] group-hover/edit:text-white"
        />
      </div>
    </div>
  );
};

export default CategoryCard;
