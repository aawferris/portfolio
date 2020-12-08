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
              <a target="_blank" rel="noopener"><img src="/assets/internet.png" className="deploy-link" /></a>
              <a href="https://github.com/aawferris/86list" target="_blank" rel="noopener"><img src="/assets/github-logo.png" className="repo-link"/></a>
            </div>
          {/* </div> */}
          <div className="screenshot-box">
            <img className="screenshot" src="/assets/86ist-repo.png" />
          </div>
          <div className="project-description-box">
            <p className="project-description">
              86List is a community for service-industry professionals to talk about the clients that they serve. 
              This idea surfaced during a conversation with my neighbor, a career, high-end bartender. 
              He mentioned that while guests can rate restaurants, restaurants can't rate guests. 86List is a place where 
              servers and bartenders at a specific restaurant/eatery can talk about the clients that they serve and rate them. 
              The title is a play on words, as '86' is the way to say 'get rid of' or 'without'. So this is geared towards guests they'd rather 86.
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
              Teacher Source is your one stop shop for lesson plans and resources,specifically tailored to you! 
              Teacher Source is a web app that creates a community of teachers through our dynamic account services. 
              Inside each account, users have access to My Dashboard, where they can view saved Lesson Plans as well 
              as track their progress on tutorials and continuing education credits. We securely store your information 
              in our top-of-the-line free version of MongoDB.
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
              At Ferrous-Clad, we strive to help our customers experience their carpe diem. Our newest innovation, 
              Productive.ly, will help the focused become more focused, the driven to become more driven and the 
              productive to reach the upper echelons of their potential. Productive.ly is a productivity app with 
              robust features which include a focus timer, a quick task list, a note storage and a built-in break button 
              to help ease your tension throughout your busy day. Are you ready to carpe diem?
            </p>
          </div>
        </div> { /* END OF CARD CONTAINER */}
        <div className="card" id="card-4">
          {/* <div className="top-row"> */}
            <div className="top-left">
              <p className="number">04</p>
              <p className="title">CIA Cover Story Generator</p>
              <p className="languages">Vaniall Javascript, CSS, HTML5</p>
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
              Finally! You don't have to invest time in creating your own cover story when you're engage in espionage. 
              The handy dandy CIA Cover Story application will take the guess work out of your fake future!
            </p>
          </div>
        </div> { /* END OF CARD CONTAINER */}
      </div>
    </div>
  );
}

export default Portfolio;