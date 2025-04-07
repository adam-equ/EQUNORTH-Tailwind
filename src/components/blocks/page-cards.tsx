"use client";
import Image from "next/image";
import Link from "next/link";
import type { WpImage, WpLink, WpPage } from "@nextwp/core";
import { cn } from "@/lib/utils";
import { useEffect } from "react";

// import Button from "../ui/button";

export interface PageCardsProps {
  pcards_title?: string;
  pcards_copy?: string;
  pcards_link?: WpLink;
  pcard_pages: WpPage;
  background_colour?: string;
  component_padding?: {
    top_padding: string;
    bottom_padding: string;
  };
}

export function PageCards({
  pcards_title,
  pcards_copy,
  pcards_link,
  pcard_pages,
  background_colour,
  component_padding,
}: PageCardsProps) {
  // useEffect(() => {
  //   console.log("pcard_pages:", JSON.stringify(pcard_pages, null, 2));
  // }, [pcard_pages]);
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
        {pcards_title ? (
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {pcards_title}
          </h2>
        ) : null}
        {pcards_copy ? (
          <p className="mt-3 text-lg text-gray-500">{pcards_copy}</p>
        ) : null}
        {pcard_pages ? (
          <div className="grid grid-flow-col auto-cols-max">
            {pcard_pages.map((item, index) => {
              return <div key={index}>{item.post_title}</div>;
            })}
          </div>
        ) : null}
      </div>
    </section>
  );
}
