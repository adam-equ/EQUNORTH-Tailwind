"use client";
//https://swiperjs.com/swiper-api#parameters
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination } from "swiper/modules";
import { WpImage, WpLink } from "@nextwp/core";
import TestimonialCard from "./blocks/testimonial-card";

interface Testimonial {
  acf: {
    full_name: string;
    company_job_title?: string;
    quote: string;
    profile_image_logo?: WpImage;
    linkedin_url?: WpLink;
  };
}

interface TestimonialProps {
  testimonials: Testimonial[];
}

export function TestimonialSlider({ testimonials }: TestimonialProps) {
  return (
    // Main image slider component
    <div className="testimonials--slider w-full h-full flex-1 overflow-hidden">
      <Swiper
        className="h-full"
        grabCursor
        loop
        modules={[Navigation, Pagination]}
        speed={1000}
        slidesPerView={1}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
        }}
      >
        {/* Iterate over images to create each slide */}
        {testimonials.map((item, index) => (
          <SwiperSlide key={index}>
            <TestimonialCard testimonial={item.acf} />
          </SwiperSlide>
        ))}
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
      </Swiper>
    </div>
  );
}

export default TestimonialSlider;
