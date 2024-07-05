import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Component/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    name:"ankit",
    age: 21
  }
  let myArr = [1,2,3]

  return (
    <>
      <h1 className='bg-green-500 text-black p-4 rounded-xl mb-4'>Tailwind Test</h1>
      <Card username="Ankit" btnText = "View"/>
      <Card username = "Divyanshu" />
    </>
  )
}

export default App
