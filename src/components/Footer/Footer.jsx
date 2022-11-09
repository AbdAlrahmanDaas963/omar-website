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
          <a
            rel="noopener noreferrer"
            target={"_blank"}
            href="mailto:abdalrahmandaas963@gmail.com"
          >
            omra08247@gmail.com
          </a>
          <div className="line" />
        </div>
        <div className="social">
          <a
            rel="noopener noreferrer"
            target={"_blank"}
            href="https://instagram.com/omar__daas?igshid=YmMyMTA2M2Y="
          >
            <Instagram />
          </a>
          <a
            rel="noopener noreferrer"
            target={"_blank"}
            href="https://www.facebook.com/profile.php?id=100009097701301"
          >
            <Facebook />
          </a>
          <a
            rel="noopener noreferrer"
            target={"_blank"}
            href="https://t.me/ArchOmardaas"
          >
            <Telegram />
          </a>
          <a
            rel="noopener noreferrer"
            target={"_blank"}
            href="https://wa.me/qr/UYXQOPAEJRE3G1"
          >
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
