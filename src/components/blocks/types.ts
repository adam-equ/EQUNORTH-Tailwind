import type { HeroProps } from "./hero";
import type { TextareaProps } from "./textarea";
import { WpLink } from "@nextwp/core";

export interface LinkFieldType {
  display_link: boolean;
  link_type: boolean;
  link?: WpLink;
}

export type BlockData = HeroProps | TextareaProps | LinkFieldType;
