import {Routes,Route} from 'react-router-dom'
import HomePage from './pages/HomePage';
import QuizPage from './pages/QuizPage';
import ResultPage from './pages/ResultPage';
import Header from './components/header/Header';
import { useState } from 'react';


function App() {
  const [answerData ,setAnswerData]=useState([])
  const [apiData ,setApiData]=useState([])

  const finalData2 = (selectedAnswers) => {
      setAnswerData(selectedAnswers.answers);
      setApiData(selectedAnswers.apiData);
  };


  return (
    <div>
      <Header/>
       <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/quiz/:category' element={<QuizPage finalData={finalData2}/>}/>
        <Route path='/result' element={<ResultPage answerData={answerData} apiData={apiData}/>}/>   
       </Routes>
    </div>
  );
}

export default App;
