import React from 'react';
import Layout from '../../components/shared/Layout/Layout'
import './About.css'

function About(props) {

  return (
    <Layout>
    <div id="about-main-container">
      <div id="about-sub-container">
        {/* <h1 id="about-title">ABOUT ME</h1> */}
        <div id="about-card-box">
          <div id="image-box">
            <img src="/assets/profile.jpg"  alt="Andrew Ferris" id="about-picture" />
          </div>
          <p id="brand-statement">Constant learner and leader in Education, pivoting to full stack development and passionate about organizational health. I believe that every person has and can achieve their life’s mission. I do this by leveraging my passion and experience in communication, education, and organizational health through a systematic and inclusive process to find and efficiently execute the best solution to move the mission forward. I create beautiful, user-friendly, and pragmatic apps and make sure I am always helping someone else succeed in their mission. I am making the transition to the tech industry because I believe it is the medium to see this mission through.</p>
          <div id="hobby-box">
              <p id="hobby-title">Hobbies</p>
            <div id="about-hobby-details">
              <div className="about-flip-card">
                <div className="about-flip-card-inner">
                  <div className="about-flip-card-front">
                    <img className="about-image" src="/assets/guitar-icon.png" alt="guitar icon" />
                  </div>
                  <div className="about-flip-card-back">
                    <h1 className="about-back-title">Music</h1>
                    <p className="about-back-description">I've played since 2003.  I play guitar (main instrument), bass, drums, keyboard, and sing background vocals. I have had the opportunity to play in front of 10,000 people, play with a Grammy-nominated artist and record with a Grammy-winning sound engineer.</p>
                  </div>
                </div>
                <div>
                </div>
              </div>

              <div className="about-flip-card">
                <div className="about-flip-card-inner">
                  <div className="about-flip-card-front">
                    <img className="about-image" src="/assets/language.png" alt="language icon" />
                  </div>
                  <div className="about-flip-card-back">
                    <h1 className="about-back-title">Languages</h1>
                    <p className="about-back-description">English & Spanish (fluent), German (elementary), Portuguese & Galician (able to read, limited speaking), Arabic & Greek (able to read and write the script, limited speaking).</p>
                  </div>
                </div>
                <div>
                </div>
              </div>

              <div className="about-flip-card">
                <div className="about-flip-card-inner">
                  <div className="about-flip-card-front">
                    <img className="about-image" src="/assets/dumbbell.png" alt="language icon" />
                  </div>
                  <div className="about-flip-card-back">
                    <h1 className="about-back-title">Exercise</h1>
                    <p className="about-back-description">I enjoy outdoor activities and lifting weights. I have played and coached soccer in High School and Middle School.</p>
                  </div>
                </div>
                <div>
                </div>
              </div>

              <div className="about-flip-card">
                <div className="about-flip-card-inner">
                  <div className="about-flip-card-front">
                    <img className="about-image" src="/assets/cooking.png" alt="cooking icon" />
                  </div>
                  <div className="about-flip-card-back">
                    <h1 className="about-back-title">Cooking</h1>
                    <p className="about-back-description">I enjoy cooking Italian, New American, Thai and fusion.  I enjoy the process of layering flavors and trying new flavor combinations.</p>
                  </div>
                </div>
                <div>
                </div>
              </div>

              <div className="about-flip-card">
                <div className="about-flip-card-inner">
                  <div className="about-flip-card-front">
                    <img className="about-image" src="/assets/travel.png" alt="travel icon" />
                  </div>
                  <div className="about-flip-card-back">
                    <h1 className="about-back-title">Travel</h1>
                    <p className="about-back-description">Whether it's my own backyard or around the world, I enjoy exploring new places and experiencing new cultures and people.  I have lived in Guatemala for 6 months, been to five European countries, 3 Asian countries and various other places.</p>
                  </div>
                </div>
                <div>
                </div>
              </div>
          </div>
          </div>
          </div>
      </div>
      </div>
      </Layout>
  );
}

export default About;