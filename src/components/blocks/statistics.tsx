"use client";
import { useState } from "react";
import BlocksWrapper from "../blocks-wrapper";

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
    <BlocksWrapper
      background_colour={background_colour}
      component_padding={component_padding}
    >
      <div className="statistics">
        <div className="o-container o-container--narrow u-text-center u-spacer-bottom-md">
          {stats_title ? <h3>{stats_title}</h3> : null}

          {stats_copy ? <p>{stats_copy}</p> : null}
        </div>
        {statistic_items ? (
          <div className="o-container">
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
                    className="stat-wrapper"
                  >
                    <div
                      className="stat-intro"
                      dangerouslySetInnerHTML={{ __html: statistic_intro }}
                    />
                    <div className="stat-detail">
                      <div
                        className="stat-detail--value"
                        dangerouslySetInnerHTML={{ __html: statistic_value }}
                      />
                      <div
                        className="stat-detail--details"
                        dangerouslySetInnerHTML={{ __html: stat_detail }}
                      />
                    </div>
                    <div className="page-curl"></div>
                  </div>
                );
              }
            )}
          </div>
        ) : null}
      </div>
      {/* <style jsx>
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
          // .show-detail .page-curl {
          //   display: none;
          // }
          // .stat-wrapper.show-detail .stat-intro {
          //   transform: rotateX(180deg);
            
          // }
            // .stat-wrapper.show-detail .stat-detail {
            // opacity:1;
            // transform:rotateX(0deg);
            // }
        `}
      </style> */}
    </BlocksWrapper>
  );
}
