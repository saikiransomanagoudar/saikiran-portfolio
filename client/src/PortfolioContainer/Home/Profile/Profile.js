import React, { useState, useEffect } from "react";
import ScrollService from "../../../utilities/ScrollService";
import "./Profile.css";

export default function Profile() {
  const roles = [
    "Software Engineer",
    // "Full-Stack Developer", 
    // "AI & ML Integrator",
    "Cloud & DevOps Practitioner"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % roles.length);
        setIsVisible(true);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, [roles.length]);

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
                <div className="role-animation-container">
                  <span 
                    className={`animated-role-text ${isVisible ? 'fade-in' : 'fade-out'}`}
                  >
                    {roles[currentIndex]}
                  </span>
                </div>
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
              href="https://drive.google.com/file/d/1oQnFxW965fsuaiUH0OO6-cabb_meBV34/view?usp=sharing"
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
