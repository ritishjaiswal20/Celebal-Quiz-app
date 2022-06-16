import './App.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import React,{ useState } from 'react';
import Quiz from './Pages/Quiz';
import axios from 'axios';
function App() {
  const[questions,setQuestions]= useState();
  const[name,setName]=useState();
  const[score,setScore]=useState(0);  

  const fetchQuestions = async (category = "", difficulty = "") => {
    const { data } = await axios.get(
      `https://opentdb.com/api.php?amount=10${
        category && `&category=${category}`
      }${difficulty && `&difficulty=${difficulty}`}&type=multiple`
    );
   console.log(data);
    setQuestions(data.results);
  };

  return (
    <Router>
    <div className="app" style={{ backgroundImage: 'url("/ques1.png")' }}>
    <Header/>
      <Routes>
      <Route path="/"  element={ <Home name={name} setName={setName} fetchQuestions={fetchQuestions }/>} />
  
      <Route path="/quiz"     element={<Quiz
              name={name}
              questions={questions}
              score={score}
              setScore={setScore}
              setQuestions={setQuestions}
            />}/>
          
      </Routes>
    </div>
    <Footer/>
   </Router>
     

  );
}

export default App;
