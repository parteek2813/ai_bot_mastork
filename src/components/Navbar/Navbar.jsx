import React from "react";
import "./style.css";

function Navbar() {
  return (
    <div className="container">
      <div className="flex flex-row ">
        {/* LOGO */}
        <div className="logo">
          <p className="AI-BOT">
            <span className="logo_first">/</span>
            <span className="logo_second">AI-BOT</span>
          </p>
        </div>

        {/* Navigation Buttons */}
        <div className="navbar">
          <div className="text_wrapper">Domains</div>
          <div className="text_wrapper">How it helps you</div>
          <div className="text_wrapper">Case Studies</div>
          <div className="text_wrapper">FAQs</div>

          {/* Auth Button */}
          <div className="auth_button">
            <button className="sign_in_button">Sign in</button>
            <button className="Get_started_button">
              <p className="inner_register">Get Started</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
