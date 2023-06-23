import React from "react";
import Rating from "./Rating";

const Card = ({ item }) => {
  return (
    //card container
    <div className="bg-white shadow-md relative rounded-2xl overflow-hidden my-4 mr-4">
      {/* image */}
      <img
        src={item.thumbnail}
        alt="ThumbnailImage"
        className="h-40 w-full object-cover transition-transform duration-300 transform hover:scale-110"
      />
      {/* title */}
      <div className="p-6 border-b">
        <h1 className="py-2 truncate"> {item.title}</h1>
        {/* rating */}
        <div className="flex">
          <Rating rating={item.rating} />
          {/* rating amount number */}
          <p className="ml-2">{item.rateAmount}</p>
        </div>
      </div>

      {/* price & category tag*/}
      <div className="flex px-6 py-4 items-center">
        <h3 className="text-2xl"> {item.price}</h3>
        <button className="ml-auto border rounded bg-[#ffffff] hover:bg-[#e7f0fd]">
          <p className="px-2 py-1">{item.category}</p>
        </button>
      </div>
    </div>
  );
};

export default Card;
