import React from "react";
import Typical from "react-typical";
import ScrollService from "../../../utilities/ScrollService";
import "./Profile.css";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a
                href="https://github.com/saikiransomanagoudar"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-github"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/saikiransomanagoudar"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-linkedin"></i>
              </a>
              <a
                href="https://www.youtube.com/channel/UCvqP86Zm7Bda94gHnUtlK2g"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-youtube-square"></i>
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'm <span className="highlighted-text">Saikiran</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                {" "}
                <Typical
                  loop={Infinity}
                  steps={[
                    "Software Engineer",
                    1500,
                    "Cloud & DevOps Practitioner",
                    1500,
                    "Full-Stack Developer",
                    1500,
                    "AI & NLP Integrator",
                    1500,
                  ]}
                />
              </h1>
            </span>
            <span className="profile-role-tagline">
              Knack of building applications with front and back end operations.
            </span>
          </div>
          <div className="profile-options">
            <button
              className="btn primary-btn"
              onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
            >
              Get in Touch
            </button>
            <a
              href="https://drive.google.com/file/d/1uRQjwj-a5UPRy_nX07NgQ7c3Nc4jvgif/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              download={"Saikiran_Somanagoudar_Resume.pdf"}
            >
              <button className="btn highlighted-btn">View Full Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
