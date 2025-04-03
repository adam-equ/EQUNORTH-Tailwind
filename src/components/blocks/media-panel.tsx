import Image from "next/image";
import Link from "next/link";
import type { WpImage, WpLink } from "@nextwp/core";
import { cn } from "@/lib/utils";

// import Button from "../ui/button";

export interface MediaPanelProps {
  firstItem: boolean;
  mediap_title?: string;
  mediap_copy?: string;
  mediap_link?: WpLink;
  mediap_image?: WpImage;
  reverse?: boolean;
  background_colour?: string;
}

export function MediaPanel({
  firstItem,
  mediap_title,
  mediap_copy,
  mediap_link,
  mediap_image,
  reverse,
  background_colour = "equ-white",
}: MediaPanelProps) {
  return (
    <section className={`relative bg-${background_colour}`}>
      <div
        className={cn(
          `edges sm:py-24 md:py-32 grid md:grid-cols-2 lg:gap-x-32 sm:gap-y-20 gap-y-10 gap-x-20 py-16`
        )}
      >
        <div className={cn(reverse ? "order-1" : null)}>
          {mediap_title ? (
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {mediap_title}
            </h2>
          ) : null}

          {mediap_copy ? (
            <div
              className="mt-3 text-lg text-gray-500"
              dangerouslySetInnerHTML={{ __html: mediap_copy }}
            ></div>
          ) : null}

          {mediap_link?.url ? (
            <Link
              className="mt-8 inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-5 py-3 text-base font-medium text-white shadow hover:bg-indigo-700"
              href={mediap_link.url}
            >
              {mediap_link.title}
            </Link>
          ) : null}
        </div>
        <div className="relative">
          {mediap_image?.url ? (
            <Image
              alt={mediap_image.alt || ""}
              src={mediap_image.url}
              width={mediap_image.width}
              height={mediap_image.height}
              className="absolute top-0 left-0 h-full w-full object-cover z-0"
            />
          ) : null}
        </div>
      </div>
    </section>
  );
}

// export async function getStaticProps() {
//   return {
//     props: {
//       mediap_title: "Media panel title",
//       mediap_copy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
