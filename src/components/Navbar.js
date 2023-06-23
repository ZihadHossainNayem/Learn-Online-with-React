import React, { useState } from "react";
import { CiLogin } from "react-icons/ci";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  //mobile menu open & close
  const [toggle, setToggle] = useState(false);

  return (
    //navbar
    <div className="w-full h-[85px] bg-white border-b">
      {/* container */}
      <div className="customScreen:max-w-[1500px] max-w-[700px] w-full h-full m-auto flex justify-between items-center">
        {/* nav left logo*/}
        <div className="font-medium text-2xl px-4 cursor-pointer">
          <p>
            Learn<span className="font-bold text-[#2282ff]">Online</span>
          </p>
        </div>

        {/*  nav middle items*/}
        <div className="hidden customScreen:flex">
          <ul className="flex items-center gap-6 cursor-pointer ">
            <li className="hover:text-[#2282ff]">Home</li>
            <li className="hover:text-[#2282ff]">About</li>
            <li className="hover:text-[#2282ff]">platform</li>
            <li className="hover:text-[#2282ff]">Pricing</li>
            <li className="hover:text-[#2282ff]">Support</li>
          </ul>
        </div>

        {/* nav right login*/}
        <div className="hidden customScreen:flex items-center px-4 ">
          {/* button 1 for login  */}
          <button className="flex gap-2 bg-transparent px-6 hover:text-[#2282ff]">
            <CiLogin size={25} /> Login
          </button>

          {/* button 2 for sign up  */}
          <button className="bg-[#2282ff] hover:bg-[#006eff] px-4 py-3 rounded-[8px] text-white">
            Sign Up For Free
          </button>
        </div>

        {/* mobile menu open & close*/}
        <div
          className="customScreen:hidden px-4"
          onClick={() => setToggle(!toggle)}
        >
          {toggle ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
        </div>
      </div>

      {/* mobile menu list */}
      <div
        className={
          toggle
            ? "customScreen:hidden absolute z-10 p-4 w-full px-12 bg-[#f7f7f7] border-b border "
            : "hidden"
        }
      >
        <ul className="cursor-pointer">
          <li className="p-4 hover:text-[#2282ff]">Home</li>
          <li className="p-4 hover:text-[#2282ff]">About</li>
          <li className="p-4 hover:text-[#2282ff]">platform</li>
          <li className="p-4 hover:text-[#2282ff]">Pricing</li>
          <li className="p-4 hover:text-[#2282ff]">Support</li>

          {/* buttons */}
          <div className="flex flex-col my-8 gap-4">
            {/* button 1 for login  */}
            <button className="flex justify-center gap-2 bg-transparent px-6 py-3 rounded-[8px]  hover:text-[#2282ff] border border-gray-400  hover:border-[#2282ff]">
              <CiLogin size={25} /> Login
            </button>

            {/* button 2 for sign up  */}
            <button className="bg-[#2282ff] hover:bg-[#006eff] px-6 py-3 rounded-[8px] text-white">
              Sign Up For Free
            </button>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
