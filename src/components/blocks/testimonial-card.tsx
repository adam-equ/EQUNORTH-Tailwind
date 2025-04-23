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
    <div className="flex flex-col justify-center items-center p-16">
      {testimonial?.profile_image_logo?.url ? (
        <Image
          alt={testimonial?.profile_image_logo.alt || ""}
          height={testimonial?.profile_image_logo.height}
          src={testimonial?.profile_image_logo.url}
          width={testimonial.profile_image_logo.width}
          className="text-center w-[60px] h-[60px] rounded-full mb-8 dark:bg-equ-white dark:border-2 dark:border-equ-white"
        />
      ) : null}
      <div className="quote text-lg pb-16 dark:text-equ-white">
        {testimonial?.quote}
      </div>
      <div className="profile-link relative">
        <div className="full-name text-lg font-semibold dark:text-equ-white">
          {testimonial?.full_name}
        </div>
        <div className="company text-sm font-normal dark:text-equ-white">
          {testimonial?.company_job_title}
        </div>
        {testimonial?.linkedin_url ? (
          <div className="absolute w-full h-full top-0"></div>
        ) : null}
      </div>
    </div>
  );
};

export default TestimonialCard;
