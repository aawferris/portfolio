import React from 'react'; 
import {Link} from 'react-router-dom'

import './Home.css'

function Home(props) {
  return (
      <div id="home-main-container">
        <div id="intro-box">
          <h1 id="name">Andrew Ferris</h1>
          <p id="slash">|</p>
          <h3 id="job-title">jr. software engineer</h3>
        </div>
        <div id="brand-box">
          <p id="brand-statement">Constant learner dedicated to creating beautiful apps and making sure I'm helping someone else suceed in their mission. </p>
        </div>
        <div>
          <Link to="/portfolio"><img id="portfolio-link" src="/assets/external-link.png"/></Link>
        </div>
      </div>
  );
}

export default Home;