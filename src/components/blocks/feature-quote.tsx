import Image from "next/image";
import type { WpImage } from "@nextwp/core";
import BlocksWrapper from "../blocks-wrapper";

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
      <div className="mx-auto w-full max-w-7xl text-center lg:text-center">
        <div className="flex flex-col items-center w-full">
          {profile_image_logo?.url ? (
            <Image
              alt={profile_image_logo.alt || ""}
              height={profile_image_logo.height}
              src={profile_image_logo.url}
              width={profile_image_logo.width}
              className="text-center w-[100px] h-[100px] rounded-full mb-8"
            />
          ) : null}
          <div className="text-2xl lg:w-[50vw] dark:text-equ-white mb-8">
            {single_quote}
          </div>
          <div className="text-sm lg:w-[50vw] dark:text-equ-white">
            {quote_details?.full_name}
          </div>
          <div className="text-xs lg:w-[50vw] dark:text-equ-white">
            {quote_details?.company_name}
          </div>
        </div>
      </div>
    </BlocksWrapper>
  );
}
