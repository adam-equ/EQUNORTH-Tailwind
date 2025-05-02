"use client";

import React, { useEffect, useRef } from "react";
import { addSingleMarkers } from "./markers/addSingleMarkers";

const DEFAULT_CENTER = { lat: -31.9514, lng: 115.8617 };
const DEFAULT_ZOOM = 14;

export const GoogleMaps = ({
  locations,
}: {
  locations: ReadonlyArray<google.maps.LatLngLiteral>;
}) => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (ref.current) {
      const map = new window.google.maps.Map(ref.current, {
        center: DEFAULT_CENTER,
        zoom: DEFAULT_ZOOM,
      });

      // New Single Marker code
      addSingleMarkers({ locations, map });
    }
  }, [ref, locations]);

  return (
    <div ref={ref} className="google-map-map o-box--rounded o-box--border" />
  );
};
