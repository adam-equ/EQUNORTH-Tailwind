import BlocksWrapper from "../blocks-wrapper";
import { LinkFieldButton } from "../link-field-button";
import { getOptionsPage } from "@nextwp/core";
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
export async function GlobalTestimonials() {
  const globals: { global_testimonials?: TestimonialProps } =
    await getOptionsPage({ slug: "site-globals" });
  const gt = globals?.global_testimonials;
  return (
    <BlocksWrapper
      background_colour={gt?.background_colour}
      component_padding={gt?.component_padding}
    >
      <div className="relative mx-auto w-full max-w-7xl text-center lg:text-center z-1">
        {gt?.testim_title ? (
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-equ-white">
            {gt?.testim_title}
          </h2>
        ) : null}

        {gt?.testim_copy ? (
          <p className="mt-3 text-lg text-gray-500 dark:text-gray-100">
            {gt?.testim_copy}
          </p>
        ) : null}
        {gt?.select_testimonials ? (
          <SelectedTestimonials select_testimonials={gt?.select_testimonials} />
        ) : null}
        {gt?.link_field?.display_link ? (
          <LinkFieldButton link_field={gt?.link_field} />
        ) : null}
      </div>
    </BlocksWrapper>
  );
}
