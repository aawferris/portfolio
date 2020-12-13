import React from 'react';

import './Portfolio.css'

function Portfolio(props) {
  return (
    <div id="main-portfolio-container">
      <div id="card-container">
        <div className="card" id="card-1">
          {/* <div className="top-row"> */}
            <div className="top-left">
              <p className="number">01</p>
              <p className="title">86List</p>
              <p className="languages">React.js, Ruby on Rails, Postgresql, CSS</p>
            </div>
          <div className="top-right">
              <a href="https://86list.netlify.app/" alt="deployed app" target="_blank" rel="noopener"><img src="/assets/internet.png" className="deploy-link" /></a>
              <a href="https://github.com/aawferris/86list" alt="Git Hub repo" target="_blank" rel="noopener"><img src="/assets/github-logo.png" className="repo-link"/></a>
            </div>
          {/* </div> */}
          <div className="screenshot-box">
            <img className="screenshot" src="/assets/86list.png" />
          </div>
          <div className="project-description-box">
            <p className="project-description">
              86List is a community for service-industry professionals to talk about the clients that they serve. 
              Built with Ruby on Rails and React.js, 86List requires login authentication and registration in order to 
              view and interact with co-workers' posts. In future iterations, I want to allow users to create their own
              accounts and request to be a part of a community with a community leader's approval.
            </p>
          </div>
        </div> { /* END OF CARD CONTAINER */}
        <div className="card" id="card-2">
          {/* <div className="top-row"> */}
            <div className="top-left">
              <p className="number">02</p>
              <p className="title">Teacher Source</p>
              <p className="languages">React.js, Express.js, MongoDB, CSS</p>
            </div>
            <div className="top-right">
              <a href="https://teacher-source.netlify.app/" target="_blank" rel="noopener"><img src="/assets/internet.png" className="deploy-link" /></a>
              <a href="https://github.com/aawferris/teachersource" target="_blank" rel="noopener"><img src="/assets/github-logo.png" className="repo-link"/></a>
            </div>
          {/* </div> */}
          <div className="screenshot-box">
            <img className="screenshot" src="/assets/teacher-source.png" />
          </div>
          <div className="project-description-box">
            <p className="project-description">
              Teacher Source is the result of a cross-discipline collaboration with a UX team using Agile workflow. 
              My team of programmers and I took the UX Team's designs and brought them to life. This project uses MongoDB
              and React.js to create a dashboard for teachers to upload and share lesson planning resources.  The Team
              and I have decided to continue to work on this project together.
            </p>
          </div>
        </div> { /* END OF CARD CONTAINER */}
        <div className="card" id="card-3">
          {/* <div className="top-row"> */}
            <div className="top-left">
              <p className="number">03</p>
              <p className="title">Productive.ly</p>
              <p className="languages">React.js, Express.js, CSS</p>
            </div>
            <div className="top-right">
              <a href="https://productively.netlify.app/" target="_blank" rel="noopener"><img src="/assets/internet.png" className="deploy-link" /></a>
              <a href="https://github.com/aawferris/productive.ly" target="_blank" rel="noopener"><img src="/assets/github-logo.png" className="repo-link"/></a>
            </div>
          {/* </div> */}
          <div className="screenshot-box">
            <img className="screenshot" src="/assets/productively.png" />
          </div>
          <div className="project-description-box">
            <p className="project-description">
              Productive.ly is a React.js app that leverages AirTable API to allow users to stay focused and
               get work done.  This app has a place for note-taking and task lists.  I want to make this app
              into a browser extension.
            </p>
          </div>
        </div> { /* END OF CARD CONTAINER */}
        <div className="card" id="card-4">
          {/* <div className="top-row"> */}
            <div className="top-left">
              <p className="number">04</p>
              <p className="title">CIA Cover Story Generator</p>
              <p className="languages">Vanilla Javascript, CSS, HTML5</p>
            </div>
            <div className="top-right">
            <a href="https://aawferris.github.io/CIA-cover-story/index.html" target="_blank" rel="noopener"><img src="/assets/internet.png" alt="link to github" className="deploy-link" /></a>
              <a href="https://github.com/aawferris/CIA-cover-story" target="_blank" rel="noopener"><img src="/assets/github-logo.png" alt="link to deployment" className="repo-link"/></a>
            </div>
          {/* </div> */}
          <div className="screenshot-box">
            <img className="screenshot" src="/assets/cia.png" alt="front of cia cover generator website"/>
          </div>
          <div className="project-description-box">
            <p className="project-description">
              This is the first site I ever programmed using code. I used Javascript as well as made 
               axios calls to RESTFUL APIs to to create this silly random person generator, styled to be a 
              tool for CIA operatives to generate a cover story.
            </p>
          </div>
        </div> { /* END OF CARD CONTAINER */}
      </div>
    </div>
  );
}

export default Portfolio;