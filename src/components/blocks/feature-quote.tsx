import Image from "next/image";
import type { WpImage } from "@nextwp/core";
import BlocksWrapper from "../blocks-wrapper";
import { Quote } from "lucide-react";

export interface FeatureQuoteProps {
  single_quote?: string;
  profile_image_logo?: WpImage;
  quote_details?: {
    full_name?: string;
    company_name?: string;
  };
  background_colour?: string;
  component_padding?: {
    top_padding: string;
    bottom_padding: string;
  };
}
export function FeatureQuote({
  single_quote,
  profile_image_logo,
  quote_details,
  background_colour,
  component_padding,
}: FeatureQuoteProps) {
  return (
    <BlocksWrapper
      background_colour={background_colour}
      component_padding={component_padding}
    >
      <div className="feature-quote">
        <div className="o-container o-container--narrow">
          <div className="feature-quote-content">
            {profile_image_logo?.url ? (
              <div className="feature-quote-image o-image o-image--fit o-image--circle">
                <Image
                  alt={profile_image_logo.alt || ""}
                  height={profile_image_logo.height}
                  src={profile_image_logo.url}
                  width={profile_image_logo.width}
                />
              </div>
            ) : null}
            <div className="feature-quote-quote">
              <Quote size={16} className="before-quote" />
              {single_quote}
              <Quote size={16} className="after-quote" />
            </div>
            <div className="feature-quote-name">{quote_details?.full_name}</div>
            <div className="o-label o-label--small o-label--grey">
              {quote_details?.company_name}
            </div>
          </div>
        </div>
      </div>
    </BlocksWrapper>
  );
}
