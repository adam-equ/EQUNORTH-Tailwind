import Image from "next/image";
import type { WpImage } from "@nextwp/core";
import { cn } from "@/lib/utils";
import BlocksWrapper from "../blocks-wrapper";
import { LinkFieldType } from "./types";
import { LinkFieldButton } from "../link-field-button";
export interface MediaPanelProps {
  mediap_title?: string;
  mediap_copy?: string;
  link_field?: LinkFieldType;
  mediap_image?: WpImage;
  reverse?: boolean;
  background_colour?: string;
  component_padding?: {
    top_padding: string;
    bottom_padding: string;
  };
}

export function MediaPanel({
  mediap_title,
  mediap_copy,
  link_field,
  mediap_image,
  reverse,
  background_colour,
  component_padding,
}: MediaPanelProps) {
  return (
    <BlocksWrapper
      background_colour={background_colour}
      component_padding={component_padding}
    >
      <div className="o-container">
        <div
          className={cn("media-panel", reverse ? "media-panel--reverse" : null)}
        >
          <div className="media-panel__container o-box--rounded-large o-box--border">
            <div className="media-panel__content-container">
              <div className="media-panel__content">
                {mediap_title ? (
                  <h3 className="media-panel__title">{mediap_title}</h3>
                ) : null}

                {mediap_copy ? (
                  <div
                    className="media-panel__text o-rich-text"
                    dangerouslySetInnerHTML={{ __html: mediap_copy }}
                  />
                ) : null}
                {link_field?.display_link ? (
                  <div className="media-panel__link">
                    <LinkFieldButton
                      link_field={link_field}
                      className="arrow-link"
                    />
                  </div>
                ) : null}
              </div>
            </div>
            <div className="media-panel__image-container">
              <div className="media-panel__image o-box-rounded">
                {mediap_image?.url ? (
                  <div className="o-image o-image--fit u-overlay">
                    <Image
                      alt={mediap_image.alt || ""}
                      src={mediap_image.url}
                      width={mediap_image.width}
                      height={mediap_image.height}
                    />
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </BlocksWrapper>
  );
}

// export async function getStaticProps() {
//   return {
//     props: {
//       mediap_title: "Media panel title",
//       mediap_copy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
