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
      <div>
          <h1>Home</h1>
            <div className="topRow">Global Hackathon</div>
            <div>
            </div>
          <div className="bottomRow">sdfsadf</div>
      </div>
    );
  }
}
