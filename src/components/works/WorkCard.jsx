import React from "react";
import { Link } from "react-router-dom";

import img from "../../img/work-placeholder.jpg";
import "./my-works.css";

export default function WorkCard({ imgs, title }) {
  // console.log("title.trim()", title.replace(/\s/g, ""));
  return (
    <Link to={`/${title.replace(/\s/g, "")}`} className="work-card">
      <img className="work-card-img" src={img} alt="" />
      <div className="work-card-title">{title}</div>
    </Link>
  );
}
