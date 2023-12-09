"use client";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const ProfileAnimations = () => {
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".profile",
        start: "top bottom",
        end: "bottom bottom",
        scrub: true,
      },
    });

    tl.to(".anim-rotate", {
      rotate: 0,
    });
  }, []);

  return null;
};
