import React from "react";

import { FaGithub, FaWhatsapp, FaEnvelope, FaLinkedin } from "react-icons/fa";
import { FaThreads } from "react-icons/fa6";

import Typewriter from "../Typewriter";

const Hero = () => {
  return (
    <div className="hero-container" id="home">
      <img className="hero-img" src="/images/avatars/avatar2.png" alt="hero" />
      <div className="hero-content">
        <h1 className="hero-title">OPUTA_LAWRENCE</h1>
        <p className="hero-info">Software_Engineer</p>
        <p className="hero-subtitle">
          <Typewriter
            speed={5}
            text=" Hey there, I am a developer with a love affair for web app
                development. Creating web applications that connect and solve problems is what motivates me."
          />
        </p>
        <div className="hero-socials">
          <strong>Find_me_on:</strong>
          <div className="socials">
            <a href="https://github.com/lawrencejr5" target="_blank">
              <FaGithub className="social-icon" />
            </a>
            <a href="https://wa.me/2349025816161" target="_blank">
              <FaWhatsapp className="social-icon" />
            </a>
            <a href="mailto:oputalawrence@gmail.com" target="_blank">
              <FaEnvelope className="social-icon" />
            </a>
            <a
              href="https://www.linkedin.com/in/oputa-lawrence"
              target="_blank"
            >
              <FaLinkedin className="social-icon" />
            </a>
            <a href="https://www.threads.com/@_law_rence_jnr" target="_blank">
              <FaThreads className="social-icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
