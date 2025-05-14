"use client";

import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";

import { MdOutlineFileDownload } from "react-icons/md";
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import { FaBars } from "react-icons/fa";

const Nav: React.FC = () => {
  const [show, setShow] = useState<boolean>(true);
  const [isOpen, setIsOpen] = useState<boolean>(false);

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

  const openNav = (): void => {
    setIsOpen((prev): boolean => {
      return !prev;
    });
  };

  return (
    <nav className={`main-nav ${show ? "visible" : "hidden"}`}>
      <div className={`nav-container ${isOpen ? "expand" : ""}`}>
        <div className="nav-row">
          <div className="name">Oputa_Lawrence</div>
          <div className="nav-links">
            <Link className="link" href="#home">
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
          <div className="btns">
            <button className="resume-btn">
              Resume <MdOutlineFileDownload />
            </button>
            <button className="bar-btn" onClick={openNav}>
              <HiMiniBars3BottomRight />
            </button>
          </div>
        </div>

        <div
          className={`mobile-nav-links ${isOpen ? "open" : ""}`}
          onClick={() => {
            setIsOpen(false);
            setShow(false);
          }}
        >
          <Link className="link" href="#home">
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
      </div>
    </nav>
  );
};

export default Nav;
