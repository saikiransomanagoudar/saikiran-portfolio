import React from "react";
import Typical from "react-typical";
import ScrollService from "../../../utilities/ScrollService";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram';
import { faYoutube } from '@fortawesome/free-brands-svg-icons/faYoutube';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin';
import { ReactComponent as XLogo} from '../../../assets/Profile/icons8-twitterx.svg';
import "./Profile.css";

const socialMediaIcons = [
  {
    href: "https://www.instagram.com/saikiran_hs/",
    icon: faInstagram,
    label: "Instagram"
  },
  {
    href: "https://www.youtube.com/channel/UCvqP86Zm7Bda94gHnUtlK2g",
    icon: faYoutube,
    label: "YouTube"
  },
  {
    href: "https://twitter.com/SaikiranHS1",
    icon: <XLogo />, // Use custom SVG for X logo
    label: "Twitter"
  },
  {
    href: "https://www.linkedin.com/in/saikiran-h-s/",
    icon: faLinkedin,
    label: "LinkedIn"
  }
];

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
          <div className="colz-icon">
              {socialMediaIcons.map(({ href, icon, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer">
                  {typeof icon === 'string' ? <FontAwesomeIcon icon={icon} /> : icon}
                </a>
              ))}
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
                    "Softwatre Engineer Fellow",
                    1000,
                    "Enthusiastic Developer 😎",
                    1000,
                    "Reactjs Developer 📱",
                    1000,
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
              Hire Me
            </button>
            <a
              href="https://drive.google.com/file/d/12KnSjGjBVVuWwdXOFxxd4Yn2Qh5eZ6sZ/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              download={"Saikiran_Somanagoudar_Resume.pdf"}
            >
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
          {/* <a href="https://data.typeracer.com/pit/profile?user=saikiran1&ref=badge" target="_top"><img src="https://data.typeracer.com/misc/badge?user=saikiran1" border="0" alt="TypeRacer.com scorecard for user saikiran1"/></a> */}
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
