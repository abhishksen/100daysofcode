import React from 'react'
import './App.css'
import Meme from './components/Meme'

const App = () => {

  return (
    <div>
      <header>
        <h3 className="title">😎🤣 Meme Generator</h3>
      </header>
      <Meme />
    </div>
  )
}

export default App
