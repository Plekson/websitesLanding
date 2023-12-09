import React from "react";
import { CardAnimations } from "./CardAnimations";

type Props = {
  title: string;
  description: string;
  flexWrap: string;
};

const Card = (props: Props) => {
  return (
    <div
      className={`showElement p-4 w-full flex justify-between items-center ${props.flexWrap} my-24`}
    >
      <CardAnimations />
      <div className="flex flex-col gap-4 max-w-3xl">
        <h3 className="font-bold">{props.title}</h3>
        <p>{props.description}</p>
      </div>
      <div>
        <h1>PHOTO</h1>
      </div>
    </div>
  );
};

export default Card;
