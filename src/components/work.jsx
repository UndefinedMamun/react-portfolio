import React, { Component } from "react";

class Work extends Component {
  state = {
    projects: [
      {
        img: "img/projects/vidly.jpg",
        liveLink: "https://ngvidly.firebaseapp.com/",
        github: "https://github.com/UndefinedMamun/vidly-frontend"
      },
      {
        img: "img/projects/itet.jpg",
        liveLink: "https://itet-429b3.firebaseapp.com/",
        github: "https://github.com/UndefinedMamun/ngItet"
      },
      {
        img: "img/projects/sakkhor.jpg",
        liveLink: "https://aunnursakkhor.github.io/portfolio/",
        github: "https://github.com/aunnursakkhor/portfolio"
      }
    ]
  };
  render() {
    return (
      <main id="work">
        <h1 className="lg-heading">
          My
          <span className="text-secondery">Work</span>
        </h1>
        <h2 className="sm-heading">
          Check My
          <a
            className="text-secondery"
            target="blank"
            href="https://github.com/UndefinedMamun/"
          >
            &nbsp;GitHub&nbsp;
          </a>
          profile for more projects..
        </h2>

        <div className="projects">
          {this.state.projects.map((item, index) => {
            return (
              <div key={index} className="item">
                <a target="blank" className="projectImage" href={item.github}>
                  <img src={item.img} alt="Project" />
                </a>
                <a target="blank" href={item.liveLink} className="btn-light">
                  <i className="fas fa-eye" /> Project
                </a>
                <a target="blank" href={item.github} className="btn-dark">
                  <i className="fab fa-github" /> Github
                </a>
              </div>
            );
          })}
        </div>
      </main>
    );
  }
}

export default Work;
