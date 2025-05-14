import React from "react";

const Skills = () => {
  return (
    <div className="section-container skills-container" id="stack">
      <div className="header">
        <h1>Tech_stack:</h1>
        <button>collapse</button>
      </div>
      <div className="container">
        <p className="curly-braces open">{"{"}</p>
        <div className="stack-container">
          <div className="content">
            <strong>"Front_End_Dev":</strong>

            <div className="sub-container">
              <p className="sub-collapse">
                <span>-</span>&nbsp;collapse_items
              </p>
              <p className="square-braces open">{"["}</p>
              <div className="sub-content">
                <div className="skill">React</div>
                <div className="skill">Typescript</div>
                <div className="skill">SCSS</div>
                <div className="skill">NextJs</div>
                <div className="skill">Jquery</div>
              </div>
              <p className="square-braces close">{"]"}</p>
            </div>
          </div>
          <div className="content">
            <strong>"Back_End_Dev":</strong>
            <div className="sub-container">
              <p className="sub-collapse">
                <span>-</span>&nbsp;collapse_items
              </p>
              <p className="square-braces open">{"["}</p>
              <div className="sub-content">
                <div className="skill">Node.js</div>
                <div className="skill">Express.js</div>
                <div className="skill">MongoDb</div>
                <div className="skill">PHP</div>
                <div className="skill">MySql</div>
              </div>
              <p className="square-braces close">{"]"}</p>
            </div>
          </div>
          <div className="content">
            <strong>"Dev_Tools":</strong>
            <div className="sub-container">
              <p className="sub-collapse">
                <span>-</span>&nbsp;collapse_items
              </p>
              <p className="square-braces open">{"["}</p>
              <div className="sub-content">
                <div className="skill">Git</div>
                <div className="skill">VsCode</div>
                <div className="skill">Canva</div>
                <div className="skill">Postman</div>
                <div className="skill">Cloudinary</div>
              </div>
              <p className="square-braces close">{"]"}</p>
            </div>
          </div>
        </div>
        <p className="curly-braces close">{"}"}</p>
      </div>
    </div>
  );
};

export default Skills;
