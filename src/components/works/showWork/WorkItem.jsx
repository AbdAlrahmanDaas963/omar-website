import React from "react";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

// import img from "../../../img/omar-pic.jpeg";
import "./showwork.css";

function WorkItem({ src }) {
  return (
    <Zoom>
      <img
        src={src}
        alt="That Wanaka Tree, New Zealand by Laura Smetsers"
        width="300"
        loading="lazy"
      />
    </Zoom>
  );
}

export default WorkItem;
