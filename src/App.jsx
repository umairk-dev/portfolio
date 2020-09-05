import React from "react";
import { Route } from "react-router-dom";

import "./App.css";

import Home from "./pages/homepage/home-page";
import Projects from "./pages/projects/projects-page";
import Resume from "./pages/resume/resume-page";
import Header from "./components/header/header-component";

import About from "./pages/about/about-component";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";

import { AnimatedSwitch } from "react-router-transition";
import Contact from "./pages/contact/contact-page";
import ProjectDetail from "./pages/project-detail/project-detail-component";

library.add(fab, fas);
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <AnimatedSwitch
          atEnter={{ opacity: 0 }}
          atLeave={{ opacity: 0 }}
          atActive={{ opacity: 1 }}
          className="switch-wrapper"
        >
          <Route exact path="/" component={Home} />
          <Route exact path="/resume" component={Resume} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/project-detail" component={ProjectDetail} />
          <Route exact path="/contact" component={Contact} />
        </AnimatedSwitch>
      </div>
    );
  }
}
export default App;
