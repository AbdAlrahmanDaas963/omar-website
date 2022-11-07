import React from "react";
import { Link } from "react-router-dom";

import "./my-works.css";

export default function WorkCard({ img, title }) {
  return (
    <Link to={`/${title.replace(/\s/g, "")}`} className="work-card">
      <div className="work-card-img">
        <img className="card-img" src={img} alt="" />
      </div>
      <div className="work-card-title">{title}</div>
    </Link>
  );
}
