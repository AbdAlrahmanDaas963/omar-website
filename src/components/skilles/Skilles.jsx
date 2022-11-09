import React from "react";

import SlideItem from "./SlideItem";
import "./skilles.css";

function Skilles() {
  const items = [
    {
      title: "Autocad",
    },
    {
      title: "3Ds max",
    },
    {
      title: "Hand Drawing",
    },
    {
      title: "Illustrator",
    },
    {
      title: "photoshop",
    },
    {
      title: "Revit",
    },
    {
      title: "LandScapes",
    },
  ];
  return (
    <div className="skilles" id="Skilles">
      <div className="skilles-title">
        Skilles &<br /> Experince
      </div>

      <div className="slider">
        {items.map((item) => (
          <SlideItem key={item.title} title={item.title} />
        ))}
      </div>
    </div>
  );
}

export default Skilles;
