import Image from "next/image";
import Link from "next/link";
import type { WpImage, WpLink } from "@nextwp/core";
import { cn } from "@/lib/utils";

// import Button from "../ui/button";

export interface TwoColContentProps {
  twocol_title?: string;
  twocol_copy?: string;
  reverse?: boolean;
  background_colour?: string;
}
export function TwoColContent({
  twocol_title,
  twocol_copy,
  reverse,
  background_colour = "equ-white",
}: TwoColContentProps) {
  return (
    <section className={`relative bg-${background_colour}`}>
      <div
        className={cn(
          `edges sm:py-24 md:py-32 grid md:grid-cols-2 lg:gap-x-32 sm:gap-y-20 gap-y-10 gap-x-20 py-16`
        )}
      >
        <div className={cn(reverse ? "order-1" : null)}>
          {twocol_title ? (
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {twocol_title}
            </h2>
          ) : null}
        </div>
        {twocol_copy ? (
          <div
            className="mt-3 text-lg text-gray-500"
            dangerouslySetInnerHTML={{ __html: twocol_copy }}
          ></div>
        ) : null}
      </div>
    </section>
  );
}
