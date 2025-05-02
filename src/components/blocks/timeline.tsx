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
      <div className="timeline">
        <div className="timeline__header o-container o-container--narrow u-text-center">
          {timeline_title ? (
            <h3 className="u-spacer-bottom-md" data-aos="fade-in">
              {timeline_title}
            </h3>
          ) : null}

          {timeline_copy ? (
            <p
              className="u-spacer-top-md u-text-balance u-text-large"
              data-aos="fade-in"
            >
              {timeline_copy}
            </p>
          ) : null}
        </div>
        <div className="o-container">
          {timeline_items ? (
            <TimelineSlider timeline_items={timeline_items} />
          ) : null}
        </div>
      </div>
    </BlocksWrapper>
  );
}
