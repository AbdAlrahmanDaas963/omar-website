import React from "react";
import { motion } from "framer-motion";
import omar from "../../img/omar.png";
import "./landing.css";

function Landing() {
  return (
    <div className="landing">
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
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="content-img"
        >
          <img className="omar-img" src={omar} alt="" />
        </motion.div>
        <div className="hire-me">
          <motion.div
            transition={{ ease: "linear", duration: 0.2 }}
            whileHover={{
              y: "-4px",
              x: "-4px",
              cursor: "pointer",
            }}
            whileTap={{ scale: 1.1 }}
            className="hire-me-in"
          >
            Hire me
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
