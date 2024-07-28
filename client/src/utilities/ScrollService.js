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
    contactMeScreen.scrollIntoView({ behavior: "smooth" });
  };

  scrollToHome = () => {
    let homeScreen = document.getElementById("Home");
    if (homeScreen) {
        window.scrollTo({ top: 0, behavior: "smooth" });
        this.currentScreenBroadCaster.next({ screenInView: "Home" });
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

    // Check if the top of the page is in view
    if (window.scrollY === 0) {
      ScrollService.currentScreenBroadCaster.next({
        screenInView: "Home",
      });
      return; // Return early if Home is at the top
    }

    for (let screen of TOTAL_SCREENS) {
      let screenFromDOM = document.getElementById(screen.screen_name);
      if (!screenFromDOM) continue;
      let fullyVisible = this.isElementInView(screenFromDOM, "complete");
      let partiallyVisible = this.isElementInView(screenFromDOM, "partial");

      if (fullyVisible || partiallyVisible) {
        if (partiallyVisible && !screen.alreadyRendered) {
          ScrollService.currentScreenFadeIn.next({
            fadeInScreen: screen.screen_name,
          });
          screen["alreadyRendered"] = true;
          break;
        }
        if (fullyVisible) {
          ScrollService.currentScreenBroadCaster.next({
            screenInView: screen.screen_name,
          });
          break;
        }
      }
    }
  };
}
