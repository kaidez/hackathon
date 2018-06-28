// @flow
import React, { Component } from 'react';
import './App.css';
import Grid from './listings/Grid';
import courses from '../data/courses.json';
import Header from './Header';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './Home';
import Register from './Register';
import SignUp from './SignUp';
import Update from './Update';
import Create from './Create';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="navbar-fixed">
          <nav className="nav-header">
            <Header />
          </nav>
          <Router>
            <div>
              <Route exact path="/" component={Home} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/signup" component={SignUp} />
              <Route exact path="/update" component={Update} />
              <Route exact path="/create" component={Create} />
            </div>
          </Router>
        </div>
      </div>
    );
  }
}
