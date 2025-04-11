"use client";
import { cn } from "@/lib/utils";
import { useState } from "react";

export interface StatisticsProps {
  stats_title?: string;
  stats_copy?: string;
  background_colour?: string;
  statistic_items?: {
    statistic_intro: string;
    statistic_value: string;
    stat_detail: string;
  }[];
  component_padding?: {
    top_padding: string;
    bottom_padding: string;
  };
}
export function Statistics({
  stats_title,
  stats_copy,
  background_colour,
  statistic_items,
  component_padding,
}: StatisticsProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const handleStatWrapperClick = (index: number) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };
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
      <div className="mx-auto w-full max-w-7xl text-center lg:text-center">
        {stats_title ? (
          <h2 className="text-xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-equ-white">
            {stats_title}
          </h2>
        ) : null}

        {stats_copy ? (
          <p className="mt-3 text-lg text-gray-500 dark:text-equ-white">
            {stats_copy}
          </p>
        ) : null}
        {statistic_items ? (
          <div>
            {statistic_items.map(
              ({ statistic_intro, statistic_value, stat_detail }, index) => {
                return (
                  <div
                    data-aos="fade-up"
                    data-aos-once="true"
                    key={index}
                    ref={(ref) => {
                      if (ref) {
                        if (activeIndex === index) {
                          ref.classList.add("show-detail");
                        } else {
                          ref.classList.remove("show-detail");
                        }
                      }
                    }}
                    onClick={() => handleStatWrapperClick(index)}
                    className="stat-wrapper w-[60vw] mx-auto relative text-left m-4 cursor-pointer group"
                  >
                    <div
                      className="stat-intro dark:text-equ-white text-6xl absolute w-full h-full p-8 opacity-1"
                      dangerouslySetInnerHTML={{ __html: statistic_intro }}
                    />
                    <div className="stat-detail dark:text-equ-white absolute bg-equ-teal w-full h-full p-8 opacity-0">
                      <div
                        className="stat-value dark:text-equ-white text-8xl font-bold"
                        dangerouslySetInnerHTML={{ __html: statistic_value }}
                      />
                      <div
                        className="stat-details dark:text-equ-white text-6xl"
                        dangerouslySetInnerHTML={{ __html: stat_detail }}
                      />
                    </div>
                    <div className="page-curl group-hover:h-[90px] group-hover:w-[90px]"></div>
                  </div>
                );
              }
            )}
          </div>
        ) : null}
      </div>
      <style jsx>
        {`
          .stat-wrapper {
            background-color: rgba(0, 0, 0, 0.8);
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            height: clamp(19.375rem, 7.813vw + 14.375rem, 23.75rem);
          }
          .stat-intro {
            transform: rotateX(0deg);
            transition-duration: .5s;
            transition-property: transform, opacity;
            transition-timing-function: cubic-bezier(.175,.885,.32,1.275);
            opacity:1;
            left:0;
            top:0;
            width:100%
            }

          }
          .stat-detail {
            opacity:0;
            transform:rotateX(180deg);
            transition-duration: 1s;
            transition-property: transform, opacity;
            transition-timing-function: cubic-bezier(.175,.885,.32,1.275);
            left:0;
            top:0;
            width:100%;
          }
          .page-curl {
            background: linear-gradient(
              135deg,
              #26272c 20%,
              #1a1a1d 50%,
              #46c2ac 0
            );
            bottom: 0;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
            height: 0;
            position: absolute;
            right: 0;
            transition: all 0.4s ease;
            width: 0;
          }
          .show-detail .page-curl {
            display: none;
          }
          .stat-wrapper.show-detail .stat-intro {
            transform: rotateX(180deg);
            
          }
            .stat-wrapper.show-detail .stat-detail {
            opacity:1;
            transform:rotateX(0deg);
            }
        `}
      </style>
    </section>
  );
}
