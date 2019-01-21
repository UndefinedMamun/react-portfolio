import React, { Component } from "react";
import Joi from "joi-browser";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./contact.scss";

class Contact extends Component {
  state = {
    data: {
      name: "",
      email: "",
      message: ""
    },
    errors: null,
    sent: false
  };

  schema = {
    name: Joi.string()
      .required()
      .min(3)
      .label("Name"),
    email: Joi.string()
      .email()
      .required()
      .label("Email"),
    message: Joi.string()
      .required()
      .min(5)
      .label("Message")
  };

  handleChange({ currentTarget: input }) {
    const data = { ...this.state.data };
    data[input.name] = input.value;
    this.setState({ data });
    this.validateInput(input.name, input.value);
  }

  validateInput(name, value) {
    const schema = this.schema[name];
    const { error } = Joi.validate(value, schema);
    const errors = { ...this.state.errors };
    if (!error) delete errors[name];
    else errors[name] = error.message;
    this.setState({ errors });
  }

  validateForm() {
    const data = { ...this.state.data };
    const { error } = Joi.validate(data, this.schema);
    if (error) return false;
    return true;
  }

  handleSubmit(e) {
    e.preventDefault();

    if (!this.validateForm()) return;
    this.setState({ sent: true });
  }

  addClass() {
    const els = document.getElementsByClassName("btn-line");
    // console.log(els);
    for (let el of els) {
      el.classList.add("colored");
    }
  }

  render() {
    const { data, errors, sent } = this.state;
    return (
      <main id="contact">
        <TransitionGroup className="animation-container">
          {!sent && (
            <CSSTransition
              key="contact-1"
              appear={true}
              classNames="bounce"
              timeout={750}
            >
              <div className="contact-page-container">
                <h1 className="lg-heading">
                  Lets
                  <span className="text-secondery"> Talk</span>
                </h1>

                <form>
                  <div className="inputs">
                    <input
                      className={
                        errors && errors["name"]
                          ? "form-element invalid"
                          : "form-element"
                      }
                      name="name"
                      type="text"
                      placeholder="Name"
                      value={data.name}
                      onChange={e => this.handleChange(e)}
                    />
                    <input
                      className={
                        errors && errors["email"]
                          ? "form-element invalid"
                          : "form-element"
                      }
                      name="email"
                      type="email"
                      placeholder="Email"
                      value={data.email}
                      onChange={e => this.handleChange(e)}
                    />
                    <textarea
                      className={
                        errors && errors["message"]
                          ? "form-element invalid"
                          : "form-element"
                      }
                      name="message"
                      placeholder="Message"
                      rows="10"
                      value={data.message}
                      onChange={e => this.handleChange(e)}
                    />
                  </div>
                  <div id="submit-btn">
                    <button
                      disabled={!this.validateForm()}
                      onClick={e => this.handleSubmit(e)}
                      type="submit"
                    >
                      Send
                    </button>
                  </div>
                </form>
              </div>
            </CSSTransition>
          )}

          {sent && (
            <CSSTransition
              key="contact-2"
              appear={true}
              classNames="bounce"
              timeout={1500}
              onEntered={this.addClass}
            >
              <div className="onsubmit-thankyou">
                <div className="center-texts">
                  <h2 className="lg-heading">Thanks!</h2>
                  <p>I'll get back to you shortly.</p>
                </div>
                <div className="icons">
                  <a
                    target="blank"
                    href="https://www.facebook.com/UndefinedMamun"
                  >
                    <i className="fab fa-facebook fa-2x" />
                  </a>
                  <a
                    target="blank"
                    href="https://www.linkedin.com/in/undefinedmamun"
                  >
                    <i className="fab fa-linkedin fa-2x" />
                  </a>
                  <a target="blank" href="https://github.com/UndefinedMamun">
                    <i className="fab fa-github-square fa-2x" />
                  </a>
                </div>
              </div>
            </CSSTransition>
          )}
        </TransitionGroup>
      </main>
    );
  }
}

export default Contact;
