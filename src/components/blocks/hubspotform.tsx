"use client";

import React, { useEffect } from "react";

const HubspotContactForm = (props) => {
  const { region, portalId, formId } = props;
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://js.hsforms.net/forms/shell.js";
    document.body.appendChild(script);

    script.addEventListener("load", () => {
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
  }, []);

  return (
    <div>
      <div id="hubspotForm"></div>
    </div>
  );
};

export default HubspotContactForm;
