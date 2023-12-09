import React from "react";

type Props = {
  link: string;
  text: string;
};

const CTA = (props: Props) => {
  return (
    <div>
      <a
        href={props.link}
        className="px-4 py-2 rounded-md text-xl bg-black text-white font-bold hover:drop-shadow-2xl hover:px-6 hover:py-3 duration-200"
      >
        {props.text}
      </a>
    </div>
  );
};

export default CTA;
