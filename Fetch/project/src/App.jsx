import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { FetchPosts } from './Components/FetchPosts'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <FetchPosts/>
    </>
  )
}

export default App
