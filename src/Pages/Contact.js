import React from 'react'
import LandingHeader from "../Components/LandingHeader";
import "./Contact.css"
import Footer from "../Components/Footer";
function Contact() {
    const submit=(e)=>{
    //  e.preventDefault();  
    
    }
  return (
    <div className="contact">
      <LandingHeader />
      <div className="contact-content">
        <div className="contact-top">
          <h1 className="contact-title">Contact Us</h1>
        </div>
        <div className="contact-form">
          <form
            id="contact-forms"
            // onSubmit={this.handleSubmit.bind(this)}
            // method="POST"
          >
            <div className="email-field">
              {/* <label>Name</label> */}
              <input type="text" placeholder='Type you name'/>
            </div>
            <div className="message-field">
              {/* <label>Message</label> */}
              <input type="message" placeholder="Message" />
            </div>
            <button className="btn" onClick={submit}>
                Submit
            </button>
          </form>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Contact