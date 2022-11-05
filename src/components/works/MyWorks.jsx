import React from "react";
import "./my-works.css";
import WorkCard from "./WorkCard";

function MyWorks() {
  return (
    <div className="my-works">
      <div className="my-works-content">
        <div className="works-head">My Works</div>
        <div className="works-card">
          <WorkCard title={"Interior design"} />
          <WorkCard title={"Interior design"} />
          <WorkCard title={"Interior design"} />
          <WorkCard title={"Interior design"} />
          <WorkCard title={"Interior design"} />
          <WorkCard title={"Interior design"} />
        </div>
      </div>
    </div>
  );
}

export default MyWorks;
