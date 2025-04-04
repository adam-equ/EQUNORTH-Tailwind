import clsx from "clsx";

export default function Edges({
  children,
  className,
  component: Component = "div",
  ...rest
}: {
  component?: React.ElementType;
  children?: React.ReactNode;
  className?: string;
  [key: string]: any;
}) {
  return (
    <Component className={clsx("mx-auto max-w-7xl", className)} {...rest}>
      {children}
    </Component>
  );
}
