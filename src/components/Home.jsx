// @flow
import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

export default class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="homepage">
        <div className="topRow">
          <h1>Global Hackathon</h1>
        </div>
        <div className="bottomRow">sdfsadf</div>
      </div>
    );
  }
}
