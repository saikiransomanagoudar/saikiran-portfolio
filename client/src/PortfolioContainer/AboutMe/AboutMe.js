import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./AboutMe.css";

export default function AboutMe(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  // Subscribe to scroll service for fade-in animation
  ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);
  const SCREEN_CONSTANTS = {
    description: `
        I'm a software engineer with over 4 years of experience building reliable, scalable web applications with a strong focus on frontend and full-stack development. I began my career at Wipro, where I grew into a Senior Software Engineer role with a strong focus on building responsive, user-friendly frontend applications for enterprise-scale systems. More recently, I completed my Master’s in Computer Science at the Illinois Institute of Technology and continued sharpening my full-stack skills through a fellowship at Headstarter.
        At Headstarter, I led a team in delivering multiple full-stack web applications using Agile (Scrum) practices. I developed AI-driven features using Next.js and the OpenAI API, integrated real-time capabilities with Firebase, and implemented Stripe for secure transactions—resulting in notable gains in performance, accuracy, and user engagement. This experience allowed me to work across the stack, combining clean UI development with scalable backend services and deployment pipelines.
        My technical toolkit includes JavaScript, TypeScript, Java, and Python, and I’ve worked with frameworks like Next.js, Node.js, and Flask. I’m also experienced with tools like Docker and AWS, and familiar with databases such as MySQL, MongoDB, and Firebase.
        I care deeply about creating intuitive user experiences, writing maintainable code, and delivering software that’s both reliable and efficient. I enjoy collaborating in cross-functional teams, continuously improving developer workflows, and solving real-world problems through thoughtful engineering and design.
      `,
      // I enjoy working across the stack but especially thrive in frontend development—creating clean, responsive, and user-friendly interfaces using JavaScript, TypeScript, and modern frameworks. I’ve also built and maintained backend services using Node.js, Flask, and Spring Boot when needed. My experience includes working with databases like MySQL, MongoDB, and Firebase, and deploying applications using tools like Docker, Kubernetes, and AWS.
      // I care about writing clean, maintainable code, ensuring smooth user experiences, and building systems that are easy to evolve and support. I've contributed to projects involving CI/CD, frontend performance tuning, and cross-functional collaboration to deliver high-quality, user-centered products. 
      // My approach to software engineering is practical, team-oriented, and design-driven—focused on solving real problems through thoughtful interfaces, clean architecture, and continuous improvement.
      // 
    highlights: {
      bullets: [
        "Delivered several full-stack web applications using Agile and CI/CD practices",
        "Contributed to a smooth AWS hybrid cloud migration for 30+ applications, reducing downtime",
        "Integrated AI features into chatbots to enhance customer engagement",
        "Streamlined deployment workflows and documentation to support team collaboration",
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
                Get in Touch{" "}
              </button>
              <a
                href="https://drive.google.com/file/d/1PrnYE3meU8Cj-jKmKM9Aq1z52D9BtKgt/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btn highlighted-btn">
                  View Full Resume
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
