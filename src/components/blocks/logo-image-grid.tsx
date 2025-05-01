import Image from "next/image";
import type { WpImage } from "@nextwp/core";
import BlocksWrapper from "../blocks-wrapper";
import { LinkFieldType } from "./types";
import { LinkFieldCover } from "../link-field-cover";
import { cn } from "@/lib/utils";

export interface LogoImageGridProps {
  logo_title?: string;
  logo_copy?: string;
  background_colour?: string;
  component_padding?: {
    top_padding: string;
    bottom_padding: string;
  };
  logo_items?: {
    logo_item_image?: WpImage;
    logo_item_description: string;
    link_field?: LinkFieldType;
  }[];
}
export function LogoImageGrid({
  logo_title,
  logo_copy,
  background_colour,
  logo_items,
  component_padding,
}: LogoImageGridProps) {
  return (
    <BlocksWrapper
      background_colour={background_colour}
      component_padding={component_padding}
    >
      <div className="logo-grid logo-grid--grid">
        <div className="logo-grid__header o-container o-container--narrow u-text-center">
          {logo_title ? (
            <h3 className="u-spacer-bottom-md" data-aos="fade-in">
              {logo_title}
            </h3>
          ) : null}

          {logo_copy ? (
            <p
              className="u-spacer-top-md u-text-balance u-text-large"
              data-aos="fade-in"
            >
              {logo_copy}
            </p>
          ) : null}
        </div>

        {logo_items ? (
          <div className="o-container">
            <div className="logo-grid__items">
              {logo_items.map(
                (
                  { logo_item_image, logo_item_description, link_field },
                  index
                ) => {
                  return (
                    <div
                      className={cn(
                        "logo-grid__item o-box--rounded-large o-box--border",
                        link_field?.display_link
                          ? "o-box--hover u-relative"
                          : null
                      )}
                      key={index}
                    >
                      {link_field?.display_link ? (
                        <LinkFieldCover link_field={link_field} />
                      ) : null}
                      <div className="logo-grid__item-inner">
                        {logo_item_image?.url ? (
                          <picture>
                            <Image
                              alt={logo_item_image.alt || ""}
                              height={logo_item_image.height}
                              src={logo_item_image.url}
                              width={logo_item_image.width}
                            />
                          </picture>
                        ) : null}
                        {logo_item_description ? (
                          <div className="o-label o-label--small o-label--grey">
                            {logo_item_description}
                          </div>
                        ) : null}
                      </div>
                    </div>
                  );
                }
              )}
            </div>
          </div>
        ) : null}
      </div>
    </BlocksWrapper>
  );
}
