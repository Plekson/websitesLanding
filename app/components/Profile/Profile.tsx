import React from "react";
import { ProfileAnimations } from "./ProfileAnimations";
import CTA from "../CTA/CTA";

const Profile = () => {
  return (
    <div className="profile h-screen w-screen relative">
      <ProfileAnimations />
      <div className="anim-rotate absolute h-screen w-7/12 bg-yellow-300 top-0 bottom-0 left-0 -z-10 origin-top-left rotate-45"></div>
      <div className="h-screen container mx-auto flex justify-between">
        <div className="anim-rotate h-screen flex flex-col justify-center gap-6 origin-top-left rotate-45">
          <h1 className="font-bold w-2/3">Start getting clients online!</h1>
          <p className="w-2/3">
            Unlock your online potential. We build websites that attract and
            convert clients for your business.
          </p>
          <CTA link="#" text="Get your website" />
        </div>
        <div className="flex items-center">
          <img
            src="phone.png"
            className="anim-rotate h-[80vh] w-auto origin-bottom-right -rotate-45"
          />
        </div>
      </div>
    </div>
  );
};

export default Profile;
