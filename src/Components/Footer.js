import React from 'react'
import "./Footer.css"
function Footer() {
  return (
    <div className="footer">
  <div className="footer-container">
      <img
        className="footer-icon"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU8G-mn9XNC8h5vr1H6BK30eaODzPbNVPf5Q&usqp=CAU"
        alt="logo"
      />
      <div className="footer-contents">
        
        <div className="footer-content">
            <h1>Company</h1>
            <h3>Features</h3>
        </div>

        <div className="footer-content">
            <h1>Product</h1>
            <h3>Quiz</h3>
        </div>
        
        <div className="footer-content">
            <h1>Support</h1>
            <h3>Contact</h3> 
        </div>

      </div>
      </div>
    </div>
  );
}

export default Footer