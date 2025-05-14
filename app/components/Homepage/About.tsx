import React from "react";

import { webArrs } from "../../data/webArrs";

const About = () => {
  const [mainOpen, setMainOpen] = React.useState<boolean>(true);

  return (
    <div className="section-container about-container" id="about">
      <div className="header">
        <h1>About_me:</h1>
        <button onClick={() => setMainOpen(!mainOpen)}>
          {mainOpen ? "collapse" : "expand"}
        </button>
      </div>
      <div className={`container ${!mainOpen ? "flex" : ""}`}>
        <p className="curly-braces open">{"{"}</p>

        {mainOpen ? (
          <div className="about-content">
            <div className="content">
              <p className="key">"Summary":</p>
              <p className="value">
                <span>
                  “I am a freelance software engineer currently based in Asaba,
                  Nigeria with over 5 years of experience building meaningful
                  digital solutions for the web.”
                </span>
                <span>
                  "I am constantly exploring the latest technologies to build
                  seamless digital experiences. My portfolio offers a look at my
                  web development capabilities and I am open to new
                  collaborations."
                </span>
                <span>
                  "Beyond the keyboard, I'm a dedicated Real Madrid fan,
                  currently learning French, and enjoy some downtime with mobile
                  gaming."
                </span>
              </p>
            </div>
            <div className="content interests">
              <p className="key">"Interests":</p>
              <p className="value">
                {webArrs.interests.map((int, i) => {
                  return <span key={i}>{int}</span>;
                })}
              </p>
            </div>
          </div>
        ) : (
          <span onClick={() => setMainOpen(true)}>....</span>
        )}

        <p className="curly-braces close">{"}"}</p>
      </div>
    </div>
  );
};

export default About;
