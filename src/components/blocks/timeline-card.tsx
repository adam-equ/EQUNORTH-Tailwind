import { WpImage } from "@nextwp/core";
import Image from "next/image";
export interface Timeline {
  time_image?: WpImage;
  time_title?: string;
  time_copy: string;
  time_date: string;
}
interface TimelineCardProps {
  timeline: Timeline;
}

const TimelineCard = ({ timeline }: TimelineCardProps) => {
  return (
    <div className="timeline-card">
      {timeline?.time_image?.url ? (
        <div className="timeline-card-image-container">
          <div className="timeline-card--image o-box--rounded-small o-image o-image--fit">
            <Image
              alt={timeline?.time_image?.alt || ""}
              height={timeline?.time_image?.height}
              src={timeline?.time_image?.url}
              width={timeline?.time_image.width}
            />
          </div>
        </div>
      ) : null}
      <div className="timeline-card--details">
        <div className="timeline-card--title">{timeline?.time_title}</div>
        <div className="timeline-card--copy">{timeline?.time_copy}</div>
        <div className="timeline-card--date">
          <span>{timeline?.time_date}</span>
        </div>
      </div>
    </div>
  );
};

export default TimelineCard;
