import React from "react";
import Card from "./Card/Card";
import data from "../../data/offer.json";

const Pricing = () => {
  return (
    <div className="min-h-screen container mx-auto flex flex-col items-center gap-16">
      <div>
        <h2 className="font-bold">What we offer?</h2>
        <hr className="bg-yellow-300 h-2 border-none w-24 mx-auto my-2" />
      </div>
      {data.map((item) => (
        <Card
          key={item.id}
          title={item.title}
          description={item.description}
          flexWrap={item.id % 2 === 0 ? "flex-row-reverse" : "flex-row"}
        />
      ))}
    </div>
  );
};

export default Pricing;
