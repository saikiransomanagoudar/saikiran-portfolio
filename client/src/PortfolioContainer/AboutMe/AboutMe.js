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
        Experienced Software Engineer with 4+ years at Wipro specializing in Cloud Computing and AI. Track record of delivering impactful solutions through AWS applications and AI implementations. Strong expertise in full-stack development using React.js, Next.js, Java, and RESTful APIs. Currently pursuing Master's in Computer Science at Illinois Tech.
      `,
      highlights: {
        bullets: [
          "Optimized application performance through AWS migrations",
          "Led multiple Agile cloud transformation projects",
          "Developed automated AI tools and web scrapers",
          "Expert in Java, React, AWS, and API integration",
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
