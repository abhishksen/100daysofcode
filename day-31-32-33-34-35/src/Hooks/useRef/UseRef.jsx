import React, { useRef } from 'react'

const UseRef = () => {

    const inputRef = useRef(null);

    const change = () => {
        inputRef.current.focus();
        // inputRef.current.value = "";
    }

  return (
    <div>
      useRef hook
      <h3>Abhi</h3>
      <input type="text" placeholder='name...' ref={inputRef} />
      <button onClick={change}>change</button>
    </div>
  )
}

export default UseRef
