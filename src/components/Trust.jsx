import React from "react";

const Trust = () => {
  return (
    <div className="flex bg-[#F0FBF7] py-32 px-6 flex-col items-center text-center mt-[5.375rem] gap-[1.5rem]">
      <h1 className="text-[#536E96] font-[Inter] text-4xl not-italic font-bold leading-[150%]">
        Trusted by over 25,000 teams around the world.
      </h1>
      <p className="text-[#536E96] font-[Inter] text-2xl not-italic font-normal leading-[150%]">
        Leading companies use the same courses to help employees keep their
        skills fresh.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-7">
        <img src="/Frame.png" alt="logo" width={140} height={36} />
        <img src="/Frame (1).png" alt="logo" width={140} height={36} />
        <img src="/Frame (2).png" alt="logo" width={140} height={36} />
        <img src="/Frame (3).png" alt="logo" width={140} height={36} />
      </div>
    </div>
  );
};

export default Trust;
