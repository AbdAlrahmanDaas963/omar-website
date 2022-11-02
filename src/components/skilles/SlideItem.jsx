import React from "react";

import "./skilles.css";

function SlideItem({ title, desc }) {
  return (
    <div className="slide-item">
      <h3>{title}</h3>
      <h5>{desc}</h5>
    </div>
  );
}

export default SlideItem;
