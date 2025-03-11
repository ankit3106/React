import { useState } from 'react'
<<<<<<< HEAD
import UserContextProvider from './Context/UserContextProvider'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContextProvider>
      <h1>Ankit</h1>
=======
import './App.css'
import UserContextProvider from './Context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {

  return (
    <UserContextProvider>
      <h1>React with chai aur code.</h1>
      <Login/>
      <Profile/>
>>>>>>> d744643402369421dcccdfafe7bdd56966b51fb3
    </UserContextProvider>
  )
}

export default App
