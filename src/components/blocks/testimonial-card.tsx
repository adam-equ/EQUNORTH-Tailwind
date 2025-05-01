import { WpImage, WpLink } from "@nextwp/core";
import Image from "next/image";
interface Testimonial {
  full_name: string;
  company_job_title?: string;
  quote: string;
  profile_image_logo?: WpImage;
  linkedin_url?: WpLink;
}
interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard = ({ testimonial }: TestimonialCardProps) => {
  return (
    <div className="testimonials--card">
      <div className="testimonials--card--inner o-box--rounded-large o-box--border">
        <div className="testimonials--card--content">
          {testimonial?.profile_image_logo?.url ? (
            <picture>
              <Image
                alt={testimonial?.profile_image_logo.alt || ""}
                height={testimonial?.profile_image_logo.height}
                src={testimonial?.profile_image_logo.url}
                width={testimonial.profile_image_logo.width}
              />
            </picture>
          ) : null}
          <div className="testimonials--card--content-quote">
            {testimonial?.quote}
          </div>
          <div className="testimonials--card--profile relative">
            <div className="full-name">{testimonial?.full_name}</div>
            <div className="company">{testimonial?.company_job_title}</div>
            {testimonial?.linkedin_url ? (
              <a
                href={testimonial.linkedin_url.url}
                target="_blank"
                className="u-overlay"
              ></a>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
