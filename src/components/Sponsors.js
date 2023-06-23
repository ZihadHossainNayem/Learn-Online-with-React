import React from "react";
import bkashLogo from "../assets/bkash.png";
import bracLogo from "../assets/brac.png";
import pathaoLogo from "../assets/pathao.png";
import darazLogo from "../assets/daraz.png";

const Sponsors = () => {
  return (
    //sponsors
    <div className="bg-white py-4">
      {/* container */}
      <div className="customScreen:max-w-[1500px] max-w-[700px] m-auto px-4 ">
        {/* first text box */}
        <h1 className="text-center text-2xl font-bold text-gray-700">
          Trusted by 2,500+ teams in Bangladesh for exceptional service.
        </h1>
        {/* second text box */}
        <p className="text-center text-gray-700 text-xl">
          Renowned organizations rely on our courses to empower their workforce
          with up-to-date skills.
        </p>
        {/* sponsor logos */}
        <div className="flex justify-center md:gap-8 gap-6">
          <img src={bracLogo} alt="bracLogo" className="md:w-24 w-16" />
          <img src={pathaoLogo} alt="pathaoLogo" className="md:w-24 w-16" />
          <img src={darazLogo} alt="robiLogo" className="md:w-24 w-16" />
          <img src={bkashLogo} alt="bkashLogo" className="md:w-24 w-16" />
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
//1.09
