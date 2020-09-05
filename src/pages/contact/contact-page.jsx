import React from "react";
import api from "../../api";
import ProjectItem from "../../components/project-item/project-item-component";
import ProjectMenu from "../../components/project-menu/project-menu-component";

import "./contact.styles.scss";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
    };
  }

  render() {
    return (
      <div className="contact">
        <h1>Contact</h1>
        <div className="form">
          <form
            id="contact-form"
            onSubmit={this.handleSubmit.bind(this)}
            method="POST"
          >
            <input
              className="input"
              type="text"
              value={this.state.name}
              placeholder="Your Name"
              onChange={this.onNameChange.bind(this)}
            />

            <input
              type="email"
              className="input"
              value={this.state.email}
              placeholder="Your Email"
              onChange={this.onEmailChange.bind(this)}
            />

            <textarea
              className="input"
              rows="5"
              value={this.state.message}
              onChange={this.onMessageChange.bind(this)}
            />
            <div className="input">
              <button
                className="input"
                type="submit"
                className="btn btn-primary"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }

  onNameChange(event) {
    this.setState({ name: event.target.value });
  }

  onEmailChange(event) {
    this.setState({ email: event.target.value });
  }

  onMessageChange(event) {
    this.setState({ message: event.target.value });
  }

  handleSubmit(event) {}
}

export default Contact;
