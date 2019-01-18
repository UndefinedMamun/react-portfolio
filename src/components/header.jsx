import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Header extends Component {
  state = {
    show: false,
    navItems: [
      {
        name: "Home",
        link: "/"
      },
      {
        name: "About me",
        link: "/about-me"
      },
      {
        name: "My works",
        link: "/works"
      },
      {
        name: "How to Reach me",
        link: "/contact-me"
      }
    ]
  };

  handleClick = () => {
    const show = !this.state.show;
    this.setState({ show });
  };

  changeClass = () => {
    return this.state.show ? " show" : "";
  };

  render() {
    return (
      <React.Fragment>
        <header>
          <div
            onClick={this.handleClick}
            className={"menu-btn" + this.changeClass()}
          >
            <div className="btn-line" />
            <div className="btn-line" />
            <div className="btn-line" />
          </div>

          <nav className={"menu" + this.changeClass()}>
            <div className={"menu-branding" + this.changeClass()}>
              <div className="potrait" />
            </div>
            <ul className={"menu-nav" + this.changeClass()}>
              {this.state.navItems.map((item, index) => {
                return (
                  <li key={index} className={"nav-item" + this.changeClass()}>
                    <NavLink
                      exact
                      activeClassName="current"
                      onClick={this.handleClick}
                      to={item.link}
                      className="nav-link"
                    >
                      {item.name}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </nav>
        </header>
      </React.Fragment>
    );
  }
}

export default Header;
