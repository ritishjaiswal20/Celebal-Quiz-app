import React from 'react'
import LandingHeader from '../Components/LandingHeader'
import Nav from '../Components/Nav'
import TypeWriterEffect from "react-typewriter-effect";
import './Landingpage.css'
import { Link } from 'react-router-dom';
import Footer from "../Components/Footer";

function Landingpage() {
  const handlesubmit=(e)=>{
    e.prerventDefault();
  }
  return (
    <div className="Landingpage">
      <LandingHeader />
      <div className="landingpage-content">
        <h1>
          Quiz Hub includes a wide number of
          <TypeWriterEffect
            textStyle={{
              // fontFamily: "rgb(60,210,88)",
              color: "#3cd258",
              fontWeight: 300,
              fontSize: "40px",
              marginTop: "20px",
            }}
            startDelay={1000}
            cursorColor="#3F3D56"
            multiText={[
              "Science and Nature questions",
              "Computer questions",
              "Chemistry questions",
              "Maths questions",
              "Mythology questions",
              "Music questions",
              "Musicals and Theaters questions",
              "Television questions",
              "Video Games questions",
              "Board Games questions",
              "Cartoon and Animations questions",
              "Japanese Anime questions",
            ]}
            multiTextDelay={2000}
            typeSpeed={50}
          />
        </h1>
        <h3>Test your Level of your knowledege here with our free tests</h3>
        <Link to="/home">
          <button className="btnn">Take a Quiz</button>
        </Link>
      </div>
      <div className="landingpage-showcase">
        <div className="landingpage-showcaseTop">
          <h1>Our Top Topics</h1>
          <h3>
            Test your skills with our top topics with a variaty of questions set
            for beginners and seniors alike!
          </h3>
        </div>
        <div className="landingpage-showcaseItems">
          <div className="landingpage-showcaseItem">
            <h4>Science And Nature</h4>
            <img src="https://i.gifer.com/7RwC.gif" alt="" />
          </div>
          <div className="landingpage-showcaseItem">
            <h4>Computer</h4>
            <img src="https://i.gifer.com/8oXf.gif" alt="" />
          </div>
          <div className="landingpage-showcaseItem">
            <h4>Mathematics</h4>
            <img src="https://i.gifer.com/Cwgf.gif" alt="" />
          </div>
        </div>

        <div className="landingpage-showcaseItems">
          <div className="landingpage-showcaseItem">
            <h4>History</h4>
            <img src="https://i.gifer.com/g09P.gif" alt="" />
          </div>
          <div className="landingpage-showcaseItem">
            <h4>Politics</h4>
            <img src="https://i.gifer.com/7N1e.gif" alt="" />
          </div>
          <div className="landingpage-showcaseItem">
            <h4>General Knowledge</h4>
            <img src="https://i.gifer.com/E2Ak.gif" alt="" />
          </div>
        </div>
      </div>

      <div className="landingpage-subscription">
        <h1>Stay Tuned</h1>
        <h3>
          Subscribe to our newsletter and receive the latest news from Quz.
        </h3>
        <form className="subscribe-form">
          <input type="email" placeholder="Enter your email" />
          <button className="subscribe-btn" onSubmit={handlesubmit}>
            Subscribe
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default Landingpage