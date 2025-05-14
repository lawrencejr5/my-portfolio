import React from "react";

import { webArrs } from "../../data/webArrs";

const SkillContent: React.FC<{ type: string }> = ({ type }) => {
  const [arrOpen, setArrOpen] = React.useState<boolean>(true);

  const arr =
    type === "frontend"
      ? webArrs?.skills?.frontEnd ?? []
      : type === "backend"
      ? webArrs?.skills?.backEnd ?? []
      : type === "tools"
      ? webArrs?.skills?.tools ?? []
      : [];

  return (
    <div className="content">
      {type === "frontend" ? (
        <strong>"Front_End_Dev":</strong>
      ) : type === "backend" ? (
        <strong>"Back_End_Dev":</strong>
      ) : type === "tools" ? (
        <strong>"Dev_Tools":</strong>
      ) : null}

      <div className="sub-container">
        {arrOpen ? (
          <p className="sub-collapse" onClick={() => setArrOpen(!arrOpen)}>
            <span>-</span>&nbsp;collapse_items
          </p>
        ) : (
          <p className="sub-collapse" onClick={() => setArrOpen(!arrOpen)}>
            <span>+</span>&nbsp;expand_items
          </p>
        )}

        <p className="square-braces open">{"["}</p>
        {arrOpen && (
          <div className="sub-content">
            {arr.map((skill, i) => (
              <div className="skill" key={i}>
                {skill}
              </div>
            ))}
          </div>
        )}

        <p className="square-braces close">{"]"}</p>
      </div>
    </div>
  );
};

const Skills = () => {
  const [mainOpen, setMainOpen] = React.useState<boolean>(true);

  return (
    <div className="section-container skills-container" id="stack">
      <div className="header">
        <h1>Tech_stack:</h1>
        <button onClick={() => setMainOpen(!mainOpen)}>
          {mainOpen ? "collapse" : "expand"}
        </button>
      </div>
      <div className={`container ${!mainOpen ? "flex" : ""}`}>
        <p className="curly-braces open">{"{"}</p>
        {mainOpen ? (
          <div className="stack-container">
            <SkillContent type="frontend" />
            <SkillContent type="backend" />
            <SkillContent type="tools" />
          </div>
        ) : (
          <span onClick={() => setMainOpen(true)}>....</span>
        )}
        <p className="curly-braces close">{"}"}</p>
      </div>
    </div>
  );
};

export default Skills;
