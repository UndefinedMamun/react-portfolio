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
            <h3>123 Webshop</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem minus ullam debitis aliquam quaerat iure quasi
              voluptatibus non. Ullam, dicta!
            </p>
          </div>
          <div className="job job-2">
            <h3>123 Webshop</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem minus ullam debitis aliquam quaerat iure quasi
              voluptatibus non. Ullam, dicta!
            </p>
          </div>
          <div className="job job-3">
            <h3>123 Webshop</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem minus ullam debitis aliquam quaerat iure quasi
              voluptatibus non. Ullam, dicta!
            </p>
          </div>
        </div>
      </main>
    );
  }
}

export default About;
