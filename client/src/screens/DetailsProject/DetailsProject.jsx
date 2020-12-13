import React from 'react';
import {Link} from 'react-router-dom'
import './DetailsProject.css'

function DetailsProject(props) {
  return (
    <div className='projects-container'>
      <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <img className="image" src="/assets/86list.png" alt="86list site" />
          </div>
          <div class="flip-card-back">
            <h1 className="back-title">86List</h1>
            <p className="back-tools">React.js, Ruby on Rails, Postgresql, CSS</p>
            <p className="back-description">86List is a community for service-industry professionals to talk about the clients that they serve. 
              Built with Ruby on Rails and React.js, 86List requires login authentication and registration in order to 
              view and interact with co-workers' posts. In future iterations, I want to allow users to create their own
              accounts and request to be a part of a community with a community leader's approval.</p>
            <a className="project-link" href="https://86list.netlify.app/" alt="deployed app" target="_blank" rel="noopener">Repo</a>
            <a className="project-link" href="https://github.com/aawferris/86list" alt="Git Hub repo" target="_blank" rel="noopener">Site</a>
          </div>
        </div>
        <div>
        </div>
      </div>
      <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <img className="image" src="/assets/teachersource.png" alt="Teacher Source site" />
          </div>
          <div class="flip-card-back">
            <h1 className="back-title">Teacher Source</h1>
            <p className="back-tools">React.js, Express.js, MongoDB, CSS</p>
            <p className="back-description">Teacher Source is the result of a cross-discipline collaboration with a UX team using Agile workflow.  
             My team of programmers and I took the UX Team's designs and brought them to life. This project uses MongoDB
            and React.js to create a dashboard for teachers to upload and share lesson planning resources.  The Team
              and I have decided to continue to work on this project together.</p>
              <a className="project-link" href="https://teacher-source.netlify.app/" alt="deployed app" target="_blank" rel="noopener">Repo</a>
              <a className="project-link" href="https://github.com/aawferris/teachersource" alt="Git Hub repo" target="_blank" rel="noopener">Site</a>
          </div>
        </div>
      </div>
      <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <img className="image" src="/assets/productively.png" alt="Productive.ly site" />
          </div>
          <div class="flip-card-back">
            <h1 className="back-title">Productive.ly</h1>
            <p className="back-tools">React.js, Express.js, CSS</p>
            <p className="back-description">Productive.ly is a React.js app that leverages AirTable API to allow users to stay focused and
            get work done.  This app has a place for note-taking and task lists.  I want to make this app
              into a browser extension.</p>
              <a className="project-link" href="https://productively.netlify.app/" alt="deployed app" target="_blank" rel="noopener">Repo</a>
              <a className="project-link" href="https://github.com/aawferris/productive.ly" alt="Git Hub repo" target="_blank" rel="noopener">Site</a>
          </div>
        </div>
      </div>
      <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <img className="image" src="/assets/cia.png" alt="CIA Cover Story Generator site" />
          </div>
          <div class="flip-card-back">
            <h1 className="back-title">CIA Cover Story Generator</h1>
            <p className="back-tools">Vanilla Javascript, CSS, HTML5</p>
            <p className="back-description">This is the first site I ever programmed using code. I used Javascript as well as made 
            axios calls to RESTFUL APIs to to create this silly random person generator, styled to be a 
              tool for CIA operatives to generate a cover story.</p>
              <a className="project-link" href="https://aawferris.github.io/CIA-cover-story/index.html" alt="deployed app" target="_blank" rel="noopener">Repo</a>
              <a className="project-link" href="https://github.com/aawferris/CIA-cover-story" alt="Git Hub repo" target="_blank" rel="noopener">Site</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailsProject;