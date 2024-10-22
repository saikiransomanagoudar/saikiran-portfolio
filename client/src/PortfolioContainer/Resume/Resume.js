import React, { useState, useEffect, useRef } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Resume.css";

const Resume = (props) => {
  const programmingSkillsRef = useRef(null);
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);

  const programmingSkillDetails = [
    {
      category: "Languages",
      skills: [
        { skill: "Java", ratingPercentage: 95 },
        { skill: "Python", ratingPercentage: 85 },
        { skill: "JavaScript", ratingPercentage: 80 },
        { skill: "C Programming", ratingPercentage: 80 }
      ]
    },
    {
      category: "Frameworks",
      skills: [
        { skill: "React.js", ratingPercentage: 85 },
        { skill: "Next.js", ratingPercentage: 80 },
        { skill: "Tailwind CSS", ratingPercentage: 85 },
        { skill: "Node.js", ratingPercentage: 70 }
      ]
    },
    {
      category: "Databases",
      skills: [
        { skill: "MySQL", ratingPercentage: 75 },
        { skill: "MongoDB", ratingPercentage: 60 },
        { skill: "Firebase", ratingPercentage: 60 },
        { skill: "PostgreSQL", ratingPercentage: 50 },
        { skill: "Pinecone", ratingPercentage: 20 }
      ]
    },
    {
      category: "Libraries",
      skills: [
        { skill: "OpenAI API", ratingPercentage: 80 },
        { skill: "LangChain", ratingPercentage: 75 },
        { skill: "Stripe API", ratingPercentage: 70 },
        { skill: "Clerk API", ratingPercentage: 70 }
      ]
    }
  ];

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  useEffect(() => {
    const carousalElement = document.querySelector(".resume-details-carousal");
    if (carousalElement) {
      carousalElement.style.height = "auto"; // Adjust height dynamically
    }
  }, [selectedBulletIndex]);

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
          {"  "}
          {props.githubLink && (
            <a
              href={props.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="project-github-link"
            >
              View on GitHub
            </a>
          )}
        </div>
      </div>
    );
  };

  const resumeBullets = [
    { label: "Education", logoSrc: "education.svg" },
    { label: "Work History", logoSrc: "work-history.svg" },
    { label: "Programming Skills", logoSrc: "programming-skills.svg" },
    { label: "Personal Projects", logoSrc: "projects.svg" },
    { label: "Interests", logoSrc: "interests.svg" },
    { label: "Extracurriculars", logoSrc: "typing.svg" }
  ];

  const renderWorkExperience = () => {
    return (
      <div className="work-experience-container">
        <ResumeHeading
          heading={"Headstarter AI"}
          subHeading={"Software Engineer Fellow | Remote"}
          fromDate={"Jul 2024"}
          toDate={"Aug 2024"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
            - Built and deployed five AI projects in five weeks leveraging
            React.js, Next.js, Firebase, Clerk, and Vercel, following agile
            methodologies with weekly sprints and incorporated CI/CD practices
            for iterative deployment.
          </span>
        </div>
        <ResumeHeading
          heading={"Wipro Limited"}
          subHeading={"Senior Software Engineer | Bengaluru, Karnataka"}
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
          subHeading={"Software Engineer | Bengaluru, Karnataka"}
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
      </div>
    );
  };

  // Function to render programming skills
  const renderProgrammingSkills = () => {
    return (
      <div ref={programmingSkillsRef} className="programming-skills-container">
        {programmingSkillDetails.map((categoryDetail, categoryIndex) => (
          <div key={categoryIndex} className="skills-category">
            <h3>{categoryDetail.category}</h3>
            {categoryDetail.skills.map((skill, skillIndex) => (
              <div className="skill-parent" key={skillIndex}>
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
        ))}
      </div>
    );
  };

  const renderProjects = () => {
    return (
      <div className="projects-container">
        {projectDetails.map((projectDetails, index) => (
          <ResumeHeading
            key={index}
            heading={projectDetails.title}
            subHeading={projectDetails.subHeading}
            description={projectDetails.description}
            fromDate={projectDetails.duration.fromDate}
            toDate={projectDetails.duration.toDate}
            githubLink={projectDetails.githubLink}
          />
        ))}
      </div>
    );
  };

  const projectDetails = [
    {
      title: "Pantry Tracker",
      duration: { fromDate: "Jul 2024", toDate: "Aug 2024" },
      description:
        "Pantry Tracker is an inventory management application that helps users to keep track of their pantry items. Users can add, update, delete, and search for items in their pantry. The app includes user authentication features, allowing multiple users to securely track and manage their pantry inventory.",
      subHeading:
        "Technologies Used: Next.js, React.js, Tailwind CSS, Node.js, Firebase, Vercel",
      githubLink: "https://github.com/saikiransomanagoudar/pantry-tracker"
    },
    {
      title: "Recallect | AI-Powered Flashcard App",
      duration: { fromDate: "Aug 2024", toDate: "Aug 2024" },
      description:
        "Developed a comprehensive Next.js flashcard application with a focus on user experience and advanced features. The project integrated Firebase for robust data storage, Clerk for secure and customizable user authentication, and OpenAI to generate AI-powered flashcards. Implemented Stripe for secure payment processing, enabling a Pro Plan for users.",
      subHeading:
        "Technologies Used: Next.js, React.js, Stripe, OpenAI, Firebase, Clerk, Vercel",
      githubLink: "https://github.com/saikiransomanagoudar/recallect"
    },
    {
      title: "ProfBot",
      duration: { fromDate: "Aug 2024", toDate: "Aug 2024" },
      description:
        "ProfBot is a chatbot that helps students in choosing the right professor for their academic needs based on rating, subject, and skills.",
      subHeading:
        "Technologies Used: Next.js, React.js, Python, Node.js, Python, PineconeDB, Vercel",
      githubLink: "https://github.com/saikiransomanagoudar/profbot"
    },
    {
      title: "Smart Homes | E-commerce Application",
      duration: { fromDate: "Aug 2024", toDate: "Sep 2024" },
      description:
        "Smart Homes is a full-stack web application that simulates an e-commerce platform for purchasing smart home products. It enables users to explore a wide range of smart home devices, add them to their cart, and complete orders seamlessly. The project follows the MVC (Model-View-Controller) architecture, with MongoDB and MySQL databases handling data storage and management, providing a robust and scalable solution for managing both product and user data.",
      subHeading:
        "Technologies Used: React.js, React Router, Java Servlets, Jakarta EE, MySQL, MongoDB",
      githubLink: "https://github.com/saikiransomanagoudar/smart-homes"
    },
    {
      title: "Medical Advice Chatbot",
      duration: { fromDate: "Oct 2024", toDate: "Oct 2024" },
      description:
        "This project is a chatbot powered by Rasa and OpenAI GPT-3.5, utilizing Autogen for dynamic interaction generation. The bot provides medical advice related to symptoms, conditions, and treatment options. It leverages multiple specialized agents (such as GreetingAgent, MedicineAgent, MedicalHospitalAgent, and MedicalDepartmentAgent) to handle different user queries in healthcare contexts.",
      subHeading:
        "Technologies Used: Python, Rasa, OpenAI GPT-3.5, Autogen, dotenv, Rasa SDK, Rasa Shell",
      githubLink: "https://github.com/saikiransomanagoudar/medical-advice"
    }
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
      {renderWorkExperience()}
    </div>,
    <div className="resume-screen-container" key="programming-skills">
      {renderProgrammingSkills()}
    </div>,
    <div className="resume-screen-container" key="projects">
      {renderProjects()}
    </div>,
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
    </div>,
    <div className="resume-screen-container" key="extracurriculars">
      <a
        href="https://data.typeracer.com/pit/profile?user=saikiran1&ref=badge"
        target="_top"
      >
        <img
          src="https://data.typeracer.com/misc/badge?user=saikiran1"
          border="0"
          alt="TypeRacer.com scorecard for user saikiran1"
        />
      </a>
    </div>
  ];

  const handleCarousal = (index) => {
    console.log("Selected section index:", index);
    setSelectedBulletIndex(index);

    // Scroll to programming skills container when Programming Skills is selected
    if (index === 2 && programmingSkillsRef.current) {
      programmingSkillsRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
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
      <div className="resume-details-carousal">
        {resumeDetails.map((ResumeDetail, index) => (
          <div
            key={index}
            className={
              index === selectedBulletIndex
                ? "active-section"
                : "inactive-section"
            }
          >
            {ResumeDetail}
          </div>
        ))}
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
    <div
      className="resume-container screen-container fade-in"
      id={props.id || ""}
    >
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
