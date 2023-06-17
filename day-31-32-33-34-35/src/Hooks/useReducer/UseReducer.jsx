import React, { useReducer, useState } from 'react'

const UseReducer = () => {

  const reducer = (state, action) => {
    switch(action.type){
      case "INCREMENT":
        return {count:state.count+1, showText:state.showText};
      case "toggleText":
        return {count:state.count, showText:!state.showText}; 
    }
  }

  // const [count, setCount] = useState(0);
  // const [showText, setShowText] = useState(true);
  const [state, dispatch] = useReducer(reducer, {count:0, showText:true});

  return (
    <div>
      useReducer hook
      <h3>{state.count}</h3>
      <button onClick={
        () => {
          // setCount(count+1);
          // setShowText(!showText);
          dispatch({type:"INCREMENT"});
          dispatch({type:"toggleText"});
        }
      }>Click Me</button>
      {state.showText && <h3>Text is shown</h3>}
    </div>
  ) 
}

export default UseReducer
