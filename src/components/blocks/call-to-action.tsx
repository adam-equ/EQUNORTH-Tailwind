import Image from "next/image";
import Link from "next/link";
import type { WpImage, WpLink } from "@nextwp/core";
import { cn } from "@/lib/utils";
import BlocksWrapper from "../blocks-wrapper";
// import Button from "../ui/button";

export interface CtaProps {
  cta_title?: string;
  cta_copy?: string;
  cta_link?: WpLink;
  background_image?: WpImage;
  background_colour?: string;
  component_padding?: {
    top_padding: string;
    bottom_padding: string;
  };
}

export function CallToAction({
  cta_title,
  cta_copy,
  cta_link,
  background_image,
  background_colour,
  component_padding,
}: CtaProps) {
  return (
    <BlocksWrapper
      background_colour={background_colour}
      component_padding={component_padding}
    >
      <div className="mx-auto w-full max-w-7xl text-center lg:text-center">
        {background_image?.url ? (
          <Image
            alt={background_image.alt || ""}
            src={background_image.url}
            width={background_image.width}
            height={background_image.height}
            className="absolute top-0 left-0 h-full w-full object-cover z-0"
          />
        ) : null}
        <div className="relative">
          {cta_title ? (
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-equ-white">
              {cta_title}
            </h2>
          ) : null}

          {cta_copy ? (
            <p className="mt-3 text-lg text-gray-500 dark:text-gray-200">
              {cta_copy}
            </p>
          ) : null}

          {cta_link?.url ? (
            <Link
              className="mt-8 inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-5 py-3 text-base font-medium text-white shadow hover:bg-indigo-700"
              href={cta_link.url}
            >
              {cta_link.title}
            </Link>
          ) : null}
        </div>
      </div>
    </BlocksWrapper>
  );
}
