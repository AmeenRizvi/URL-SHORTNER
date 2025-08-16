import React from 'react'
import LoginForm from '../components/LoginForm'
import RegisterForm from '../components/RegisterFom'
import { useState } from 'react'

const AuthPage = () => {
  const [login, setLogin] = useState(true) // Default to login form
  return (
    <>
      {login ? <LoginForm state = {setLogin} /> : <RegisterForm state = {setLogin} />}
      
    </> 
  )
}

export default AuthPage