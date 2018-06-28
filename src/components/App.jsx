// @flow
import React, { Component } from 'react';
import './App.css';
import Grid from './listings/Grid';
import courses from '../data/courses.json';
import Header from './Header';

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
            <Header />
          </nav>
        </div>
        <div>
            <Grid items={this.state.courses}/>
        </div>
      </div>
    );
  }
}
