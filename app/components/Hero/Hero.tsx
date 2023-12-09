import React from "react";
import { HeroAnimations } from "./HeroAnimations";
import CTA from "../CTA/CTA";

const Hero = () => {
  return (
    <div className="hero container mx-auto h-screen flex flex-col items-center justify-center gap-6">
      <HeroAnimations />
      <h1 className="font-bold max-w-4xl text-center opacity-0">
        Get a beautiful website for your company!
      </h1>
      <h4 className="opacity-0">
        Elevate Your Brand with Stunning Web Design.
      </h4>
      <div className="opacity-0">
        <CTA link="#" text="Get your website" />
      </div>
    </div>
  );
};
export default Hero;
