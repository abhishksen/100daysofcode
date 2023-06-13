import React, { useState } from 'react'

const UseState = () => {

  const [counter, setCounter] = useState(0);
  const [text, setText] = useState("type here...");

  const incerment = () => {
    setCounter(counter + 1);
  }

  const handleChange = (event) => {
    const newText = event.target.value;
    setText(newText);
  }

  return (
    <div>
      useState Hook
      <h3>{counter}</h3> 
      <button onClick={incerment}>Click</button>
      <h3>{text}</h3>
      <input type="text" placeholder='type here...' onChange={handleChange} />
    </div>
  )
}

export default UseState
