import React from "react";
import Component from "./Component";
import "./home.css";
import Media from "../Media";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "../Footer";
import { HashLink } from "react-router-hash-link";

export default function Home() {
  AOS.init({ duration: 1000 });
  return (
    <>
      <div className="home" id="top">
        <div className="hero center-it">
          <div className="hero-text">
            <div className="wrap-text ">
              <div
                className="line"
                data-aos="zoom-in"
                data-aos-duration="1000"
              ></div>
              <h2 data-aos="fade-right" data-aos-delay="300">
                Located In Albania <br /> Acting Globaly
              </h2>
            </div>
            <Media />
            <div className="wrap-links center-it">
              <HashLink to="/whoweare#top" className="primary">
                Learn More
              </HashLink>
            </div>
          </div>
          <div className="hero-img">
            <img src="./background.jpeg" alt="Ius Background" />
          </div>
        </div>
        <Component
          title="Who"
          sectitle="We Are"
          text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
          url="/whoweare#top"
          
        />
        <Component
          title="How"
          sectitle="We Work"
          text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
          url="howwework#top"
        />
        <Component
          title="What"
          sectitle="We Do"
          text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
          url="whatwedo#top"
        />
      </div>
      <Footer />
    </>
  );
}
