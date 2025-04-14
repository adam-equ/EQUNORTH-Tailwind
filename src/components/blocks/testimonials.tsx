"use client";
import type { WpImage, WpLink } from "@nextwp/core";
import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import getTestimonials from "server-actions/getTestimonials";
import TestimonialCard from "./testimonial-card";
import BlocksWrapper from "../blocks-wrapper";

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
export interface Testimonial {
  acf: {
    full_name: string;
    company_job_title?: string;
    quote: string;
    profile_image_logo?: WpImage;
    linkedin_url?: WpLink;
  };
}
export function Testimonials({
  testim_title,
  testim_copy,
  testim_link,
  background_colour,
  select_testimonials,
  component_padding,
}: TestimonialProps) {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  useEffect(() => {
    if (select_testimonials) {
      const postIds = select_testimonials.map((item) => item);
      getTestimonials({ include: postIds })
        .then((data) => {
          setTestimonials(data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [select_testimonials]);
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
          <Carousel>
            <CarouselContent className="-ml-4">
              {testimonials.map((post, index) => {
                return (
                  <CarouselItem key={index} className="basis-1/2 pl-4">
                    <TestimonialCard testimonial={post.acf} />
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        ) : null}
      </div>
    </BlocksWrapper>
  );
}
