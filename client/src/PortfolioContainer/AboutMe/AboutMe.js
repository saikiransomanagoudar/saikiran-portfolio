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
    description: `
        Skilled, dedicated, and results-driven Senior Software Engineer with 4+ years of experience in developing, optimizing, and deploying intelligent applications and scalable systems. 
        Proven expertise in leveraging machine learning, natural language processing (NLP), and automation to build high-performance AI solutions. 
        Skilled in full-stack development with Python, Java, JavaScript, TypeScript, utilizing frameworks such as Django, Spring Boot, and Node.js to create robust and efficient applications. 
        Adept at database management with MongoDB, MySQL, Firebase, and Pinecone, ensuring seamless data processing and retrieval. Experienced in cloud computing with AWS, Kubernetes, and Docker, implementing secure and scalable infrastructure solutions. Strong focus on DevOps practices, CI/CD pipelines, and software reliability to streamline deployments and optimize performance. Proven ability to lead cross-functional teams, drive Agile development processes, and deliver innovative software solutions that enhance operational efficiency. 
        Committed to technical excellence, problem-solving, and delivering impactful AI-driven applications that improve business outcomes and user experience.
      `,
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
                onClick={() => ScrollService.scrollToHireMe()}
              >
                {" "}
                Hire Me{" "}
              </button>
              <a
                href="https://drive.google.com/file/d/1uRQjwj-a5UPRy_nX07NgQ7c3Nc4jvgif/view?usp=sharing"
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
