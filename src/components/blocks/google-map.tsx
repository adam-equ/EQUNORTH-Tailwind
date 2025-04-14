"use client";
import BlocksWrapper from "../blocks-wrapper";
import { GoogleMaps } from "../googlemaps/GoogleMaps";
import { GoogleMapsWrapper } from "../googlemaps/GoogleMapsWrapper";

export interface MapProps {
  map_title?: string;
  map_copy?: string;
  location: {
    lat: number;
    lng: number;
  };
  background_colour?: string;
  component_padding?: {
    top_padding: string;
    bottom_padding: string;
  };
}
export function GoogleMap({
  map_title,
  map_copy,
  location,
  background_colour,
  component_padding,
}: MapProps) {
  const LOCATION = [{ lat: location.lat, lng: location.lng }];
  return (
    <BlocksWrapper
      background_colour={background_colour}
      component_padding={component_padding}
    >
      <div className="mx-auto w-full max-w-7xl text-center lg:text-center">
        {map_title ? (
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-equ-white">
            {map_title}
          </h2>
        ) : null}

        {map_copy ? (
          <p className="mt-3 text-lg text-gray-500 dark:text-gray-200">
            {map_copy}
          </p>
        ) : null}
        <GoogleMapsWrapper>
          <GoogleMaps locations={LOCATION} />
        </GoogleMapsWrapper>
      </div>
    </BlocksWrapper>
  );
}
