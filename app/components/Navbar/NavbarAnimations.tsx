"use client";
import gsap from "gsap";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const NavbarAnimations = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.create({
      start: "16px top",
      end: 99999,
      toggleClass: {
        className: "navbar--scrolled",
        targets: ".navbar",
      },
    });
  }, []);

  return null;
};
