"use client";
//https://swiperjs.com/swiper-api#parameters
import React, { useState } from "react";
import Image from "next/image";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper type
import { Swiper as SwiperType } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/effect-fade";

// import required modules
import { Thumbs, Navigation, EffectFade, Autoplay } from "swiper/modules";
import { WpImage } from "@nextwp/core";

interface SliderProps {
  images: WpImage[];
  thumbs?: {
    thumbsSwiper: SwiperType | null;
    setThumbsSwiper: React.Dispatch<React.SetStateAction<SwiperType | null>>;
  };
}

const ThumbnailSlider = ({ images }: SliderProps) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  return (
    // Container for both main slider and thumbnail slider
    <div className="w-4/5 h-full flex flex-col gap-4">
      <Slider images={images} thumbs={{ thumbsSwiper, setThumbsSwiper }} />
      <Thumbnail images={images} thumbs={{ thumbsSwiper, setThumbsSwiper }} />
    </div>
  );
};

const Slider = ({ images, thumbs }: SliderProps) => {
  const thumbsSwiper = thumbs?.thumbsSwiper;
  return (
    // Main image slider component
    <div className="w-full h-4/5 overflow-hidden">
      <Swiper
        className="h-full"
        grabCursor
        loop
        thumbs={{ swiper: thumbsSwiper }} // Connects main slider to thumbsSwiper for thumbnail synchronization
        modules={[Thumbs, Navigation, Autoplay, EffectFade]} // Enables Thumbs module for thumbnail navigation
        effect="fade"
        fadeEffect={{
          crossFade: true,
        }}
        autoplay={{
          delay: 4000, // Autoplay delay in milliseconds
          disableOnInteraction: false, // Autoplay will not be disabled after user interaction
        }}
        speed={1000}
        slidesPerView={1}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
      >
        {/* Iterate over images to create each slide */}
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">
              {/* Image component for each slide */}
              <Image
                key={index}
                src={image.url as string}
                width={image.width}
                height={image.height}
                alt={image.alt ?? ""}
                className="object-cover object-center w-full h-full"
                priority={index === 0 && true} // Ensures first image loads with priority
              />
            </div>
          </SwiperSlide>
        ))}
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
      </Swiper>
    </div>
  );
};

const Thumbnail = ({ images, thumbs }: SliderProps) => {
  const setThumbsSwiper = thumbs?.setThumbsSwiper;
  return (
    // Thumbnail navigation slider component
    <div className="relative flex gap-2 justify-center h-14">
      <Swiper
        className="w-2/4 h-[150px]"
        loop
        slidesPerView={3}
        spaceBetween={8}
        onSwiper={setThumbsSwiper} // Sets thumbsSwiper when component mounts
        freeMode // Allows free sliding without snap points
        watchSlidesProgress // Watches slide progress for thumbnails
      >
        {/* Iterate over images to create each thumbnail */}
        {images.map((image, index) => (
          <SwiperSlide
            key={index}
            className="rounded-md cursor-pointer border-[3px] border-solid border-transparent overflow-hidden"
          >
            <div className="relative w-full h-full">
              {/* Thumbnail image component */}
              <Image
                src={image.url as string}
                width={image.width}
                height={image.height}
                alt={image.alt ?? ""}
                className="object-cover object-center"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ThumbnailSlider;
