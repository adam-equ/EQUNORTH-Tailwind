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
    <div className="timeline-slider--wrapper">
      <Swiper
        className="timeline-slider-slider"
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
          <SwiperSlide key={index} className="timeline-slider-slide">
            <TimelineCard timeline={item} />
          </SwiperSlide>
        ))}
        <div className="slider-controls-small">
          <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div>
        </div>
      </Swiper>
    </div>
  );
}

export default TimelineSlider;
