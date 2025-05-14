"use client";

import React from "react";

import Nav from "./components/Nav";
import Footer from "./components/Footer";

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
          {/* Nav */}
          <Nav />

          {/* Hero section */}
          <Hero />

          {/* About section */}
          <About />

          {/* Skills section */}
          <Skills />

          {/* Projects section */}
          <Projects />

          {/* Footer */}
          <Footer />
        </main>
      )}
    </>
  );
}
