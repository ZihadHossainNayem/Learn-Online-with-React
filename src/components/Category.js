import React from "react";
import CategoryCard from "./CategoryCard";
import { ImHtmlFive } from "react-icons/im";
import { BsVectorPen } from "react-icons/bs";
import { MdOutlineBusinessCenter } from "react-icons/md";
import { TbMicrophone2 } from "react-icons/tb";
import { BsCamera } from "react-icons/bs";
import { BiMusic } from "react-icons/bi";
import { BsClipboardData } from "react-icons/bs";
import { LuCloudSun } from "react-icons/lu";
import { IoFitnessOutline } from "react-icons/io5";
import { MdAttachMoney } from "react-icons/md";
import { BsBrush } from "react-icons/bs";
import { AiOutlineRead } from "react-icons/ai";

const Category = () => {
  return (
    //category section
    <div className="w-full bg-[#e7f0fd] py-32">
      {/* container */}
      <div className="customScreen:max-w-[1500px] max-w-[700px] m-auto customScreen:grid-cols-2 px-4 ">
        {/* text on left */}
        <div className="flex flex-col gap-4 justify-center">
          <h1 className="customScreen:text-3xl text-2xl font-bold">
            Most <span className="text-[#2282ff] ">Popular Categories</span>
          </h1>

          <p className="md:text-lg text-base text-gray-700">
            Discover the trendiest & most sought-after courses in high demand
            fields.
          </p>
          {/*  component for categoryCard*/}
          <div className=" grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-2 py-8 gap-4">
            <CategoryCard
              icons={<ImHtmlFive size={30} />}
              title={"Development"}
            />
            <CategoryCard icons={<BsVectorPen size={30} />} title={"Design"} />
            <CategoryCard
              icons={<MdOutlineBusinessCenter size={30} />}
              title={"Business"}
            />
            <CategoryCard
              icons={<IoFitnessOutline size={30} />}
              title={"Health & Fitness"}
            />
            <CategoryCard
              icons={<TbMicrophone2 size={30} />}
              title={"Marketing"}
            />
            <CategoryCard
              icons={<BsCamera size={30} />}
              title={"Photography"}
            />
            <CategoryCard icons={<BiMusic size={30} />} title={"Music"} />
            <CategoryCard
              icons={<BsClipboardData size={30} />}
              title={"Data Science"}
            />
            <CategoryCard
              icons={<LuCloudSun size={30} />}
              title={"Lifestyle"}
            />
            <CategoryCard
              icons={<MdAttachMoney size={30} />}
              title={"Finance"}
            />
            <CategoryCard icons={<BsBrush size={30} />} title={"Visual Arts"} />
            <CategoryCard
              icons={<AiOutlineRead size={30} />}
              title={"Teaching"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
