"use client";
import type { WpImage, WpLink } from "@nextwp/core";
import BlocksWrapper from "../blocks-wrapper";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";
import FeaturePanelSlider from "../featurepanelSlider";
import { LinkFieldType } from "./types";

interface FeaturepItem {
  featurep_image: WpImage;
  featurep_pre_title?: string;
  featurep_title: string;
  featurep_copy: string;
  link_field?: LinkFieldType;
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
      <div className="feature-panel">
        <div className="feature-panel__header o-container o-container--narrow u-text-center">
          {featp_title ? (
            <h3 className="u-spacer-bottom-md" data-aos="fade-in">
              {featp_title}
            </h3>
          ) : null}

          {featp_copy ? (
            <p
              className="u-spacer-top-md u-text-balance u-text-large"
              data-aos="fade-in"
            >
              {featp_copy}
            </p>
          ) : null}
        </div>
        <div className="o-container">
          <div className="feature-panel-carousel-wrapper o-box--rounded o-box--border">
            <FeaturePanelSlider features={featp_items} />
          </div>
        </div>
      </div>
    </BlocksWrapper>
  );
}
