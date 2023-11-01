const apiUrl = process.env.REACT_APP_API_URL;
export const getQuizInfo=async()=>{

  const res = await fetch(apiUrl,{
    method:'GET'
  });
  const data =await res.json();
  return data;
}

export  const quizDataApi=async()=>{
  const res =await fetch(`${apiUrl}&category&limit=15`,{
    method:'GET'
  });
  const data =await res.json();
  return data
}