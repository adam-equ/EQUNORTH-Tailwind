import type { WpImage } from "@nextwp/core";
import BlocksWrapper from "../blocks-wrapper";
import ThumbnailSlider from "../thumbnailSlider";

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
    <BlocksWrapper
      background_colour={background_colour}
      component_padding={component_padding}
    >
      <div className="mx-auto w-full max-w-7xl text-center lg:text-center">
        {gallery_title ? (
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-equ-white">
            {gallery_title}
          </h2>
        ) : null}

        {gallery_copy ? (
          <p className="mt-3 text-lg dark:text-gray-100 text-gray-500">
            {gallery_copy}
          </p>
        ) : null}
        {gallery_items ? (
          <div className="relative w-full h-screen flex items-center justify-center">
            <ThumbnailSlider images={gallery_items} />
          </div>
        ) : null}
      </div>
    </BlocksWrapper>
  );
}
