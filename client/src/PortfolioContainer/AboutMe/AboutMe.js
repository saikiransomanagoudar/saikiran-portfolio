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
      "Hello! I'm Saikiran, currently pursuing my Master's in Computer Science student with a passion for using technology to make a meaningful impact on the world. I’m driven by the desire to tackle complex problems and create innovative solutions, particularly in the realms of Cloud Computing and Artificial Intelligence. My expertise spans across Full Stack Web Development, Amazon Web Services, RESTful APIs, and various testing tools like SoapUI and Postman. I’ve also worked extensively with IBM Integration Bus (IIB). My technical toolkit includes strong proficiency in programming languages such as C, Java, Python, and JavaScript, along with its popular frameworks like React.js, Next.js, and React Native. Outside of my professional life, I’m an avid reader with a deep interest in technology, self-improvement, and biographies. I believe in continuous learning and growth.",
    highlights: {
      bullets: [
        "Full Stack Web Development",
        "Interactive Front-End as per the design",
        "React and Next.js",
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
                href="https://drive.google.com/drive/u/0/folders/1Xxgsco8TryKshZDGejkDoTKnyi4sBYHx"
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
