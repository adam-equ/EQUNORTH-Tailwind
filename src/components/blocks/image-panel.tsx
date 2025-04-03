import Image from "next/image";
import Link from "next/link";
import type { WpImage, WpLink } from "@nextwp/core";
import { cn } from "@/lib/utils";

// import Button from "../ui/button";

export interface ImagePanelProps {
  firstItem: boolean;
  image_image?: WpImage;
  full_width?: boolean;
  background_colour?: string;
}

export function ImagePanel({
  image_image,
  full_width = false,
  background_colour = "equ-white",
}: ImagePanelProps) {
  return (
    <section className={`relative bg-${background_colour}`}>
      <div className={cn(!full_width ? "mx-auto w-full max-w-7xl" : null)}>
        {image_image?.url ? (
          <Image
            alt={image_image.alt || ""}
            src={image_image.url}
            width={image_image.width}
            height={image_image.height}
            className="relative top-0 left-0 h-full w-full object-cover z-0"
          />
        ) : null}
      </div>
    </section>
  );
}

// export async function getStaticProps() {
//   return {
//     props: {
//       mediap_title: "Media panel title",
//       mediap_copy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
