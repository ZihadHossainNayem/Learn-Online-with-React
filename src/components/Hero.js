import React from "react";
import heroImg from "../assets/hero.png";
import { BsSearch } from "react-icons/bs";

const Hero = () => {
  return (
    //hero
    <div className="w-full bg-white py-[70px]">
      {/* container */}
      <div className="customScreen:max-w-[1500px] max-w-[700px] m-auto grid customScreen:grid-cols-2 px-4 ">
        {/* left grid */}
        <div className="flex flex-col gap-4 justify-center">
          <p className="uppercase customScreen:text-2xl text-xl text-[#2282ff] font-medium">
            Unlock your learning potential
          </p>
          <h1 className="customScreen:text-[56px] text-[36px] font-semibold customScreen:leading-[72px]">
            Access to <span className="text-[#2282ff]">9000+ </span>Courses from
            <span className="text-[#2282ff]"> 500 </span>
            Instructors & Institutions
          </h1>
          <p className="md:text-lg text-base text-gray-700">
            Expand your knowledge with engaging and interactive online courses
            today
          </p>

          <form className="border shadow-sm p-4 rounded-md flex justify-between md:max-w-[670px] max-w-[350px]">
            <input
              type="text"
              className="bg-white w-[80%] outline-none"
              placeholder="What do you want to learn?"
            />
            <button>
              <BsSearch size={25} className="text-gray-600" />
            </button>
          </form>
        </div>

        {/* right grid */}
        <div className="customScreen:order-last order-first ">
          <img src={heroImg} alt="heroImage" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
