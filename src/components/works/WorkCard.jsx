import React from "react";
import { motion, useAnimationControls } from "framer-motion";

import { Link } from "react-router-dom";

import "./my-works.css";

export default function WorkCard({ title }) {
  const circleCont = useAnimationControls();
  const titleCont = useAnimationControls();

  const handleClick = () => {
    console.log("first");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const hover = () => {
    circleCont.start("hover");
    titleCont.start("hover");
  };
  const blur = () => {
    circleCont.start("blur");
    titleCont.start("blur");
  };

  const circleVar = {
    hover: {
      width: "250px",
      borderRadius: "50px",
      backgroundColor: "var(--white-font)",
    },
    blur: {
      width: "70px",
      backgroundColor: "var(--black)",
    },
  };
  const titleVar = {
    hover: {
      color: "var(--black)",
    },
    blur: {
      color: "var(--white-font)",
    },
  };

  return (
    <Link
      to={`/${title.replace(/\s/g, "")}`}
      onClick={handleClick}
      className="work-card"
    >
      <motion.div whileHover={hover} onHoverEnd={blur} className="card-content">
        <motion.div
          animate={circleCont}
          variants={circleVar}
          className="circle"
          transition={{ ease: "easeInOut" }}
        ></motion.div>
        <motion.div
          animate={titleCont}
          initial={"blur"}
          variants={titleVar}
          className="work-card-title"
        >
          {title}
        </motion.div>
      </motion.div>
    </Link>
  );
}
