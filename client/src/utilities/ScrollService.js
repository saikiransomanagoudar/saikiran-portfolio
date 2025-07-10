import { TOTAL_SCREENS } from "./commonUtils";
import { Subject } from "rxjs";

export default class ScrollService {
  static scrollHandler = new ScrollService();

  static currentScreenBroadCaster = new Subject();
  static currentScreenFadeIn = new Subject();

  constructor() {
    window.addEventListener("scroll", this.checkCurrentScreenUnderViewport);
  }

  scrollToHireMe = () => {
    let contactMeScreen = document.getElementById("Contact Me");
    if (!contactMeScreen) return;
    ScrollService.currentScreenBroadCaster.next({ screenInView: "Contact Me" });
    contactMeScreen.scrollIntoView({ behavior: "smooth" });
  };

  scrollToHome = () => {
    let homeScreen = document.getElementById("Home");
    if (homeScreen) {
        window.scrollTo({ top: 0, behavior: "smooth" });
        ScrollService.currentScreenBroadCaster.next({ screenInView: "Home" });
    } else return;
    homeScreen.scrollIntoView({ behavior: "smooth" });
    return;
  };

  isElementInView = (elem, type) => {
    let rect = elem.getBoundingClientRect();
    let elementTop = rect.top;
    let elementBottom = rect.bottom;

    let partiallyVisible =
      elementTop < window.innerHeight && elementBottom >= 0;
    let completelyVisible =
      elementTop >= 0 && elementBottom <= window.innerHeight;

    switch (type) {
      case "partial":
        return partiallyVisible;
      case "complete":
        return completelyVisible;
      default:
        return false;
    }
  };

  checkCurrentScreenUnderViewport = (event) => {
    if (!event || Object.keys(event).length < 1) return;

    const headerHeight = 140;
    const scrollTop = window.scrollY;
    
    // If we're at the very top, always show Home
    if (scrollTop < 50) {
      ScrollService.currentScreenBroadCaster.next({
        screenInView: "Home",
      });
      return;
    }

    // Get all section elements and their positions
    const sections = [];
    for (let screen of TOTAL_SCREENS) {
      let screenFromDOM = document.getElementById(screen.screen_name);
      if (screenFromDOM) {
        const rect = screenFromDOM.getBoundingClientRect();
        const offsetTop = rect.top + scrollTop;
        sections.push({
          name: screen.screen_name,
          offsetTop: offsetTop,
          element: screenFromDOM
        });
      }
    }

    // Sort sections by their position on the page
    sections.sort((a, b) => a.offsetTop - b.offsetTop);

    // Find the current section based on scroll position
    let currentSection = "Home";
    for (let i = 0; i < sections.length; i++) {
      const section = sections[i];
      const nextSection = sections[i + 1];
      
      // Account for header height when checking if we've reached this section
      const sectionStart = section.offsetTop - headerHeight - 50;
      
      if (nextSection) {
        const nextSectionStart = nextSection.offsetTop - headerHeight - 50;
        if (scrollTop >= sectionStart && scrollTop < nextSectionStart) {
          currentSection = section.name;
          break;
        }
      } else {
        // This is the last section
        if (scrollTop >= sectionStart) {
          currentSection = section.name;
          break;
        }
      }
    }

    // Handle fade-in animations
    for (let screen of TOTAL_SCREENS) {
      let screenFromDOM = document.getElementById(screen.screen_name);
      if (!screenFromDOM) continue;
      
      let partiallyVisible = this.isElementInView(screenFromDOM, "partial");
      if (partiallyVisible && !screen.alreadyRendered) {
        ScrollService.currentScreenFadeIn.next({
          fadeInScreen: screen.screen_name,
        });
        screen["alreadyRendered"] = true;
      }
    }

    // Broadcast the current section
    ScrollService.currentScreenBroadCaster.next({
      screenInView: currentSection,
    });
  };
}
