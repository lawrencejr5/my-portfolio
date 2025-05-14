import React from "react";

import { FaGithub, FaWhatsapp, FaEnvelope, FaLinkedin } from "react-icons/fa";
import { FaThreads } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer>
      <p>
        Designed and coded by <strong>Oputa_Lawrence</strong>
      </p>
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
        <a href="https://www.linkedin.com/in/oputa-lawrence" target="_blank">
          <FaLinkedin className="social-icon" />
        </a>
        <a href="https://www.threads.com/@_law_rence_jnr" target="_blank">
          <FaThreads className="social-icon" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
