import Image from "next/image";
import type { WpImage } from "@nextwp/core";
import { cn } from "@/lib/utils";
import BlocksWrapper from "../blocks-wrapper";

// import Button from "../ui/button";

export interface ImagePanelProps {
  image_image?: WpImage;
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
  background_colour,
  component_padding,
}: ImagePanelProps) {
  return (
    <BlocksWrapper
      background_colour={background_colour}
      component_padding={component_padding}
    >
      <div
        className={cn(
          !full_width
            ? "mx-auto flex justify-center items-center w-full max-w-7xl max-h-[600px] overflow-hidden"
            : "flex justify-center items-center max-h-[600px] overflow-hidden"
        )}
      >
        {image_image?.url ? (
          <Image
            alt={image_image.alt || ""}
            src={image_image.url}
            width={image_image.width}
            height={image_image.height}
            className="relative flex justify-center items-center object-cover object-center z-0"
          />
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
