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
      <div className="testimonials">
        <div className="testimonials__header o-container o-container--narrow u-text-center">
          {gt?.testim_title ? (
            <h3 className="u-spacer-bottom-md" data-aos="fade-in">
              {gt?.testim_title}
            </h3>
          ) : null}
          {gt?.testim_copy ? (
            <p
              className="u-spacer-top-md u-text-balance u-text-large"
              data-aos="fade-in"
            >
              {gt?.testim_copy}
            </p>
          ) : null}
        </div>
        {gt?.select_testimonials ? (
          <div className="o-container">
            <SelectedTestimonials
              select_testimonials={gt?.select_testimonials}
            />
          </div>
        ) : null}
        {gt?.link_field?.display_link ? (
          <div className="o-container u-text-center">
            <LinkFieldButton
              link_field={gt?.link_field}
              className="arrow-link"
            />
          </div>
        ) : null}
      </div>
    </BlocksWrapper>
  );
}
