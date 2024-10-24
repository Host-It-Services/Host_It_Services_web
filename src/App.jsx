import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold text-blue-600">
        Hello, Tailwind CSS!
      </h1>
    </div>
  )
}

export default App
