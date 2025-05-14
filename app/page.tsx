"use client";

import React from "react";

import Nav from "./components/Nav";

import { FaGithub, FaWhatsapp, FaEnvelope, FaLinkedin } from "react-icons/fa";
import { FaThreads, FaLink } from "react-icons/fa6";

import Loading from "./components/Loading";
import About from "./components/Homepage/About";
import Skills from "./components/Homepage/Skills";
import Projects from "./components/Homepage/Projects";
import Hero from "./components/Homepage/Hero";

export default function Home() {
  const [isLoading, setIsLoading] = React.useState<boolean>(true);

  React.useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(loadingTimeout);
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <main className="main-container">
          <Nav />

          {/* Hero section */}
          <Hero />

          {/* About section */}
          <About />

          {/* Skills section */}
          <Skills />

          {/* Projects section */}
          <Projects />

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
          </footer>
        </main>
      )}
    </>
  );
}
