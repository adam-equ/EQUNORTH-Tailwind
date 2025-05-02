"use client";
import { WpImage } from "@nextwp/core";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import getSelectedPages from "server-actions/getSelectedPages";
import AOS from "aos";

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
  useEffect(() => {
    if (pageList.length > 0) {
      AOS.refresh();
    }
  }, [pageList]);
  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="page-cards_grid">
      {pageList.map((item, index) => {
        return (
          <div
            key={index}
            className="page-cards_card o-box--rounded o-box--border o-box--hover u-relative"
          >
            <div className="page-cards_card--header">
              {item.acf?.pl_image?.url ? (
                <div className="page-cards_card-image-container">
                  <div className="page-cards_card--image o-box--rounded-small o-image o-image--fit">
                    <Image
                      alt={item.acf.pl_image.alt || ""}
                      height={item.acf.pl_image.height}
                      src={item.acf.pl_image.url}
                      width={item.acf.pl_image.width}
                    />
                  </div>
                </div>
              ) : null}
              <div className="page-cards_card--title h5">
                {item.acf.pl_title || item.title.rendered}
              </div>
            </div>
            <div className="page-cards_card--intro">{item.acf.pl_intro}</div>
            <Link href={item.slug} className="u-link-fill" />
          </div>
        );
      })}
    </div>
  );
}
