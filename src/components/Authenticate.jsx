import { useState } from "react"

export default function Authenticate({token, setUsername}) {

  const [successMessage, setSuccessMessage] = useState(false)
  const [error, setError] = useState("");

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
    } catch (error) {
      setError(error);
    }
    console.log(token)
  }

    return (
      <>
        <button onClick={handleClick}>Authenticate Token</button>
        {successMessage && <p>Successfully Authenticated! Welcome Token Number:  {token}</p>}
        {error && <p>Please input Username and Password and Submit first</p>}
      </>
      )
}
