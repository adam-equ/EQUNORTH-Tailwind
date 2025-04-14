"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const AOSInitialiser = () => {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      offset: 100,
      duration: 1000,
      easing: "ease-out-sine",
    });

    // Optionally, refresh AOS on route changes if using Next.js router
    // This might be necessary if your app uses dynamic content or route transitions
    return () => {
      AOS.refreshHard();
    };
  }, []);

  return null; // This component does not render anything
};

export default AOSInitialiser;
