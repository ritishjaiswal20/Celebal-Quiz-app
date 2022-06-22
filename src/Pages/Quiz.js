import React, { useEffect, useState } from 'react'
import { CircularProgress } from '@mui/material';
import "./Quiz.css"
import Question from '../Components/Question';
function Quiz({ name, questions, score, setScore, setQuestions }) {
    const [options, setOptions] = useState();
    const [currQues, setCurrQues] = useState(0);
    useEffect(() => {
      setOptions(
        questions && 
          handleShuffle([
            questions[currQues]?.correct_answer,
            ...questions[currQues]?.incorrect_answers,
          ])
      );
    }, [currQues, questions]);
  
    console.table(questions);
  
    const handleShuffle = (options) => {
      return options.sort(() => Math.random() - 0.5);
    };
  
    return (
      <div className="quiz">
        <div className="quiz-header">
          <h1 >Welcome   {name}</h1>
        </div>
         {
          questions? (
                 <>
                     <div className="quizInfo">
                        <span>Cateogry:{questions[currQues].category}</span>
                          <span>Score:{score}</span>
                     </div>
                     <Question
                       currQues={currQues}
                       setCurrQues={setCurrQues}
                       questions={questions}
                       options={options}
                       correct={questions[currQues]?.correct_answer}
                       score={score}
                       setScore={setScore}
                       setQuestions={setQuestions}                  
                     />
                 </>
          ):(
            <CircularProgress 
            style={{marginTop:300}}
            color="inherit"
            size={150}
            thickness={1}
            />
          )
         }
      </div>
    );
}

export default Quiz