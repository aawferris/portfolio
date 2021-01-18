import React, {useState} from 'react';
import Layout from '../../components/shared/Layout/Layout'
import './PortfolioGrid.css'

function Portfolio(props) {
  const [showFirst, setShowFirst] = useState(false)
  const [showSecond, setShowSecond] = useState(false)
  const [showThird, setShowThird] = useState(false)
  const [showFourth, setShowFourth] = useState(false)

  const handleClick1 = () => {
    setShowFirst(true)
    setShowSecond(false)
    setShowThird(false)
    setShowFourth(false)
  }

  const handleClick2 = () => {
    setShowFirst(false)
    setShowSecond(true)
    setShowThird(false)
    setShowFourth(false)
  }

  const handleClick3 = () => {
    setShowFirst(false)
    setShowSecond(false)
    setShowThird(true)
    setShowFourth(false)
  }

  const handleClick4 = () => {
    setShowFirst(false)
    setShowSecond(false)
    setShowThird(false)
    setShowFourth(true)
  }

  return (
    <Layout>
      {/* LEFT SIDE NAVIGATION  */}
      <div id='main-project-container'>
        <div id="sub-container">
          <div className="project">
            <button
              className="btn-show"
              onClick={() => handleClick1()}>
              <a className="proj-name">86 List</a>
            </button>
          </div>
            
          <div className="project">
              <button
                className="btn-show"
                onClick={() => handleClick2()}>
                <a className="proj-name">Teacher Source</a>
              </button>
          </div>
            
            <div className="project">
              <button
                className="btn-show"
                onClick={() => handleClick3()}>
                <a className="proj-name">Productive.ly</a>
              </button>
          </div>
            
            <div className="project">
              <button
                className="btn-show"
                onClick={() => handleClick4()}>
                <a className="proj-name">CIA Cover Story</a>
              </button>
          </div>

          <div className="project">
              <button
                className="btn-show"
                onClick={() => handleClick4()}>
                <a className="proj-name">Generador de contraseñas aleatorias</a>
              </button>
          </div>
        </div>

        {/* WHAT APPEARS IN ON THE RIGHT ONCLICK WITH NAV  */}
        <div id="proj-about">
          <h2 id="port-h2">PROJECTS</h2>
          <p>
            As a growing developer, it's been brought me a great amount of joy to be able to combine my love for building things with my love for artistic expression.  Finding the balance between the two
            and growing in each area is a life-long passion.
          </p>
          <h3 id="port-h3">HOW TO BROWSE</h3>
          <p>Just click on any of the project names on the left-hand side to see a little bit about which technologies were used, a brief description,
           a snapshot of the main page, and links to the deployed site and GitHub repo. 
          </p>
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
        
        {showFourth ? (
            <div className="hide-me">
              <p className="proj-lang">Built with: Javascript, CSS, HTML5</p>
              <p className="proj-desc">Un proyecto en español que genera contraseñas.  He terminado con la primera iteración, la cual genera una contrasña con letra, número y símbolo, pero la segunda iteracion tendra mas seguridad todavia. La meta es poder ponerlo en un sitio web para ayudarle al cliente.</p>
              <img className="proj-img" src="/assets/randompass.png" alt="image of front page" />
              <div className="proj-link-container">
                <a className="proj-link" href="https://github.com/aawferris/randompassword/" target="_blank" rel="noreferrer" alt="this repo's github">REPO</a>
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