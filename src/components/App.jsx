// @flow
import React, { Component } from 'react';
import './App.css';
import Grid from './listings/Grid';
import courses from '../data/courses.json';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {courses};
  }

  render() {
    return (
      <div>
        <div className="navbar-fixed">
          <nav className="nav-header">
            <div className="nav-wrapper">
              <div>
                <h1 href="#" className="brand-logo center">Hackathon</h1>
              </div>
              {/* <ul id="nav-mobile" className="left hide-on-med-and-down">
                <li><a href="#">React</a></li>
                <li><a href="#">React Native</a></li>
                <li><a href="#">Framer</a></li>
              </ul> */}
              <ul className="main-menu">
                <li>Register for Event</li>
                <li>Create / Update</li>
                <li>Sign up for Project</li>
                <li>Location Preparation</li>
                <li>Update Project Post-Hackathon</li>
              </ul>
            </div>
          </nav>
        </div>
        <div>
            <Grid items={this.state.courses}/>
        </div>
      </div>
    );
  }
}
