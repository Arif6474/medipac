"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import "./NewsSlider.css";
import NewsCard from "./NewsCard/NewsCard";

function NewsSlider() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        // pagination={{
        //   clickable: true,
        // }}
        breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {[1, 2, 3, 4, 5].map((n, index) => (
          <SwiperSlide key={index}>
            <NewsCard />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
export default NewsSlider;
