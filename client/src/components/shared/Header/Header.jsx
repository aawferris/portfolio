import React from 'react';
import { Dropdown } from 'react-bootstrap'

import './Header.css'

function Header(props) {
  return (
    <div id="main-header-container">
      <div id="header-left">
        <img id="profile-pic" src="/assets/profile.jpg"  alt="the guy you want to hire"/>
        <p id="header-name">Andrew Ferris</p>
      </div>
      <div id="header-right">
        <Dropdown id="nav-dropdown">
            <Dropdown.Toggle id="nav-toggle"><img id="hamburger-icon" src="/assets/hamburger.png" alt="for dropdown"/></Dropdown.Toggle>

            <Dropdown.Menu id='nav-menu'>
              <Dropdown.Item href="/login" className="dropdown-item">ABOUT</Dropdown.Item>
              <Dropdown.Item href="/dashboard" className="dropdown-item">PORTFOLIO</Dropdown.Item>
              <Dropdown.Item href="/" className="dropdown-item">CONTACT</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
      </div>
    </div>
  );
}

export default Header;