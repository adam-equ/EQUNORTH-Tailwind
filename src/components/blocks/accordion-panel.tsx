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
      <div className="mx-auto w-full max-w-7xl text-center lg:text-center">
        {accordion_title ? (
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {accordion_title}
          </h2>
        ) : null}

        {accordion_copy ? (
          <p className="mt-3 text-lg text-gray-500">{accordion_copy}</p>
        ) : null}

        {accordion_items ? (
          <div className="mt-10">
            <Accordion type="single" collapsible>
              {accordion_items.map(
                ({ acc_intro, acc_copy, acc_image, reverse }, index) => {
                  return (
                    <AccordionItem key={index} value={`value-${index}`}>
                      <AccordionTrigger className="text-2xl">
                        {acc_intro}
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="flex gap-12">
                          <div
                            className={cn(
                              "text-lg text-gray-500 text-left flex-auto",
                              reverse ? "order-1" : null
                            )}
                            dangerouslySetInnerHTML={{ __html: acc_copy }}
                          />
                          {acc_image?.url ? (
                            <div className="w-64 flex-none">
                              <Image
                                alt={acc_image.alt || ""}
                                src={acc_image.url}
                                width={acc_image.width}
                                height={acc_image.height}
                                className=""
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
    </BlocksWrapper>
  );
}
