import React, { useState,useEffect } from 'react'
import Quiz from '../components/quiz/Quiz'
import { quizDataApi } from '../api/quizApi'
const QuizPage = ({finalData ,apiFinalData}) => {
const [data ,setData]=useState([])
const [selectedQuestion, setSelectedQuestion] = useState(data[0]);
const [answer, setAnswer] = useState([]);
const [option, setOption] = useState(null);
let [currentIndex, setCurrentIndex] = useState(0); 
const [selectedIndex, setSelectedIndex] = useState(null);

useEffect (()=>{

const getQuizData=async()=>{
  
  const quizData =await quizDataApi();
  setData(quizData)
}
   getQuizData();

   
},[])

const filteredData = data.filter(item => item.correct_answer !== null && item.multiple_correct_answers!==true);

useEffect(()=>{
 setSelectedQuestion(filteredData[0])
},[data])


const handleItems = (obj) => {
  const updatedAnswers = answer.filter(
    (item) => item.id !== selectedQuestion.id
  );
  setAnswer([...updatedAnswers, obj]);
  setOption(obj.answer);

  finalData({answers:[...updatedAnswers, obj],apiData:data})
};


const handleQuestionClick = (i) => {
  setSelectedQuestion(null);
  setSelectedQuestion(data[i]);
  setCurrentIndex(i); 
setSelectedIndex(i)
};



const next = () => {
  if (currentIndex < data.length - 1 ) {
      currentIndex++
    setCurrentIndex(currentIndex); 
    setSelectedQuestion(filteredData[currentIndex]); 
    setOption(null); 
  }
};


const previous = () => {
  if (currentIndex > 0) {
      currentIndex--
    setCurrentIndex(currentIndex); 
    setSelectedQuestion(filteredData[currentIndex]); 
    setOption(null); 
  
  }
};




  return (
    <Quiz filteredData={filteredData}
     option={option}
      previous={previous}
       next={next}
        handleQuestionClick={handleQuestionClick}
        currentIndex={currentIndex}
        selectedQuestion={selectedQuestion}
        handleItems={handleItems}
        />
  )
}

export default QuizPage