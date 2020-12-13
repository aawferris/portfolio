import React from 'react';
import './Footer.css'

function Footer(props) {
  return (
    <div id="footer-main-container">
      <div id="footer-left">
        <p id="footer-text">created by Andrew Ferris</p>
      </div>
      <div id="footer-right">
        <a href="https://github.com/aawferris/portfolio" alt="andrew's github profile" target="_blank" rel="noreferrer"><img id="gh-logo" src="/assets/github-logo.png" /></a>
        <a href="https://www.linkedin.com/in/andrew-ferris-8929401aa/" alt="andrew's linkedin profile" target="_blank" rel="noreferrer"><img id="li-logo" src="/assets/linkedin.png"/></a>
      </div>
    </div>
  );
}

export default Footer;