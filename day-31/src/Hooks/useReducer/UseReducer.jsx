import React, { useState } from 'react'

const UseReducer = () => {

  const [count, setCount] = useState(0);
  const [showText, setShowText] = useState(true);

  return (
    <div>
      useReducer hook
      <h3>{count}</h3>
      <button onClick={
        () => {
          setCount(count+1);
          setShowText(!showText);
        }
      }>Click Me</button>
      {showText && <h3>Text is shown</h3>}
    </div>
  )
}

export default UseReducer
