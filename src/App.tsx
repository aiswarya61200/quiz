import { useState } from "react";
import questions from "./questions";

import "./App.css";

function App() {
  const [questionIdx, setQuestionIdx] = useState(0);
  const [correctAns, setCorrectAns] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const currQuestion = questions[questionIdx];

  const selectOption = (i) => {
    if (questions[questionIdx].answer === i) {
      setCorrectAns(correctAns + 1);
    }
    const nextQ = questionIdx + 1;
    if (nextQ < questions.length) {
      setQuestionIdx(questionIdx + 1);
    } else {
      setShowScore(true);
    }
  };
  const reset = () => {
    setQuestionIdx(0);
    setScore(0);
    setShowScore(false);
  };

  return (
    <div className="quiz-container">
      {showScore ? (
        <>
          <h1> Your score is:{score}</h1>
          <button onClick={reset}>Restart Quiz</button>
        </>
      ) : (
        <div className="quiz-container_question">
          <p>{currQuestion.question}</p>
          <div className="quiz-container_options">
            <ul className="quiz-container_ul">
              {currQuestion.options.map((option, i) => {
                return (
                  <li
                    className="quiz-container_li"
                    onClick={() => selectOption(i)}
                  >
                    {option}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
