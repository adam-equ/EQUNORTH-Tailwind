"use client";
import { WpImage, WpLink } from "@nextwp/core";
import { useEffect, useState } from "react";
import getSelectedTestimonials from "server-actions/getSelectedTestimonials";
import TestimonialSlider from "./testimonialSlider";

export interface Testimonial {
  acf: {
    full_name: string;
    company_job_title?: string;
    quote: string;
    profile_image_logo?: WpImage;
    linkedin_url?: WpLink;
  };
}
interface SelectedTestimonialProps {
  select_testimonials: [];
}
export function SelectedTestimonials({
  select_testimonials,
}: SelectedTestimonialProps) {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (select_testimonials) {
      const postIds = select_testimonials.map((item) => item);
      getSelectedTestimonials({ include: postIds })
        .then((data) => {
          setTestimonials(data);
          setLoading(false);
        })
        .catch((error) => {
          console.error(error);
          setLoading(false);
        });
    }
  }, [select_testimonials]);
  if (loading) {
    return <div>Loading...</div>;
  }
  return <TestimonialSlider testimonials={testimonials} />;
}
