import React from 'react';

function Header (props) {

  return (
    <div className="nav-wrapper">
      <div>
      <a href="/">
        <img className="bannerImage" src="img/hackathonBanner2.png" alt="Hackathon"/>
      </a>
      </div>
      {/* <ul id="nav-mobile" className="left hide-on-med-and-down">
        <li><a href="#">React</a></li>
        <li><a href="#">React Native</a></li>
        <li><a href="#">Framer</a></li>
      </ul> */}
      <ul className="main-menu">
        <li>
          <a href="/register">Register</a>
        </li>
        <li>
          <a href="/signup">Create / Update Project</a>
        </li>
        <li>
          <a href="/update">Sign up for Project</a>
        </li>
        <li>
          <a href="/create">Location Preparation </a>
        </li>
        <li>
          <a href="/post-hackathon">Post-Hackathon</a>
        </li>
      </ul>


    {/*  <ul className="main-menu">
        <li>
          <a href="link1"> Register for event</a>
        </li>
        <li>
          <a href="link2"> Create / Update Project</a>
        </li>
        <li>
          <a href="link3"> Sign up for Project</a>
        </li>
        <li>
          <a href="link4"> Location Preparation </a>
        </li>
        <li>
          <a href="link5"> Update Project Post-Hackathon</a>
        </li>
      </ul> */}
    </div>
  )

}

export default Header;