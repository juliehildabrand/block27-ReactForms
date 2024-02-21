import { useState } from "react"

export default function Authenticate({token}) {

  const [successMessage, setSuccessMessage] = useState(false)
  const [error, setError] = useState(null);
  const [username, setUsername] = useState(null)

  async function handleClick() {
    try {
      const response = await fetch("https://fsa-jwt-practice.herokuapp.com/authenticate",
      {
        method: 'GET',
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        }
      }
    );
      const result = await response.json()
      setSuccessMessage(result.success)
      setUsername(result.data.username)
    } catch (error) {
      setError(error.message);
    }
    console.log(token)
  }

    return (
      <>
        <button onClick={handleClick}>Authenticate Token</button>
        {successMessage && <p>Successfully Authenticated! Welcome {username}</p>}
        {error && <p>Please input Username and Password and Submit first</p>}
      </>
      )
}
