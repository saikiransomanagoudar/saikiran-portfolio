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
      carousalElement.style.height = "auto";
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
          {props.websiteLink && (
            <a
              href={props.websiteLink}
              target="_blank"
              rel="noopener noreferrer"
              className="project-github-link"
            >
              Visit Website
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
            - Built and deployed five AI projects within five weeks following agile methodologies with CI/CD practices.<br />
            - Led a team of three to develop an interactive customer support agent using Next.js, implementing a custom RAG pipeline with OpenAI and Pinecone that responds based on a company's knowledge base.<br />
            - Engineered an automated web scraper to extract and upsert professor data from Rate My Professor into a Pinecone vector index, integrating it with a RAG pipeline using LangChain and OpenAI GPT-4 for real-time query insights.
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
            - Successfully migrated 32 on-premises applications from various Squads to AWS hybrid cloud from Fujitsu, achieving a 25% reduction in system downtime using SDLC.<br />
            - Developed standards for disaster recovery systems and performed gap analysis with a 12-member team to implement recovery plans, maintaining 90% application functionality.<br />
            - Specialized in Infrastructure, Database, Application, and Security areas for applications deployed on Fujitsu cloud for Australia's Road and Maritime Services government customer.<br />
            - Created comprehensive technical documentation for disaster recovery plans and middleware APIs to enhance cross-team collaboration and onboarding efficiency.<br />
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
            - Led Agile Squads/Studio implementations using JIRA, managing sprint planning with story point estimation, standups, retrospectives, playbacks, and sprint dashboards.<br />
            - Developed front-end application UI components including landing pages and sign-up/sign-in interfaces.<br />
            - Monitored project build progress through project schedules and weekly reporting, incorporating Studio dashboards, status updates, risk assessments, and resolution tracking in Squads.<br />
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
            websiteLink={projectDetails.websiteLink}
          />
        ))}
      </div>
    );
  };

  const projectDetails = [
    {
      title: "Text2Block",
      duration: { fromDate: "Dec 2024", toDate: "Jan 2025" },
      description:
        "Text2Block is a web app to convert text prompts into visual flowcharts, achieving 100+ active users daily since deployment on render.com, simplifying complex ideas into visuals for enhanced understanding.",
      websiteLink: "https://text2block-kie0.onrender.com/",
    },
    {
      title: "Smart Retail Bookstore",
      duration: { fromDate: "Aug 2024", toDate: "Sep 2024" },
      description:
        "Smart Retail Bookstore is a full-stack web application that uses AI powered recommendation to suggest books to users based on their preferences. The project leverages a collaborative filtering algorithm to provide personalized recommendations to users. It also includes features like user authentication, built in chatbot with multiple agents (Orders Agent, Recommendation Agent, Fraud/Damage Agent), and cart management.",
        subHeading: "Technologies Used:- Frameworks - Flutter, LangGraph, LangChain, FastAPI | Languages - Dart, Python | Styling - Tailwind CSS | APIs: Hardcover GraphQL, OpenAI gpt-4o-mini | Database - PostgreSQL",
      githubLink: "https://github.com/saikiransomanagoudar/smart-retail-bookstore-dart-flutter"
    },
    {
      title: "Medical Advice Chatbot",
      duration: { fromDate: "Oct 2024", toDate: "Oct 2024" },
      description:
        "The GenAI-Powered Medical Advice Chatbot is a conversational assistant aimed at providing medical advice and guidance. It combines the robust capabilities of Rasa for managing dialogues and intents with LangGraph for advanced language processing. This tool is ideal for users seeking quick medical information or guidance in a conversational format. The bot provides medical advice related to symptoms, conditions, and treatment options. It leverages multiple specialized agents (such as GreetingAgent, MedicineAgent, MedicalHospitalAgent, and MedicalDepartmentAgent) to handle different user queries in healthcare contexts.",
      subHeading:
        "Technologies Used:- Frameworks - Rasa, LangGraph | Languages - Python | APIs - OpenAI gpt-3.5 | Library - dotenv",
      githubLink: "https://github.com/saikiransomanagoudar/medical-advice"
    },
    {
      title: "Smart Homes | E-commerce Application",
      duration: { fromDate: "Aug 2024", toDate: "Sep 2024" },
      description:
        "Smart Homes is a full-stack web application that simulates an e-commerce platform for purchasing smart home products. It enables users to explore a wide range of smart home devices, add them to their cart, and complete orders seamlessly. The project follows the MVC (Model-View-Controller) architecture, with MongoDB and MySQL databases handling data storage and management, providing a robust and scalable solution for managing both product and user data.",
      subHeading:
        "Technologies Used:- Frameworks - React, Jakarta EE | Languages - JavaScript (Runtime environment: NodeJS), Java, Python | Styling - Tailwind CSS | Backend - Java Servlets | Databases - MySQL, MongoDB",
      githubLink: "https://github.com/saikiransomanagoudar/smart-homes"
    },
    {
      title: "Recallect | AI-Powered Flashcard App",
      duration: { fromDate: "Aug 2024", toDate: "Aug 2024" },
      description:
        "Developed a comprehensive Next.js flashcard application with a focus on user experience and advanced features. The project integrated Firebase for robust data storage, Clerk for secure and customizable user authentication, and OpenAI to generate AI-powered flashcards. Implemented Stripe for secure payment processing, enabling a Pro Plan for users.",
      subHeading:
        "Technologies Used:- Framework - Next.js | Language - JavaScript (Runtime environment: NodeJS) | Styling - Tailwind CSS | APIs - OpenAI gpt-4o-mini, Clerk (Authentication), Stripe (Payment Processing) | Database - Firebase | Deployment - Vercel",
      githubLink: "https://github.com/saikiransomanagoudar/recallect"
    },
    {
      title: "ProfBot",
      duration: { fromDate: "Aug 2024", toDate: "Aug 2024" },
      description:
        "ProfBot is a chatbot that helps students in choosing the right professor for their academic needs based on rating, subject, and skills.",
      subHeading:
        "Technologies Used:- Framework - Next.js | Languages - JavaScript (Runtime environment: NodeJS), Python | Styling - Tailwind CSS | Database - Pinecone | Deployment - Vercel",
      githubLink: "https://github.com/saikiransomanagoudar/profbot"
    },
    {
      title: "Pantry Tracker",
      duration: { fromDate: "Jul 2024", toDate: "Aug 2024" },
      description:
        "Pantry Tracker is an inventory management application that helps users to keep track of their pantry items. Users can add, update, delete, and search for items in their pantry. The app includes user authentication features, allowing multiple users to securely track and manage their pantry inventory.",
      subHeading:
        "Technologies Used:- Framework - React | Language - JavaScript (Runtime environment: NodeJS) | Styling - Tailwind CSS | Database - Firebase | Deployment - Vercel",
      githubLink: "https://github.com/saikiransomanagoudar/pantry-tracker"
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
