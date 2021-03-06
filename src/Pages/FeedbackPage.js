import React, { useEffect, useState } from 'react'
import "./FeedbackPage.css"
import db from "../firebase";
import firebase from "firebase";
import { useStateValue } from '../StateProvider';
import Footer from "../Components/Footer";
import LandingHeader from '../Components/LandingHeader';
import './FeedbackPage.css'
import ErrorMessage from '../Components/ErrorMessage';
import FlipMove from "react-flip-move";

function FeedbackPage() {
  const [input, setInput] = useState("");
  const [{ user }] = useStateValue();
  const [error, setError] = useState(false);
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
    if(!user){
      setError(true);
    }
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
      {error && (
        <ErrorMessage>Please first login to give your feedback</ErrorMessage>
      )}

      <div className="feedbackPage-content">
        <form>
          {/* <h1>Enter You  feed back</h1> */}
          <input
            value={input}
            type="text"
            placeholder="Give your Valuable feedback  "
            onChange={(e) => setInput(e.target.value)}
          />
          <button onClick={sendPost} type="submit">
            Post
          </button>
        </form>
        <FlipMove typeName={null}>
          {posts.map(({ id, data: { description, message } }) => (
            <div key="a" className="feedback-description">
              <h1>{description}</h1>
              <h2>{message}</h2>
            </div>
          ))}
        </FlipMove>
      </div>
      <Footer />
    </div>
  );
}

export default FeedbackPage