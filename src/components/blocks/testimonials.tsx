"use client";
import Image from "next/image";
import type { WpImage, WpLink } from "@nextwp/core";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import getTestimonials from "@/app/api/testimonials/route";

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
  const [posts, setPosts] = useState<Testimonial[]>([]);
  useEffect(() => {
    if (select_testimonials) {
      const postIds = select_testimonials.map((item) => item);
      getTestimonials({ include: postIds })
        .then((data) => {
          setPosts(data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [select_testimonials]);
  return (
    <section
      className={cn(
        "relative",
        background_colour ? `bg-equ-${background_colour}` : "bg-equ-white",
        background_colour === "teal" ||
          background_colour === "black" ||
          background_colour === "grey"
          ? "dark"
          : "",
        component_padding
          ? `${component_padding.top_padding} ${component_padding.bottom_padding}`
          : "pb-16 pt-16"
      )}
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
          <div className="">
            {posts.map((post, index) => (
              <div key={index}>
                {post.acf?.full_name}
                {post.acf?.company_job_title}
                {post.acf?.quote}
                {post.acf?.profile_image_logo?.url ? (
                  <Image
                    alt={post.acf?.profile_image_logo.alt || ""}
                    height={post.acf?.profile_image_logo.height}
                    src={post.acf?.profile_image_logo.url}
                    width={post.acf.profile_image_logo.width}
                    className="text-center max-w-[200px]"
                  />
                ) : null}
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}
