import { useState,useEffect } from 'react'
import { auth,provider } from './config.jsx'
import { signInWithPopup } from 'firebase/auth'
import './App.css'

function App() {
  const [value,setValue] = useState('')
  const [name,setName] = useState("")
  const handleClick = () => {
    signInWithPopup(auth,provider).then((data) =>{
       setValue(data.user.email)
       setName(data.user.displayName)
       console.log(value)
       console.log(name)
       localStorage.setItem("email", data.user.email)
    })
  };
  useEffect(() =>{
    setValue(localStorage.getItem("email"));
  })
  return (
    <>
      <button onClick={handleClick}>Sign in with Google</button>
      <button onClick={handleClick}>Sign in with Facebook</button>
    </>
  )
}

export default App

