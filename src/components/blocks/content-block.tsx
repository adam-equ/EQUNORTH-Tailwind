import BlocksWrapper from "../blocks-wrapper";
import Edges from "../edges";
import { cn } from "@/lib/utils";

export interface ContentBlockProps {
  contentb_copy: string;
  background_colour?: string;
  component_padding?: {
    top_padding: string;
    bottom_padding: string;
  };
}

export function ContentBlock({
  contentb_copy,
  background_colour,
  component_padding,
}: ContentBlockProps) {
  return (
    <BlocksWrapper
      background_colour={background_colour}
      component_padding={component_padding}
    >
      <div
        className="relative mx-auto w-full max-w-7xl prose"
        dangerouslySetInnerHTML={{ __html: contentb_copy }}
      />
    </BlocksWrapper>
  );
}
