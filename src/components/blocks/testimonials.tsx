import BlocksWrapper from "../blocks-wrapper";
import { LinkFieldButton } from "../link-field-button";
import { SelectedTestimonials } from "../selectedTestimonials";
import { LinkFieldType } from "./types";

export interface TestimonialProps {
  testim_title?: string;
  testim_copy?: string;
  link_field?: LinkFieldType;
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
  link_field,
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
        {link_field?.display_link ? (
          <LinkFieldButton link_field={link_field} />
        ) : null}
      </div>
    </BlocksWrapper>
  );
}
