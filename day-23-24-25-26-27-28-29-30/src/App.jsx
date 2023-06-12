import { RouterProvider } from 'react-router-dom'
import { router } from './Routes/Router'
import './App.css'

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App
