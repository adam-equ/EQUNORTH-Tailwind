"use client";
import type { AcfFile } from "@nextwp/core";
import { cn } from "@/lib/utils";
import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import("react-player"), {
  ssr: false, // This line is important
});
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ChevronDownCircle } from "lucide-react";
//https://github.com/cookpete/react-player?tab=readme-ov-file
export interface VideoProps {
  video_title?: string;
  video_copy?: string;
  video_file?: AcfFile;
  video_url?: string;
  options?: {
    autoplay: boolean;
    muted: boolean;
    loop: boolean;
    controls: boolean;
  };
  transcript?: string;
  background_colour?: string;
  component_padding?: {
    top_padding: string;
    bottom_padding: string;
  };
}

export function Video({
  video_title,
  video_copy,
  video_file,
  video_url,
  options,
  transcript,
  background_colour,
  component_padding,
}: VideoProps) {
  const videoUrl = video_file?.url ?? video_url ?? null;
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
      <div className="mx-auto w-full h-full max-w-7xl text-center lg:text-center">
        <div className="relative">
          {video_title ? (
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-equ-white">
              {video_title}
            </h2>
          ) : null}

          {video_copy ? (
            <p className="mt-3 text-lg text-gray-500 dark:text-gray-200">
              {video_copy}
            </p>
          ) : null}
        </div>

        {videoUrl ? (
          <div className="w-full h-[calc(100vh-72px)] lg:w-[56vw] m-auto flex flex-col items-center justify-center flex-grow relative">
            <ReactPlayer
              url={videoUrl}
              playing={options?.autoplay}
              muted={options?.muted}
              loop={options?.loop}
              controls={options?.controls}
              playsinline={true}
              width="100%"
              height="100%"
              style={{
                width: "100%",
                height: "100%", // use 100vh to fill the full height of the viewport
                aspectRatio: "16/9",
                overflow: "hidden", // position: "absolute",
              }}
            />
          </div>
        ) : null}
        {transcript ? (
          <Collapsible className="py-8 relative z-2">
            <CollapsibleTrigger className="flex w-full items-center justify-center pb-8">
              View Transcript <ChevronDownCircle size={24} className="ml-2" />
            </CollapsibleTrigger>
            <CollapsibleContent>
              <ScrollArea
                className="h-[200px] w-full text-left rounded-md border p-4 overflow-scroll relative z-2 bg-equ-white"
                data-lenis-prevent
              >
                <div dangerouslySetInnerHTML={{ __html: transcript }} />
              </ScrollArea>
            </CollapsibleContent>
          </Collapsible>
        ) : // <div className="relative w-full flex justify-center">
        //   View Transcript
        // </div>
        //
        null}
      </div>
    </section>
  );
}
