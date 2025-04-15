"use client";

import React, { useEffect, useRef } from "react";

export interface HSProps {
  region?: string;
  portalId?: string;
  formId?: string;
}
const HubspotContactForm = (props: HSProps) => {
  const { region, portalId, formId } = props;
  const scriptLoadedRef = useRef(false);

  useEffect(() => {
    if (!scriptLoadedRef.current) {
      const script = document.createElement("script");
      script.src = "https://js.hsforms.net/forms/shell.js";
      document.body.appendChild(script);

      script.addEventListener("load", () => {
        scriptLoadedRef.current = true;
        console.log("HubSpot script loaded successfully!"); // Add this line
        // @ts-ignore
        if (window.hbspt) {
          // @ts-ignore
          window.hbspt.forms.create({
            region: region,
            portalId: portalId,
            formId: formId,
            target: "#hubspotForm",
          });
        }
      });
    }
  }, [region, portalId, formId]);

  return (
    <div>
      <div id="hubspotForm"></div>
    </div>
  );
};

export default HubspotContactForm;
