"use client";
import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import("react-player"), {
  ssr: false, // This line is important
});
//https://github.com/cookpete/react-player?tab=readme-ov-file

export interface VideoPlayerProps {
  videoUrl: string;
  options?: {
    autoplay: boolean;
    muted: boolean;
    loop: boolean;
    controls: boolean;
  };
}
export function VideoPlayer({ videoUrl, options }: VideoPlayerProps) {
  return (
    <ReactPlayer
      url={videoUrl}
      playing={options?.autoplay}
      muted={options?.muted}
      loop={options?.loop}
      controls={options?.controls}
      playsinline={true}
      width="100%"
      height="100%"
      className="react-player"
      style={{
        // width: "100%",
        // height: "100%", // use 100vh to fill the full height of the viewport
        // aspectRatio: "16/9",
        // overflow: "hidden",
        position: "absolute",
        top: 0,
        left: 0,
        objectFit: "cover",
      }}
      // config={{
      //   file: {
      //     attributes: {
      //       style: {
      //         objectFit: "cover",
      //       },
      //     },
      //   },
      // }}
    />
  );
}
