import React from "react";
import "./CSS/HeaderMain.css";
import { Parallax } from "react-parallax";
import banner from "../image/background.png";
import Fade from "react-reveal/Fade";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(fas, fab);

const HeaderMain = () => {
  return (
    <div className="header" id="header">
      <Parallax
        className="header bgimg"
        blur={5}
        bgImage={banner}
        bgImageAlt="banner"
        strength={500}
      >
        <div className="banner-content">
          <Fade top>
            <div className="fadeInUp">
              <h5>HELLO</h5>
              <h2>I am Md.Al-amin Sahed</h2>
              <h4>Front-end Developer</h4>
            </div>
          </Fade>
          <Fade left cascade>
          <div className="social-media">
            <a href="https://www.linkedin.com/in/md-al-amin-sahed/">
              <FontAwesomeIcon icon={["fab", "linkedin"]} className="icon" />
            </a>
            <a href="https://github.com/alaminsahed">
              <FontAwesomeIcon icon={["fab", "github"]}  className="icon" />
            </a>
            <a href="https://alaminsahed.medium.com/">
              <FontAwesomeIcon icon={["fab", "medium"]}  className="icon" />
            </a>
            <a href="mailto:alaminsahed101@gmail.com">
              <FontAwesomeIcon icon={["fas", "envelope"]} className="icon" />
            </a>
          </div>
          </Fade>
        </div>
      </Parallax>
    </div>
  );
};

export default HeaderMain;
