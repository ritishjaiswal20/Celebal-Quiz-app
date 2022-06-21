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
          The QuizAPI includes a wide number of
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
              "Science questions",
              "Physics questions",
              "Chemistry questions",
              "Maths questions",
              "English questions",
            ]}
            multiTextDelay={2000}
            typeSpeed={50}
          />
        </h1>
        <h3>Test your knowledge easily embed a quiz with website Quiz API</h3>
        <Link to="/home">
          <button className="btn">Take a Quiz</button>
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
            <h4>Topic</h4>
            <img
              src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2NpZW5jZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
          </div>
          <div className="landingpage-showcaseItem">
            <h4>Topic</h4>
            <img
              src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2NpZW5jZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
          </div>
          <div className="landingpage-showcaseItem">
            <h4>Topic</h4>
            <img
              src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2NpZW5jZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
          </div>
        </div>

        <div className="landingpage-showcaseItems">
          <div className="landingpage-showcaseItem">
            <h4>Topic</h4>
            <img
              src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2NpZW5jZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
          </div>
          <div className="landingpage-showcaseItem">
            <h4>Topic</h4>
            <img
              src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2NpZW5jZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
          </div>
          <div className="landingpage-showcaseItem">
            <h4>Topic</h4>
            <img
              src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2NpZW5jZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="landingpage-subscription">
        <h1>Stay Tuned</h1>
        <h3>
          Subscribe to our newsletter and receive the latest news from QuzApi.
        </h3>
        <form className="subscribe-form">
          <input type="email" placeholder="Enter your email" />
          <button className="subscribe-btn" onSubmit={handlesubmit}>Subscribe</button>
        </form>
      </div>
      <Footer/>
    </div>
  );
}

export default Landingpage