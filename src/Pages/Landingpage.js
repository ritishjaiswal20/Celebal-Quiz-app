import React, { useState } from 'react'
import LandingHeader from '../Components/LandingHeader'
import Nav from '../Components/Nav'
import TypeWriterEffect from "react-typewriter-effect";
import './Landingpage.css'
import { Link, Navigate, useNavigate } from 'react-router-dom';
import Footer from "../Components/Footer";
import firebase from "firebase";
import db from "../firebase";
import Modal from "react-modal";
import { containerClasses } from '@mui/system';

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    height: "55%",
    width: "50%",
    transitionDuration: "5s",
    transform: "translate(-50%, -50%)",
    backgroundImage:
      "url(https://images.unsplash.com/photo-1614741118887-7a4ee193a5fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGNvZGluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "100% 100%",
    objectFit: "conatin",
    overflow:"hidden",
  },
  
};

function Landingpage() {
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
    
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
      // setTimeout(() => closeModal(), 3000);
  }


     const [input,setInput]=useState("");
     const [message, setMessage] = useState(false);
   let navigate = useNavigate();

     const takequiz=()=>{
      navigate("/home");
     }
 const submit = (e) => {
   e.preventDefault();
   setMessage(true);
   setInput("");
 
   db.collection("subscriptions").add({
     email:input,
     timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
   });
 };
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
            <img
              src="https://i.gifer.com/7RwC.gif"
              alt=""
              onClick={openModal}
            />
          </div>
          <div className="landingpage-showcaseItem">
            <h4>Computer</h4>
            <img
              src="https://i.gifer.com/8oXf.gif"
              alt=""
              onClick={openModal}
            />
          </div>
          <div className="landingpage-showcaseItem">
            <h4>Mathematics</h4>
            <img
              src="https://i.gifer.com/Cwgf.gif"
              alt=""
              onClick={openModal}
            />
          </div>
        </div>

        <div className="landingpage-showcaseItems">
          <div className="landingpage-showcaseItem">
            <h4>History</h4>
            <img
              src="https://i.gifer.com/g09P.gif"
              alt=""
              onClick={openModal}
            />
          </div>
          <div className="landingpage-showcaseItem">
            <h4>Politics</h4>
            <img
              src="https://i.gifer.com/7N1e.gif"
              alt=""
              onClick={openModal}
            />
          </div>
          <div className="landingpage-showcaseItem">
            <h4>General Knowledge</h4>
            <img
              src="https://i.gifer.com/E2Ak.gif"
              alt=""
              // onClick={takequiz}
              onClick={openModal}
            />
          </div>
        </div>
      </div>

      <div className="landingpage-subscription">
        {message ? (
          <div className="thankyou">
            <h1>Thank you for subscribing us</h1>
          </div>
        ) : (
          <>
            <h1>Stay Tuned</h1>
            <h3>
              Subscrib to our newsletter and receive the latest news from Quz.
            </h3>
            <form className="subscribe-form">
              <input
                type="email"
                placeholder="Enter your email"
                value={input}
                onChange={(event) => setInput(event.target.value)}
              />
              <button className="subscribe-btn" onClick={submit}>
                Subscribe
              </button>
            </form>
          </>
        )}
        <></>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="modal-content">
          <h1>Hello there</h1>
          <h2>Take advantage of our free quizzes!</h2>
          <p>
            We urge you to take them as a registered user. You will get access
            to a lot more questions and all results will be tied up to your
            profile!
          </p>
          <div className="button-section">
            <button className="quizbtnn" onClick={takequiz}>
              Take Quiz
            </button>
            {/* <button className="bttn" onClick={closeModal}>close</button> */}
          </div>
        </div>
      </Modal>
      <Footer />
    </div>
  );
}

export default Landingpage