import React from 'react'
import UseState from './Hooks/useState/UseState'
import UseEffect from './Hooks/useEffect/UseEffect'
import UseReducer from './Hooks/useReducer/UseReducer'

import './App.css'

const App = () => {
  return (
    <div>
      React hooks
      <UseState />
      <UseEffect />
      <UseReducer />
    </div>
  )
}

export default App
