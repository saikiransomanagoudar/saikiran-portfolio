import React, { useState, useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Resume.css";

const Resume = (props) => {
  /* STATES */
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
            <span>{props.heading ? props.heading : ""}</span>
            {props.fromDate && props.toDate ? (
              <div className="heading-date">
                {props.fromDate + "-" + props.toDate}
              </div>
            ) : (
              <div></div>
            )}
            </div>
          <div className="resume-sub-heading">
            <span>{props.subHeading ? props.subHeading : ""}</span>
          </div>
          <div className="resume-heading-description">
            <span>{props.description ? props.description : ""}</span>
          </div>
        </div>
    );
  };

  const resumeBullets = [
    { label: "Education", logoSrc: "education.svg" },
    { label: "Work History", logoSrc: "work-history.svg" },
    { label: "Programming Skills", logoSrc: "programming-skills.svg" },
    { label: "Projects", logoSrc: "projects.svg" },
    { label: "Interests", logoSrc: "interests.svg" },
  ];

  const programmingSkillDetails = [
    { skill: "Core Java", ratingPercentage: 95 },
    { skill: "C Programming", ratingPercentage: 90},
    { skill: "MongoDB", ratingPercentage: 80 },
    { skill: "HTML", ratingPercentage: 85 },
    { skill: "CSS", ratingPercentage: 80 },
    { skill: "JavaScript", ratingPercentage: 80 },
    { skill: "ReactJS", ratingPercentage: 80 },
  ];

  const projectDetails = [
    {
      title: "Personal Portofolio Website",
      duration: { fromDate: "2023", toDate: "2024" },
      description:
        "A Personal Portfolio website to showcase all my details and projects at one place",
      subHeading: "Technologies Used: React.js, Bootstrap",
    },
    {
      title: "Urban Mobility Transportation App",
      duration: { fromDate: "2023", toDate: "2023" },
      description:
        "This project focuses on developing an interactive web application dedicated to enhancing urban mobility and transportation. The application integrates various modules, each designed to address specific needs within the urban transportation landscape.",
      subHeading:
        "Technologies Used: Frontend-React.js for building the user interface, Backend-Node.js, Database-MongoDB, Google Maps JavaScript API for mapping functionalities",
    },
  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"Illinois Institute of Technology"}
        subHeading={
          <>
            {"MASTER OF COMPUTER SCIENCE"}
            <br />
            {"Chicago, Illinois"}
          </>
        }
        fromDate={"Aug 2023"}
        toDate={"Dec 2025"}
      />
      <ResumeHeading
        heading={"Reva University"}
        subHeading={
          <>
            {"BACHELOR OF COMPUTER SCIENCE & INFORMATION TECHNOLOGY"}
            <br />
            {"Bengaluru, Karnataka"}
          </>
        }
        fromDate={"Mar 2015"}
        toDate={"Jun 2019"}
      />
      <ResumeHeading
        heading={"Navodaya Vidyalaya Samiti"}
        subHeading={"HIGH SCHOOL"}
        fromDate={"Jun 2008"}
        toDate={"Mar 2015"}
      />
    </div>,
    <div className="resume-screen-container" key="work-experience">
      <ResumeHeading
        heading={"Headstarter AI"}
        subHeading={
          <>
            {"Software Engineer Fellow"}
            <br />
            {"Remote"}
          </>
        }
        fromDate={"Jul 2024"} 
        toDate={"Present"}
      />
      <div className="experience-description">
        <span className="resume-description-text">
          Currently working as a Software Engineer Fellow.
        </span>
      </div>
      <ResumeHeading
        heading={"Wipro Limited"}
        subHeading={
          <>
            {"Senior Software Engineer (QA)"}
            <br />
            {"Bengaluru, Karnataka"}
          </>
        }
        fromDate={"Sep 2019"}
        toDate={"Oct 2022"}
      />
      <div className="experience-description">
        <span className="resume-description-text">
          - Delivered 32 on-premise applications of different Squads to AWS
          hybrid cloud with end-to-end responsibility.
        </span>
      </div>
      <ResumeHeading
        heading={"Wipro Limited"}
        subHeading={
          <>
            {"Software Engineer (QA)"}
            <br />
            {"Bengaluru, Karnataka"}
          </>
        }
        fromDate={"Oct 2022"}
        toDate={"May 2023"}
      />
      <div className="experience-description">
        <span className="resume-description-text">
          - Assisted in Agile, Squads/Studio using JIRA that includes sprint
          planning with story point estimation, standups, retrospective,
          playbacks and sprint dashboards.
        </span>
      </div>
      <br />
      <div
        className="resume-screen-container programming-skills-container"
        key="programming-skills"
      >
        {programmingSkillDetails.map((skill, index) => (
          <div className="skill-parent" key={index}>
            <div className="heading-bullet"></div>
            <span>{skill.skill}</span>
            <div className="skill-percentage">
              <div
                style={{ width: skill.ratingPercentage + "%" }}
                className="active-percentage-bar"
              ></div>
            </div>
          </div>
        ))}
      </div>
      <br />
      <br />
      <br />
      <div className="resume-screen-container" key="projects">
        {projectDetails.map((projectDetails, index) => (
          <ResumeHeading
            key={index}
            heading={projectDetails.title}
            subHeading={projectDetails.subHeading}
            description={projectDetails.description}
            fromDate={projectDetails.duration.fromDate}
            toDate={projectDetails.duration.toDate}
          />
        ))}
      </div>
      <br />
      <br />
      <br />
      <br />

      <div className="resume-screen-container" key="interests">
        <ResumeHeading
          heading="Swimming"
          description="Apart from being a tech enthusiast and a coder, I also enjoy swimming simply because it keeps me healthy throughout the day."
        />
        <ResumeHeading
          heading="Trekking"
          description="To relax and to soothe my soul, I love to go for trekking with friends or alone sometimes, occasionally on weekends."
        />
        <ResumeHeading
          heading="Competitive Gaming"
          description="I like to challenge my reflexes a lot while competing in football, and action shooter games, pushing the rank and having interactive gaming sessions excites me the most."
        />
      </div>
    </div>,
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;
    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };
    setCarousalOffsetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img
          className="bullet-logo"
          src={require(`../../assets/Resume/${bullet.logoSrc}`)}
          alt="Oops... no internet connection"
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreen = () => {
    return (
      <div
        style={carousalOffsetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };

  useEffect(() => {
    return () => {
      /* UNSUBSCRIBE THE SUBSCRIPTIONS */
      fadeInSubscription.unsubscribe();
    };
  }, [fadeInSubscription]);

  return (
    <div className="resume-container screen-container fade-in" id={props.id || ""}>
      <div className="resume-content">
        <ScreenHeading title={"Resume"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>
          <div className="resume-bullet-details">{getResumeScreen()}</div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
