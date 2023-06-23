import React from "react";
//slider from react slick carousel
import Slider from "react-slick";
import CommentCard from "./CommentCard";
//importing comment data
import { commentData } from "../data/commentData";

const Comments = () => {
  //variable for slider from https://www.npmjs.com/package/react-slick
  var settings = {
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 1,
    swipeToSlide: true, // Allow swiping/dragging to navigate directly to a slide
    touchThreshold: 10, // Adjust the touch sensitivity for swiping/dragging
    /*  autoplay: true,  Enable autoplay
    autoplaySpeed: 3000,  Set autoplay speed (in milliseconds) */
    /* responsiveness for react carousel from  https://kenwheeler.github.io/slick/ */
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  };
  return (
    //course slider
    <div className="w-full bg-white py-32">
      {/* container */}
      <div className="customScreen:max-w-[1500px] max-w-[700px] m-auto px-8">
        <h1 className="text-3xl font-semibold py-2 ">
          Students <span className="text-[#2282ff]">Feedback</span>
        </h1>
        <p className="text-gray-600 pb-8">
          Discover what students are saying about our courses.
        </p>
        <Slider {...settings}>
          {commentData.map((commentItem, index) => (
            <div key={index}>
              <CommentCard commentItem={commentItem} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Comments;
