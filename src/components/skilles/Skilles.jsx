import React from "react";
import { motion } from "framer-motion";

import SlideItem from "./SlideItem";
import "./skilles.css";

const left = window.screen.width > 400 ? window.screen.width : 300 * 5;
console.log("left", left);

function Skilles() {
  const items = [
    {
      title: "Hand Drawing1",
      desc: "In publishing and graphic design,Lorem ipsum is a placeholdertext commonlyused to demonstrate",
    },
    {
      title: "Hand Drawing2",
      desc: "In publishing and graphic design,Lorem ipsum is a placeholdertext commonlyused to demonstrate",
    },
    {
      title: "Hand Drawing3",
      desc: "In publishing and graphic design,Lorem ipsum is a placeholdertext commonlyused to demonstrate",
    },
    {
      title: "Hand Drawing4",
      desc: "In publishing and graphic design,Lorem ipsum is a placeholdertext commonlyused to demonstrate",
    },
    {
      title: "Hand Drawing5",
      desc: "In publishing and graphic design,Lorem ipsum is a placeholdertext commonlyused to demonstrate",
    },
  ];
  return (
    <div className="skilles" id="Skilles">
      <div className="big-badge">
        <div className="big-badge-title">Skilles & Experince</div>
      </div>
      <motion.div
        drag={"x"}
        dragConstraints={{ left: -left, right: 100 }}
        whileTap={{ cursor: "grabbing" }}
        whileHover={{ cursor: "grab" }}
        className="slider"
      >
        {items.map((item) => (
          <SlideItem key={item.title} title={item.title} desc={item.desc} />
        ))}
      </motion.div>
    </div>
  );
}

export default Skilles;
