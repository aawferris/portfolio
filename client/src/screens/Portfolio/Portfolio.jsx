import React, {useState} from 'react';
import Layout from '../../components/shared/Layout/Layout'
import './PortfolioGrid.css'

function Portfolio(props) {
  const [showFirst, setShowFirst] = useState(false)
  const [showSecond, setShowSecond] = useState(false)
  const [showThird, setShowThird] = useState(false)
  const [showFourth, setShowFourth] = useState(false)

  return (
  <Layout>
      <div id='main-project-container'>
        <div id="sub-container">
        <div className="project">
          <button
            className="btn-show"
            onClick={() => setShowFirst(!showFirst)}>
            <p className="proj-name">86 List</p>
          </button>
        </div>
          
        <div className="project">
            <button
              className="btn-show"
              onClick={() => setShowSecond(!showSecond)}>
              <p className="proj-name">Teacher Source</p>
            </button>
        </div>
          
          <div className="project">
            <button
              className="btn-show"
              onClick={() => setShowThird(!showThird)}>
              <p className="proj-name">Productive.ly</p>
            </button>
        </div>
          
          <div className="project">
            <button
              className="btn-show"
              onClick={() => setShowFourth(!showFourth)}>
              <p className="proj-name">CIA Cover Story</p>
            </button>
        </div>
        </div>
        
        {showFirst ? (
            <div className="hide-me">
              <p className="proj-lang">Built with: React.js, Ruby on Rails, Postgresql, CSS</p>
              <p className="proj-desc">86List is a community for service-industry professionals to talk about the clients that they serve. Built with Ruby on Rails and React.js, 86List requires login authentication and registration in order to view and interact with co-workers' posts. In future iterations, I want to allow users to create their own accounts and request to be a part of a community with a community leader's approval.</p>
              <img className="proj-img" src="/assets/86list.png" alt="" />
              <div className="proj-link-container">
                <a className="proj-link" href="https://github.com/aawferris/86list" target="_blank" rel="noreferrer" alt="this repo's github">REPO</a>
                <a className="proj-link" href="https://86list.netlify.app/" target="_blank" rel="noreferrer" alt="live site for this link">SITE</a>
              </div>
            </div>
          ) : (
              <div></div>
          )}
        
        {showSecond ? (
            <div className="hide-me">
              <p className="proj-lang">Built with: React.js, Express.js, MongoDB, CSS</p>
              <p className="proj-desc">Teacher Source is the result of a cross-discipline collaboration with a UX team using Agile workflow. My team of programmers and I took the UX Team's designs and brought them to life. This project uses MongoDB and React.js to create a dashboard for teachers to upload and share lesson planning resources. The Team and I have decided to continue to work on this project together.</p>
              <img className="proj-img" src="/assets/teachersource.png" alt="" />
              <div className="proj-link-container">
                <a className="proj-link" href="https://github.com/aawferris/teachersource" target="_blank" rel="noreferrer" alt="this repo's github">REPO</a>
                <a className="proj-link" href="https://teacher-source.netlify.app/" target="_blank" rel="noreferrer" alt="live site for this link">SITE</a>
              </div>
            </div>
          ) : (
              <div></div>
          )}
        
        {showThird ? (
            <div className="hide-me">
              <p className="proj-lang">Built with: React.js, Express.js, CSS, Airtable</p>
              <p className="proj-desc">Productive.ly is a React.js app that leverages AirTable API to allow users to stay focused and get work done. This app has a place for note-taking and task lists. I want to make this app into a browser extension.</p>
              <img className="proj-img" src="/assets/productively.png" alt="" />
              <div className="proj-link-container">
                <a className="proj-link" href="https://github.com/aawferris/productive.ly" target="_blank" rel="noreferrer" alt="this repo's github">REPO</a>
                <a className="proj-link" href="https://productively.netlify.app/" target="_blank" rel="noreferrer" alt="live site for this link">SITE</a>
              </div>
            </div>
          ) : (
              <div></div>
          )}
        
        {showFourth ? (
            <div className="hide-me">
              <p className="proj-lang">Built with: Javascript, CSS, HTML5</p>
              <p className="proj-desc">This is the first site I ever programmed using code. I used Javascript as well as made axios calls to RESTFUL APIs to to create this silly random person generator, styled to be a tool for CIA operatives to generate a cover story.</p>
              <img className="proj-img" src="/assets/cia.png" alt="" />
              <div className="proj-link-container">
                <a className="proj-link" href="https://github.com/aawferris/pCIA-cover-story" target="_blank" rel="noreferrer" alt="this repo's github">REPO</a>
                <a className="proj-link" href="https://aawferris.github.io/CIA-cover-story/index.html" target="_blank" rel="noreferrer" alt="live site for this link">SITE</a>
              </div>
            </div>
          ) : (
              <div></div>
        )}

    </div>
  </Layout>
  );
}

export default Portfolio;