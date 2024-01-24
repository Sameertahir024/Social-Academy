import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
// import required modules
import { FreeMode, Pagination } from "swiper/modules";

const SwiperS = () => {
  return (
    <div>
      <Swiper
        // slidesPerView={4}
        // spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className=" w-full px-6"
        breakpoints={{
          // when window width is >= 768px (medium devices)
          768: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          // when window width is >= 1200px (large devices)
          1200: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
      >
        <SwiperSlide className=" max-w-[312px] max-h-[403px] mb-20">
          <img
            src="/Frame 28.png"
            alt="logo"
            className="shadow-lg rounded-[24px] bg-[#FFF] "
          />
        </SwiperSlide>
        <SwiperSlide className=" max-w-[312px] max-h-[403px]">
          <img
            src="/Frame 30.png"
            alt="logo"
            className="shadow-lg rounded-[24px] bg-[#FFF] "
          />
        </SwiperSlide>
        <SwiperSlide className=" max-w-[312px] max-h-[403px]">
          <img
            src="/Frame 31.png"
            alt="logo"
            className="shadow-lg rounded-[24px] bg-[#FFF] "
          />
        </SwiperSlide>
        <SwiperSlide className=" max-w-[312px] max-h-[403px]">
          <img
            src="/Frame 31 (1).png"
            alt="logo"
            className="shadow-lg rounded-[24px] bg-[#FFF] "
          />
        </SwiperSlide>
        <SwiperSlide className=" max-w-[312px] max-h-[403px]">
          <img
            src="/Frame 28.png"
            alt="logo"
            className="shadow-lg rounded-[24px] bg-[#FFF] "
          />
        </SwiperSlide>
        <SwiperSlide className=" max-w-[312px] max-h-[403px]">
          <img
            src="/Frame 30.png"
            alt="logo"
            className="shadow-lg rounded-[24px] bg-[#FFF] "
          />
        </SwiperSlide>
        <SwiperSlide className=" max-w-[312px] max-h-[403px]">
          <img
            src="/Frame 31.png"
            alt="logo"
            className="shadow-lg rounded-[24px] bg-[#FFF] "
          />
        </SwiperSlide>
        <SwiperSlide className=" max-w-[312px] max-h-[403px]">
          <img
            src="/Frame 31 (1).png"
            alt="logo"
            className="shadow-lg rounded-[24px] bg-[#FFF] "
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwiperS;
