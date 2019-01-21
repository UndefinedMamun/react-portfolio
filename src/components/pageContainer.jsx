import React, { Component } from "react";
import { pages } from "./header";

class PageContainer extends Component {
  state = {};

  componentDidMount() {
    // console.log(this.props);
    window.addEventListener("wheel", this.decideRedirection);
  }

  decideRedirection = e => {
    const { pageYOffset } = window;
    const { scrollHeight } = document.documentElement;
    const { clientHeight } = document.body;

    const path = this.props.props.location.pathname;

    if (!pageYOffset && e.deltaY < 0) {
      //up
      window.removeEventListener("wheel", this.decideRedirection);
      return this.handleNavigation(path, "prev");
    } else if (pageYOffset + clientHeight === scrollHeight && e.deltaY > 0) {
      //down
      window.removeEventListener("wheel", this.decideRedirection);
      return this.handleNavigation(path, "next");
    }
  };

  handleNavigation = (cPath, direction) => {
    const current = pages.filter(p => p.link === cPath)[0];
    if (!current) return;

    const { length } = pages;

    let index = pages.indexOf(current);
    direction === "next" ? index++ : index--;

    //cyceling through
    if (index === -1) index = length - 1;
    else if (index === length) index = 0;

    // console.log(pages[index]);
    this.props.props.history.push(pages[index].link);

    setTimeout(() => {
      window.addEventListener("wheel", this.decideRedirection);
    }, 800);
  };

  render() {
    // console.log(this.props);
    return (
      <div onScroll={this.handleScroll} className="pageContainer">
        {this.props.children}
      </div>
    );
  }
}

export default PageContainer;
