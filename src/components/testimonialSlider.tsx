"use client";
//https://swiperjs.com/swiper-api#parameters
import Image from "next/image";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

// import required modules
import { Navigation, Autoplay, EffectFade, Pagination } from "swiper/modules";
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
    <div className="w-full h-full flex-1 overflow-hidden">
      <Swiper
        className="h-full"
        grabCursor
        loop
        modules={[Navigation, Pagination]}
        // effect="fade"
        // fadeEffect={{
        //   crossFade: true,
        // }}
        speed={1000}
        slidesPerView={2}
        pagination={{
          el: ".swiper-pagination",
          type: "bullets",
          clickable: true,
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
      >
        {/* Iterate over images to create each slide */}
        {testimonials.map((item, index) => (
          <SwiperSlide key={index}>
            <TestimonialCard testimonial={item.acf} />
          </SwiperSlide>
        ))}
        <div className="swiper-pagination"></div>
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
      </Swiper>
    </div>
  );
}

export default TestimonialSlider;
