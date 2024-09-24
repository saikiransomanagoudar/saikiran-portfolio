import React, { useState } from "react";
import Typical from "react-typical";
import axios from "axios";
import { toast } from "react-toastify";

import imgBack from "../../../src/images/mailz.jpeg";
import load1 from "../../../src/images/load.gif";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./ContactMe.css";

export default function ContactMe(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [banner, setBanner] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleMessage = (e) => {
    setMessage(e.target.value);
  };
  console.log(name);
  const submitForm = async (e) => {
    e.preventDefault();
    if (name === "" || email === "" || message === "") {
      const errorMsg = "Please fill all the fields.";
      setBanner(errorMsg);
      toast.error(errorMsg);
      return; // Stop the function here if validation fails
    }

    setIsLoading(true); // Start loading before the request
    try {
      let data = {
        name,
        email,
        message,
      };
      const baseUrl = process.env.REACT_APP_API_URL || "http://saikiran-portfolio-b078b74c7ad5.herokuapp.com:5000";
      const res = await axios.post(`${baseUrl}/contact`, data);
      if (res.status === 200 && res.data.msg) {
        setBanner(res.data.msg);
        toast.success(res.data.msg);
        setName(""); // Clear fields only on successful submission
        setEmail("");
        setMessage("");
      } else {
        // Handle other status codes or server responses
        toast.error("Unexpected response from server.");
      }
    } catch (error) {
      console.log(error);
      toast.error("Failed to send message due to an error.");
      setBanner("Failed to send message due to an error.");
    }
    setIsLoading(false); // Stop loading after handling the response
  };

  return (
    <div className="main-container fade-in" id={props.id || ""}>
      <ScreenHeading title={"Contact Me"} />
      <div className="central-form">
        <div className="col">
          <h2 className="title">
            {" "}
            <Typical loop={Infinity} steps={["Get In Touch 📧", 1000]} />
          </h2>
          <a
            href="https://github.com/saikiransomanagoudar"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/saikiransomanagoudar"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-linkedin"></i>
          </a>
          {/* <a
            href="https://www.instagram.com/saikiransomanagoudar"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-instagram"></i>
          </a> */}
          <a
            href="https://www.youtube.com/channel/UCvqP86Zm7Bda94gHnUtlK2g"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-youtube-square"></i>
          </a>
        </div>
        <div className="back-form">
          <div className="img-back">
            <h4>Please Send Your Email Here!</h4>
            <img src={imgBack} alt="image not found" />
          </div>
          <form onSubmit={submitForm}>
            <p>{banner}</p>
            <label htmlFor="name">Name</label>
            <input type="text" onChange={handleName} value={name} />
            <label htmlFor="email">Email</label>
            <input type="text" onChange={handleEmail} value={email} />
            <label htmlFor="message">Message</label>
            <textarea type="text" onChange={handleMessage} value={message} />
            <div className="send-btn">
              <button type="submit">
                send <i className="fa fa-paper-plane" />{" "}
                {isLoading ? (
                  <b className="load">
                    <img src={load1} alt="image not responding" />
                  </b>
                ) : (
                  ""
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="scroll-to-home">
        <button onClick={() => ScrollService.scrollHandler.scrollToHome()}>
          <i className="fa fa-arrow-up"></i>
        </button>
      </div>
    </div>
  );
}
