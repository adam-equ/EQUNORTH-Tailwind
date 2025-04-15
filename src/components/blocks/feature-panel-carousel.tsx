"use client";
import Image from "next/image";
import type { WpImage, WpLink } from "@nextwp/core";
import { cn } from "@/lib/utils";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import BlocksWrapper from "../blocks-wrapper";
import { Button } from "../ui/button";
import Link from "next/link";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

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
  featp_items?: FeaturepItem[];
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
        {featp_items ? (
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[plugin.current]}
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
          >
            <CarouselContent className="-ml-4">
              {featp_items.map((item, index) => {
                return (
                  <CarouselItem
                    key={index}
                    className="pl-4 flex justify-center items-center h-[500px] overflow-hidden relative w-full z-3"
                  >
                    {item.featurep_image.url && (
                      <Image
                        key={index}
                        src={item.featurep_image.url}
                        width={item.featurep_image.width}
                        height={item.featurep_image.height}
                        alt={item.featurep_image.alt ?? ""}
                        className="absolute top-0 bottom-0 left-0 right-0 w-full h-full object-cover object-center flex justify-center items-center z-1"
                      />
                    )}
                    <div className="absolute w-full h-full top-0 right-0 bottom-0 left-0 bg-gradient-to-b from-transparent to-equ-black"></div>
                    <div className="feature-panel-content absolute z-3 bottom-[80px] left-0 px-16 text-left">
                      <div className="tag text-lg font-bold uppercase text-equ-white relative z-3">
                        {item.featurep_pre_title}
                      </div>
                      <div className="title tag text-4xl font-bold text-equ-white">
                        {item.featurep_title}
                      </div>
                      <div className="text-equ-white">{item.featurep_copy}</div>
                      <Button
                        variant="default"
                        size="lg"
                        asChild
                        className="mt-6"
                      >
                        <Link href={item.featurep_link.url}>
                          {item.featurep_link.title}
                        </Link>
                      </Button>
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        ) : null}
      </div>
    </BlocksWrapper>
  );
}
