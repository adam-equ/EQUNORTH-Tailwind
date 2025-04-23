import BlocksWrapper from "../blocks-wrapper";
import TimelineSlider from "../timelineSlider";

export interface TimelineProps {
  timeline_title?: string;
  timeline_copy?: string;
  background_colour?: string;
  component_padding?: {
    top_padding: string;
    bottom_padding: string;
  };
  timeline_items?: [];
}
export function Timeline({
  timeline_title,
  timeline_copy,
  background_colour,
  timeline_items,
  component_padding,
}: TimelineProps) {
  return (
    <BlocksWrapper
      background_colour={background_colour}
      component_padding={component_padding}
    >
      <div className="relative mx-auto w-full max-w-7xl text-center lg:text-center z-1">
        {timeline_title ? (
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-equ-white">
            {timeline_title}
          </h2>
        ) : null}

        {timeline_copy ? (
          <p className="mt-3 text-lg text-gray-500 dark:text-gray-100">
            {timeline_copy}
          </p>
        ) : null}
        {timeline_items ? (
          <TimelineSlider timeline_items={timeline_items} />
        ) : null}
      </div>
    </BlocksWrapper>
  );
}
