

import Result from '../components/result/Result';


const ResultPage = ({answerData,apiData}) => {



const result = [];
let answerCount=0
  for (const answerVal of answerData) {
    for (const apiVal of apiData) {
      if (answerVal.id === apiVal.id && answerVal.key === apiVal.correct_answer) {

        if(apiVal.answers[apiVal.correct_answer]===answerVal.answer){
           answerCount=answerCount+1
        }
        
        result.push({
          answer: answerVal.answer,
          apiValue: apiVal
        });
      }
     
    }
    
  }


    const topics = result[0]?.apiValue?.category;
   


   

    var count = apiData.length;
    const grade = result[0]?.apiValue?.tags[0].name
  
    let pecentages = (answerCount/count)*100
    const pecentage = Math.floor(pecentages);


  return (
    <Result result={result}
    topics={topics}
     count={count}
     grade={grade}
    answerCount={answerCount}
    pecentage={pecentage}
    />
  )
}

export default ResultPage