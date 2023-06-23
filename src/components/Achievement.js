import React from "react";
import achievementImg from "../assets/achievement.jpg";
import { SlGraduation } from "react-icons/sl";
import { FiVideo } from "react-icons/fi";
import { MdPersonOutline } from "react-icons/md";
import { IoPeopleOutline } from "react-icons/io5";

const Achievement = () => {
  return (
    //achievement section
    <div className="w-full bg-white pt-32 sm:pb-28 pb-12">
      {/* container */}
      <div className="customScreen:max-w-[1500px] max-w-[700px] m-auto grid customScreen:grid-cols-2 px-4">
        {/* left grid */}
        <div className="flex flex-col gap-4 justify-center">
          <h1 className="customScreen:text-3xl text-2xl font-bold">
            Our <span className="text-[#2282ff] ">Achievements</span>
          </h1>

          <p className="md:text-lg text-base text-gray-700">
            Expand your knowledge with engaging and interactive online courses
            today.
          </p>

          {/* left grid bottom section */}
          <div className="grid grid-cols-2 py-12 ">
            {/* 1st section */}
            <div className="py-6 flex">
              {/* div for square icons */}
              <div className="bg-[#F0F7FF] p-4 rounded-lg">
                <SlGraduation size={35} className="text-[#0075FD] " />
              </div>
              {/* for text */}
              <div className="px-4 flex flex-col justify-center">
                <h1 className="sm:text-2xl text-xl font-semibold">500</h1>
                <p className="text-gray-700">Instructors</p>
              </div>
            </div>

            {/* 2nd section */}
            <div className="py-6 flex">
              {/* div for square icons */}
              <div className="bg-[#fff3e8] p-4 rounded-lg">
                <FiVideo size={35} className="text-[#ffba6b] " />
              </div>
              {/* for text */}
              <div className="px-4 flex flex-col justify-center">
                <h1 className="sm:text-2xl text-xl  font-semibold">20,000+</h1>
                <p className="text-gray-700">Videos</p>
              </div>
            </div>

            {/* 3rd section */}
            <div className="py-6 flex">
              {/* div for square icons */}
              <div className="bg-[#E9F8F3] p-4 rounded-lg">
                <MdPersonOutline size={35} className="text-[#1A906B] " />
              </div>
              {/* for text */}
              <div className="px-4 flex flex-col justify-center">
                <h1 className="sm:text-2xl text-xl font-semibold">30,000+</h1>
                <p className="text-gray-700">Studets</p>
              </div>
            </div>

            {/* 4th section */}
            <div className="py-6 flex">
              {/* div for square icons */}
              <div className="bg-[#FFEEF0] p-4 rounded-lg">
                <IoPeopleOutline size={35} className="text-[#ED4459] " />
              </div>
              {/* for text */}
              <div className="px-4 flex flex-col justify-center">
                <h1 className="sm:text-2xl text-xl  font-semibold">700,000+</h1>
                <p className="text-gray-700">Users</p>
              </div>
            </div>
          </div>
        </div>

        {/* right grid */}
        <div className="flex justify-center customScreen:order-last order-first pb-12 customScreen:pb-0">
          <img
            src={achievementImg}
            alt="achievementImg"
            className="customScreen:w-[80%] sm:h-[90%] w-full object-cover rounded-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Achievement;
