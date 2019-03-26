import React, { Component } from "react";
import portrait from "../../img/portrait.jpg";
import "./about.scss";

class About extends Component {
  state = {};
  render() {
    return (
      <main id="about" style={{ marginBottom: "20px" }}>
        <h1 className="lg-heading">
          About
          <span className="text-secondery">Me</span>
        </h1>
        <h2 className="sm-heading">Let me tell you few things about me...</h2>

        <div className="about-info">
          <img src={portrait} alt="Mamun" className="bio-image" />

          <div className="bio">
            <h3 className="text-secondery">BIO</h3>
            <p>
              Hi there, I am a professional web developer with 3 years of
              working experience. I enjoy the diversity and challenges that I
              meet every project. It keeps me into learning new things which I
              like most in this profession.
            </p>
          </div>

          <div className="overview">
            <p>
              I am the kind of person who wants to dig deep into your
              goal/need/problems and get you the solution in a timely manner
              with the highest standards. My clients say I'm quite fast at
              understanding their need. Here are some technologies I have
              working experience.
            </p>

            <p>
              Working my way up, Starting as a frontend developer focusing on
              pixel perfect responsive templates and creating a reactive user
              interface that had PHP/Laraval as the backend. Shortly after I
              started working with Angular until I started using React, NodeJS,
              Express, and MongoDB. Now I'm working on improving as a MEAN &
              MERN stack developer.
            </p>

            <p>
              -> FrontEnd: Angular2/4, React Redux, JavaScript, ES6, Typescript,
              jQuery, JSON, Webpack, HTML5, CSS, Sass, PSD to HTML, etc..{" "}
            </p>
            <p>-> UI Framework: Bootstrap, Angular Material Design.</p>
            <p>-> BackEnd: NodeJS, Express, PHP, Socket.io, RESTfull API.</p>
            <p>-> Database: MongoDB, MySQL, Firebase.</p>
            <p>-> Test Automation: Mocha, Jasmin, Jest</p>
            <p>-> Git</p>

            <p>
              I'm familiar with Development to deployment workflow and
              deployment solutions like VPS/AWS, Firebase, Heroku and other
              cloud services.
            </p>
            <p>
              I love my work and always try to follow the best practices. I can
              assure you maximum availability and error-free semantic code. So
              let's get started :)
            </p>
          </div>

          <div className="job job-1">
            <h3>Farmacia Zaragoza</h3>
            <span>Sept 2017 - Now</span>
            <h5>Front-End Engigneer</h5>
            <p>
              You are wellcome to see some of our open source projects.
              <a
                style={{ display: "block" }}
                href="https://github.com/Farmacia-Zaragoza"
              >
                Git
              </a>
            </p>
          </div>
          <div className="job job-2">
            <h3>Microkodes</h3>
            <span>February 2018 - October 2018</span>
            <h5>Lead Front-End Developer</h5>
            <p>
              <a href="https://microkodes.com/">A small softwere company</a>{" "}
              with lot of potential. I miss the team we had there.
            </p>
          </div>
        </div>
      </main>
    );
  }
}

export default About;
