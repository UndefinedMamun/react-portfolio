import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Header from "./components/header";
import Home from "./components/home/home";
import "./App.scss";
import About from "./components/about";
import Work from "./components/work";
import Contact from "./components/contact";
import Footer from "./components/footer";
import NotFound from "./components/notFound";

class App extends Component {
  state = {
    animate: true
  };

  render() {
    let isHomepage = window.location.pathname === "/";

    return (
      <React.Fragment>
        <Header />
        <Route
          render={({ location }) => (
            <TransitionGroup className="pageContainer">
              <CSSTransition
                key={location.key}
                appear={true}
                timeout={800}
                classNames="fade"
                onEnter={() => this.setState({ animate: true })}
                onEntered={() => this.setState({ animate: false })}
              >
                <Switch location={location}>
                  <Route exact path="/" component={Home} />
                  <Route path="/about-me" component={About} />
                  <Route path="/works" component={Work} />
                  <Route path="/contact-me" component={Contact} />
                  <Route component={NotFound} />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          )}
        />
        {!isHomepage && <Footer />}

        <CSSTransition
          in={this.state.animate}
          appear={true}
          timeout={800}
          classNames="loading"
        >
          <div className="loading" />
        </CSSTransition>
      </React.Fragment>
    );
  }
}

export default App;
