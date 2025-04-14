"use client";
import Image from "next/image";
import Link from "next/link";
import { type WpImage } from "@nextwp/core";
import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import AOS from "aos";
import BlocksWrapper from "../blocks-wrapper";
import getSelectedInsights from "server-actions/getSelectedInsights";
// import Button from "../ui/button";

export interface InsightCardsProps {
  icards_title?: string;
  icards_copy?: string;
  insights: [];
  background_colour?: string;
  component_padding?: {
    top_padding: string;
    bottom_padding: string;
  };
}
export interface InsightListing {
  slug: string;
  title: {
    rendered: string;
  };
  acf: {
    pl_title: string;
    pl_image?: WpImage;
    pl_intro?: string;
    team_member?: {
      full_name: string;
      profile_image: WpImage;
      job_title: string;
    };
  };
}

export function InsightCards({
  icards_title,
  icards_copy,
  insights,
  background_colour,
  component_padding,
}: InsightCardsProps) {
  const [insightList, setInsightList] = useState<InsightListing[]>([]);
  useEffect(() => {
    if (insights) {
      const postIds = insights.map((item) => item);
      getSelectedInsights({ include: postIds })
        .then((data) => {
          setInsightList(data);
          AOS.refresh();
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [insights]);

  // useEffect(() => {
  //   console.log("pcard_pages:", JSON.stringify(pcard_pages, null, 2));
  // }, [pcard_pages]);
  return (
    <BlocksWrapper
      background_colour={background_colour}
      component_padding={component_padding}
    >
      <div className="mx-auto w-full max-w-7xl text-center lg:text-center">
        {icards_title ? (
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {icards_title}
          </h2>
        ) : null}
        {icards_copy ? (
          <p className="mt-3 text-lg text-gray-500">{icards_copy}</p>
        ) : null}
        {insights ? (
          <div className="grid grid-cols-4 gap-8 my-8">
            {insightList.map((item, index) => {
              return (
                <Card
                  key={index}
                  className="text-left relative overflow-hidden"
                >
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
                    <div className="flex pt-2 items-center">
                      {item.acf.team_member?.profile_image.url ? (
                        <Image
                          alt={item.acf.team_member?.profile_image.alt || ""}
                          height={item.acf.team_member?.profile_image.height}
                          src={item.acf.team_member?.profile_image.url}
                          width={item.acf.team_member?.profile_image.width}
                          className="text-center w-[46px] h-[46px] object-cover rounded-full mr-2"
                        />
                      ) : null}
                      <div className="flex flex-col">
                        <span className="font-semibold">
                          {item.acf.team_member?.full_name}
                        </span>
                        <span className="text-sm font-light">
                          {item.acf.team_member?.job_title}
                        </span>
                      </div>
                    </div>
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
    </BlocksWrapper>
  );
}
