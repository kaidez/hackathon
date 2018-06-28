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

        <div className="topRow">
          <div className="homepage-header">Global Hackathon</div>
          <div>
            Hackathons are a great way to generate ideas. You have the opportunity to be the CEO of your idea where you meet new people to build something innovative. Your team can pitch the idea with the working prototype to Senior Executives on the day of the event. You can later demonstrate your idea across the bank via Hackathon TV. Teams who implement their prototypes in production get into the Hackathon Hall of Fame. All locations,  LOBs and roles participate in the Global Hackathon.
          </div>
        </div>
      </div>
    );
  }
}
