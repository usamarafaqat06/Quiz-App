
import "./Quiz.css";
import {Link} from "react-router-dom";
const Quiz = ({ filteredData,
       option,
       previous,
       next,
       handleQuestionClick,
       currentIndex,
       selectedQuestion,
       handleItems
    }) => {
  return (
    <>
      <div className="container">
        <div className="quiz-container">
          {filteredData.map((current, i) => (
            <div
            className={`card ${currentIndex === i ? "active" : ''}`}
              key={current.id}
              onClick={() => handleQuestionClick(i)
            }>

              <h4>Questions {i + 1}</h4>
            </div>
          ))}
        </div>
        {selectedQuestion && (
          <div className="quiz-detail">
            <p>{selectedQuestion?.question}</p>
            <div className="radio-button">
              <div>
                <label>
                  <input
                    type="radio"
                    checked={option === selectedQuestion.answers.answer_a}
                    name="option"
                    onChange={() =>
                      handleItems({
                        answer: selectedQuestion.answers.answer_a,
                        id: selectedQuestion.id,
                        key:selectedQuestion.correct_answer
                      })
                    }
                  />
                  {selectedQuestion?.answers.answer_a}
                </label>
              </div>
              <div>
                <label>
                  <input
                    type="radio"
                    checked={option === selectedQuestion.answers.answer_b}
                    name="option"
                    onChange={() =>
                      handleItems({
                        answer: selectedQuestion.answers.answer_b,
                        id: selectedQuestion.id,
                        key:selectedQuestion.correct_answer
                      })
                    }
                  />
                  {selectedQuestion?.answers.answer_b}
                </label>
              </div>
              <div>
                <label>
                  <input
                    type="radio"
                    checked={option === selectedQuestion.answers.answer_c}
                    name="option"
                    onChange={() =>
                      handleItems({
                        answer: selectedQuestion.answers.answer_c,
                        id: selectedQuestion.id,
                        key:selectedQuestion.correct_answer
                      })
                    }
                  />
                  {selectedQuestion?.answers.answer_c}
                </label>
              </div>
              <div>
                <label>
                  <input
                    type="radio"
                    checked={option === selectedQuestion.answers.answer_d}
                    name="option"
                    onChange={() =>
                      handleItems({
                        answer: selectedQuestion.answers.answer_d,
                        id: selectedQuestion.id,
                        key:selectedQuestion.correct_answer
                      })
                    }
                  />
                  {selectedQuestion?.answers.answer_d}
                </label>
              </div>
            </div>
           
          </div>
        )}
         <div className="button">
              <button onClick={previous}>Previous</button>
              <button onClick={next}>Next</button>
              <button ><Link to="/result">Go to Result Page</Link></button>
            </div>
         
      </div>
    
    </>
  );
};

export default Quiz;
