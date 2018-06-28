// @flow
import React, { Component } from 'react';
import './App.css';
import { Table } from './Table';

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sid: '',
      projectName: '',
      location: 'Select',
      lob: 'Select',
      headers: ['Name', 'Project Name', 'SID', 'Description', 'Location', 'LOB'],
      data: [
        {
          'Name': 'Dhanush Sureshbabu',
          'Project Name': '#Winners',
          'SID': 'F645264',
          'Description': 'A Warm Potato',
          'Location': 'New York City',
          'LOB': 'Corporate and Investment Bank'
        },
        {
          'Name': 'Kirin Bettadapur',
          'Project Name': 'React Project',
          'SID': 'E841026',
          'Description': 'A really cool project that you should join and this should overflow the columns',
          'Location': 'Jersey City',
          'LOB': 'Commercial Bank'
        },
        {
          'Name': 'Parina Kaewkrajang',
          'Project Name': 'Shokugeki No Soma',
          'SID': 'V727395',
          'Description': 'An anime about some good cooking',
          'Location': 'Tokyo',
          'LOB': 'Asset Wealth Management'
        },
        {
          'Name': 'John Doe',
          'Project Name': 'React Project',
          'SID': 'R12993',
          'Description': 'A really cool project that you should join and this should overflow the columns',
          'Location': 'Jersey City',
          'LOB': 'Asset Wealth Management'
        },
        {
          'Name': 'Pon K',
          'Project Name': 'React Project',
          'SID': 'E843154',
          'Description': 'Hi my name is PON my project is so cool',
          'Location': 'Jersey City',
          'LOB': 'Corporate Consumer Banking'
        }
      ],
      locations: [
        'Select', 'Auckland', 'Beijing', 'Bengaluru', 'Bournemouth', 'Brooklyn', 'Chicago', 'Columbus', 'Dallas', 'Delaware', 'Dublin', 'Geneva', 'Glasgow', 'Herzliya', 'Hong Kong', 'Houston', 'Hyderabad', 'Jersey City', 'London', 'Mumbai', 'New York City', 'Salem', 'San Francisco', 'Seattle', 'Shanghai', 'Singapore', 'Sydney', 'Taipei', 'Tampa', 'Tokyo'
      ],
      lobs: ['Select', 'Asset Wealth Management', 'Commercial Bank', 'Consumer and Community Banking', 'Corporate and Investment Bank', 'Corporate Technology']
    }
  }

  renderTable() {
    let data = [];
    if (this.state.sid === '' && this.state.projectName === '' && this.state.location === 'Select' && this.state.lob === 'Select') {
      data = this.state.data;
    } else {
      this.state.data.forEach((row) => {
        let sidContains = false;
        let projectNameContains = false;
        if (this.state.sid.length === 0 || row['SID'].includes(this.state.sid)) {
          sidContains = true;
        }
        if (this.state.projectName.length === 0 || row['Project Name'].includes(this.state.projectName)) {
          projectNameContains = true;
        }
        if (sidContains && projectNameContains) {
          data.push(row);
        }
      });
    }
    return (
      <Table headers={this.state.headers} data={data} />
    );
  }

  onChangeText(obj) {
    this.setState(obj);
  }

  onChangeSelect(obj) {
    this.setState(obj);
  }

  render() {
    return (
      <div style={{paddingLeft: 200, paddingRight: 200, marginTop: 20}}>
        <div>
          <h1>Project SignUp</h1>
          <div style={{width: '100%', display: 'flex', flexDirection: 'row'}}>
            <label style={{flex: 1}}>SID:
              <input type='text' placeholder="SID" value={this.state.sid} onChange={(val) => this.onChangeText({sid:val.target.value})} />
            </label>
            <div style={{flex: 0.5}}></div>
            <label style={{flex: 1}}>
              Locations:
              <select className="form-control" value={this.state.location} onChange={(val) => this.onChangeSelect({location: val.target.value})}>
                {this.state.locations.map((location) => {
                  return (
                    <option value={location}>{location}</option>
                  )
                })}
              </select>
            </label>
            <div style={{flex: 0.5}}></div>
            <label style={{flex: 1.5}}>LOB:
              <select className="form-control" value={this.state.lob} onChange={(val) => this.onChangeSelect({lob: val.target.value})}>
                {this.state.lobs.map((lob) => {
                  return (
                  <option value={lob}>{lob}</option>
                  );
                })}
              </select>
            </label>
            <div style={{flex: 0.5}}></div>
            <label style={{flex: 1.5}}>Project Name:
              <input type='text' placeholder="Project Name" value={this.state.projectName} onChange={(val) => this.onChangeText({projectName: val.target.value})} />
            </label>
          </div>
        </div>
        <div>
            {this.renderTable()}
        </div>
      </div>
    );
  }
}
