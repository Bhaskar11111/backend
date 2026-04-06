import React from 'react'
import { Route, Routes } from 'react-router'
import Login from './features/pages/Login'
import Register from './features/pages/Register'

const AppRouter = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<h1>Home page</h1>} />
    <Route path='/login' element={<Login/>}/>
    <Route path='/register' element={<Register/>}/>
    </Routes>
    </>
  )
}

export default AppRouter
