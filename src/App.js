import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./components/header";
import Home from "./components/home/home";
import "./App.scss";
import About from "./components/about";
import Work from "./components/work";
import Contact from "./components/contact";
import Footer from "./components/footer";

class App extends Component {
  render() {
    let isHomepage = window.location.pathname === "/";

    return (
      <React.Fragment>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about-me" component={About} />
          <Route path="/works" component={Work} />
          <Route path="/contact-me" component={Contact} />
        </Switch>
        {!isHomepage && <Footer />}
      </React.Fragment>
    );
  }
}

export default App;
