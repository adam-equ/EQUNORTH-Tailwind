import { cn } from "@/lib/utils";

export interface TwoColContentProps {
  twocol_title?: string;
  twocol_copy?: string;
  reverse?: boolean;
  background_colour?: string;
  component_padding?: {
    top_padding: string;
    bottom_padding: string;
  };
}
export function TwoColContent({
  twocol_title,
  twocol_copy,
  reverse,
  background_colour,
  component_padding,
}: TwoColContentProps) {
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
      <div className="relative mx-auto w-full max-w-7xl grid md:grid-cols-2 lg:gap-x-32 sm:gap-y-20 gap-y-10 gap-x-20">
        <div className={cn(reverse ? "order-1" : null)}>
          {twocol_title ? (
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-equ-white">
              {twocol_title}
            </h2>
          ) : null}
        </div>
        {twocol_copy ? (
          <div
            className="mt-3 text-lg text-gray-500 dark:text-gray-200"
            dangerouslySetInnerHTML={{ __html: twocol_copy }}
          ></div>
        ) : null}
      </div>
    </section>
  );
}
