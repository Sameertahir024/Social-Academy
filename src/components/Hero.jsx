import React from "react";
import { CiSearch } from "react-icons/ci";

const Hero = () => {
  return (
    <div className="bg-[#FFF] mt-10 px-6">
      <div className="grid grid-flow-row-dense lg:grid-cols-2 justify-items-center lg:justify-items-center gap-6 lg:gap-10">
        <div className=" text-center lg:text-start lg:grid space-y-5 ">
          <h1 className=" font-[PublicSans] text-[#20B486] text-2xl not-italic  leading-[2rem] tracking-[0.048px]">
            START TO SUCCESS
          </h1>
          <h1 className="text-[#06241B]  text-[3rem] not-italic  font-bold leading-[4.rem]">
            Access To{" "}
            <span className="text-[#20B486] font-[PublicSans] text-[3.5rem] not-italic  leading-[4.5rem]">
              5000+
            </span>{" "}
            Courses from
            <span className="px-3 text-[#20B486] font-[PublicSans] text-[3.5rem] not-italic  leading-[72px]">
              300
            </span>
            Instructors & Institutions
          </h1>
          <p className="text-[#6D737A] font-[PublicSans] text-[1.25rem] not-italic font-normal leading-7">
            Various versions have evolved over the years, sometimes by accident,
          </p>
          <input
            type="Search"
            className=" w-5/6 py-3 px-3 outline-none shadow rounded-lg bg-[#FFF] text-[#6D737A] font-[PublicSans] text-[1rem] not-italic font-normal leading-6
            "
            placeholder="What do want to learn?"
            id=""
          />
        </div>
        <div className="text-start ">
          <div className=" lg:w-[36.0625rem] lg:h-[26.125rem] ">
            <img src="/heroImg.png" alt="logo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
