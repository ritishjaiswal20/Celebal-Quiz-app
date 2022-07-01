import './App.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import React,{ useEffect, useState } from 'react';
import Quiz from './Pages/Quiz';
import axios from 'axios';
import Login from './Login';
import Result from './Pages/Result';
import Landingpage from './Pages/Landingpage';
import Features from './Pages/Features';
import LandingHeader from './Components/LandingHeader';
import Contact from './Pages/Contact';
import Paymentpage from './Pages/Paymentpage';
import { useStateValue } from "./StateProvider";
import { auth } from './firebase';
import PreviousResult from './Pages/PreviousResult';
import FeedbackPage from './Pages/FeedbackPage';

function App() {
  const[questions,setQuestions]= useState();
  const[name,setName]=useState();
  const[score,setScore]=useState(0);  
    // const [{ user }] = useStateValue();
   
  const fetchQuestions = async (category = "", difficulty = "") => {
    const { data } = await axios.get(
      `https://opentdb.com/api.php?amount=10${
        category && `&category=${category}`
      }${difficulty && `&difficulty=${difficulty}`}&type=multiple`
    );
      console.log(data);
    setQuestions(data.results);
  };


    const [{}, dispatch] = useStateValue();
    useEffect(() => {
      auth.onAuthStateChanged((authUser) => {
        if (authUser) {
          //user is logged in
          dispatch({
            type: "SET_USER",
            user: authUser,
          });
        } else {
          dispatch({
            type: "SET_USER",
            user: null,
          });
        }
      });
    }, []);

  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={<Landingpage fetchQuestions={fetchQuestions} />}
          />
          <Route path="/payment" element={<Paymentpage />} />
          {/* <Route path="/login" element={<Login />} /> */}
          <Route
            path="/home"
            element={
              <Home
                name={name}
                setName={setName}
                fetchQuestions={fetchQuestions}
              />
            }
          />
          <Route
            path="/quiz"
            element={
              <Quiz
                name={name}
                questions={questions}
                score={score}
                setScore={setScore}
                setQuestions={setQuestions}
              />
            }
          />
          <Route
            path="/result"
            element={<Result score={score} name={name} />}
          />
          <Route path="/login" element={<Login />} />
          <Route path="/features" element={<Features />} />
          <Route path="/feedback" element={<FeedbackPage name={name} />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/previousresult" element={<PreviousResult />} />
        </Routes>

        {/* <Footer/> */}
      </Router>
    </>
  );
}

export default App;
