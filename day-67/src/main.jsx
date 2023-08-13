import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/app.scss'
import { createContext } from 'react'

export const server = "https://fullstack-todo-t0b0.onrender.com/api/v1"

export const Context = createContext({ isAuthenticated: false });

const AppWraper = () => {

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Context.Provider value={{
      isAuthenticated, setIsAuthenticated
    }}>
      <App />
    </Context.Provider>
  )
}
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppWraper />
  </React.StrictMode>,
)
