import React from "react";
import { Instagram, Facebook } from "@mui/icons-material";

import building from "../../img/footer.png";
import "./footer.css";

function Footer() {
  return (
    <div className="footer gradient">
      <div className="footer-head">
        <div className="one">Do you have a project ?</div>
        <div className="two">Let's Start</div>
      </div>
      <div className="footer-body">
        <div>
          <a href="">omardaas@gmail.com</a>
          <div className="line" />
        </div>
        <div className="social">
          <a href="">
            <Instagram />
          </a>
          <a href="">
            <Facebook />
          </a>
        </div>
        <div>
          <a href="">+963 934 619 443</a>
          <div className="line" />
          <div className="location">Syria, Hama</div>
        </div>
      </div>
      <img className="building" src={building} alt="" />
    </div>
  );
}

export default Footer;
