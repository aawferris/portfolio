import React, {useState} from 'react';
import Layout from '../../components/shared/Layout/Layout'
import './PortfolioGrid.css'

function Portfolio(props) {
  const [showMore, setShowMore] = useState(false)

  return (
  <Layout>
      <div id='main-project-container'>
          <div className="project">
            <button
              className="btn-show"
              onClick={() => setShowMore(!showMore)}>
              <p className="proj-name">86 List</p></button>
              </div> 
            {showMore ? (
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
        
        {/* <div className="sub-proj-container">
          <div className="project">
            <p className="proj-name">Teacher Source</p>
          </div>
        </div>
        <div className="hide-me">
          <p className="proj-lang">Built with: React.js, Express.js, MongoDB, CSS</p>
          <p className="proj-desc">Teacher Source is the result of a cross-discipline collaboration with a UX team using Agile workflow. My team of programmers and I took the UX Team's designs and brought them to life. This project uses MongoDB and React.js to create a dashboard for teachers to upload and share lesson planning resources. The Team and I have decided to continue to work on this project together.</p>
          <img className="proj-img" src="/assets/teachersource.png" alt="font page of site" />
        <div className="proj-link-container">
          <a className="proj-link" href="https://github.com/aawferris/teachersource" target="_blank" rel="noreferrer" alt="this repo's github">REPO</a>
          <a className="proj-link" href="https://teacher-source.netlify.app/" target="_blank" rel="noreferrer" alt="live site for this link">SITE</a>
        </div>
        </div>
        
        <div className="sub-proj-container">
          <div className="project">
            <p className="proj-name">Productive.ly</p>
          </div>
        </div>
        <div className="hide-me">
          <p className="proj-lang">Built with: React.js, Express.js, CSS, Airtable</p>
          <p className="proj-desc">Productive.ly is a React.js app that leverages AirTable API to allow users to stay focused and get work done. This app has a place for note-taking and task lists. I want to make this app into a browser extension.</p>
          <img className="proj-img" src="/assets/productively.png" alt="font page of site" />
        <div className="proj-link-container">
          <a className="proj-link" href="https://github.com/aawferris/productive.ly" target="_blank" rel="noreferrer" alt="this repo's github">REPO</a>
          <a className="proj-link" href="https://productively.netlify.app/" target="_blank" rel="noreferrer" alt="live site for this link">SITE</a>
        </div>
        </div>

        <div className="sub-proj-container">
          <div className="project">
            <p className="proj-name">CIA Cover Story Generator</p>
          </div>
        </div>
        <div className="hide-me">
          <p className="proj-lang">Built with: Vanilla Javascript, CSS, HTML5</p>
          <p className="proj-desc">This is the first site I ever programmed using code. I used Javascript as well as made axios calls to RESTFUL APIs to to create this silly random person generator, styled to be a tool for CIA operatives to generate a cover story.</p>
          <img className="proj-img" src="/assets/productively.png" alt="font page of site" />
        <div className="proj-link-container">
          <a className="proj-link" href="https://github.com/aawferris/CIA-cover-story" target="_blank" rel="noreferrer" alt="this repo's github">REPO</a>
          <a className="proj-link" href="https://aawferris.github.io/CIA-cover-story/index.html" target="_blank" rel="noreferrer" alt="live site for this link">SITE</a>
        </div>
        </div> */}
    </div>
  </Layout>
  );
}

export default Portfolio;