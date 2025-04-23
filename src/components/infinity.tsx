"use client";
import { useEffect, useState } from "react";

const cycleIndex = (setHoveredPathIndex: (index: number) => void) => {
  let index = 0;
  const intervalId = setInterval(() => {
    setHoveredPathIndex(index);
    index = (index + 1) % 5; // cycle back to 0 after 4
  }, 5000); // 5 seconds

  return () => {
    clearInterval(intervalId);
  };
};
export function Infinity() {
  const [hoveredPathIndex, setHoveredPathIndex] = useState<number>(0);

  useEffect(() => {
    return cycleIndex(setHoveredPathIndex);
  }, [setHoveredPathIndex]);

  const handleMouseOver = (
    event: React.MouseEvent<HTMLElement | SVGPathElement, MouseEvent>,
    index: number
  ) => {
    setHoveredPathIndex(index);
  };

  //   const handleMouseOut = () => {
  //     setHoveredPathIndex(3);
  //   };
  return (
    <div className="w-full h-full relative">
      <div className="infinity-container relative text-left w-[481px] pr-[28px]">
        <svg
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 509 247"
          className="w-[481px] h-[247px] "
        >
          <path
            onMouseOver={(event) => handleMouseOver(event, 0)}
            className={hoveredPathIndex === 0 ? "path-highlight" : ""}
            d="M131.6 20.5c-56.94 0-103.1 46.07-103.1 102.901 0 20.631 7.187 40.128 18.259 56.387 6.74 9.899 20.662 9.895 29.216 1.512 8.595-8.422 8.413-22.239 3.295-33.13-3.65-7.768-5.898-16.352-5.898-24.769 0-32.096 26.07-58.115 58.227-58.115 8.217 0 16.112 1.656 23.274 4.678 11.344 4.788 25.474 5.317 34.189-3.381 8.686-8.67 8.801-22.987-1.511-29.642C171.433 26.539 152.215 20.5 131.6 20.5Z"
            fill="#E5E8FA"
            data-index={0}
          />

          <path
            onMouseOver={(event) => handleMouseOver(event, 1)}
            className={hoveredPathIndex === 1 ? "path-highlight" : ""}
            d="M314.7 148.031c9.631 8.298 10.232 22.993 1.311 32.05-8.155 8.28-21.353 8.804-30.139 1.197l-91.635-79.341c-9.586-8.3-10.105-22.975-1.13-31.932 8.105-8.09 21.089-8.566 29.764-1.092l91.829 79.118Z"
            fill="#E5E8FA"
            data-index={1}
          />
          <path
            onMouseOver={(event) => handleMouseOver(event, 2)}
            className={hoveredPathIndex === 2 ? "path-highlight" : ""}
            d="M377.683 227.444c56.941 0 103.1-46.07 103.1-102.901 0-20.631-7.187-40.128-18.258-56.387-6.741-9.9-20.662-9.895-29.216-1.512-8.595 8.422-8.414 22.239-3.295 33.13 3.65 7.768 5.898 16.352 5.898 24.769 0 32.096-26.07 58.115-58.228 58.115-8.217 0-16.111-1.656-23.273-4.679-11.345-4.787-25.474-5.316-34.189 3.382-8.687 8.671-8.802 22.987 1.51 29.642 16.119 10.402 35.336 16.441 55.951 16.441Z"
            fill="#E5E8FA"
            data-index={2}
          />
          <path
            onMouseOver={(event) => handleMouseOver(event, 3)}
            className={hoveredPathIndex === 3 ? "path-highlight" : ""}
            d="M355.58 68.484c-10.684 3.733-18.477 9.064-28.093 18.128-4.715 4.445-13.447 12.868-21.122 20.297-8.39 8.123-21.591 8.524-30.441.904-9.942-8.56-10.502-23.768-1.217-33.036l26.43-26.378c15.838-13.584 28.694-19.843 43.225-23.634 7.802-2.317 14.121-3.398 23.453-3.997 1.446-.096 3.096-.182 5.072-.268h7.479c20.789 2.184 32.935 5.856 45.912 13.793 10.955 6.7 11.557 22.068 2.443 31.113-7.619 7.561-19.683 7.984-29.862 4.577-16.958-5.676-35.335-4.274-43.279-1.499Z"
            fill="#E5E8FA"
            data-index={3}
          />
          <path
            onMouseOver={(event) => handleMouseOver(event, 4)}
            className={hoveredPathIndex === 4 ? "path-highlight" : ""}
            d="M153.779 182.291c10.684-3.732 18.478-9.064 28.093-18.128 4.716-4.445 13.448-12.868 21.122-20.297 8.391-8.123 21.592-8.524 30.442-.904 9.942 8.56 10.502 23.768 1.216 33.036l-26.429 26.378c-15.838 13.585-28.694 19.843-43.225 23.634-7.802 2.317-14.122 3.398-23.453 3.997a219.85 219.85 0 0 1-5.073.268h-7.478c-20.789-2.184-32.935-5.856-45.913-13.793-10.954-6.699-11.557-22.068-2.442-31.113 7.619-7.561 19.683-7.984 29.862-4.577 16.957 5.676 35.334 4.274 43.278 1.499Z"
            fill="#E5E8FA"
            data-index={4}
          />
        </svg>

        {/* Icons */}
        <div
          className={`icon absolute z-10 ${
            hoveredPathIndex === 2 ? "flex" : ""
          }`}
          data-index={2}
          onMouseOver={(event) => handleMouseOver(event, 2)}
        >
          <svg
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 25 25"
          >
            <path
              d="M20.2 9.64a.27.27 0 0 0-.23 0 .26.26 0 0 0-.11.21V12a.5.5 0 0 1-.5.5.51.51 0 0 1-.5-.5V9.5a1.61 1.61 0 0 0-1.5-1h-.25a.25.25 0 0 0-.25.25V11a.5.5 0 0 1-.5.5.51.51 0 0 1-.5-.5V8.5a1.61 1.61 0 0 0-1.5-1h-.25a.25.25 0 0 0-.25.25V11a.5.5 0 0 1-.5.5.51.51 0 0 1-.5-.5V3.5a2 2 0 1 0-4 0v11.08a.25.25 0 0 1-.17.23.23.23 0 0 1-.28-.09l-1.67-2.35a2 2 0 0 0-3.24 2.31l6 8.4a1 1 0 0 0 .81.42h8.72a1 1 0 0 0 1-.73l1.47-5.27c.258-.939.389-1.907.39-2.88V12a2.5 2.5 0 0 0-1.69-2.36Z"
              fill="#A8B4F0"
            />
          </svg>
          <span>Decision</span>
        </div>
        <div
          className={`icon absolute z-10 ${
            hoveredPathIndex === 3 ? "flex" : ""
          }`}
          data-index={3}
          onMouseOver={(event) => handleMouseOver(event, 3)}
        >
          <svg
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 25 25"
          >
            <path
              d="m24.03 13.03-11 11a.75.75 0 0 1-1.06 0l-11-11a.75.75 0 0 1 0-1.06l11-11a.75.75 0 0 1 1.06 0l11 11a.75.75 0 0 1 0 1.06Zm-16.22.23a4.75 4.75 0 0 0 2.69 3.52.19.19 0 0 1 .12.24v.06a.75.75 0 0 0 .3.78.72.72 0 0 0 .83 0l1.2-.74a.76.76 0 0 0 .24-1l-.75-1.2a.75.75 0 0 0-.64-.35h-.12a.76.76 0 0 0-.61.57.18.18 0 0 1-.11.13.18.18 0 0 1-.16 0 3.27 3.27 0 0 1-1.46-2.22.75.75 0 0 0-.74-.63h-.17a.74.74 0 0 0-.62.84Zm6.39-5.2a4.92 4.92 0 0 0-1.7-.31 4.62 4.62 0 0 0-2.68.85.23.23 0 0 1-.28 0 .76.76 0 0 0-.51-.2.81.81 0 0 0-.31.06.76.76 0 0 0-.44.71v1.42a.76.76 0 0 0 .77.72l1.45-.11a.73.73 0 0 0 .67-.49.75.75 0 0 0-.19-.81.15.15 0 0 1-.05-.14.18.18 0 0 1 .09-.13 3.29 3.29 0 0 1 2.66-.17.75.75 0 1 0 .54-1.4h-.02Zm3.37 2.44-1.25-.66a.74.74 0 0 0-.36-.09h-.21a.78.78 0 0 0-.45.37l-.66 1.25a.76.76 0 0 0 .08.83.78.78 0 0 0 .78.3.16.16 0 0 1 .15 0 .178.178 0 0 1 .07.15 3.181 3.181 0 0 1-1.11 2.32.748.748 0 0 0-.08 1.06.76.76 0 0 0 1.06.07 4.75 4.75 0 0 0 1.66-3.6 2.01 2.01 0 0 0 0-.34.26.26 0 0 1 .18-.27.75.75 0 0 0 .445-1.072.78.78 0 0 0-.305-.318Z"
              fill="#A8B4F0"
            />
          </svg>
          <span>Loyalty</span>
        </div>
        <div
          className={`icon absolute z-10 ${
            hoveredPathIndex === 4 ? "flex" : ""
          }`}
          data-index={4}
          onMouseOver={(event) => handleMouseOver(event, 4)}
        >
          <svg
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 25 25"
          >
            <path
              d="M14.773 11.136h3.863a.227.227 0 0 0 .228-.227V6.591A4.1 4.1 0 0 0 14.773 2.5H5.682A4.1 4.1 0 0 0 1.59 6.59v3.637a4.1 4.1 0 0 0 4.09 4.091h.455V17.5a.455.455 0 0 0 .291.427.482.482 0 0 0 .51-.127l2.972-3.4a.227.227 0 0 1 .173-.082h.909a.227.227 0 0 0 .218-.19 3.636 3.636 0 0 1 3.564-2.992Z"
              fill="#A8B4F0"
            />
            <path
              d="M23.41 14.773a2.273 2.273 0 0 0-2.274-2.273h-6.363a2.273 2.273 0 0 0-2.273 2.273V17.5a2.273 2.273 0 0 0 2.273 2.273H16.4l2.6 2.59a.436.436 0 0 0 .49.1.454.454 0 0 0 .283-.417v-2.273h1.363A2.273 2.273 0 0 0 23.41 17.5v-2.727Z"
              fill="#A8B4F0"
            />
          </svg>
          <span>Advocacy</span>
        </div>
        <div
          className={`icon absolute z-10 ${
            hoveredPathIndex === 0 ? "flex" : ""
          }`}
          data-index={0}
          onMouseOver={(event) => handleMouseOver(event, 0)}
        >
          <svg
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 25 25"
          >
            <path
              d="M24.23 10.31a1 1 0 1 0-2 0 2.71 2.71 0 0 1-.57 1.8.48.48 0 0 1-.37.17.45.45 0 0 1-.38-.16c-.29-.32-.597-.624-.92-.91a.49.49 0 0 1-.07-.65 4.46 4.46 0 0 0 .44-4.19 1.003 1.003 0 1 0-1.89.67 2.44 2.44 0 0 1-.21 2.4.48.48 0 0 1-.62.15c-.32-.16-.66-.3-1-.44a.481.481 0 0 1-.28-.62 4.47 4.47 0 0 0-1-4 1 1 0 0 0-1.652.16 1.002 1.002 0 0 0 .101 1.11 2.499 2.499 0 0 1 .55 2.32.5.5 0 0 1-.54.37c-.448-.052-.898-.08-1.35-.08a.24.24 0 0 1-.23-.21 4.419 4.419 0 0 0-2.3-3.73 1 1 0 0 0-1 1.71 2.56 2.56 0 0 1 1.34 2 .5.5 0 0 1-.39.53A10.93 10.93 0 0 0 8.83 9a.5.5 0 0 1-.61-.26 4.41 4.41 0 0 0-3.36-2.51 1.019 1.019 0 0 0-.39 2 2.45 2.45 0 0 1 1.95 1.4.51.51 0 0 1-.19.61c-.24.16-.47.32-.69.49a.5.5 0 0 1-.64 0 4.31 4.31 0 0 0-3.54-1.04 1 1 0 1 0 .21 1.99 2.6 2.6 0 0 1 1.79.37.51.51 0 0 1 .201.541.48.48 0 0 1-.09.18 9.751 9.751 0 0 0-.71 1 1.66 1.66 0 0 0 0 1.67 11.09 11.09 0 0 0 9.68 5.42 11.11 11.11 0 0 0 9.72-5.33 1.64 1.64 0 0 0 .21-1 .48.48 0 0 1 .19-.46 4.41 4.41 0 0 0 1.67-3.76Zm-11.75 8.6a9.09 9.09 0 0 1-7.66-4 .5.5 0 0 1 0-.57 9.091 9.091 0 0 1 7.66-4 9.09 9.09 0 0 1 7.66 4 .5.5 0 0 1 0 .57 9.09 9.09 0 0 1-7.66 4Z"
              fill="#A8B4F0"
            />
            <path
              d="M12.36 11.16a.51.51 0 0 0-.39.22.551.551 0 0 0-.05.45 1.75 1.75 0 0 1-2.23 2.23.459.459 0 0 0-.44.05.52.52 0 0 0-.23.39v.16a3.5 3.5 0 1 0 3.5-3.5h-.16Z"
              fill="#A8B4F0"
            />
          </svg>
          <span>Awareness</span>
        </div>
        <div
          className={`icon absolute z-10 ${
            hoveredPathIndex === 1 ? "flex" : ""
          }`}
          data-index={1}
          onMouseOver={(event) => handleMouseOver(event, 1)}
        >
          <svg
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 25 25"
          >
            <path
              d="M22.5 12.5a3.999 3.999 0 0 0-1.841-3.382 4.015 4.015 0 0 0-4.775-4.774 4.024 4.024 0 0 0-6.765 0 4.017 4.017 0 0 0-4.775 4.774 4.024 4.024 0 0 0 0 6.764 4.015 4.015 0 0 0 4.775 4.774 4.025 4.025 0 0 0 6.765 0 4.018 4.018 0 0 0 4.702-2.791c.19-.645.215-1.326.073-1.983A4 4 0 0 0 22.5 12.5Zm-9.165 1.141v.525a.833.833 0 0 1-1.667 0v-1.25a.833.833 0 0 1 .834-.832 1.667 1.667 0 1 0-1.667-1.667.833.833 0 0 1-1.666 0 3.332 3.332 0 1 1 4.166 3.224ZM12.5 18.54a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5Z"
              fill="#A8B4F0"
            />
          </svg>
          <span>Consideration</span>
        </div>
      </div>

      {/* Explainers */}
      <div className="explainers w-[802px] relative min-h-[140px]">
        <div
          className={`explainer flex p-4 bg-[#fcfdfc] rounded-md gap-4 items-center ${
            hoveredPathIndex === 2 ? "active" : ""
          }`}
          data-index={2}
        >
          <div className="explainer-icon bg-[#A8B4F0] flex justify-center items-center rounded-sm">
            <svg
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 25 25"
            >
              <path
                d="M20.2 9.64a.27.27 0 0 0-.23 0 .26.26 0 0 0-.11.21V12a.5.5 0 0 1-.5.5.51.51 0 0 1-.5-.5V9.5a1.61 1.61 0 0 0-1.5-1h-.25a.25.25 0 0 0-.25.25V11a.5.5 0 0 1-.5.5.51.51 0 0 1-.5-.5V8.5a1.61 1.61 0 0 0-1.5-1h-.25a.25.25 0 0 0-.25.25V11a.5.5 0 0 1-.5.5.51.51 0 0 1-.5-.5V3.5a2 2 0 1 0-4 0v11.08a.25.25 0 0 1-.17.23.23.23 0 0 1-.28-.09l-1.67-2.35a2 2 0 0 0-3.24 2.31l6 8.4a1 1 0 0 0 .81.42h8.72a1 1 0 0 0 1-.73l1.47-5.27c.258-.939.389-1.907.39-2.88V12a2.5 2.5 0 0 0-1.69-2.36Z"
                fill="#A8B4F0"
              />
            </svg>
          </div>
          <div className="explainer-text">
            <h3 className="text-xl font-semibold">Decision</h3>
            <p className="font-light m-0 leading-[1.4]">
              We don’t laugh because we feel good, we feel good because we
              laugh. It’s amazing what you can do with a little love in your
              heart.
            </p>
          </div>
          <div className="explainer-link">
            <div className="link-out w-[44px] h-[44px] border border-[#dfe1e2] rounded-full flex justify-center items-center">
              <svg
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 21"
                className="w-[20px] h-[21px]"
              >
                <path
                  d="M16.659 10.48a1.34 1.34 0 0 0-.452-1l-6.21-5.466A.8.8 0 0 0 8.94 5.215l4.798 4.222a.139.139 0 0 1-.091.243H4.14a.8.8 0 1 0 0 1.6h9.505a.139.139 0 0 1 .134.172.14.14 0 0 1-.042.07L8.94 15.746a.8.8 0 1 0 1.055 1.2l6.211-5.466a1.336 1.336 0 0 0 .453-1Z"
                  fill="#596AC4"
                />
              </svg>
            </div>
          </div>
        </div>
        <div
          className={`explainer flex p-4 bg-[#fcfdfc] rounded-md gap-4 items-center ${
            hoveredPathIndex === 3 ? "active" : ""
          }`}
          data-index={3}
        >
          <div className="explainer-icon bg-[#A8B4F0] flex justify-center items-center rounded-sm">
            <svg
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 25 25"
            >
              <path
                d="m24.03 13.03-11 11a.75.75 0 0 1-1.06 0l-11-11a.75.75 0 0 1 0-1.06l11-11a.75.75 0 0 1 1.06 0l11 11a.75.75 0 0 1 0 1.06Zm-16.22.23a4.75 4.75 0 0 0 2.69 3.52.19.19 0 0 1 .12.24v.06a.75.75 0 0 0 .3.78.72.72 0 0 0 .83 0l1.2-.74a.76.76 0 0 0 .24-1l-.75-1.2a.75.75 0 0 0-.64-.35h-.12a.76.76 0 0 0-.61.57.18.18 0 0 1-.11.13.18.18 0 0 1-.16 0 3.27 3.27 0 0 1-1.46-2.22.75.75 0 0 0-.74-.63h-.17a.74.74 0 0 0-.62.84Zm6.39-5.2a4.92 4.92 0 0 0-1.7-.31 4.62 4.62 0 0 0-2.68.85.23.23 0 0 1-.28 0 .76.76 0 0 0-.51-.2.81.81 0 0 0-.31.06.76.76 0 0 0-.44.71v1.42a.76.76 0 0 0 .77.72l1.45-.11a.73.73 0 0 0 .67-.49.75.75 0 0 0-.19-.81.15.15 0 0 1-.05-.14.18.18 0 0 1 .09-.13 3.29 3.29 0 0 1 2.66-.17.75.75 0 1 0 .54-1.4h-.02Zm3.37 2.44-1.25-.66a.74.74 0 0 0-.36-.09h-.21a.78.78 0 0 0-.45.37l-.66 1.25a.76.76 0 0 0 .08.83.78.78 0 0 0 .78.3.16.16 0 0 1 .15 0 .178.178 0 0 1 .07.15 3.181 3.181 0 0 1-1.11 2.32.748.748 0 0 0-.08 1.06.76.76 0 0 0 1.06.07 4.75 4.75 0 0 0 1.66-3.6 2.01 2.01 0 0 0 0-.34.26.26 0 0 1 .18-.27.75.75 0 0 0 .445-1.072.78.78 0 0 0-.305-.318Z"
                fill="#A8B4F0"
              />
            </svg>
          </div>
          <div className="explainer-text">
            <h3 className="text-xl font-semibold">Loyalty</h3>
            <p className="font-light m-0">
              We don’t laugh because we feel good, we feel good because we
              laugh. It’s amazing what you can do with a little love in your
              heart.
            </p>
          </div>
          <div className="explainer-link">
            <div className="link-out w-[44px] h-[44px] border border-[#dfe1e2] rounded-full flex justify-center items-center">
              <svg
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 21"
                className="w-[20px] h-[21px]"
              >
                <path
                  d="M16.659 10.48a1.34 1.34 0 0 0-.452-1l-6.21-5.466A.8.8 0 0 0 8.94 5.215l4.798 4.222a.139.139 0 0 1-.091.243H4.14a.8.8 0 1 0 0 1.6h9.505a.139.139 0 0 1 .134.172.14.14 0 0 1-.042.07L8.94 15.746a.8.8 0 1 0 1.055 1.2l6.211-5.466a1.336 1.336 0 0 0 .453-1Z"
                  fill="#596AC4"
                />
              </svg>
            </div>
          </div>
        </div>
        <div
          className={`explainer flex p-4 bg-[#fcfdfc] rounded-md gap-4 items-center ${
            hoveredPathIndex === 4 ? "active" : ""
          }`}
          data-index={4}
        >
          <div className="explainer-icon bg-[#A8B4F0] flex justify-center items-center rounded-sm">
            <svg
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 25 25"
            >
              <path
                d="M14.773 11.136h3.863a.227.227 0 0 0 .228-.227V6.591A4.1 4.1 0 0 0 14.773 2.5H5.682A4.1 4.1 0 0 0 1.59 6.59v3.637a4.1 4.1 0 0 0 4.09 4.091h.455V17.5a.455.455 0 0 0 .291.427.482.482 0 0 0 .51-.127l2.972-3.4a.227.227 0 0 1 .173-.082h.909a.227.227 0 0 0 .218-.19 3.636 3.636 0 0 1 3.564-2.992Z"
                fill="#A8B4F0"
              />
              <path
                d="M23.41 14.773a2.273 2.273 0 0 0-2.274-2.273h-6.363a2.273 2.273 0 0 0-2.273 2.273V17.5a2.273 2.273 0 0 0 2.273 2.273H16.4l2.6 2.59a.436.436 0 0 0 .49.1.454.454 0 0 0 .283-.417v-2.273h1.363A2.273 2.273 0 0 0 23.41 17.5v-2.727Z"
                fill="#A8B4F0"
              />
            </svg>
          </div>
          <div className="explainer-text">
            <h3 className="text-xl font-semibold">Advocacy</h3>
            <p className="font-light m-0">
              We don’t laugh because we feel good, we feel good because we
              laugh. It’s amazing what you can do with a little love in your
              heart.
            </p>
          </div>
          <div className="explainer-link">
            <div className="link-out w-[44px] h-[44px] border border-[#dfe1e2] rounded-full flex justify-center items-center">
              <svg
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 21"
                className="w-[20px] h-[21px]"
              >
                <path
                  d="M16.659 10.48a1.34 1.34 0 0 0-.452-1l-6.21-5.466A.8.8 0 0 0 8.94 5.215l4.798 4.222a.139.139 0 0 1-.091.243H4.14a.8.8 0 1 0 0 1.6h9.505a.139.139 0 0 1 .134.172.14.14 0 0 1-.042.07L8.94 15.746a.8.8 0 1 0 1.055 1.2l6.211-5.466a1.336 1.336 0 0 0 .453-1Z"
                  fill="#596AC4"
                />
              </svg>
            </div>
          </div>
        </div>
        <div
          className={`explainer flex p-4 bg-[#fcfdfc] rounded-md gap-4 items-center ${
            hoveredPathIndex === 0 ? "active" : ""
          }`}
          data-index={0}
        >
          <div className="explainer-icon bg-[#A8B4F0] flex justify-center items-center rounded-sm">
            <svg
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 25 25"
            >
              <path
                d="M24.23 10.31a1 1 0 1 0-2 0 2.71 2.71 0 0 1-.57 1.8.48.48 0 0 1-.37.17.45.45 0 0 1-.38-.16c-.29-.32-.597-.624-.92-.91a.49.49 0 0 1-.07-.65 4.46 4.46 0 0 0 .44-4.19 1.003 1.003 0 1 0-1.89.67 2.44 2.44 0 0 1-.21 2.4.48.48 0 0 1-.62.15c-.32-.16-.66-.3-1-.44a.481.481 0 0 1-.28-.62 4.47 4.47 0 0 0-1-4 1 1 0 0 0-1.652.16 1.002 1.002 0 0 0 .101 1.11 2.499 2.499 0 0 1 .55 2.32.5.5 0 0 1-.54.37c-.448-.052-.898-.08-1.35-.08a.24.24 0 0 1-.23-.21 4.419 4.419 0 0 0-2.3-3.73 1 1 0 0 0-1 1.71 2.56 2.56 0 0 1 1.34 2 .5.5 0 0 1-.39.53A10.93 10.93 0 0 0 8.83 9a.5.5 0 0 1-.61-.26 4.41 4.41 0 0 0-3.36-2.51 1.019 1.019 0 0 0-.39 2 2.45 2.45 0 0 1 1.95 1.4.51.51 0 0 1-.19.61c-.24.16-.47.32-.69.49a.5.5 0 0 1-.64 0 4.31 4.31 0 0 0-3.54-1.04 1 1 0 1 0 .21 1.99 2.6 2.6 0 0 1 1.79.37.51.51 0 0 1 .201.541.48.48 0 0 1-.09.18 9.751 9.751 0 0 0-.71 1 1.66 1.66 0 0 0 0 1.67 11.09 11.09 0 0 0 9.68 5.42 11.11 11.11 0 0 0 9.72-5.33 1.64 1.64 0 0 0 .21-1 .48.48 0 0 1 .19-.46 4.41 4.41 0 0 0 1.67-3.76Zm-11.75 8.6a9.09 9.09 0 0 1-7.66-4 .5.5 0 0 1 0-.57 9.091 9.091 0 0 1 7.66-4 9.09 9.09 0 0 1 7.66 4 .5.5 0 0 1 0 .57 9.09 9.09 0 0 1-7.66 4Z"
                fill="#A8B4F0"
              />
              <path
                d="M12.36 11.16a.51.51 0 0 0-.39.22.551.551 0 0 0-.05.45 1.75 1.75 0 0 1-2.23 2.23.459.459 0 0 0-.44.05.52.52 0 0 0-.23.39v.16a3.5 3.5 0 1 0 3.5-3.5h-.16Z"
                fill="#A8B4F0"
              />
            </svg>
          </div>
          <div className="explainer-text">
            <h3 className="text-xl font-semibold">Awareness</h3>
            <p className="font-light m-0">
              We don’t laugh because we feel good, we feel good because we
              laugh. It’s amazing what you can do with a little love in your
              heart.
            </p>
          </div>
          <div className="explainer-link">
            <div className="link-out w-[44px] h-[44px] border border-[#dfe1e2] rounded-full flex justify-center items-center">
              <svg
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 21"
                className="w-[20px] h-[21px]"
              >
                <path
                  d="M16.659 10.48a1.34 1.34 0 0 0-.452-1l-6.21-5.466A.8.8 0 0 0 8.94 5.215l4.798 4.222a.139.139 0 0 1-.091.243H4.14a.8.8 0 1 0 0 1.6h9.505a.139.139 0 0 1 .134.172.14.14 0 0 1-.042.07L8.94 15.746a.8.8 0 1 0 1.055 1.2l6.211-5.466a1.336 1.336 0 0 0 .453-1Z"
                  fill="#596AC4"
                />
              </svg>
            </div>
          </div>
        </div>
        <div
          className={`explainer flex p-4 bg-[#fcfdfc] rounded-md gap-4 items-center ${
            hoveredPathIndex === 1 ? "active" : ""
          }`}
          data-index={1}
        >
          <div className="explainer-icon bg-[#A8B4F0] flex justify-center items-center rounded-sm">
            <svg
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 25 25"
            >
              <path
                d="M22.5 12.5a3.999 3.999 0 0 0-1.841-3.382 4.015 4.015 0 0 0-4.775-4.774 4.024 4.024 0 0 0-6.765 0 4.017 4.017 0 0 0-4.775 4.774 4.024 4.024 0 0 0 0 6.764 4.015 4.015 0 0 0 4.775 4.774 4.025 4.025 0 0 0 6.765 0 4.018 4.018 0 0 0 4.702-2.791c.19-.645.215-1.326.073-1.983A4 4 0 0 0 22.5 12.5Zm-9.165 1.141v.525a.833.833 0 0 1-1.667 0v-1.25a.833.833 0 0 1 .834-.832 1.667 1.667 0 1 0-1.667-1.667.833.833 0 0 1-1.666 0 3.332 3.332 0 1 1 4.166 3.224ZM12.5 18.54a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5Z"
                fill="#A8B4F0"
              />
            </svg>
          </div>
          <div className="explainer-text">
            <h3 className="text-xl font-semibold">Consideration</h3>
            <p className="font-light m-0">
              We don’t laugh because we feel good, we feel good because we
              laugh. It’s amazing what you can do with a little love in your
              heart.
            </p>
          </div>
          <div className="explainer-link">
            <div className="link-out w-[44px] h-[44px] border border-[#dfe1e2] rounded-full flex justify-center items-center">
              <svg
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 21"
                className="w-[20px] h-[21px]"
              >
                <path
                  d="M16.659 10.48a1.34 1.34 0 0 0-.452-1l-6.21-5.466A.8.8 0 0 0 8.94 5.215l4.798 4.222a.139.139 0 0 1-.091.243H4.14a.8.8 0 1 0 0 1.6h9.505a.139.139 0 0 1 .134.172.14.14 0 0 1-.042.07L8.94 15.746a.8.8 0 1 0 1.055 1.2l6.211-5.466a1.336 1.336 0 0 0 .453-1Z"
                  fill="#596AC4"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .infinity-container svg {
            margin: 40px;
            z-index: -1;
          }

          .infinity-container svg path {
            transition: all 0.3s ease-in-out;
            cursor: pointer;
            z-index: -1;
          }

          .infinity-container svg path.path-highlight {
            filter: drop-shadow(0px 0px 8.5px rgba(180, 187, 228, 0.8));
            fill: #a8b4f0 !important;
          }

          .icon {
            z-index: 5;
            background: #fcfdfc;
            display: flex;
            align-items: center;
            border-radius: 20px;
            overflow: hidden;
            cursor: pointer;
            font-size: 12px;
            font-weight: 500;
            box-shadow: 0px 2px 8px 2px rgba(33, 51, 48, 0.05);
          }

          .icon svg {
            width: 40px;
            height: 40px;
            margin: 0;
            z-index: 5;
            padding: 8px;
          }

          .icon span {
            visibility: hidden;
            display: flex;
            width: 0;
            transition: all 0.3s ease-in-out;
            background: #fff;
          }

          .icon.flex span {
            visibility: visible;
            width: 90px;
          }

          .icon.flex svg path {
            fill: #596ac4 !important;
          }

          //data0 -> Awareness

          .icon[data-index="0"] {
            top: 14%;
            left: 16%;
            transition: transform 0.3s ease-in-out;
          }

          .icon[data-index="0"].flex span {
            width: 74px;
          }

          .icon[data-index="0"].flex,
          path:hover ~ .icon[data-index="0"],
          .icon[data-index="0"]:hover {
            transform: translateX(-50px);
          }

          .infinity-container path:hover ~ .icon[data-index="0"] span,
          .icon[data-index="0"]:hover span {
            visibility: visible;
          }

          .icon[data-index="0"]:hover ~ path.path-highlight {
            filter: drop-shadow(0px 0px 8.5px rgba(180, 187, 228, 0.8));
            fill: #a8b4f0 !important;
          }

          //data1-> Consideration

          .icon[data-index="1"].flex span {
            visibility: visible;
            width: 93px;
          }

          .icon[data-index="1"] {
            top: calc(50% - 20px);
            left: calc(50% + 18px);
            transition: transform 0.3s ease-in-out;
          }

          .icon[data-index="1"].flex,
          .infinity-container path:hover ~ .icon[data-index="1"],
          .icon[data-index="1"]:hover {
            transform: translateX(-46px);
          }

          .infinity-container path:hover ~ .icon[data-index="1"] span,
          .icon[data-index="1"]:hover span {
            visibility: visible;
          }

          .icon[data-index="1"]:hover ~ path.path-highlight {
            filter: drop-shadow(0px 0px 8.5px rgba(180, 187, 228, 0.8));
            fill: #a8b4f0 !important;
          }

          //data4 -> Advocacy

          .icon[data-index="4"] {
            bottom: 3%;
            left: 38%;
            transition: transform 0.3s ease-in-out;
          }

          .icon[data-index="4"].flex span {
            visibility: visible;
            width: 69px;
          }

          .icon[data-index="4"].flex,
          .infinity-container path:hover ~ .icon[data-index="4"],
          .icon[data-index="4"]:hover {
            transform: translateX(-35px);
          }

          .infinity-container path:hover ~ .icon[data-index="4"] span,
          .icon[data-index="4"]:hover span {
            visibility: visible;
          }

          .icon[data-index="4"]:hover ~ path.path-highlight {
            filter: drop-shadow(0px 0px 8.5px rgba(180, 187, 228, 0.8));
            fill: #a8b4f0 !important;
          }

          //data3 -> Loyalty
          .icon[data-index="3"] {
            top: 4%;
            left: 78%;
            transition: transform 0.3s ease-in-out;
          }

          .icon[data-index="3"].flex span {
            visibility: visible;
            width: 53px;
          }

          .icon[data-index="3"].flex,
          .infinity-container path:hover ~ .icon[data-index="3"],
          .icon[data-index="3"]:hover {
            transform: translateX(-40px);
          }

          .infinity-container path:hover ~ .icon[data-index="3"] span,
          .icon[data-index="3"]:hover span {
            visibility: visible;
          }

          .icon[data-index="3"]:hover ~ path.path-highlight {
            filter: drop-shadow(0px 0px 8.5px rgba(180, 187, 228, 0.8));
            fill: #a8b4f0 !important;
          }

          //data2 -> Decision
          .icon[data-index="2"] {
            top: 70%;
            left: 93%;
            transition: transform 0.3s ease-in-out;
          }

          .icon[data-index="2"].flex span {
            visibility: visible;
            width: 62px;
          }

          .icon[data-index="2"].flex,
          .infinity-container path:hover ~ .icon[data-index="2"],
          .icon[data-index="2"]:hover {
            transform: translateX(-25px);
          }

          .infinity-container path:hover ~ .icon[data-index="2"] span,
          .icon[data-index="2"]:hover span {
            visibility: visible;
          }

          .icon[data-index="2"]:hover ~ path.path-highlight {
            filter: drop-shadow(0px 0px 8.5px rgba(180, 187, 228, 0.8));
            fill: #a8b4f0 !important;
          }
          .explainer {
            position: absolute;
            visibility: hidden;
            box-shadow: 0px 2px 8px 2px rgba(33, 51, 48, 0.05);
          }
          .explainer.active {
            visibility: visible;
          }
          .explainer-icon {
            padding: 12px;
          }
          .explainer-icon svg {
            width: 48px;
            height: 48px;
            opacity: 0;
            transition: opacity 0.3s ease-in-out;
          }
          .explainer-icon svg path {
            fill: #ffffff;
          }
          .explainer-text {
            opacity: 0;
            transition: opacity 0.3s ease-in-out;
          }
          .explainer-text p {
            line-height: 1.4;
          }
          .explainer.active .explainer-icon svg,
          .explainer.active .explainer-text {
            opacity: 1;
          }
        `}
      </style>
    </div>
  );
}
