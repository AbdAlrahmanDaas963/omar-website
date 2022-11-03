import React from "react";

import "./skilles.css";

function SlideItem({ title, desc }) {
  return (
    <div className="slide-item">
      <div className="title">{title}</div>
      <div className="desc">{desc}</div>
    </div>
  );
}

export default SlideItem;
