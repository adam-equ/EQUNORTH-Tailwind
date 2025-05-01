import Image from "next/image";
import Link from "next/link";
import type { AcfFile, WpImage, WpLink } from "@nextwp/core";
import { FileIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import BlocksWrapper from "../blocks-wrapper";
import { LinkFieldType } from "./types";
import { LinkFieldCover } from "../link-field-cover";

export interface QuicklinksProps {
  quickl_title?: string;
  quickl_copy?: string;
  background_colour?: string;
  quickl_items?: {
    link_field?: LinkFieldType;
    quickl_link_image?: WpImage;
    quickl_link_copy?: string;
    quickl_link_title?: string;
  }[];
  component_padding?: {
    top_padding: string;
    bottom_padding: string;
  };
}
export function Quicklinks({
  quickl_title,
  quickl_copy,
  background_colour,
  quickl_items,
  component_padding,
}: QuicklinksProps) {
  return (
    <BlocksWrapper
      background_colour={background_colour}
      component_padding={component_padding}
    >
      <div className="quick-links">
        <div className="o-container">
          {quickl_title ? (
            <h2 className="u-space-bottom-md" data-aos="fade-in">
              {quickl_title}
            </h2>
          ) : null}

          {quickl_copy ? (
            <p className="u-spacer-top-md u-text-balance" data-aos="fade-in">
              {quickl_copy}
            </p>
          ) : null}

          {quickl_items ? (
            <div className="quick-links__items">
              {quickl_items.map(
                (
                  {
                    link_field,
                    quickl_link_title,
                    quickl_link_copy,
                    quickl_link_image,
                  },
                  index
                ) => {
                  return (
                    <div
                      className="quick-links__item"
                      key={index}
                      data-aos="fade-in"
                      data-aos-delay={index * 100}
                    >
                      <div className="quick-link">
                        {quickl_link_image?.url ? (
                          <Image
                            alt={quickl_link_image.alt || ""}
                            height={quickl_link_image.height}
                            src={quickl_link_image.url}
                            width={quickl_link_image.width}
                          />
                        ) : null}
                        <div className="quick-link__content">
                          {quickl_link_title ? (
                            <div className="quick-link__title h5 u-no-margin">
                              {quickl_link_title}
                            </div>
                          ) : null}
                          {quickl_link_copy ? (
                            <p className="u-text-balance">{quickl_link_copy}</p>
                          ) : null}
                        </div>
                        {link_field?.display_link ? (
                          <LinkFieldCover link_field={link_field} />
                        ) : null}
                      </div>
                    </div>
                  );
                }
              )}
            </div>
          ) : null}
        </div>
      </div>
    </BlocksWrapper>
  );
}
