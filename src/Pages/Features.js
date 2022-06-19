import React from 'react'
import LandingHeader from '../Components/LandingHeader'
import './Features.css'
import QuizIcon from '@mui/icons-material/Quiz';
function Features() {
  return (
    <div className="features">
      <LandingHeader />
      <div className="features-bigcontainer">
        <div className="features-container">
          <h1 className="features-title">Quiz Api Features</h1>
          <h2 className="features-subtitle">
            Test your knowledge or easily embed a quiz on your website with the
            Quiz API
          </h2>
        </div>

        <div className="features-options">
          <div className="features-optionheading">
            <h1>Api Features</h1>
            <h3>Easy to use and simple RESTful API.</h3>
          </div>

          <div className="features-optionlist">
            <div className="features-option">
              <QuizIcon className="quiz-icon" />
              <div className="features-optiontitle">
                <h2>Large set of questions</h2>
                <h3>Quiz API has an ever growing database </h3>
              </div>
            </div>

            <div className="features-option">
              <QuizIcon className="quiz-icon" />
              <div className="features-optiontitle">
                <h2>Large set of questions</h2>
                <h3>Quiz API has an ever growing database </h3>
              </div>
            </div>
            <div className="features-option">
              <QuizIcon className="quiz-icon" />
              <div className="features-optiontitle">
                <h2>Large set of questions</h2>
                <h3>Quiz API has an ever growing database </h3>
              </div>
            </div>
          </div>

          <div className="features-optionlist">
            <div className="features-option">
              <QuizIcon className="quiz-icon" />
              <div className="features-optiontitle">
                <h2>Large set of questions</h2>
                <h3>Quiz API has an ever growing database </h3>
              </div>
            </div>

            <div className="features-option">
              <QuizIcon className="quiz-icon" />
              <div className="features-optiontitle">
                <h2>Large set of questions</h2>
                <h3>Quiz API has an ever growing database </h3>
              </div>
            </div>
            <div className="features-option">
              <QuizIcon className="quiz-icon" />
              <div className="features-optiontitle">
                <h2>Large set of questions</h2>
                <h3>Quiz API has an ever growing database </h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="qna">
        <div className="qna-top">
          <h1>Frequently Asked Questions</h1>
          <h3>
            Got a question? We've got answers. If you have some other questions,
            contact us using email.
          </h3>
        </div>
        <div className="qna-bottom">
          <h2>Is this a secure site for purchases? </h2>
          <h3>
            Absolutely! We work with top payment companies which guarantees your
            safety and security. All billing information is stored on our
            payment processing partner which has the most stringent level of
            certification available in the payments industry.
          </h3>
        </div>
        <div className="qna-bottom">
          <h2>Is this a secure site for purchases? </h2>
          <h3>
            Absolutely! We work with top payment companies which guarantees your
            safety and security. All billing information is stored on our
            payment processing partner which has the most stringent level of
            certification available in the payments industry.
          </h3>
        </div>
        <div className="qna-bottom">
          <h2>Is this a secure site for purchases? </h2>
          <h3>
            Absolutely! We work with top payment companies which guarantees your
            safety and security. All billing information is stored on our
            payment processing partner which has the most stringent level of
            certification available in the payments industry.
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Features