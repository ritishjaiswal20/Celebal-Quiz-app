import React, { useEffect, useState } from 'react'
import "./FeedbackPage.css"
import db from "../firebase";
import firebase from "firebase";
import { useStateValue } from '../StateProvider';
import Footer from "../Components/Footer";
import LandingHeader from '../Components/LandingHeader';
import './FeedbackPage.css'
function FeedbackPage() {
  const [input, setInput] = useState("");
  const [{ user }] = useStateValue();
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    db.collection("posts")
      .orderBy("timeStamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, []);
  const sendPost = (e) => {
    e.preventDefault();
    db.collection("posts").add({
    //   username: name,
      description: user.email,
      message: input,
      timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
  };
  return (
    <div className="FeedbackPage">
      <LandingHeader />
      <div className="feedbackPage-header">
        <h1>Feedback</h1>
      </div>
      <div className="feedbackPage-content">
        <form>
            {/* <h1>Enter You  feed back</h1> */}
          <input
            value={input}
            type="text"
            placeholder='Give your Valuable feedback  '
            onChange={(e) => setInput(e.target.value)}
          />
          <button onClick={sendPost} type="submit">
           Post
          </button>
        </form>
        {posts.map(({ id, data: { description, message } }) => (
          <div className="feedback-description">
            <h1>{description}</h1>
            <h2>{message}</h2>
          </div>
        ))}
      </div>
      <Footer/>
    </div>
  );
}

export default FeedbackPage