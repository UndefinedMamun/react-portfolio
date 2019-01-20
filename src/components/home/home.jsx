import React, { Component } from "react";
import "./home.scss";

class Home extends Component {
  state = {};
  render() {
    return (
      <main
        id="home"
        className="bg-img"
        style={{ backgroundImage: "url(img/background.jpg)" }}
      >
        <h1 className="lg-heading">
          Mohammad Al
          <span className="text-secondery"> Mamun</span>
        </h1>
        <h2 className="sm-heading">
          Web Developer, Programmer, Problem Solver
        </h2>
        <div className="icons">
          <a target="blank" href="https://www.facebook.com/UndefinedMamun">
            <i className="fab fa-facebook fa-2x" />
          </a>
          <a target="blank" href="https://www.linkedin.com/in/undefinedmamun">
            <i className="fab fa-linkedin fa-2x" />
          </a>
          <a target="blank" href="https://github.com/UndefinedMamun">
            <i className="fab fa-github-square fa-2x" />
          </a>
        </div>
      </main>
    );
  }
}

export default Home;
