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
    <div className="flex flex-col content-between p-4 h-full flex-grow">
      {timeline?.time_image?.url ? (
        <Image
          alt={timeline?.time_image?.alt || ""}
          height={timeline?.time_image?.height}
          src={timeline?.time_image?.url}
          width={timeline?.time_image.width}
          className="text-center rounded-md mb-8"
        />
      ) : null}
      <div className="timeline-details relative text-left flex flex-col h-[220px] justify-start">
        <div className="title text-lg font-semibold leading-[1.1] pb-4">
          {timeline?.time_title}
        </div>
        <div className="company text-sm font-normal text-gray-500">
          {timeline?.time_copy}
        </div>
        <div className="timeline-date mt-auto text-xs uppercase font-semibold">
          <span>{timeline?.time_date}</span>
        </div>
      </div>
    </div>
  );
};

export default TimelineCard;
