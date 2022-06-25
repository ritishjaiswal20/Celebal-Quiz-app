import React, { useEffect, useState } from 'react'
import db from "../firebase";
import firebase from "firebase";
import "./PreviousResult.css"
import LandingHeader from "../Components/LandingHeader";
import Footer from "../Components/Footer";

function PreviousResult() {
      const [results, setResults] = useState([]);

      useEffect(() => {
        db.collection("result")
          .orderBy("timestamp", "desc")
          .onSnapshot((snapshot) =>
            setResults(
              snapshot.docs.map((doc) => ({
                id: doc.id,
                data: doc.data(),
              }))
            )
          );
      }, []);

  return (
   
      <div className="pageResult">
        <LandingHeader />
        <div className="previousresult-banner">
           <h1>Previous  Results</h1>
        </div>
        <div className="results-container">
        <div className="result-heading">
          <div className="name">Name</div>
          <div className="name">Cateogry</div>
          <div className="name">Score</div>
        </div>
        {results.map(({ id, data: { name, score, cateogry } }) => (
          <div className="results">
            <div className="name">{name}</div>
            <div className="name">{cateogry}</div>
            <div className="name">{score}</div>
          </div>
        ))}
        </div>
        <Footer/>
      </div>
    
  );
}

export default PreviousResult