import React from "react";
import { motion } from "framer-motion";

import omarPic from "../../img/omar-pic.png";
import bubble from "../../img/bubble.png";

import "./landing.css";

function Landing() {
  return (
    <div className="landing" id="Landing">
      <div className="landing-content">
        <div className="content-info">
          <div className="info-head">
            <div className="head-hi">Hi! I Am </div>
            <div className="head-name">Omar Daas.</div>
            <div className="head-title">Architecture and Designer</div>
          </div>
          <div className="info-desc">
            My love for architecture led me to creativity in the art of interior
            design the art of organizing spaces to appear in unique and
            distinctive form
          </div>
        </div>
        <motion.div className="content-img">
          <div className="cont">
            <img className="omar-img" src={omarPic} alt="" />
            <motion.div
              initial={{ scale: 0, translateX: "-50%" }}
              animate={{ scale: 1, translateX: "-50%" }}
              transition={{ duration: 1, type: "spring", bounce: 0.25 }}
              className="bubble"
            />
          </div>
        </motion.div>
        <a href="#Footer" className="hire-me">
          <motion.div
            transition={{ ease: "linear", duration: 0.1 }}
            whileHover={{
              y: "-4px",
              x: "-4px",
              cursor: "pointer",
            }}
            whileTap={{ y: "0px", x: "0px" }}
            className="hire-me-in"
          >
            Hire me
          </motion.div>
        </a>
      </div>
    </div>
  );
}

export default Landing;
