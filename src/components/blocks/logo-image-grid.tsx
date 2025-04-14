import Image from "next/image";
import type { WpImage, WpLink } from "@nextwp/core";
import { cn } from "@/lib/utils";
import Link from "next/link";
import BlocksWrapper from "../blocks-wrapper";

export interface LogoImageGridProps {
  logo_title?: string;
  logo_copy?: string;
  background_colour?: string;
  component_padding?: {
    top_padding: string;
    bottom_padding: string;
  };
  logo_items?: {
    logo_item_image?: WpImage;
    logo_item_description: string;
    logo_item_link?: WpLink;
  }[];
}
export function LogoImageGrid({
  logo_title,
  logo_copy,
  background_colour,
  logo_items,
  component_padding,
}: LogoImageGridProps) {
  return (
    <BlocksWrapper
      background_colour={background_colour}
      component_padding={component_padding}
    >
      <div className="relative mx-auto w-full max-w-7xl text-center lg:text-center z-1">
        {logo_title ? (
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {logo_title}
          </h2>
        ) : null}

        {logo_copy ? (
          <p className="mt-3 text-lg text-gray-500">{logo_copy}</p>
        ) : null}
        {logo_items ? (
          <div className="grid grid-cols-3 gap-8">
            {logo_items.map(
              (
                { logo_item_image, logo_item_description, logo_item_link },
                index
              ) => {
                return (
                  <div
                    className="text-center p-8 rounded-md relative flex flex-col items-center bg-equ-white"
                    key={index}
                  >
                    {logo_item_image?.url ? (
                      <Image
                        alt={logo_item_image.alt || ""}
                        height={logo_item_image.height}
                        src={logo_item_image.url}
                        width={logo_item_image.width}
                        className="text-center max-w-[200px]"
                      />
                    ) : null}
                    {logo_item_description ? (
                      <p className="text-gray-500 text-sm pt-2 mb-0">
                        {logo_item_description}
                      </p>
                    ) : null}
                    {logo_item_link && logo_item_link.url ? (
                      <Link
                        href={logo_item_link.url}
                        className="absolute top-0 bottom-0 left-0 right-0 w-full h-full"
                      />
                    ) : null}
                  </div>
                );
              }
            )}
          </div>
        ) : null}
      </div>
    </BlocksWrapper>
  );
}
