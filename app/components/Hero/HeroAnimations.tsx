"use client";
import gsap from "gsap";
import { useEffect } from "react";

export const HeroAnimations = () => {
  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      ".hero > *",
      { x: 400, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        ease: "power2.out",
      }
    );
  }, []);
  return null;
};
