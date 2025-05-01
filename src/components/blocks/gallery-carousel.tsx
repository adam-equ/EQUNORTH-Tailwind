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
      <div className="o-container">
        <div className="gallery-carousel">
          {gallery_title ? <h2>{gallery_title}</h2> : null}

          {gallery_copy ? <p>{gallery_copy}</p> : null}
          {gallery_items ? (
            <div className="gallery-carousel__carousel">
              <ThumbnailSlider images={gallery_items} />
            </div>
          ) : null}
        </div>
      </div>
    </BlocksWrapper>
  );
}
