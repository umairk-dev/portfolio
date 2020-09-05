import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./header.styles.scss";

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <div className="left-section">
          <Link to="/">
            <div className="home">
              <FontAwesomeIcon
                className="icon"
                color="white"
                icon={["fas", "home"]}
              />
            </div>
          </Link>
        </div>

        <div className="options">
          <Link className="option" to="/projects">
            Projects
          </Link>
          <Link className="option" to="/resume">
            Resume
          </Link>
        </div>
      </div>
    );
  }
}

export default Header;
