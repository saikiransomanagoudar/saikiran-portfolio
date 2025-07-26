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
      category: "LANGUAGES",
      skills: [
        {
          skill: "JavaScript",
          ratingPercentage: 100,
          icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
        },
        {
          skill: "TypeScript",
          ratingPercentage: 80,
          icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
        },
        {
          skill: "Python",
          ratingPercentage: 85,
          icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
        },
        {
          skill: "Java",
          ratingPercentage: 90,
          icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg",
        },
        {
          skill: "C",
          ratingPercentage: 70,
          icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg",
        },
        {
          skill: "Dart",
          ratingPercentage: 40,
          icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/dart/dart-original.svg",
        },
        {
          skill: "SQL",
          ratingPercentage: 100,
          icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg",
        },
      ],
    },
    {
      category: "FRONTEND",
      skills: [
        {
          skill: "React",
          ratingPercentage: 100,
          icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
        },
        {
          skill: "Redux",
          ratingPercentage: 85,
          icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg",
        },
        {
          skill: "Next.js",
          ratingPercentage: 95,
          icon: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg",
        },
        {
          skill: "Flutter",
          ratingPercentage: 40,
          icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/flutter/flutter-original.svg",
        },
        {
          skill: "HTML5",
          ratingPercentage: 100,
          icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg",
        },
        {
          skill: "CSS3",
          ratingPercentage: 100,
          icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg",
        },
      ],
    },
    {
      category: "STYLING",
      skills: [
        {
          skill: "Tailwind",
          ratingPercentage: 100,
          icon: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
        },
        {
          skill: "Material UI",
          ratingPercentage: 85,
          icon: "https://mui.com/static/logo.png",
        }
      ],
    },
    {
      category: "BACKEND",
      skills: [
        {
          skill: "Node.js",
          ratingPercentage: 100,
          icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg",
        },
        {
          skill: "Spring Boot",
          ratingPercentage: 70,
          icon: "/icons/springboot.svg",
        },
        {
          skill: "Flask",
          ratingPercentage: 90,
          icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/flask/flask-original.svg",
        },
        {
          skill: "FastAPI",
          ratingPercentage: 85,
          icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/fastapi/fastapi-original.svg",
        },
        {
          skill: "LangChain",
          ratingPercentage: 85,
          icon: "/icons/langchain.svg",
        },
      ],
    },
    {
      category: "DATABASES",
      skills: [
        {
          skill: "MySQL",
          ratingPercentage: 95,
          icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg",
        },
        {
          skill: "MongoDB",
          ratingPercentage: 100,
          icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg",
        },
        {
          skill: "PostgreSQL",
          ratingPercentage: 95,
          icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg",
        },
        {
          skill: "Firebase",
          ratingPercentage: 100,
          icon: "https://www.gstatic.com/mobilesdk/160503_mobilesdk/logo/2x/firebase_28dp.png",
        },
      ],
    },
    {
      category: "MACHINE LEARNING LIBRARIES",
      skills: [
        {
          skill: "Keras",
          ratingPercentage: 85,
          icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/keras/keras-original.svg",
        },
        {
          skill: "TensorFlow",
          ratingPercentage: 80,
          icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/tensorflow/tensorflow-original.svg",
        },
        {
          skill: "Pandas",
          ratingPercentage: 70,
          icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/pandas/pandas-original.svg",
        },
        {
          skill: "Numpy",
          ratingPercentage: 70,
          icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/numpy/numpy-original.svg",
        },
        {
          skill: "Scikit-Learn",
          ratingPercentage: 80,
          icon: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg",
        },
        {
          skill: "Matplotlib",
          ratingPercentage: 50,
          icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/matplotlib/matplotlib-original.svg",
        },
      ],
    },
    {
      category: "BIG DATA & ANALYTICS",
      skills: [
        {
          skill: "Hadoop",
          ratingPercentage: 85,
          icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/hadoop/hadoop-original.svg",
        },
        {
          skill: "Apache Spark",
          ratingPercentage: 85,
          icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/apachespark/apachespark-original.svg",
        },
        {
          skill: "Elasticsearch",
          ratingPercentage: 90,
          icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/elasticsearch/elasticsearch-original.svg",
        },
        {
          skill: "Splunk",
          ratingPercentage: 60,
          icon: "/icons/splunk.svg",
        },
      ],
    },
    {
      category: "AI & NLP TOOLS",
      skills: [
        {
          skill: "OpenAI",
          ratingPercentage: 95,
          icon: "/icons/openai.svg",
        },
        {
          skill: "LangGraph",
          ratingPercentage: 85,
          icon: "/icons/langgraph.svg",
        },
      ],
    },
    {
      category: "CLOUD & DEVOPS",
      skills: [
        {
          skill: "Amazon AWS",
          ratingPercentage: 95,
          icon: "/icons/amazonwebservices.svg",
        },
        {
          skill: "Docker",
          ratingPercentage: 90,
          icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg",
        },
        {
          skill: "Kubernetes",
          ratingPercentage: 50,
          icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/kubernetes/kubernetes-plain.svg",
        },
        {
          skill: "Jenkins",
          ratingPercentage: 70,
          icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/jenkins/jenkins-original.svg",
        },
        {
          skill: "Maven",
          ratingPercentage: 80,
          icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/maven/maven-original.svg",
        },
        {
          skill: "Linux",
          ratingPercentage: 100,
          icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg",
        },
        {
          skill: "Powershell",
          ratingPercentage: 100,
          icon: "https://img.shields.io/badge/PowerShell-012456?style=flat-square&logo=powershell&logoColor=white",
        },
      ],
    },
    {
      category: "VERSION CONTROL & TOOLS",
      skills: [
        {
          skill: "Github",
          ratingPercentage: 100,
          icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg",
        },
        {
          skill: "Bitbucket",
          ratingPercentage: 95,
          icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/bitbucket/bitbucket-original.svg",
        },
        {
          skill: "JIRA",
          ratingPercentage: 85,
          icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/jira/jira-original.svg",
        },
        // {
        //   skill: "XL Release",
        //   ratingPercentage: 60,
        //   icon: "https://via.placeholder.com/48?text=XL+Release",
        // },
      ],
    },
    {
      category: "TESTING",
      skills: [
        {
          skill: "JUnit",
          ratingPercentage: 90,
          icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/junit/junit-original.svg",
        },
        {
          skill: "Selenium",
          ratingPercentage: 70,
          icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/selenium/selenium-original.svg",
        },
        {
          skill: "Jest",
          ratingPercentage: 80,
          icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/jest/jest-plain.svg",
        },
      ],
    },
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
          {props.subredditLink && (
            <a
              href={props.subredditLink}
              target="_blank"
              rel="noopener noreferrer"
              className="project-github-link"
            >
              View Subreddit
            </a>
          )}
        </div>
        <br />
      </div>
    );
  };

  const resumeBullets = [
    { label: "Education", logoSrc: "education.svg" },
    { label: "Work History", logoSrc: "work-history.svg" },
    { label: "Programming Skills", logoSrc: "programming-skills.svg" },
    { label: "Projects Completed", logoSrc: "projects.svg" },
    { label: "Interests", logoSrc: "interests.svg" },
    { label: "Extracurriculars", logoSrc: "typing.svg" }
  ];

  const renderWorkExperience = () => {
    return (
      <div className="work-experience-container">
        <ResumeHeading
          heading={"Headstarter AI"}
          subHeading={"Software Engineer Fellow | Chicago, Illinois, United States"}
          fromDate={"Jul 2024"}
          toDate={"Aug 2024"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
            &rarr; Led a 3-member team to deliver 4+ full-stack web applications by adopting Agile (Scrum) methodologies with CI/CD pipelines, cutting average deployment time by 40%.<br />
            &rarr; Engineered AI-driven solutions using Next.js, Node.js, and OpenAI APIs to deliver real-time intelligent responses, boosting chatbot answer accuracy by 35% and enhancing user engagement.<br />
            &rarr; Integrated a modern tech stack across projects, including Firebase for real-time data and authentication, Stripe for secure payments, and Tailwind CSS for responsive UI design.<br />
          </span>
        </div>
        <br/>
        <ResumeHeading
          heading={"Wipro Limited"}
          subHeading={"Senior Software Engineer | Bengaluru, Karnataka, India"}
          fromDate={"Sep 2019"}
          toDate={"Oct 2022"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
            &rarr; Spearheaded the migration of 30+ client‑facing web applications to an AWS hybrid cloud, with a strong focus on responsive design and optimized UI performance, reducing system downtime by 25%.<br />
            &rarr; Standardized disaster recovery protocols for critical UI components and led gap analyses with cross‑functional teams to ensure 90% application functionality post‑migration.<br />
            &rarr; Optimized cloud resource allocation for frontend assets and dynamic content, cutting operational costs by 20% while maintaining rigorous performance benchmarks.<br />
            &rarr; Managed Agile processes using JIRA and Scrum methodologies—overseeing sprint planning, estimation, daily standups, and retrospectives—to boost team efficiency by 30%.<br />
            &rarr; Automated deployment workflows for web applications on AWS, reducing manual intervention by 50% and ensuring reliable, rapid releases.<br />
          </span>
        </div>
        <br/>
        <ResumeHeading
          heading={"Wipro Limited"}
          subHeading={"Software Engineer | Bengaluru, Karnataka, India"}
          fromDate={"Oct 2022"}
          toDate={"May 2023"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
            &rarr; Implemented interactive UI components using modern frontend framework Next.js with React library to enhance user engagement and streamline navigation—resulting in a 15% reduction in page load times.<br />
            &rarr; Maintained detailed documentation focused on scalable frontend architectures and efficient knowledge transfer, reducing new developer onboarding time by 30%.<br />
            &rarr; Reengineered the UI/UX of client-facing web applications using Next.js, React.js, and Tailwind CSS, improving component rendering efficiency and responsiveness, which increased user session duration by 20% and reduced bounce rates by 15%.<br />
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
                <img src={skill.icon} alt={skill.skill} className="skill-icon" />
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
            subredditLink={projectDetails.subredditLink}
          />
        ))}
      </div>
    );
  };

  const projectDetails = [
    {
      title: "GIF Enigma",
      duration: { fromDate: "Mar 2025", toDate: "Mar 2025" },
      description:
        "GIF Enigma is a word/phrase-guessing game built for Reddit community where players interpret GIFs to uncover a hidden word or phrase. A fun and engaging challenge that tests your ability to think visually and make connections.",
      subredditLink: "https://www.reddit.com/r/PlayGIFEnigma/",
    },
    {
      title: "Text2Block",
      duration: { fromDate: "Dec 2024", toDate: "Jan 2025" },
      description:
        "Text2Block is a web app to convert text prompts into visual flowcharts, achieving 50+ active users daily since deployment on render.com, simplifying complex ideas into visuals for enhanced understanding.",
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
            {"MASTER'S IN COMPUTER SCIENCE"}
            <br />
            {"Chicago, Illinois, United States"}
          </>
        }
        fromDate={"Aug 2023"}
        toDate={"Dec 2025"}
      />
      <ResumeHeading
        heading={"Reva University"}
        subHeading={
          <>
            {"BACHELOR'S IN COMPUTER SCIENCE & INFORMATION TECHNOLOGY"}
            <br />
            {"Bengaluru, Karnataka, India"}
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
