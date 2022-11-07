import React from "react";
import "./my-works.css";
import WorkCard from "./WorkCard";

import interior from "../../data/images/interior/1.jpg";
import exerior from "../../data/images/exerior/1.jpg";
import logo from "../../data/images/logo/1.jpg";
import poster from "../../data/images/poster/2.jpg";

function MyWorks() {
  return (
    <div className="my-works" id="MyWorks">
      <div className="my-works-content">
        <div className="works-head">My Works</div>
        <div className="works-card">
          <WorkCard title={"Interior Design"} img={interior} />
          <WorkCard title={"Exerior Design"} img={exerior} />
          <WorkCard title={"Logos"} img={logo} />
          <WorkCard title={"Posters"} img={poster} />
        </div>
      </div>
    </div>
  );
}

export default MyWorks;
