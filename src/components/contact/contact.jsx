import React, { Component } from "react";
import Joi from "joi-browser";
import "./contact.scss";

class Contact extends Component {
  state = {
    data: {
      name: "",
      email: "",
      message: ""
    },
    errors: null
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

    const valid = this.validateForm();
  }

  render() {
    const { data, errors } = this.state;
    return (
      <main id="contact">
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
      </main>
    );
  }
}

export default Contact;
