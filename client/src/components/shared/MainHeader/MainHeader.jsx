import React from 'react';
import {Link} from 'react-router-dom'
import { Dropdown } from 'react-bootstrap'

import './MainHeader.css'

function MainHeader(props) {
  return (
    <div id="main-alt-header-container">
      <div id="header-left">
        <Link to="/"><img id="profile-pic" src="/assets/profile.jpg"  alt="the guy you want to hire"/></Link>
        <Link id="name-link" to="/"><p id="header-name">Andrew Ferris</p></Link>
      </div>
      <div id="header-right">
        <Dropdown id="nav-dropdown">
            <Dropdown.Toggle id="nav-toggle"><img id="hamburger-icon" src="/assets/hamburger.png" alt="for dropdown"/></Dropdown.Toggle>

            <Dropdown.Menu id='nav-menu'>
              <Dropdown.Item href="/about" className="dropdown-item">ABOUT</Dropdown.Item>
              <Dropdown.Item href="/details" className="dropdown-item">PORTFOLIO</Dropdown.Item>
              <Dropdown.Item href="/contact" className="dropdown-item" id="below-line">CONTACT</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
      </div>
    </div>
  );
}

export default MainHeader;