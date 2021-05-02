import logo from './logo.svg';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';
import Home from './components/Home/Home/Home';
import ProjectPage from './components/ProjectPage/ProjectPage';
import Blogs from './components/Blogs/Blogs';
import Resume from './components/Resume/Resume';
import AboutMe from './components/AboutMe/AboutMe';

function App() {
  return (
    <Router>
        <Switch>
          <Route exact path ="/">
            <Home></Home>
          </Route>
          <Route  path ="/home">
            <Home></Home>
          </Route>
          <Route  path ="/projects">
            <ProjectPage></ProjectPage>
          </Route>
          <Route  path ="/blogs">
            <Blogs></Blogs>
          </Route>
          <Route  path ="/resume">
            <Resume></Resume>
          </Route>
          <Route  path ="/about">
            <AboutMe></AboutMe>
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
