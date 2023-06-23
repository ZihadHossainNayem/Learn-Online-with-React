import React from "react";
import cta from "../assets/cta.jpg";

const CallToAction = () => {
  return (
    //call to action section
    <div className="w-full bg-[#e7f0fd] py-32">
      {/* container */}
      <div className="customScreen:max-w-[1500px] max-w-[700px] m-auto grid customScreen:grid-cols-2 px-4">
        {/* left side image */}
        <div className="mx-auto">
          <img
            src={cta}
            alt="achievementImg"
            className="customScreen:w-[90%] h-full w-full object-cover rounded-2xl"
          />
        </div>
        {/* right side text */}
        <div className="my-auto py-12">
          <h1 className="text-2xl sm:text-3xl font-semibold">
            Join<span className="text-[#2282ff]"> Country's largest </span>
            learning platform today
          </h1>
          <p className="text-gray-700 py-4 sm:py-8">
            Start learning by registering for free
          </p>
          {/* sign up button */}
          <button className="bg-[#2282ff] hover:bg-[#006eff] px-4 py-3 rounded-[8px] text-white max-[780px]:w-full">
            Sign Up For Free
          </button>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
