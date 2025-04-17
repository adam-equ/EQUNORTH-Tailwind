import type { WpLink } from "@nextwp/core";
import BlocksWrapper from "../blocks-wrapper";
import { SelectedTestimonials } from "../selectedTestimonials";

export interface TestimonialProps {
  testim_title?: string;
  testim_copy?: string;
  testim_link?: WpLink;
  background_colour?: string;
  component_padding?: {
    top_padding: string;
    bottom_padding: string;
  };
  select_testimonials?: [];
}
export function Testimonials({
  testim_title,
  testim_copy,
  testim_link,
  background_colour,
  select_testimonials,
  component_padding,
}: TestimonialProps) {
  return (
    <BlocksWrapper
      background_colour={background_colour}
      component_padding={component_padding}
    >
      <div className="relative mx-auto w-full max-w-7xl text-center lg:text-center z-1">
        {testim_title ? (
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-equ-white">
            {testim_title}
          </h2>
        ) : null}

        {testim_copy ? (
          <p className="mt-3 text-lg text-gray-500 dark:text-gray-100">
            {testim_copy}
          </p>
        ) : null}
        {select_testimonials ? (
          <SelectedTestimonials select_testimonials={select_testimonials} />
        ) : null}
      </div>
    </BlocksWrapper>
  );
}
