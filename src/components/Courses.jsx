import React from "react";
import SwiperS from "./SwiperS";

const Courses = () => {
  return (
    <div>
      <div className="mt-[6.5rem] space-y-4 px-6">
        <div>
          {" "}
          <h1 className="text-[#000] font-[PublicSans] text-[3.5rem] not-italic font-semibold leading-[4.5rem]">
            Most Popular
            <span className=" pl-2 text-[#20B486] font-[PublicSans] text-[3.5rem] not-italic font-semibold leading-[4.5rem]">
              Courses
            </span>
          </h1>
        </div>
        <div>
          {" "}
          <p className=" mb-10 text-[#6D737A] font-[PublicSans] text-xl not-italic font-normal leading-[1.75rem]">
            Various versions have evolved over the years, sometimes by accident,
          </p>
        </div>
      </div>
      <div>
        <SwiperS />
      </div>
    </div>
  );
};

export default Courses;
