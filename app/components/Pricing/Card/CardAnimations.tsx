"use client";
import gsap from "gsap";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const CardAnimations = () => {
  useEffect(() => {
    const showElements = document.querySelectorAll(".showElement");
    showElements.forEach((element) => {
      gsap.fromTo(
        element,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: element,
            start: "top 80%",
          },
        }
      );
    });
  }, []);

  return null;
};
