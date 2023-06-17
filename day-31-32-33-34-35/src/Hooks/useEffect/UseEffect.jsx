import React, { useEffect, useState } from 'react'
import axios from 'axios';

const UseEffect = () => {

  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);

  const randomNum = () => {
    let num = Math.floor(Math.random()*100 +1);
    setCount(num);
  }

  useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/posts")
    .then((response) => {
      setData(response.data[count]);
      // console.log("useEffect called")
    })
  },[count]);

  // console.log(data)
  
  return (
    <>
      useEffect hook <button onClick={randomNum}>Suffle</button>
    <div className='container'>
      {
        // data.map((item) => (
          <div key={data.id} className="card">
            <span>{data.id}</span>
            <h3>{data.title}</h3>
            <p>{data.body}</p>
          </div>
        // ))
      }
      
    </div>
      </>
  )
}

export default UseEffect
