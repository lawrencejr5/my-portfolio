import Image from "next/image";

import Nav from "./components/Nav";

import { FaGithub, FaWhatsapp, FaEnvelope, FaLinkedin } from "react-icons/fa";
import { FaThreads } from "react-icons/fa6";

import { projects } from "./data/projects";

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
          <p className="hero-info">Full_Stack_Developer</p>
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

      <div className="section-container about-container">
        <div className="header">
          <h1>About_me:</h1>
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

      <div className="section-container skills-container">
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

      <div className="section-container projects-container">
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
                        View_Live &rarr;
                      </a>
                      <a href={project?.links?.code} target="_blank">
                        Source_code &rarr;
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
    </main>
  );
}
