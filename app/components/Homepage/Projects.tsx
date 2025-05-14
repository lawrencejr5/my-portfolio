import React from "react";

import { FaGithub } from "react-icons/fa";
import { FaLink } from "react-icons/fa6";

import { projects } from "../../data/projects";

const Projects = () => {
  return (
    <div className="section-container projects-container" id="projects">
      <div className="header">
        <h1>My_projects:</h1>
        <button>collapse</button>
      </div>
      <div className="container">
        <p className="curly-braces open">{"{"}</p>
        <div className="project-container">
          {projects.map((project, i) => {
            return (
              <div className="project" key={i}>
                <img
                  className="project-img"
                  src={`/images/projects/${project?.img}`}
                  alt=""
                />
                <div className="project-info">
                  <div className="info">
                    <h2>{project.title}</h2>
                    <p>{project.subtitle}</p>
                  </div>
                  <div className="stack">
                    {project?.stack?.map((item, i) => {
                      return <span key={i}>{item}</span>;
                    })}
                  </div>
                  <div className="links">
                    <a href={project?.links?.live} target="_blank">
                      View_Live
                      <FaLink />
                    </a>
                    <a href={project?.links?.code} target="_blank">
                      Source_code
                      <FaGithub />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <p className="curly-braces close">{"}"}</p>
      </div>
    </div>
  );
};

export default Projects;
