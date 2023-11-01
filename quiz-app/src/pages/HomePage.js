import React, { useState ,useEffect} from 'react'
import Search from '../components/Search/Search'
import Home from '../components/home/Home'
import { getQuizInfo } from '../api/quizApi'

const HomePage = () => {
    const [data,setData]=useState([])

    useEffect(()=>{
       const getQuiz=async()=>{
        const quizInfo = await getQuizInfo();
        setData(quizInfo); 
       }
       getQuiz();
       
    },[])

  

  return (
   <>
   <Search data={data}/>
   <Home data={data}/>
   </>
  )
}

export default HomePage