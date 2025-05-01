import Image from "next/image";
import type { WpImage } from "@nextwp/core";
import BlocksWrapper from "../blocks-wrapper";
export interface ImagePanelProps {
  image_image: WpImage;
  caption?: string;
  full_width?: boolean;
  background_colour?: string;
  component_padding?: {
    top_padding: string;
    bottom_padding: string;
  };
}

export function ImagePanel({
  image_image,
  full_width = false,
  caption,
  background_colour,
  component_padding,
}: ImagePanelProps) {
  return (
    <BlocksWrapper
      background_colour={background_colour}
      component_padding={component_padding}
    >
      <div className="image-widget" data-aos="fade-in">
        {full_width ? (
          <div className="image-widget__image-nocrop">
            <picture>
              <Image
                alt={image_image.alt || ""}
                src={image_image.url as string}
                width={image_image.width}
                height={image_image.height}
                className=""
                loading="lazy"
              />
            </picture>
          </div>
        ) : (
          <div className="image-widget__image o-box--rounded-large">
            <div className="o-image o-image--fit lazy-img image--medium">
              <picture>
                <Image
                  alt={image_image.alt || ""}
                  src={image_image.url as string}
                  width={image_image.width}
                  height={image_image.height}
                  className=""
                />
              </picture>
            </div>
          </div>
        )}
        {caption ? (
          <div className="o-image__caption u-spacer-top-xs">
            <span>{caption}</span>
          </div>
        ) : null}
      </div>
    </BlocksWrapper>
  );
}

// export async function getStaticProps() {
//   return {
//     props: {
//       mediap_title: "Media panel title",
//       mediap_copy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
