"use client";
import { WpImage } from "@nextwp/core";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
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
    <div className="insights_grid">
      {insightList.map((item, index) => {
        return (
          <div
            key={index}
            className="insights_card o-box--rounded o-box--border o-box--hover u-relative"
          >
            <div className="insights_card--header">
              {item.acf?.pl_image?.url ? (
                <div className="o-box--rounded-small">
                  <Image
                    alt={item.acf.pl_image.alt || ""}
                    height={item.acf.pl_image.height}
                    src={item.acf.pl_image.url}
                    width={item.acf.pl_image.width}
                  />
                </div>
              ) : null}
              <div className="insights_card--title h5">
                {item.acf.pl_title || item.title.rendered}
              </div>
            </div>
            <div className="insights_card--content">
              <div className="insights_card--intro">{item.acf.pl_intro}</div>
              {item.acf.team_member ? (
                <div className="insights_card--author flex pt-2 items-center">
                  {item.acf.team_member?.profile_image.url ? (
                    <div className="insights_card--author-image o-image o-image--fit o-image--circle">
                      <Image
                        alt={item.acf.team_member?.profile_image.alt || ""}
                        height={item.acf.team_member?.profile_image.height}
                        src={item.acf.team_member?.profile_image.url}
                        width={item.acf.team_member?.profile_image.width}
                      />
                    </div>
                  ) : null}
                  <div className="insights_card--author-details">
                    <span className="insights_card--author-name">
                      {item.acf.team_member?.full_name}
                    </span>
                    <span className="insights_card--author-title">
                      {item.acf.team_member?.job_title}
                    </span>
                  </div>
                </div>
              ) : null}
            </div>
            <Link href={item.slug} className="u-link-fill" />
          </div>
        );
      })}
    </div>
  );
}
