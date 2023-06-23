import React from "react";
import { ImQuotesRight } from "react-icons/im";

const CommentCard = ({ commentItem }) => {
  //comment card
  return (
    <div className="bg-white p-8 border rounded-2xl my-8 mx-2 shadow-md ">
      {/* top section */}
      <div className="flex">
        {/* image and text */}
        <div className="flex ">
          <img
            src={commentItem.img}
            alt="commentImg"
            className="w-16 h-16 rounded-[50%] object-cover"
          />
          {/* name and title */}
          <div className="px-4 my-auto">
            <p className="font-semibold text-lg">{commentItem.name}</p>
            <p className="text-gray-700">{commentItem.title}</p>
          </div>
        </div>
        {/* comment icon */}
        <div className="ml-auto my-auto hidden sm:block">
          <ImQuotesRight size={50} className="text-[#2282ff]" />
        </div>
      </div>
      {/* bottom section */}
      <div className="py-8">
        <p className="text-justify">{commentItem.comment}</p>
      </div>
    </div>
  );
};

export default CommentCard;
