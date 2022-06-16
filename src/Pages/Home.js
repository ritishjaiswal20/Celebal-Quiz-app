import React, { useState } from 'react'
import './Home.css'
import { Button, MenuItem, TextField } from '@mui/material';
import Categories from '../Data/Categories';
import ErrorMessage from '../Components/ErrorMessage';
import { useNavigate, useParams } from "react-router-dom";

function Home({name,setName,fetchQuestions}) {
 
  const [category, setCategory] = useState('');
  const[difficulty, setDifficulty] = useState('');
  const[error, setError] = useState(false);
  let navigate = useNavigate();
  const handleSubmit = (e) => {
    if(!category || !difficulty || !name){
      setError(true);
      return;
    }
    else{
        setError(false);
        fetchQuestions(category,difficulty);
        navigate("/quiz");
        console.log("submit");
    }
  };
  return (
    <div className="home">
        <div className="settings">
            <span>Quiz Setings</span>
            <div className="settings-select">
              {error &&<ErrorMessage>Please fill the input</ErrorMessage>}
              <TextField
               style={{marginBottom:25}}
               label="enter your name"
               varant="outlined"
               onChange={(e)=>setName(e.target.value)}
              />
              <TextField
                select
                label="select Cateogry"
                variant="outlined"
                style={{marginBottom:30 }}
                onChange={(e)=>setCategory(e.target.value)}
              >
                {Categories.map((cat)=>(
                  <MenuItem key={cat.category} value={cat.value}>{cat.category}</MenuItem>
                ) )}
              </TextField>
    
              <TextField
                select
                label="select Cateogry"
                variant="outlined"
                style={{marginBottom:30 }}
                onChange={(e)=>setDifficulty(e.target.value)}
              >

                  <MenuItem key="easy" value="easy">Easy</MenuItem>
                  <MenuItem key="medium" value="medium">Medium</MenuItem>
                  <MenuItem key="hard" value="hard">Hasy</MenuItem>
              </TextField>
              <Button variant="contained" color="primary" size="large" onClick={handleSubmit}>Start quiz</Button>
            </div>
        </div>
        <img src ="/quiz.svg" className="banner" alt="quiz photo"/>
    </div>
  )
}

export default Home