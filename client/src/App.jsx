import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import LoginForm from './Pages/LoginForm'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <LoginForm/>
    </>
  )
}

export default App
