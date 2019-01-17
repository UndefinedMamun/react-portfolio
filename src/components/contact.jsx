import React, { Component } from "react";

class Contact extends Component {
  state = {};
  render() {
    return (
      <main id="contact">
        <h1 className="lg-heading">
          Contact
          <span className="text-secondery">Me</span>
        </h1>
        <h2 className="sm-heading">This is how you can reach me...</h2>

        <div className="boxes">
          <div>
            <span className="text-secondery">Email:</span>
            bkmmamun@gmail.com
          </div>
          <div>
            <span className="text-secondery">Phone:</span>
            8801745185666
          </div>
          <div>
            <span className="text-secondery">Address:</span>
            16/83, Sector11, Uttara, Dhaka-1260
          </div>
        </div>
      </main>
    );
  }
}

export default Contact;
