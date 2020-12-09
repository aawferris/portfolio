import React from 'react';

import './About.css'

function About(props) {
  return (
    <div id="about-main-container">
      <div id="about-sub-container">
        <h1 id="about-title">ABOUT ME</h1>
        <div id="about-card-box">
          <div id="image-box">
            <img src="/assets/profile.jpg"  alt="Andrew Ferris" id="about-picture" />
          </div>
          <p id="brand-statement">Constant learner and leader in Education, pivoting to full stack development and passionate about organizational health. I believe that every person has and can achieve their life’s mission. I do this by leveraging my passion and experience in communication, education, and organizational health through a systematic and inclusive process to find and efficiently execute the best solution to move the mission forward. I create beautiful, user-friendly, and pragmatic apps and make sure I am always helping someone else succeed in their mission. I am making the transition to the tech industry because I believe it is the medium to see this mission through.</p>
          <div id="hobby-box">
            <p id="hobby-title">Hobbies</p>
            <ul id="hobbies">
              <li className="about-bullet">
                <img src="/assets/guitar-icon.png" className="bullet" alt="guitar icon" />
                <div className="bullet-descriptions">
                  <h4 className="bullet-title">Playing Music</h4>
                  <p className="bullet-info">I've played since 2003.  I play guitar (main instrument), bass, drums, keyboard, and sing background vocals. I have had the opportunity to play in front of 10,000 people, play with a Grammy-nominated artist and record with a Grammy-winning sound engineer.</p>
                </div>
              </li>
              <li className="about-bullet">
                <img src="/assets/language.png" className="bullet" alt="language icon"/> 
                <div className="bullet-descriptions">
                  <h4 className="bullet-title">Language Learning</h4>
                  <p className="bullet-info">English & Spanish (fluent), German (elementary), Portuguese & Galician (can read and speak some), Arabic & Greek (can read and write the script and speak a bit).</p>
                </div>
              </li>
              <li className="about-bullet">
                <img src="/assets/dumbbell.png" className="bullet" alt="dumbbell icon"/> 
                <div className="bullet-descriptions">
                  <h4 className="bullet-title">Exercise</h4>
                  <p className="bullet-info">I enjoy outdoor activites and lifting wieghts. I have played and coached soccer in High School and Middle School.</p>
                </div>
              </li>
              <li className="about-bullet">
                <img src="/assets/cooking.png" className="bullet" alt="cooking icon"/> 
                <div className="bullet-descriptions">
                  <h4 className="bullet-title">Cooking</h4>
                  <p className="bullet-info">I enjoy cooking Italian, New American, Thai and fusion.  I enjoy the process of layering flavors and trying new flavor combinations.</p>
                </div>
              </li>
              <li className="about-bullet">
                <img src="/assets/travel.png" className="bullet" alt="travel icon"/> 
                <div className="bullet-descriptions">
                  <h4 className="bullet-title">Travel</h4>
                  <p className="bullet-info">Whether it's my own backyard or around the world, I enjoy exploring new places and experiencing new cultures and people.  I have lived in Guatemala for 6 months, been to five European countries, 3 Asian countries and various other places.</p>
                </div>
              </li>
            </ul>
          </div>
          </div>
      </div>
    </div>
  );
}

export default About;