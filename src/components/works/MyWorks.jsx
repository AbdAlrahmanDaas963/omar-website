import React from "react";
import "./my-works.css";
import WorkCard from "./WorkCard";

function MyWorks() {
  return (
    <div className="my-works" id="MyWorks">
      <div className="my-works-content">
        <div className="works-head">My Works</div>
        <div className="works-card">
          <WorkCard title={"Interior Design"} />
          <WorkCard title={"Exerior Design"} />
          <WorkCard title={"Logos"} />
          <WorkCard title={"Posters"} />
        </div>
      </div>
    </div>
  );
}

export default MyWorks;
