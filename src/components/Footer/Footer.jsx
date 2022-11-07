import React from "react";
import { Instagram, Facebook, Telegram, WhatsApp } from "@mui/icons-material";

import building from "../../img/footer.png";
import "./footer.css";

function Footer() {
  return (
    <div className="footer gradient" id="Footer">
      <div className="footer-head">
        <div className="one">Do you have a project ?</div>
        <div className="two">Let's Start</div>
      </div>
      <div className="footer-body">
        <div>
          <a target={"_blank"} href="mailto:abdalrahmandaas963@gmail.com">
            omra08247@gmail.com
          </a>
          <div className="line" />
        </div>
        <div className="social">
          <a target={"_blank"} href="">
            <Instagram />
          </a>
          <a target={"_blank"} href="">
            <Facebook />
          </a>
          <a target={"_blank"} href="">
            <Telegram />
          </a>
          <a target={"_blank"} href="">
            <WhatsApp />
          </a>
        </div>
        <div>
          <a href="tel:+963941599398">+963 941 599 398</a>
          <div className="line" />
          <div className="location">Syria, Hama</div>
        </div>
      </div>
      <img className="building" src={building} alt="" />
    </div>
  );
}

export default Footer;
