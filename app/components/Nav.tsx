"use client";

import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { MdOutlineFileDownload } from "react-icons/md";

const Nav: React.FC = () => {
  const [show, setShow] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < lastScrollY.current) {
        // Scrolling up
        setShow(true);
      } else {
        // Scrolling down
        setShow(false);
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`main-nav ${show ? "visible" : "hidden"}`}>
      <div className="nav-container">
        <div className="name">Oputa_Lawrence</div>
        <div className="nav-links">
          <Link className="link" href="/">
            Home
          </Link>
          <Link className="link" href="#about">
            About
          </Link>
          <Link className="link" href="#stack">
            Skills
          </Link>
          <Link className="link" href="#projects">
            Projects
          </Link>
        </div>
        <button className="resume-btn">
          Resume <MdOutlineFileDownload />
        </button>
      </div>
    </nav>
  );
};

export default Nav;
