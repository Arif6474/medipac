"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import BlogCard from "./BlogCard/BlogCard";
function BlogSlider() {
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
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
      modules={[Pagination]}
      className="mySwiper"
    >
      {[1, 2, 3, 4, 5].map((n, index) => (
        <SwiperSlide key={index}>
          <BlogCard />
        </SwiperSlide>
      ))}
    </Swiper>
  </>
  )
}
export default BlogSlider