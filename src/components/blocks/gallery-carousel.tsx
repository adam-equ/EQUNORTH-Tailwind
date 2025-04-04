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

export interface GalleryCarouselProps {
  gallery_title?: string;
  gallery_copy?: string;
  gallery_items?: WpImage[];
  background_colour?: string;
  component_padding?: {
    top_padding: string;
    bottom_padding: string;
  };
}

export function GalleryCarousel({
  gallery_title,
  gallery_copy,
  gallery_items,
  background_colour,
  component_padding,
}: GalleryCarouselProps) {
  return (
    <section
      className={cn(
        "relative",
        background_colour ? `bg-equ-${background_colour}` : "bg-equ-white",
        background_colour === "teal" ||
          background_colour === "black" ||
          background_colour === "grey"
          ? "dark"
          : "",
        component_padding
          ? `${component_padding.top_padding} ${component_padding.bottom_padding}`
          : "pb-16 pt-16"
      )}
    >
      <div className="mx-auto w-full max-w-7xl text-center lg:text-center">
        {gallery_title ? (
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-equ-white">
            {gallery_title}
          </h2>
        ) : null}

        {gallery_copy ? (
          <p className="mt-3 text-lg text-gray-100">{gallery_copy}</p>
        ) : null}
        {gallery_items ? (
          <Carousel>
            <CarouselContent className="-ml-4">
              {gallery_items.map((item, index) => {
                return (
                  <CarouselItem key={index} className="pl-4">
                    {item.url && (
                      <Image
                        key={index}
                        src={item.url}
                        width={item.width}
                        height={item.height}
                        alt={item.alt ?? ""}
                      />
                    )}
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        ) : null}
      </div>
    </section>
  );
}
