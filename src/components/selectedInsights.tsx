"use client";
import { WpImage } from "@nextwp/core";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import getSelectedInsights from "server-actions/getSelectedInsights";

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

interface SelectedInsightsProps {
  select_insights: [];
}
export function SelectedInsights({ select_insights }: SelectedInsightsProps) {
  const [insightList, setInsightList] = useState<InsightListing[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (select_insights) {
      const postIds = select_insights.map((item) => item);
      getSelectedInsights({ include: postIds })
        .then((data) => {
          setInsightList(data);
          setLoading(false);
        })
        .catch((error) => {
          console.error(error);
          setLoading(false);
        });
    }
  }, [select_insights]);
  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="grid grid-cols-4 gap-8 my-8">
      {insightList.map((item, index) => {
        return (
          <Card key={index} className="text-left relative overflow-hidden">
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
  );
}
