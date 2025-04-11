"use client";
import Image from "next/image";
import Link from "next/link";
import { type WpImage } from "@nextwp/core";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import getSelectPages from "@/app/api/page/route";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// import Button from "../ui/button";

export interface PageCardsProps {
  pcards_title?: string;
  pcards_copy?: string;
  pcard_pages: [];
  background_colour?: string;
  component_padding?: {
    top_padding: string;
    bottom_padding: string;
  };
}
export interface PageListing {
  slug: string;
  title: {
    rendered: string;
  };
  acf: {
    pl_title: string;
    pl_image?: WpImage;
    pl_intro?: string;
  };
}

export function PageCards({
  pcards_title,
  pcards_copy,
  pcard_pages,
  background_colour,
  component_padding,
}: PageCardsProps) {
  const [pageList, setPageList] = useState<PageListing[]>([]);
  useEffect(() => {
    if (pcard_pages) {
      const postIds = pcard_pages.map((item) => item);
      getSelectPages({ include: postIds })
        .then((data) => {
          setPageList(data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [pcard_pages]);

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
          <div className="grid grid-cols-3 gap-8 my-8">
            {pageList.map((item, index) => {
              return (
                <Card key={index} className="rounded-t-none text-left relative">
                  <CardHeader className="p-0">
                    {item.acf?.pl_image?.url ? (
                      <Image
                        alt={item.acf.pl_image.alt || ""}
                        height={item.acf.pl_image.height}
                        src={item.acf.pl_image.url}
                        width={item.acf.pl_image.width}
                        className="text-center w-full h-full object-cover"
                      />
                    ) : null}
                    <CardTitle className="py-4 px-6">
                      {item.acf.pl_title || item.title.rendered}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-gray-500 text-sm">
                    {item.acf.pl_intro}
                  </CardContent>
                  <CardFooter className="absolute w-full h-full top-0 left-0 right-0 bottom-0">
                    <Link href={item.slug} className="w-full h-full" />
                  </CardFooter>
                </Card>
              );
            })}
          </div>
        ) : null}
      </div>
    </section>
  );
}
