import React from "react";
import "./header.css";

function Burger({ clicked, handleClick }) {
  const burgerClass = clicked ? "clicked" : "not-clicked";

  return (
    <div onClick={handleClick} className="burger-btn">
      <div className={`bur bur1-${burgerClass}`} />
      <div className={`bur bur2-${burgerClass}`} />
      <div className={`bur bur3-${burgerClass}`} />
    </div>
  );
}

export default Burger;
