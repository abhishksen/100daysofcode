import React from 'react'
import UseState from './Hooks/useState/UseState'
import UseEffect from './Hooks/useEffect/UseEffect'
import UseReducer from './Hooks/useReducer/UseReducer'

import './App.css'
import UseRef from './Hooks/useRef/UseRef'
import UseLayoutEffecct from './Hooks/uselayoutEffect/UseLayoutEffecct'
import UseImperativeHandle from './Hooks/useImperativeHan/UseImperativeHandle'
import UseContext from './Hooks/useContext/UseContext'
import UseMemo from './Hooks/useMemo/UseMemo'
import UseCallback from './Hooks/useCallback/UseCallback'

const App = () => {
  return (
    <div>
      {/* React hooks
      <UseState />
      <UseEffect />
      <UseReducer />
      <UseRef />
      <UseLayoutEffecct />
      <UseImperativeHandle />
      <UseContext />
      <UseMemo /> */}
      <UseCallback />
    </div>
  )
}

export default App
