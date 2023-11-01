import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
const Home = ({ data }) => {

  let newData=data.filter((v,i,a)=>a.findIndex(v2=>(v2.category===v.category))===i)
  return (
    <>
      <div className="select-item">
        {data &&
          newData.map((current) => (
            <Link to={`/quiz/${current.category}`}>
            <div className="card"  >
              <h6>Top 10 {current.category} Interview Questions</h6>
              <div className="item-info">
                <p>
                  Category:<span>{current.category}</span>
                </p>
                <p>
                  usage:<span>{current.id}</span>
                </p>
              </div>
            </div>
            </Link>
          ))}
      </div>
    </>
  );
};

export default Home;
