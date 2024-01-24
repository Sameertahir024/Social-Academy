import React from "react";
import { CiLock } from "react-icons/ci";

const Navbar = () => {
  return (
    <div>
      <div className="flex items-center justify-between py-[1.5rem] px-6">
        <div className="text-[#20B486] text-center font-[PublicSans] text-4xl not-italic font-bold leading-[40px] tracking-[0.072px]">
          Learner
        </div>
        <div>
          <ul className="hidden lg:flex items-center justify-between  gap-9">
            <li className="text-[#6D737A] hover:text-[#20B486] text-center font-[PublicSans] text-base not-italic leading-[24px]">
              Home
            </li>
            <li className="text-[#6D737A] hover:text-[#20B486] text-center font-[PublicSans] text-base not-italic leading-[24px]">
              About
            </li>
            <li className="text-[#6D737A] hover:text-[#20B486] text-center font-[PublicSans] text-base not-italic leading-[24px]">
              Couse
            </li>
            <li className="text-[#6D737A] hover:text-[#20B486] text-center font-[PublicSans] text-base not-italic leading-[24px]">
              Blogs
            </li>
            <li className="text-[#6D737A] hover:text-[#20B486] text-center font-[PublicSans] text-base not-italic leading-[24px]">
              Contect
            </li>
          </ul>
        </div>
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center justify-between gap-3">
            <CiLock size={25} />
            <span className="text-[#6D737A] text-center font-[PublicSans] text-base not-italic  leading-[24px]">
              Login
            </span>
          </div>
          <button className="btn">Sign up for Free</button>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Navbar;
