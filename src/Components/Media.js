import React from "react";
import {
  AiFillInstagram,
  AiFillLinkedin,
  AiFillYoutube,
  AiFillFacebook,
} from "react-icons/ai";

function Media() {
  return (
    <div className="media-links center-it corners" data-aos="zoom-in">
      <a href="https://instagram.com/qendraius/" className="links">
        <AiFillInstagram />
      </a>
      <a href="https://linkedin.com/company/iuscenteral" className="links">
        <AiFillLinkedin />
      </a>
      <a
        href="https://youtube.com/channel/UCOV1p25pAZSTbiLvo9bj4Eg"
        className="links"
      >
        <AiFillYoutube />
      </a>
      <a href="https://facebook.com/qendraius" className="links">
        <AiFillFacebook />
      </a>
    </div>
  );
}

export default Media;
