"use client";
//https://swiperjs.com/swiper-api#parameters
import Image from "next/image";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "swiper/css/effect-fade";

// import required modules
import { Navigation, Autoplay, EffectFade, Pagination } from "swiper/modules";
import { WpImage } from "@nextwp/core";
import { LinkFieldType } from "./blocks/types";
import { LinkFieldButton } from "./link-field-button";

interface FeaturepItem {
  featurep_image: WpImage;
  featurep_pre_title?: string;
  featurep_title: string;
  featurep_copy: string;
  link_field?: LinkFieldType;
}

interface FeaturesProps {
  features: FeaturepItem[];
}

export function FeaturePanelSlider({ features }: FeaturesProps) {
  return (
    // Main image slider component
    <div className="feature-panel-carousel">
      <Swiper
        className="feature-panel-carousel-swiper"
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
          el: ".feature-panel-pagination",
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
            <div className="feature-panel-carousel-item">
              {/* Image component for each slide */}
              <div className="feature-panel-carousel-image o-image o-image--fit o-image--overlay">
                <Image
                  key={index}
                  src={item.featurep_image.url as string}
                  width={item.featurep_image.width}
                  height={item.featurep_image.height}
                  alt={item.featurep_image.alt ?? ""}
                  // priority
                  priority={index === 0 && true} // Ensures first image loads with priority
                />
              </div>
              <div className="feature-panel-content">
                <div className="tag">{item.featurep_pre_title}</div>
                <div className="title tag">{item.featurep_title}</div>
                <div className="copy">{item.featurep_copy}</div>
                {item.link_field?.display_link ? (
                  <LinkFieldButton
                    link_field={item.link_field}
                    className="btn u-spacer-top"
                  />
                ) : null}
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div className="swiper-pagination feature-panel-pagination"></div>
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
      </Swiper>
    </div>
  );
}

export default FeaturePanelSlider;
