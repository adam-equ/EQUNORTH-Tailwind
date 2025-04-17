"use client";
import { WpImage } from "@nextwp/core";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import getSelectedPages from "server-actions/getSelectedPages";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

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

interface SelectedPagesProps {
  select_pages: [];
}
export function SelectedPages({ select_pages }: SelectedPagesProps) {
  const [pageList, setPageList] = useState<PageListing[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (select_pages) {
      const postIds = select_pages.map((item) => item);
      getSelectedPages({ include: postIds })
        .then((data) => {
          setPageList(data);
          setLoading(false);
        })
        .catch((error) => {
          console.error(error);
          setLoading(false);
        });
    }
  }, [select_pages]);
  if (loading) {
    return <div>Loading...</div>;
  }
  return (
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
  );
}
