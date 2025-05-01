import Image from "next/image";
import type { WpImage } from "@nextwp/core";
import BlocksWrapper from "../blocks-wrapper";
export interface InfopointsProps {
  infop_title?: string;
  infop_copy?: string;
  background_colour?: string;
  infop_bg?: WpImage;
  component_padding?: {
    top_padding: string;
    bottom_padding: string;
  };
  infop_items?: {
    infopoint_title: string;
    infopoint_image?: WpImage;
    infopoint_copy?: string;
  }[];
}
export function Infopoints({
  infop_title,
  infop_copy,
  background_colour,
  infop_bg,
  infop_items,
  component_padding,
}: InfopointsProps) {
  return (
    <BlocksWrapper
      background_colour={background_colour}
      component_padding={component_padding}
    >
      {infop_bg?.url ? (
        <div className="infopoints-bg o-image--fit">
          <Image
            alt={infop_bg.alt || ""}
            src={infop_bg.url}
            width={infop_bg.width}
            height={infop_bg.height}
          />
        </div>
      ) : null}
      <div className="o-container o-container--narrow u-text-center u-spacer-bottom-md">
        {infop_title ? (
          <h3 className="u-space-bottom-md" data-aos="fade-in">
            {infop_title}
          </h3>
        ) : null}

        {infop_copy ? (
          <p className="u-spacer-top-md u-text-balance" data-aos="fade-in">
            {infop_copy}
          </p>
        ) : null}
      </div>
      <div className="o-container">
        {infop_items ? (
          <div className="infopoints__items">
            {infop_items.map(
              ({ infopoint_title, infopoint_copy, infopoint_image }, index) => {
                return (
                  <div
                    className="infopoints__item"
                    key={index}
                    data-aos="fade-in"
                    data-aos-delay={index * 100}
                  >
                    <div className="infopoint">
                      {infopoint_image?.url ? (
                        <Image
                          alt={infopoint_image.alt || ""}
                          height={infopoint_image.height}
                          src={infopoint_image.url}
                          width={infopoint_image.width}
                          className="text-center"
                        />
                      ) : null}
                      {infopoint_title ? (
                        <div className="infopoint__title h5 u-no-margin">
                          {infopoint_title}
                        </div>
                      ) : null}
                      {infopoint_copy ? (
                        <p className="u-text-balance u-no-margin">
                          {infopoint_copy}
                        </p>
                      ) : null}
                    </div>
                  </div>
                );
              }
            )}
          </div>
        ) : null}
      </div>
    </BlocksWrapper>
  );
}
