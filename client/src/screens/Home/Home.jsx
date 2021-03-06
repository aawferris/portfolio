import React from 'react'; 
import { Link } from 'react-router-dom'
import CustomChatbot from "../../components/chatbot/CustomChatBot"
import Layout from '../../components/shared/Layout/Layout'

import './Home.css'

function Home(props) {

  return (
    <Layout>
      <div id="home-main-container">
          <div id="intro-box">
            <h1 id="name" className="fade-in" >ANDREW FERRIS</h1>
            <p id="slash" className="fade-in2">|</p>
            <h3 id="job-title" className="fade-in2">software engineer</h3>
          </div>
          <div id="brand-box">
            <p id="intro-brand-statement" className="fade-in2">Constant learner dedicated to creating beautiful apps and helping others succeed in their mission. </p>
          </div>
          <div> 
          <Link id="port-link" to="/portfolio"><a id="link-description" className="w3-center w3-animate-right w3-animate-opacity" href="#">PORTFOLIO</a></Link>
          </div>
      </div>
    </Layout>
  );
}

export default Home;