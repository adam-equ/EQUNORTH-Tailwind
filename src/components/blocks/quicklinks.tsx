import Image from "next/image";
import Link from "next/link";
import type { AcfFile, WpImage, WpLink } from "@nextwp/core";
import { FileIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import BlocksWrapper from "../blocks-wrapper";
import { LinkFieldType } from "./types";
import { LinkFieldCover } from "../link-field-cover";

export interface QuicklinksProps {
  quickl_title?: string;
  quickl_copy?: string;
  background_colour?: string;
  quickl_items?: {
    link_field?: LinkFieldType;
    quickl_link_image?: WpImage;
    quickl_link_copy?: string;
    quickl_link_title?: string;
  }[];
  component_padding?: {
    top_padding: string;
    bottom_padding: string;
  };
}
export function Quicklinks({
  quickl_title,
  quickl_copy,
  background_colour,
  quickl_items,
  component_padding,
}: QuicklinksProps) {
  return (
    <BlocksWrapper
      background_colour={background_colour}
      component_padding={component_padding}
    >
      <div className="mx-auto w-full max-w-7xl text-center lg:text-center">
        {quickl_title ? (
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {quickl_title}
          </h2>
        ) : null}

        {quickl_copy ? (
          <p className="mt-3 text-lg text-gray-500">{quickl_copy}</p>
        ) : null}
        {quickl_items ? (
          <div className="grid grid-flow-col gap-2">
            {quickl_items.map(
              (
                {
                  link_field,
                  quickl_link_title,
                  quickl_link_copy,
                  quickl_link_image,
                },
                index
              ) => {
                return (
                  <div
                    className="text-left p-8 bg-equ-concrete rounded-md relative hover:bg-equ-lavender transition duration-300 ease-in-out"
                    key={index}
                  >
                    {quickl_link_image?.url ? (
                      <Image
                        alt={quickl_link_image.alt || ""}
                        height={quickl_link_image.height}
                        src={quickl_link_image.url}
                        width={quickl_link_image.width}
                      />
                    ) : null}
                    {quickl_link_title ? (
                      <h4 className="font-bold text-2xl">
                        {quickl_link_title}
                      </h4>
                    ) : null}
                    {quickl_link_copy ? (
                      <p className="text-gray-500 text-sm">
                        {quickl_link_copy}
                      </p>
                    ) : null}
                    {link_field?.display_link ? (
                      <LinkFieldCover link_field={link_field} />
                    ) : null}
                  </div>
                );
              }
            )}
          </div>
        ) : null}
      </div>
    </BlocksWrapper>
  );
}
