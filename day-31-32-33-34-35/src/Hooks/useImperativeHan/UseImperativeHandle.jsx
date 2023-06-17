import { useRef } from 'react'
import Button from './Button'

const UseImperativeHandle = () => {
  const buttonRef = useRef(null);
  return (
    <div>
      useImperativeHan <br />
      <button onClick={()=> {buttonRef.current.alterToggle()}}>Button from parent</button>
      <Button ref={buttonRef} />
    </div>
  )
}

export default UseImperativeHandle
