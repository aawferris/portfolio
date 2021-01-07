import React from 'react';
import './Footer.css'

function Footer(props) {
  return (
    <div id="footer-main-container">
      <div id="footer-left">
        <p id="footer-text">created by Andrew Ferris</p>
      </div>
      <div id="footer-right">
        <a href="https://drive.google.com/file/d/12bauG3wNYdQMGLUAQIWgN2VTtm3FwoS5/view?usp=sharing" alt="Andrew's resume" target="_blank" rel="noreferrer"><img id="resume-logo" src="/assets/document.png" alt=""/></a>
        <a href="https://github.com/aawferris/" alt="andrew's github profile" target="_blank" rel="noreferrer"><img id="gh-logo" src="/assets/github-logo.png" alt="" /></a>
        <a href="https://www.linkedin.com/in/andrew-ferris-8929401aa/" alt="Andrew's LinkedIn profile" target="_blank" rel="noreferrer"><img id="li-logo" src="/assets/linkedin.png" alt=""/></a>
      </div>
    </div>
  );
}

export default Footer;