import React from "react";
import { useParams, useNavigate } from "react-router-dom";

import { getData } from "../../../data/data";

import "./showwork.css";
import WorkItem from "./WorkItem";

export default function ShowWork() {
  const navigate = useNavigate();
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
        <div className="back-btn" onClick={() => navigate(-1)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24.618"
            height="35.618"
            viewBox="0 0 24.618 35.618"
          >
            <g
              id="Group_38"
              data-name="Group 38"
              transform="translate(-96.691 -65.691)"
            >
              <line
                id="Line_7"
                data-name="Line 7"
                x1="19"
                y2="15"
                transform="translate(99.5 68.5)"
                fill="none"
                stroke="#fff"
                strokeLinecap="round"
                strokeWidth="4"
              />
              <line
                id="Line_8"
                data-name="Line 8"
                x1="19"
                y1="15"
                transform="translate(99.5 83.5)"
                fill="none"
                stroke="#fff"
                strokeLinecap="round"
                strokeWidth="4"
              />
            </g>
          </svg>
        </div>
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
