import React from 'react'
import { Route, Routes } from 'react-router'
import Login from './features/pages/Login'
import Register from './features/pages/Register'
import Feed from './features/pages/Feed'
import CreatePost from './features/pages/CreatePost'
const AppRouter = () => {
  return (
    <>
    <Routes>
    <Route path='/' element={<Feed/>} />
    <Route path='/login' element={<Login/>}/>
    <Route path='/register' element={<Register/>}/>
    <Route path='/create-post' element={<CreatePost/>}/>
    </Routes>
    </>
  )
}

export default AppRouter
