import Image from "next/image";

import Nav from "./components/Nav";

import { FaGithub, FaWhatsapp, FaEnvelope, FaLinkedin } from "react-icons/fa";
import { FaThreads } from "react-icons/fa6";

export default function Home() {
  return (
    <main className="main-container">
      <Nav />

      <div className="hero-container">
        <img
          className="hero-img"
          src="/images/avatars/avatar2.png"
          alt="hero"
        />
        <div className="hero-content">
          <h1 className="hero-title">OPUTA_LAWRENCE</h1>
          <p className="hero-info">Software_Engineer</p>
          <p className="hero-subtitle">
            Hey there, I am a developer with a love affair for web app
            development. I’m constantly exploring the latest technologies to
            build seamless, user-centric digital experiences.
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

      <div className="about-container">
        <div className="header">
          <h1>About_me</h1>
          <button>collapse</button>
        </div>
        <div className="container">
          <p className="curly-braces open">{"{"}</p>
          <div className="about-content">
            <div className="content">
              <p className="key">"Summary":</p>
              <p className="value">
                “I'm a passionate software engineer with expertise in building
                scalable web applications. I enjoy solving complex problems and
                creating efficient, elegant solutions. With a strong foundation
                in both frontend and backend technologies, I deliver end-to-end
                solutions that meet business objectives.”
              </p>
            </div>
            <div className="content interests">
              <p className="key">"Interests":</p>
              <p className="value">
                <span>Web_Development</span>
                <span>Blockchain</span>
                <span>Machine_Learning</span>
                <span>Astro_Physics</span>
                <span>Human_Psychology</span>
              </p>
            </div>
          </div>
          <p className="curly-braces close">{"}"}</p>
        </div>
      </div>
    </main>
  );
}
