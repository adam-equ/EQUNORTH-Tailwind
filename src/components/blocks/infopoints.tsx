import Image from "next/image";
import type { WpImage } from "@nextwp/core";
import BlocksWrapper from "../blocks-wrapper";
export interface InfopointsProps {
  infop_title?: string;
  infop_copy?: string;
  background_colour?: string;
  infop_bg?: WpImage;
  component_padding?: {
    top_padding: string;
    bottom_padding: string;
  };
  infop_items?: {
    infopoint_title: string;
    infopoint_image?: WpImage;
    infopoint_copy?: string;
  }[];
}
export function Infopoints({
  infop_title,
  infop_copy,
  background_colour,
  infop_bg,
  infop_items,
  component_padding,
}: InfopointsProps) {
  return (
    <BlocksWrapper
      background_colour={background_colour}
      component_padding={component_padding}
    >
      {infop_bg?.url ? (
        <Image
          alt={infop_bg.alt || ""}
          src={infop_bg.url}
          width={infop_bg.width}
          height={infop_bg.height}
          className="absolute top-0 left-0 h-full w-full object-cover z-0"
        />
      ) : null}
      <div className="relative mx-auto w-full max-w-7xl text-center lg:text-center z-1">
        {infop_title ? (
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-equ-white">
            {infop_title}
          </h2>
        ) : null}

        {infop_copy ? (
          <p className="mt-3 text-lg text-gray-500 dark:text-gray-100">
            {infop_copy}
          </p>
        ) : null}
        {infop_items ? (
          <div className="grid grid-flow-col gap-2">
            {infop_items.map(
              ({ infopoint_title, infopoint_copy, infopoint_image }, index) => {
                return (
                  <div
                    className="text-center p-8 rounded-md relative flex flex-col items-center"
                    key={index}
                  >
                    {infopoint_image?.url ? (
                      <Image
                        alt={infopoint_image.alt || ""}
                        height={infopoint_image.height}
                        src={infopoint_image.url}
                        width={infopoint_image.width}
                        className="text-center"
                      />
                    ) : null}
                    {infopoint_title ? (
                      <h4 className="font-bold text-2xl dark:text-equ-white">
                        {infopoint_title}
                      </h4>
                    ) : null}
                    {infopoint_copy ? (
                      <p className="text-gray-500 text-sm dark:text-gray-100">
                        {infopoint_copy}
                      </p>
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
