import React from "react";
import "./style.css";
import play from "../../assets/images/play.svg";
import lower_image from "../../assets/images/lower_image.png";

function MainContent() {
  return (
    <div className="container_main w-[1100px]">
      {/* Upper Title */}
      <p className="upper_title">
        Transform Your Business with our AI-Powered WhatsApp Bot
      </p>

      {/* Middle Title */}
      <div className="bottom_title">
        <div className="text_1">A new</div>
        <div className="custom_text ">AI Partner </div>/
        <div className="custom_text ">Employee </div>/
        <div className="custom_text">Intern </div>for your Business
      </div>

      {/* Inner Buttons */}
      <div className="left_right">
        <button className="left_button" href="#">
          <p>Join Waitlist</p>
        </button>
        <button className="right_button" href="#">
          <img src={play}></img>
          <p>Watch demo video</p>
        </button>
      </div>

      {/* Middle Image */}
      <div className="image_container">
        <div className="upper_image"></div>
        <img className="lower_image" src={lower_image}></img>
      </div>
    </div>
  );
}

export default MainContent;
