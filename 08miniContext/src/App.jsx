import { useState } from 'react'
import UserContextProvider from './Context/UserContextProvider'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContextProvider>
      <h1>Ankit</h1>
    </UserContextProvider>
  )
}

export default App
