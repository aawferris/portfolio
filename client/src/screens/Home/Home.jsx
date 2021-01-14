import React from 'react'; 
import { Link } from 'react-router-dom'
// import stars2 from '../../assets/stars2.mp4'
import CustomChatbot from "../../components/chatbot/CustomChatBot"
import Layout from '../../components/shared/Layout/Layout'

import './Home.css'

function Home(props) {

  return (
    <Layout>
      <div id="home-main-container">
        {/* <video id="video" className='videoTag' autoPlay loop muted>
          <source src={stars2} type='video/mp4' />
        </video>   */}
          <div id="intro-box">
            <h1 id="name">ANDREW FERRIS</h1>
            <p id="slash">|</p>
            <h3 id="job-title">software engineer</h3>
          </div>
          <div id="brand-box">
            <p id="intro-brand-statement">Constant learner dedicated to creating beautiful apps and helping others succeed in their mission. </p>
          </div>
          <div>
          <Link to="/portfolio"><p id="link-description">PORTFOLIO</p></Link>
          </div>
      </div>
      {/* <div id="chatbot-box"> */}
        {/* <CustomChatbot /> */}
      {/* </div> */}
    </Layout>
  );
}

export default Home;