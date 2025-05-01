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
      <div className="testimonials">
        <div className="testimonials__header o-container o-container--narrow u-text-center">
          {testim_title ? (
            <h3 className="u-spacer-bottom-md" data-aos="fade-in">
              {testim_title}
            </h3>
          ) : null}
          {testim_copy ? (
            <p
              className="u-spacer-top-md u-text-balance u-text-large"
              data-aos="fade-in"
            >
              {testim_copy}
            </p>
          ) : null}
        </div>
        {select_testimonials ? (
          <div className="o-container">
            <SelectedTestimonials select_testimonials={select_testimonials} />
          </div>
        ) : null}
        {link_field?.display_link ? (
          <div className="o-container u-text-center">
            <LinkFieldButton link_field={link_field} className="arrow-link" />
          </div>
        ) : null}
      </div>
    </BlocksWrapper>
  );
}
