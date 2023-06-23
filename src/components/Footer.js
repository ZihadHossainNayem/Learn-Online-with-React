import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { FaLinkedinIn } from "react-icons/fa";
import { AiOutlineYoutube } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";

const Footer = () => {
  return (
    //footer section
    <div className="w-full bg-white py-16">
      {/* container */}
      <div className="customScreen:max-w-[1500px] max-w-[700px] m-auto grid md:grid-cols-5  sm:grid-cols-2 px-4">
        {/* 1st grid */}
        <div className="py-4 col-span-2 pl-4 sm:pl-0">
          {/* logo */}
          <h1 className="font-medium text-2xl cursor-pointer pb-4">
            Learn<span className="font-bold text-[#2282ff]">Online</span>
          </h1>
          <h1 className="text-2xl font-semibold text-gray-800 py-2">
            Contact Us
          </h1>
          <p className="text-gray-600">Call: +880 1551099888</p>
          <p className="py-4 text-gray-600">
            Golden Street, Ring Road, <br />
            Shaymoli, 1207
          </p>
          <p className="pb-6 text-gray-800">Email: contactus@learnonline.com</p>
          {/* social icons */}
          <div className="flex gap-4 py-2">
            <div className="bg-[#e3f0ff] p-2 rounded-lg">
              <FaFacebookF size={20} className="text-[#2282ff]" />
            </div>
            <div className="bg-[#e3f0ff] p-2 rounded-lg">
              <GrInstagram size={20} className="text-[#2282ff]" />
            </div>
            <div className="bg-[#e3f0ff] p-2 rounded-lg">
              <FaLinkedinIn size={22} className="text-[#2282ff]" />
            </div>
            <div className="bg-[#e3f0ff] p-2 rounded-lg">
              <AiOutlineYoutube size={25} className="text-[#2282ff]" />
            </div>
            <div className="bg-[#e3f0ff] p-2 rounded-lg">
              <AiOutlineTwitter size={25} className="text-[#2282ff]" />
            </div>
          </div>
        </div>
        {/* 2nd grid */}
        <div className="py-4 pl-4 sm:pl-0">
          <h1 className="text-2xl font-semibold text-gray-800">Explore</h1>
          <ul className="py-6 cursor-pointer">
            <li className="py-2 text-gray-600">Course</li>
            <li className="py-2 text-gray-600">Home</li>
            <li className="py-2 text-gray-600">About</li>
            <li className="py-2 text-gray-600">Blog</li>
            <li className="py-2 text-gray-600">Contact</li>
          </ul>
        </div>
        {/* 3rd grid */}
        <div className="py-4 ">
          <h1 className="text-2xl font-semibold text-gray-800 ">Category</h1>
          <ul className="py-6 cursor-pointer">
            <li className="py-2 text-gray-600">Development</li>
            <li className="py-2 text-gray-600">Design</li>
            <li className="py-2 text-gray-600">Business</li>
            <li className="py-2 text-gray-600">Marketing</li>
            <li className="py-2 text-gray-600">Music</li>
            <li className="py-2 text-gray-600">Photography</li>
            <li className="py-2 text-gray-600">Data Science</li>
          </ul>
        </div>
        {/* 4th grid */}
        <div className="py-4 px-4 sm:px-0 max-[780px]:col-span-2">
          <h1 className="text-2xl font-semibold text-gray-800 pb-6">
            Subscribe
          </h1>
          <p className="text-gray-600">
            Stay up-to-date with the latest news, updates, and exclusive offers
            by subscribing to our website newsletter.
          </p>

          {/* email input */}
          <div className="py-4 ">
            <form className="border shadow-sm p-4 rounded-md flex justify-between md:max-w-[670px] max-w-[350px] bg-[#f7f7f7]">
              <input
                type="text"
                className="w-[80%] outline-none bg-[#f7f7f7]"
                placeholder="Email here"
              />
            </form>
          </div>

          {/* subscribe button */}
          <div>
            <button className="bg-[#2282ff] hover:bg-[#006eff] px-4 py-3 rounded-[8px] text-white max-[780px]:w-full">
              Subscribe Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
