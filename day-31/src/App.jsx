import React from 'react'
import UseState from './Hooks/useState/UseState'
import UseEffect from './Hooks/useEffect/UseEffect'
import UseReducer from './Hooks/useReducer/UseReducer'

import './App.css'
import UseRef from './Hooks/useRef/UseRef'
import UseLayoutEffecct from './Hooks/uselayoutEffect/UseLayoutEffecct'
import UseImperativeHandle from './Hooks/useImperativeHan/UseImperativeHandle'

const App = () => {
  return (
    <div>
      React hooks
      <UseState />
      <UseEffect />
      <UseReducer />
      <UseRef />
      <UseLayoutEffecct />
      <UseImperativeHandle />
    </div>
  )
}

export default App
