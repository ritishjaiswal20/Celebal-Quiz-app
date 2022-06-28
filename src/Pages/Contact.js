import React, { useState } from 'react'
import LandingHeader from "../Components/LandingHeader";
import "./Contact.css"
import Footer from "../Components/Footer";
import ErrorMessage from '../Components/ErrorMessage';
import firebase from "firebase";
import db from '../firebase';
function Contact() {
  const [error, setError] = useState(false);
   const [message, setMessage] = useState("");
   const [name, setName] = useState("");

    const submit=(e)=>{
     e.preventDefault();  
         setError(true);
           setMessage("");
           setName("");
            db.collection("contact").add({
                username: name,
              message: message,
              timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
            });
    }
  return (
    <div className="contact">
      <LandingHeader />
      <div className="contact-content">
        <div className="contact-top">
          <h1 className="contact-title">Contact Us</h1>
        </div>
        {error && <ErrorMessage>Your Response has been submitted</ErrorMessage>}

        <div className="contact-form">
          <form
            id="contact-forms"
            // onSubmit={this.handleSubmit.bind(this)}
            // method="POST"
          >
            <div className="email-field">
              {/* <label>Name</label> */}
              <input
                type="text"
                placeholder="Type you name"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </div>
            <div className="message-field">
              {/* <label>Message</label> */}
              <input
                type="message"
                placeholder="Message"
                value={message}
                onChange={(event) => setMessage(event.target.value)}
              />
            </div>
            <button className="btnn" onClick={submit}>
              Submit
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact