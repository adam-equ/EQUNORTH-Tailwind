"use client";
//https://swiperjs.com/swiper-api#parameters
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination } from "swiper/modules";
import { WpImage } from "@nextwp/core";
import TimelineCard from "./blocks/timeline-card";

export interface Timeline {
  time_image?: WpImage;
  time_title?: string;
  time_copy: string;
  time_date: string;
}

interface TimelineProps {
  timeline_items: Timeline[];
}

export function TimelineSlider({ timeline_items }: TimelineProps) {
  return (
    // Main image slider component
    <div className="w-full h-full flex-1 relative">
      <Swiper
        className="h-full relative"
        grabCursor
        modules={[Navigation, Pagination]}
        speed={1000}
        slidesPerView={4}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
      >
        {/* Iterate over images to create each slide */}
        {timeline_items.map((item, index) => (
          <SwiperSlide key={index} className="mt-12 timeline-card">
            <TimelineCard timeline={item} />
          </SwiperSlide>
        ))}
        <div className="slider-controls-small absolute top-2 right-0 w-[100px] h-[32px] z-5">
          <div className="swiper-button-prev w-[32px] h-[32px] rounded-md"></div>
          <div className="swiper-button-next w-[30px] h-[30px] rounded-md"></div>
        </div>
      </Swiper>
    </div>
  );
}

export default TimelineSlider;
