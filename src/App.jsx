import './App.css'
import SignUpForm from './components/SignUpForm'
import Authenticate from './components/Authenticate'
import { useState } from 'react'

function App() {

  const [token, setToken] = useState(null)

  return (
     <div>
      <SignUpForm setToken={setToken}/>
      <br/>
      <Authenticate token={token}/>
    </div> 
  )
}

export default App
