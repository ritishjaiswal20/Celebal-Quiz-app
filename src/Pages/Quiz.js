import React, { useEffect, useState } from 'react'

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
        quiz
      </div>
    );
}

export default Quiz