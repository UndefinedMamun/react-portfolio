import React, { Component } from "react";
import portrait from "./../img/portrait.jpg";

class About extends Component {
  state = {};
  render() {
    return (
      <main id="about">
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
              quas sequi consequatur explicabo molestiae nihil ut, maiores
              necessitatibus, nostrum, sed ducimus voluptatibus odio qui vel
              dolores ratione cumque fuga incidunt!
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
