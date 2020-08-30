import React from 'react';
import ReactDOM from 'react-dom';
import {Switch, Route, Redirect} from 'react-router-dom';




import logo from './logo.svg';
import './App.css';

import Home from './pages/homepage/home-page';
import Projects from './pages/projects/projects-page';
import Resume from './pages/resume';
import Header from './components/header/header-component';

import About from './pages/about/about-component';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'

import { AnimatedSwitch } from 'react-router-transition';


library.add(fab,fas);
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
               <Route exact path="/" component={Home}/>
               <Route exact path="/about" component={About}/>
               <Route exact path="/resume" component={Resume}/>
               <Route exact path="/projects" component={Projects}/>

            </AnimatedSwitch>
         </div>
      
     )
  }
}
export default App;