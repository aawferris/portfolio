import React from 'react';
import './MainFooter.css'

function MainFooter(props) {
  return (
    <div id="footer-alt-main-container">
      <div id="footer-left">
        <a href="https://drive.google.com/file/d/12bauG3wNYdQMGLUAQIWgN2VTtm3FwoS5/view?usp=sharing" alt="Andrew's resume" target="_blank" rel="noreferrer"><img id="resume-logo" src="/assets/document.png"/></a>
        <a href="https://github.com/aawferris/" alt="andrew's github profile" target="_blank" rel="noreferrer"><img id="gh-logo" src="/assets/github-logo.png" /></a>
        <a href="https://www.linkedin.com/in/andrew-ferris-8929401aa/" alt="Andrew's LinkedIn profile" target="_blank" rel="noreferrer"><img id="li-logo" src="/assets/linkedin.png" /></a>
      </div>
      <div id="footer-right">
        {/* <p id="footer-text">created by Andrew Ferris</p> */}
      </div>
    </div>
  );
}

export default MainFooter;