import { cn } from "@/lib/utils";

export default function BlocksWrapper({
  children,
  className,
  background_colour,
  component_padding,
  component: Component = "section",
  ...rest
}: {
  component?: React.ElementType;
  children?: React.ReactNode;
  className?: string;
  background_colour?: string;
  component_padding?: {
    top_padding: string;
    bottom_padding: string;
  };
  [key: string]: any;
}) {
  return (
    <Component
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
      {...rest}
    >
      {children}
    </Component>
  );
}
