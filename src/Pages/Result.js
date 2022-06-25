import { Button } from '@mui/material';
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import "./Result.css"
import db from "../firebase";
import firebase from "firebase";
function Result({name,score}) {
  let navigate = useNavigate();
  
  // useEffect(()=>{
  //   if(!name){
  //       navigate("/");
  //   }
  // },[name,navigate])
  // useEffect(()=>{
  //     db.collection("result").add({
  //       name:name,
  //       timestamp: firebase.firestore.FieldValue.serverTimestamp(),
  //     });
  // },[])
    return (
    <div className="result">
        <h1 className="title">Final score:  {score}</h1>
        <Button
          variant="contained"
          color="secondary"
          size="large"
          style={{alignSelf:"center",marginTop:20}}
          href="/"
        >
          Go to Home Page
        </Button>
    </div>
  )
}

export default Result