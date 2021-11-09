import React from 'react'
import {
    AiFillInstagram,
    AiFillLinkedin,
    AiFillTwitterCircle,
    AiFillYoutube,
    AiFillFacebook,
  } from "react-icons/ai";
import Footer from './Footer';
function Media() {
    return (
   
        <div className="media-links center-it corners" data-aos="zoom-in">
            <a href="https://instagram.com/qendraius" className="links">
              <AiFillInstagram />
            </a>
            <a
              href="https://linkedin.com/in/ius-center-6859a6213"
              className="links"
            >
              <AiFillLinkedin />
            </a>
            <a href="" className="links">
              <AiFillTwitterCircle />
            </a>
            <a href="" className="links">
              <AiFillYoutube />
            </a>
            <a href="https://facebook.com/qendraius" className="links">
              <AiFillFacebook />
            </a>
          </div>
       
    )
}

export default Media
