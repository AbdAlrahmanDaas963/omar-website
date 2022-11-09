import React from "react";
import { motion, useAnimationControls } from "framer-motion";

import { delay } from "../../animation/config";
import SlideItem from "./SlideItem";
import "./skilles.css";

function Skilles() {
  const controls = useAnimationControls();

  const items = [
    { title: "Autocad" },
    { title: "3Ds max" },
    { title: "Hand Drawing" },
    { title: "Illustrator" },
    { title: "photoshop" },
    { title: "Revit" },
    { title: "LandScapes" },
  ];

  const show = () => {
    controls.start("visible");
  };

  const BadgeVar = delay;
  return (
    <motion.div whileInView={show} className="skilles container" id="Skilles">
      <div className="skilles-title">
        Skilles &<br /> Experince
      </div>

      <div className="slider">
        {items.map((item, i) => (
          <motion.div
            key={item.title}
            variants={BadgeVar}
            custom={i}
            initial="hidden"
            animate={controls}
          >
            <SlideItem title={item.title} />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default Skilles;
