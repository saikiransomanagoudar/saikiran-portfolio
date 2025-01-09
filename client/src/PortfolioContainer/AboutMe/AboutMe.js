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
        I'm a Software Engineer passionate about solving complex problems at the intersection of Cloud Computing and Artificial Intelligence. With over 4 years at Wipro, I've contributed to large-scale projects by automating processes, transforming applications, and optimizing performance in cloud-driven environments.
    
        My expertise includes full-stack development, leveraging AWS, and building scalable solutions with React.js, Next.js, and RESTful APIs. I thrive in fast-paced environments where innovation meets efficiency.
    
        Currently pursuing a Master’s in Computer Science at Illinois Tech, I’m focusing on cutting-edge technologies that push the boundaries of what’s possible. Along the way, I've honed my skills in Java, Python, JavaScript, and cloud infrastructure.
    
        Outside of coding, I’m an avid reader exploring technology, self-improvement, and biographies. Always eager to connect with like-minded professionals, let’s collaborate on creating real-world impact together!
      `,
      highlights: {
        bullets: [
          "Delivered 32 apps to AWS, cutting downtime by 25%.",
          "Led Agile teams in complex cloud projects.",
          "Built and deployed 5 AI solutions in 5 weeks.",
          "Developed automated web scrapers and AI-powered tools.",
          "Expert in Java, React, AWS, and APIs.",
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
                href="https://drive.google.com/file/d/1fntohypU5JXZj6gxVvR_QpcyyFt1_u-H/view?usp=drive_link"
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
