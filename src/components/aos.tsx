"use client";

// @ts-ignore
import React, { useEffect } from "react";
// @ts-ignore
import AOS from "aos";

export default function Aos() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 100,
    });
  }, []);

  return <></>;
}
