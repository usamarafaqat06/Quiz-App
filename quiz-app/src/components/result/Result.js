import React from 'react'
import './Result.css';

const Result = ({result,topics,count,grade, answerCount,pecentage}) => {
  return (
   <>
     <div className='result-containter'>
        <h2>Quiz Information</h2>
        <div className='flex'>
        <h4>Score:<span>{pecentage}%</span></h4>
            <h4>Topic:<span>{topics}</span></h4>
        </div>

        <div className='flex'>
            <h4>Total question:<span>{count}</span></h4>
            <h4>Grade:<span>{grade}</span></h4>
        </div>

        
        <div className='flex'>
            <h4>Correct answer:<span>{answerCount}</span></h4>
            {/* <h4>Final:<span>Pass</span></h4> */}
        </div>
        <div className="progress mb-4" >
      <div
        className="progress-bar progress-bar-striped bg-secondary"
        role="progressbar"
        style={{ width:`${pecentage}%` }}
        aria-valuenow={"50"}
        aria-valuemin="0"
        aria-valuemax="100"
      
      ></div>
    </div>

         <h2>Answers</h2>
         {result.map((current,i)=>(
            <>
            <div key={current.id} >
                <h3>Question {i+1} </h3>
                <h4>{current.apiValue.question}</h4>
                 
                 <div className='flex-container'>
                    <div className='left'>
                     <h3>Given Anwers</h3>
                     <ul>

                        <li><span><i className={ ` ${current.answer === current.apiValue.answers.answer_a ?  "fa-solid fa-check" : "fa-solid fa-xmark"}`}></i></span>{current.apiValue.answers.answer_a}</li>
                        <li><span><i className={ ` ${current.answer === current.apiValue.answers.answer_b?  "fa-solid fa-check" : "fa-solid fa-xmark"}`}></i></span>{current.apiValue.answers.answer_b}</li>
                        <li><span><i className={ ` ${current.answer === current.apiValue.answers.answer_c ?  "fa-solid fa-check" : "fa-solid fa-xmark"}`}></i></span>{current.apiValue.answers.answer_c}</li>
                        <li><span><i className={ ` ${current.answer === current.apiValue.answers.answer_d ?  "fa-solid fa-check" : "fa-solid fa-xmark"}`}></i></span>{current.apiValue.answers.answer_d}</li>
                     </ul>
                    </div>
                    <div className='right'>
                    <h3>Correct Anwers</h3>
                     <ul>
                     <li><span><i className={`${current.apiValue.correct_answer===  "answer_a" ?  "fa-solid fa-check" : "fa-solid fa-xmark"}`}></i></span>{current.apiValue.answers.answer_a}</li>
                        <li><span><i className={ ` ${current.correct_answer ===  "answer_b"?  "fa-solid fa-check" : "fa-solid fa-xmark"}`}></i></span>{current.apiValue.answers.answer_b}</li>
                        <li><span><i className={ ` ${current.apiValue.correct_answer ===  "answer_c"?  "fa-solid fa-check" : "fa-solid fa-xmark"}`}></i></span>{current.apiValue.answers.answer_c}</li>
                        <li><span><i className={ ` ${current.apiValue.correct_answer ===  "answer_d" ?  "fa-solid fa-check" : "fa-solid fa-xmark"}`}></i></span>{current.apiValue.answers.answer_d}</li>
                     </ul>
                    </div>
                 </div>
                 </div>
                 </>
         ))}
      
     </div>
   </>
  )
}

export default Result