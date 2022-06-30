import React from 'react'
import LandingHeader from '../Components/LandingHeader'
import './Features.css'
import QuizIcon from '@mui/icons-material/Quiz';
import Footer from '../Components/Footer';
function Features() {
  return (
    <div className="features">
      <LandingHeader />
      <div className="features-bigcontainer">
        <div className="features-container">
          <h1 className="features-title">Quiz Hub Features</h1>
          <h2 className="features-subtitle">
            Test your Level of your knowledege here with our free tests
          </h2>
        </div>

        <div className="features-options">
          <div className="features-optionheading">
            <h1>Quiz Hub Features</h1>
            <h3>Easy to use.</h3>
          </div>

          <div className="features-optionlist">
            <div className="features-option">
              <QuizIcon className="quiz-icon" />
              <div className="features-optiontitle">
                <h2>Large set </h2>
                <h3>Quiz Hub has an ever growing database </h3>
               
              </div>
            </div>

            <div className="features-option">
              <QuizIcon className="quiz-icon" />
              <div className="features-optiontitle">
                <h2>Boost your knowlege</h2>
                <h3>Learn while having fun </h3>
              </div>
            </div>
            <div className="features-option">
              <QuizIcon className="quiz-icon" />
              <div className="features-optiontitle">
                <h2>New questions every day</h2>
                <h3>Test your knowlege daily</h3>
              </div>
            </div>
          </div>

          <div className="features-optionlist">
            <div className="features-option">
              <QuizIcon className="quiz-icon" />
              <div className="features-optiontitle">
                <h2>Large Variety</h2>
                <h3>Quiz Hub has varous Variety of quiz</h3>
              </div>
            </div>

            <div className="features-option">
              <QuizIcon className="quiz-icon" />
              <div className="features-optiontitle">
                <h2>Free Test</h2>
                <h3>Quiz Hub offer free quiz </h3>
              </div>
            </div>
            <div className="features-option">
              <QuizIcon className="quiz-icon" />
              <div className="features-optiontitle">
                <h2>Various level of difficulty</h2>
                <h3>Quiz Hub has Various level of difficulty</h3>
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
          <h2>Is this a secure site for payments? </h2>
          <h3>
            Absolutely! We work with top payment companies which guarantees your
            safety and security. All billing information is stored on our
            payment processing partner which has the most stringent level of
            certification available in the payments industry.
          </h3>
        </div>
        <div className="qna-bottom">
          <h2>Can I try your service for free? </h2>
          <h3>
            Yes we offer free service to all our customer you don't have to pay
            anything for taking test
          </h3>
        </div>
        <div className="qna-bottom">
          <h2>Is there is any limits on number of attempts? </h2>
          <h3>
            No there is no limits on number of attempts, you can try any number
            of times.
          </h3>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Features