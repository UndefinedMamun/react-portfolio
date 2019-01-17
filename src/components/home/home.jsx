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
          Jhon
          <span className="text-secondery">Doe</span>
        </h1>
        <h2 className="sm-heading">Web Developer, Programmer & Observer</h2>
        <div className="icons">
          <a href="/to">
            <i className="fab fa-twitter fa-2x" />
          </a>
          <a href="/to">
            <i className="fab fa-facebook fa-2x" />
          </a>
          <a href="/to">
            <i className="fab fa-linkedin fa-2x" />
          </a>
          <a href="/to">
            <i className="fab fa-github fa-2x" />
          </a>
        </div>
      </main>
    );
  }
}

export default Home;
