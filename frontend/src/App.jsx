import React from 'react'
import HomePage from './pages/HomePage'
import LoginForm from './components/LoginForm'
import RegisterForm from './components/RegisterFom'
import AuthPage from './pages/AuthPage'
import { Outlet } from '@tanstack/react-router'
import Navbar from './components/Navbar'
import './App.css'

const App = () => {
  return (
    <div>
      {/* <HomePage /> */}
      {/* <LoginForm /> */}
      {/* <AuthPage > */}
      <Navbar/>
      <Outlet/>
    </div>
  )
}

export default App