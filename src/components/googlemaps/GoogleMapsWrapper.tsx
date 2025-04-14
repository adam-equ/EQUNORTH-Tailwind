import React from "react";
import { Wrapper } from "@googlemaps/react-wrapper";

export const GoogleMapsWrapper = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  // const apiKey = process.env.GOOGLE_MAPS_API_KEY; // Replace with your actual API key
  const apiKey = "AIzaSyCW5hqqG0WZGpdJvBK777AEtf7ukzpWGFw"; // Replace with your actual API key

  if (!apiKey) {
    return <div>Oops! Cannot display the map: Google Maps API key missing</div>;
  }

  return <Wrapper apiKey={apiKey}>{children}</Wrapper>;
};
