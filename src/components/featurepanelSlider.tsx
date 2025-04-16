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
import { Button } from "./ui/button";
import Link from "next/link";

interface FeaturepItem {
  featurep_image: WpImage;
  featurep_pre_title?: string;
  featurep_title: string;
  featurep_copy: string;
  featurep_link: WpLink;
}

interface FeaturesProps {
  features: FeaturepItem[];
}

export function FeaturePanelSlider({ features }: FeaturesProps) {
  return (
    // Main image slider component
    <div className="w-full h-full flex-1 overflow-hidden">
      <Swiper
        className="h-full"
        grabCursor
        loop
        modules={[Navigation, Autoplay, EffectFade, Pagination]}
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
        {features.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full featurep-slide">
              {/* Image component for each slide */}
              <div className="slide-overlay">
                <Image
                  key={index}
                  src={item.featurep_image.url as string}
                  width={item.featurep_image.width}
                  height={item.featurep_image.height}
                  alt={item.featurep_image.alt ?? ""}
                  priority
                  className="w-full h-full object-cover object-center flex justify-center items-center"
                  // priority={index === 0 && true} // Ensures first image loads with priority
                />
              </div>
              <div className="feature-panel-content absolute bottom-[80px] left-0 px-16 text-left">
                <div className="tag text-lg font-bold uppercase text-equ-white relative">
                  {item.featurep_pre_title}
                </div>
                <div className="title tag text-4xl font-bold text-equ-white">
                  {item.featurep_title}
                </div>
                <div className="text-equ-white">{item.featurep_copy}</div>
                <Button variant="default" size="lg" asChild className="mt-6">
                  <Link href={item.featurep_link.url as string}>
                    {item.featurep_link.title}
                  </Link>
                </Button>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div className="swiper-pagination"></div>
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
      </Swiper>
    </div>
  );
}

export default FeaturePanelSlider;
