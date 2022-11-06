import React from "react";
import { useParams } from "react-router-dom";

import { getData } from "../../../data/data";

import "./showwork.css";
import WorkItem from "./WorkItem";

export default function ShowWork() {
  let params = useParams();
  // console.log("params", params);

  // console.log(getData);
  const data = getData();
  // console.log("getData", getData());
  // console.log("data", data[params.worksId]);
  const list = data[params.worksId];
  // console.log("list", list);

  return (
    <div className="showwork">
      <div className="showwork-head">
        <div className="back-btn"></div>
        <div className="show-work-head-title">{params.worksId}</div>
      </div>
      <div className="showwork-body">
        {list.length === 0 ? <div>soon</div> : null}
        {list.map((item) => (
          <WorkItem src={item.src} key={item.src} />
        ))}
      </div>
    </div>
  );
}
