import React from "react";

const Categories = () => {
  const images = [
    {
      logo: "/Briefcase.png",
      tittle: "Business",
    },
    {
      logo: "/Camera.png",
      tittle: "Photography",
    },
    {
      logo: "/Database.png",
      tittle: "Database",
    },
    {
      logo: "/Detective.png",
      tittle: "Teaching",
    },
    {
      logo: "/FileHtml.png",
      tittle: "Development",
    },
    {
      logo: "/Graph.png",
      tittle: "Financial",
    },
    {
      logo: "/Heartbeat.png",
      tittle: "Fitness",
    },
    {
      logo: "/Lightbulb.png",
      tittle: "Personal Development",
    },
    {
      logo: "/MicrophoneStage.png",
      tittle: "Marketing",
    },
    {
      logo: "/MusicNote.png",
      tittle: "Music",
    },
    {
      logo: "/PenNib.png",
      tittle: "Design",
    },
    {
      logo: "/SunHorizon.png",
      tittle: "Lifestyle",
    },

    // Add more image URLs as needed
  ];
  return (
    <div>
      <div className="my-[6.25rem] px-6 space-y-6 bg-[#F0FBF7] py-[6.25rem]">
        <h1 className="text-[#000] font-[PublicSans] text-[3.5rem] not-italic font-semibold leading-[4.5rem]">
          Most Popular
          <span className=" pl-2 text-[#20B486] font-[PublicSans] text-[3.5rem] not-italic font-semibold leading-[4.5rem]">
            Categories
          </span>
        </h1>
        <p className=" mb-3 text-[#6D737A] font-[PublicSans] text-xl not-italic font-normal leading-[1.75rem]">
          Various versions have evolved over the years, sometimes by accident,
        </p>
        <div className=" grid md:grid-cols-2 lg:grid-cols-4 justify-center gap-5 ">
          {images.map((image, index) => (
            <div className="flex justify-between items-center px-[1.5rem] py-[.75rem] rounded-[8px] border-[1px] border-solid border-[var(--Primary-500,#20B486)] bg-[#FFF] [box-shadow:0px_3px_12px_0px_rgba(75,_75,_75,_0.08)]">
              <div className="flex items-center gap-2">
                <div key={index}>
                  <img
                    src={image.logo}
                    alt={`Image ${index + 1}`}
                    class="  "
                    style={{ width: "38px", height: "38px" }}
                  />
                </div>
                <h1 className="text-[#000] font-[PublicSans] text-xl not-italic font-medium leading-[28px]">
                  {image.tittle}
                </h1>
              </div>
              <img src="/ArrowUpRight.png" alt="image" width={24} height={24} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
