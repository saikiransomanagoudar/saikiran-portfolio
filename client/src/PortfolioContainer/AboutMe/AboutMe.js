import React, { useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./AboutMe.css";

export default function AboutMe(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);
  const SCREEN_CONSTANTS = {
    description:
      "Welcome to my profile! My name is Saikiran. I'm a graduating senior in Computer Science interested in changing the world! I would like to use my skills to create positive solutions to complex problems, especially in Cloud Computing and Artificial Intelligence. I have experience in Full Stack Web Development, Amazon Web Services, REST API, SoapUI, Postman, IBM Integration Bus (IIB). Solid expertise in C, Java, Python, JavaScript (and it's frameworks - ReactJS, NextJS, React Native). \nOutside of work, I love to read books about technology, self-help, biographies and auto-biographies. Please feel free to connect with me! I would love to learn more about you.",
    highlights: {
      bullets: [
        "Full Stack Web Development",
        "Interactive Front End as per the design",
        "ReactJS and React Native",
        "Building REST API",
        "Managing database",
      ],
      heading: "Here are a few highlights:",
    },
  };
  const renderHighlight = () => {
    return SCREEN_CONSTANTS.highlights.bullets.map((value, i) => (
      <div className="highlight" key={i}>
        <div className="highlight-blob"></div>
        <span>{value}</span>
      </div>
    ));
  };

  return (
    <div
      className="about-me-container screen-container fade-in"
      id={props.id || ""}
    >
      <div className="about-me-parent">
        <ScreenHeading title={"About Me"} />
        <div className="about-me-card">
          <div className="about-me-profile"></div>
          <div className="about-me-details">
            <span className="about-me-description">
              {SCREEN_CONSTANTS.description}
            </span>
            <div className="about-me-highlights">
              <div className="highlight-heading">
                <span>{SCREEN_CONSTANTS.highlights.heading}</span>
              </div>
              {renderHighlight()}
            </div>
            <div className="about-me-options">
              <button
                className="btn primary-btn"
                onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
              >
                {" "}
                Hire Me{" "}
              </button>
              <a
                href="https://docs.google.com/document/d/11Aq8qunF7iYcQ_L6a-QEh1vQf21mURcz"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btn highlighted-btn">Get Resume</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
