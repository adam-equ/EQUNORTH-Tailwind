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
      <div className="google-map">
        <div className="google-map__header o-container o-container--narrow u-text-center">
          {map_title ? (
            <h3 className="u-spacer-bottom-md" data-aos="fade-in">
              {map_title}
            </h3>
          ) : null}

          {map_copy ? (
            <p
              className="u-spacer-top-md u-text-balance u-text-large"
              data-aos="fade-in"
            >
              {map_copy}
            </p>
          ) : null}
        </div>
        <div className="o-container">
          <GoogleMapsWrapper>
            <GoogleMaps locations={LOCATION} />
          </GoogleMapsWrapper>
        </div>
      </div>
    </BlocksWrapper>
  );
}
