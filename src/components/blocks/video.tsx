import type { AcfFile } from "@nextwp/core";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ChevronDownCircle } from "lucide-react";
import { VideoPlayer } from "../video-player";
import BlocksWrapper from "../blocks-wrapper";
import { cn } from "@/lib/utils";
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
    full_width: boolean;
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
    <BlocksWrapper
      background_colour={background_colour}
      component_padding={component_padding}
    >
      <div className="video-inline">
        {video_title || video_copy ? (
          <div className="video-inline__header o-container o-container--narrow u-text-center">
            {video_title ? (
              <h3 className="u-spacer-bottom-md" data-aos="fade-in">
                {video_title}
              </h3>
            ) : null}

            {video_copy ? (
              <p
                className="u-spacer-top-md u-text-balance u-text-large"
                data-aos="fade-in"
              >
                {video_copy}
              </p>
            ) : null}
          </div>
        ) : null}

        {videoUrl ? (
          <div
            className={cn(
              "video-inline-content",
              options?.full_width ? "" : "o-container"
            )}
          >
            <div
              className={cn(
                "video-inline-wrapper",
                options?.full_width ? "video-full" : ""
              )}
            >
              <VideoPlayer videoUrl={videoUrl} options={options} />
            </div>
          </div>
        ) : null}
        {transcript ? (
          <Collapsible className="video-inline-transcript">
            <CollapsibleTrigger className="video-inline-transcript--trigger">
              View Transcript <ChevronDownCircle size={24} />
            </CollapsibleTrigger>
            <CollapsibleContent className="video-inline-transcript--content">
              <ScrollArea
                className="video-inline-transcript--scrollarea o-box o-box--rounded o-box--border"
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
    </BlocksWrapper>
  );
}
