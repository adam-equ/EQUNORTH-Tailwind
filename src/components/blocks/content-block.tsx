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
      <Edges
        className="prose"
        dangerouslySetInnerHTML={{ __html: contentb_copy }}
      />
    </section>
  );
}
