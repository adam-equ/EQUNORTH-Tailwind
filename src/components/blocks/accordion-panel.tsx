import Image from "next/image";
import type { AcfImage } from "@nextwp/core";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import BlocksWrapper from "../blocks-wrapper";

export interface AccordionProps {
  accordion_title?: string;
  accordion_copy?: string;
  background_colour?: string;
  component_padding?: {
    top_padding: string;
    bottom_padding: string;
  };
  accordion_items?: {
    acc_intro: string;
    acc_copy: string;
    acc_image?: AcfImage;
    reverse?: boolean;
  }[];
}

export function AccordionPanel({
  accordion_title,
  accordion_copy,
  background_colour,
  accordion_items,
  component_padding,
}: AccordionProps) {
  return (
    <BlocksWrapper
      background_colour={background_colour}
      component_padding={component_padding}
    >
      <div className="accordion">
        <div className="o-container o-container--narrow u-text-center u-spacer-bottom-md">
          {accordion_title ? (
            <h3 className="u-space-bottom-md" data-aos="fade-in">
              {accordion_title}
            </h3>
          ) : null}

          {accordion_copy ? (
            <p className="u-spacer-top-md u-text-balance" data-aos="fade-in">
              {accordion_copy}
            </p>
          ) : null}
        </div>
        <div className="o-container" data-aos="fade-in">
          {accordion_items ? (
            <div className="ac">
              <Accordion type="single" collapsible>
                {accordion_items.map(
                  ({ acc_intro, acc_copy, acc_image, reverse }, index) => {
                    return (
                      <AccordionItem key={index} value={`value-${index}`}>
                        <AccordionTrigger className="ac-trigger u-flex u-flex-center u-flex-space-between">
                          <span className="ac-trigger__title h5 u-no-margin">
                            {acc_intro}
                          </span>
                          <div className="ac-trigger__expand o-label o-label--bold">
                            <span className="u-hidden">Expand</span>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="ac-panel">
                            <div
                              className={cn(
                                "ac-text",
                                reverse ? "ac-text--reverse" : null
                              )}
                              dangerouslySetInnerHTML={{ __html: acc_copy }}
                            />
                            {acc_image?.url ? (
                              <div className="ac-image o-image o-image--fit">
                                <Image
                                  alt={acc_image.alt || ""}
                                  src={acc_image.url}
                                  width={acc_image.width}
                                  height={acc_image.height}
                                />
                              </div>
                            ) : null}
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    );
                  }
                )}
              </Accordion>
            </div>
          ) : null}
        </div>
      </div>
    </BlocksWrapper>
  );
}
