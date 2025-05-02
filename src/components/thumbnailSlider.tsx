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
    <div className="gallery-carousel__carousel-wrapper">
      <Slider images={images} thumbs={{ thumbsSwiper, setThumbsSwiper }} />
      <Thumbnail images={images} thumbs={{ thumbsSwiper, setThumbsSwiper }} />
    </div>
  );
};

const Slider = ({ images, thumbs }: SliderProps) => {
  const thumbsSwiper = thumbs?.thumbsSwiper;
  return (
    // Main image slider component
    <div className="gallery-carousel__carousel-main-slider-wrapper o-box--rounded o-box--border">
      <Swiper
        className="main-slider"
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
            <div className="main-slider-item">
              {/* Image component for each slide */}
              <div className="main-slider-item-image o-image o-image--fit">
                <Image
                  key={index}
                  src={image.url as string}
                  width={image.width}
                  height={image.height}
                  alt={image.alt ?? ""}
                  priority={index === 0 && true} // Ensures first image loads with priority
                />
              </div>
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
    <div className="gallery-carousel__carousel-thumb-slider-wrapper">
      <Swiper
        className="thumb-slider"
        loop
        slidesPerView={4}
        spaceBetween={8}
        onSwiper={setThumbsSwiper} // Sets thumbsSwiper when component mounts
        freeMode // Allows free sliding without snap points
        watchSlidesProgress // Watches slide progress for thumbnails
      >
        {/* Iterate over images to create each thumbnail */}
        {images.map((image, index) => (
          <SwiperSlide key={index} className="thumb-slider-item">
            <div className="thumb-slider-item-border">
              <div className="thumb-slider-item-image o-image o-image--fit">
                {/* Thumbnail image component */}
                <Image
                  src={image.url as string}
                  width={image.width}
                  height={image.height}
                  alt={image.alt ?? ""}
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ThumbnailSlider;
