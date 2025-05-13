"use client";

import React from "react";

import Link from "next/link";

import { MdOutlineFileDownload } from "react-icons/md";

const Nav: React.FC = () => {
  return (
    <nav className="main-nav">
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
    </nav>
  );
};

export default Nav;
