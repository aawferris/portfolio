import React, {useState} from 'react';
import Layout from '../../components/shared/Layout/Layout'
import './AboutGrid.css'

function About(props) {
  const [showAbout, setShowAbout] = useState(false)
  const [showMusic, setShowMusic] = useState(false)
  const [showLang, setShowLang] = useState(false)
  const [showExercise, setShowExercise] = useState(false)
  const [showCook, setShowCook] = useState(false)
  const [showTravel, setShowTravel] = useState(false)

  const handleAboutClick = () => {
    setShowAbout(true)
    setShowMusic(false)
    setShowLang(false)
    setShowExercise(false)
    setShowCook(false)
    setShowTravel(false)
  }

  const handleAboutClick2 = () => {
    setShowAbout(false)
    setShowMusic(true)
    setShowLang(false)
    setShowExercise(false)
    setShowCook(false)
    setShowTravel(false)
  }

  const handleAboutClick3 = () => {
    setShowAbout(false)
    setShowMusic(false)
    setShowLang(true)
    setShowExercise(false)
    setShowCook(false)
    setShowTravel(false)
  }

  const handleAboutClick4 = () => {
    setShowAbout(false)
    setShowMusic(false)
    setShowLang(false)
    setShowExercise(true)
    setShowCook(false)
    setShowTravel(false)
  }

  const handleAboutClick5 = () => {
    setShowAbout(false)
    setShowMusic(false)
    setShowLang(false)
    setShowExercise(false)
    setShowCook(true)
    setShowTravel(false)
  }

  const handleAboutClick6 = () => {
    setShowAbout(false)
    setShowMusic(false)
    setShowLang(false)
    setShowExercise(false)
    setShowCook(false)
    setShowTravel(true)
  }

  return (
    <Layout>
    <div id="main-project-container">
      <div id="sub-container">
          <div className="project">
            <button
              className="btn-show"
              onClick={() => handleAboutClick()}>
              <p className="proj-name">About Me</p>
            </button>
          </div>

          <div className="project">
            <button
              className="btn-show"
              onClick={() => handleAboutClick2()}>
              <p className="proj-name">Music</p>
            </button>
          </div>

          <div className="project">
            <button
              className="btn-show"
              onClick={() => handleAboutClick3()}>
              <p className="proj-name">Language</p>
            </button>
          </div>

          <div className="project">
            <button
              className="btn-show"
              onClick={() => handleAboutClick4()}>
              <p className="proj-name">Exercise</p>
            </button>
          </div>

          <div className="project">
            <button
              className="btn-show"
              onClick={() => handleAboutClick5()}>
              <p className="proj-name">Cooking</p>
            </button>
          </div>

          <div className="project">
            <button
              className="btn-show"
              onClick={() => handleAboutClick6()}>
              <p className="proj-name">Travel</p>
            </button>
          </div>
        </div>
        
        <div id="proj-about">
        <h2>HOBBIES</h2>
          <p>
            There are so many things that I enjoy doing and taking in, but here are a few of my tops.
          </p>
        </div>

        {showAbout ? (
            <div className="hide-me">
              <p className="proj-lang">About Me</p>
              <p className="proj-desc">Constant learner and leader in Education, pivoting to full stack development and passionate about organizational health. I believe that every person has and can achieve their life’s mission. I do this by leveraging my passion and experience in communication, education, and organizational health through a systematic and inclusive process to find and efficiently execute the best solution to move the mission forward. I create beautiful, user-friendly, and pragmatic apps and make sure I am always helping someone else succeed in their mission. I am making the transition to the tech industry because I believe it is the medium to see this mission through.</p>
              <img className="proj-img" src="/assets/profile.jpg" alt="Andy in Ft. Bragg, CA" />
            </div>
          ) : (
              <div></div>
          )}
        
        {showMusic ? (
            <div className="hide-me">
              <p className="proj-lang">Music</p>
              <p className="proj-desc">I've played since 2003. I play guitar (main instrument), bass, drums, keyboard, and sing background vocals. I have had the opportunity to play in front of 10,000 people, play with a Grammy-nominated artist and record with a Grammy-winning sound engineer.</p>
            <img className="proj-img" src="/assets/guitar-icon.png" alt="guitar icon" />
            </div>
          ) : (
              <div></div>
          )}
        
        {showLang ? (
            <div className="hide-me">
              <p className="proj-lang">Languages</p>
              <p className="proj-desc">English & Spanish (fluent), German (elementary), Portuguese & Galician (able to read, limited speaking), Arabic & Greek (able to read and write the script, limited speaking).</p>
              <img className="proj-img" src="/assets/language.png" alt="speech bubbles icon" />
            </div>
          ) : (
              <div></div>
          )}
        
        {showExercise ? (
            <div className="hide-me">
              <p className="proj-lang">Exercise</p>
              <p className="proj-desc">I enjoy outdoor activities and lifting weights. I have played and coached soccer in High School and Middle School.</p>
              <img className="proj-img" src="/assets/dumbbell.png" alt="dumbbell icon" />
            </div>
          ) : (
              <div></div>
          )}
        
        {showCook ? (
            <div className="hide-me">
              <p className="proj-lang">Cooking</p>
              <p className="proj-desc">I enjoy cooking Italian, New American, Thai and fusion. I enjoy the process of layering flavors and trying new flavor combinations.</p>
              <img className="proj-img" src="/assets/cooking.png" alt="chef's hat icon" />
            </div>
          ) : (
              <div></div>
          )}
        
        {showTravel ? (
            <div className="hide-me">
              <p className="proj-lang">Travel</p>
              <p className="proj-desc">Whether it's my own backyard or around the world, I enjoy exploring new places and experiencing new cultures and people. I have lived in Guatemala for 6 months, been to five European countries, 3 Asian countries and various other places.</p>
              <img className="proj-img" src="/assets/travel.png" alt="airplane icon" />
            </div>
          ) : (
              <div></div>
          )}

    </div>
    </Layout>
  );
}

export default About;