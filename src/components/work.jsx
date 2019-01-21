import React, { Component } from "react";

class Work extends Component {
  state = {
    projects: [
      {
        img: "img/projects/project1.jpg"
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
        <h2 className="sm-heading">Check out some of my works..</h2>

        <div className="projects">
          {this.state.projects.map((item, index) => {
            return (
              <div key={index} className="item">
                <a href="#!">
                  <img src={item.img} alt="Project" />
                </a>
                <a
                  target="blank"
                  href="https://facebook.com"
                  className="btn-light"
                >
                  <i className="fas fa-eye" /> Project
                </a>
                <a
                  target="blank"
                  href="https://facebook.com"
                  className="btn-dark"
                >
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
