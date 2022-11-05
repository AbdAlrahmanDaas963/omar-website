import React from "react";
import img from "../../img/work-placeholder.jpg";
import "./my-works.css";

export default function WorkCard({ imgs, title }) {
  return (
    <a href="" className="work-card">
      <img className="work-card-img" src={img} alt="" />
      <div className="work-card-title">{title}</div>
    </a>
  );
}
