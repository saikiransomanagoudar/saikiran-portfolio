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
  const submitForm = async (e) => {
    e.preventDefault();
    if (name === "" || email === "" || message === "") {
      const errorMsg = "Please fill all the fields.";
      setBanner(errorMsg);
      toast.error(errorMsg);
      return;
    }

    setIsLoading(true);
    try {
      let data = {
        name,
        email,
        message,
      };
      console.log("Data to be sent:", data);
      const baseUrl =
        process.env.REACT_APP_API_URL ||
        "http://saikiran-portfolio-b078b74c7ad5.herokuapp.com";
      const res = await axios.post(`${baseUrl}/contact`, data, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (res.status === 200 && res.data.msg) {
        setBanner(res.data.msg);
        toast.success(res.data.msg);
        setName("");
        setEmail("");
        setMessage("");
      } else {
        toast.error("Unexpected response from server.");
      }
    } catch (error) {
      console.log(error);
      toast.error("Failed to send message due to an error.");
      setBanner("Failed to send message due to an error.");
    }
    setIsLoading(false);
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
            <label htmlFor="name">
              <strong>Name</strong>
            </label>
            <input
              type="text"
              onChange={handleName}
              value={name}
              placeholder="your good name"
            />
            <label htmlFor="email">
              <strong>Email</strong>
            </label>
            <input
              type="text"
              onChange={handleEmail}
              value={email}
              placeholder="your email address"
            />
            <label htmlFor="message">
              <strong>Message</strong>
            </label>
            <textarea
              type="text"
              onChange={handleMessage}
              value={message}
              placeholder="a quick message for me"
            />
            <div className="send-btn">
              <button type="submit">
                Send <i className="fa fa-paper-plane" />{" "}
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
