import React from 'react'; 
import { Link } from 'react-router-dom'
import stars2 from '../../assets/stars2.mp4'

import './Home.css'

function Home(props) {
  let vidStyle = {
    height: 'auto',
    width: '100%',
    float: 'left',
    top: '0',
    position: 'fixed',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    minHeight: '80vh',
    minWidth: '100vw',
    zIndex: '-1'
}

  return (
    <div id="home-main-container">
      <video style={vidStyle} className='videoTag' autoPlay loop muted>
        <source src={stars2} type='video/mp4' />
      </video>  
        <div id="intro-box">
          <h1 id="name">Andrew Ferris</h1>
          <p id="slash">|</p>
          <h3 id="job-title">jr. software engineer</h3>
        </div>
        <div id="brand-box">
          <p id="brand-statement">Constant learner dedicated to creating beautiful apps and making sure I'm helping someone else suceed in their mission. </p>
        </div>
        <div>
        <Link to="/portfolio"><img id="portfolio-link" src="/assets/external-link.png" /></Link>
        <p id="link-description">PORTFOLIO</p>
        </div>
      </div>
  );
}

export default Home;