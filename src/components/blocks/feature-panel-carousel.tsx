"use client";
import type { WpImage, WpLink } from "@nextwp/core";
import BlocksWrapper from "../blocks-wrapper";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";
import FeaturePanelSlider from "../featurepanelSlider";

interface FeaturepItem {
  featurep_image: WpImage;
  featurep_pre_title?: string;
  featurep_title: string;
  featurep_copy: string;
  featurep_link: WpLink;
}
export interface FeaturePanelProps {
  featp_title?: string;
  featp_copy?: string;
  featp_items: FeaturepItem[];
  background_colour?: string;
  component_padding?: {
    top_padding: string;
    bottom_padding: string;
  };
}

export function FeaturePanelCarousel({
  featp_title,
  featp_copy,
  featp_items,
  background_colour,
  component_padding,
}: FeaturePanelProps) {
  const plugin = useRef(Autoplay({ delay: 4000, stopOnInteraction: true }));
  const images = featp_items
    .map((item) => item.featurep_image.url)
    .filter(Boolean);

  return (
    <BlocksWrapper
      background_colour={background_colour}
      component_padding={component_padding}
    >
      <div className="mx-auto w-full max-w-7xl text-center lg:text-center">
        {featp_title ? (
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-equ-white">
            {featp_title}
          </h2>
        ) : null}

        {featp_copy ? (
          <p className="mt-3 text-lg text-gray-500 dark:text-gray-100">
            {featp_copy}
          </p>
        ) : null}
        <div className="relative w-full h-[600px] flex items-center justify-center">
          <FeaturePanelSlider features={featp_items} />
        </div>
      </div>
    </BlocksWrapper>
  );
}
