// @flow
import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Create from './Create';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state={
      value: '',
      redirect: false,
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  handleClick() {
    this.setState({ value: '' });
  }

  render() {
    return (
      <div>
        <h1>Register</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <Link to="/"><input type="submit" value="Submit" onClick={this.handleClick.bind(this)} /></Link>
        </form>
      </div>
    );
  }
}

export default Register;
