import React from 'react';

function Header (props) {
  return (<div className="nav-wrapper">
              <div>
                <h1 href="#" className="brand-logo center">Hackathon</h1>
              </div>
              {/* <ul id="nav-mobile" className="left hide-on-med-and-down">
                <li><a href="#">React</a></li>
                <li><a href="#">React Native</a></li>
                <li><a href="#">Framer</a></li>
              </ul> */}
              <ul className="main-menu">
                <li><a href="/register">Register for event</a></li>
                <li> Create / Update Project </li>
                <li>Sign up for Project</li>
                <li>Location Preparation</li>
                <li>Update Project Post-Hackathon</li>
              </ul>
            </div>
          )
}

export default Header;