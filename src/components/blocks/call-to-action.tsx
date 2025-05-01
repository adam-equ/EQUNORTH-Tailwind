import Image from "next/image";
import type { WpImage } from "@nextwp/core";
import BlocksWrapper from "../blocks-wrapper";
import { LinkFieldType } from "./types";
import { LinkFieldButton } from "../link-field-button";

export interface CtaProps {
  cta_title?: string;
  cta_copy?: string;
  background_image?: WpImage;
  background_colour?: string;
  component_padding?: {
    top_padding: string;
    bottom_padding: string;
  };
  link_field?: LinkFieldType;
  secondary_link_field?: LinkFieldType;
}

export function CallToAction({
  cta_title,
  cta_copy,
  link_field,
  secondary_link_field,
  background_image,
  background_colour,
  component_padding,
}: CtaProps) {
  return (
    <BlocksWrapper
      background_colour={background_colour}
      component_padding={component_padding}
    >
      <div className="cta">
        {background_image?.url ? (
          <div className="cta--bg o-image o-image--fit">
            <Image
              alt={background_image.alt || ""}
              src={background_image.url}
              width={background_image.width}
              height={background_image.height}
              className=""
            />
          </div>
        ) : null}
        <div className="cta__content">
          {cta_title ? <h3 className="cta__title">{cta_title}</h3> : null}

          {cta_copy ? <div className="cta__text">{cta_copy}</div> : null}

          {link_field || secondary_link_field ? (
            <div className="cta__buttons u-spacer-top-md">
              {link_field?.display_link ? (
                <LinkFieldButton link_field={link_field} className="btn" />
              ) : null}
              {secondary_link_field?.display_link ? (
                <LinkFieldButton
                  link_field={secondary_link_field}
                  className="btn btn--outline-light"
                />
              ) : null}
            </div>
          ) : null}
        </div>
      </div>
    </BlocksWrapper>
  );
}
