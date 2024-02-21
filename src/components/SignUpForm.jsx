import { useState } from "react"

export default function SignUpForm({setToken}) {

const [username, setUsername] = useState("")
const [password, setPassword] = useState("")
const [error, setError] = useState(null)

async function handleSubmit(event) {
  event.preventDefault()
  try {
    const response = await fetch("https://fsa-jwt-practice.herokuapp.com/signup",
    {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: username,
      password: password
  })})
    const result = await response.json()
    setToken(result.token)
    console.log(result)
  } catch (error) {
   setError(error.message)
}}
  return (
  <>
    <h2>New here? Sign Up!</h2>

    {error && <p>{error}</p>}

    <form onSubmit={handleSubmit}>
      <label>
        Username : <input value={username} onChange={(e) => setUsername(e.target.value)}/>
      </label>
      <br/>
      <br/>
      <label>
        Password: <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
      </label>
      {username.length > 10
      ? <p>Username must be less than 10 characters</p>
      : null}
      <br/>
      <br/>
      <button>Submit</button>
    </form>
  </>
  )}
