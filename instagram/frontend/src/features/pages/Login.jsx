import React, { useContext } from 'react'
import { useState } from 'react'
import axios from 'axios'
import {Link, useNavigate} from 'react-router'
import useAuth from '../auth/hooks/useAuth'

const Login = () => {
  
  const[username,setUsername]=useState('')
  const[password,setPassword]=useState('')

  const navigate=useNavigate()
  
  const {loginHandler,loading}=useAuth()  

  if(loading){
    return(<h1>Loading...</h1>)
  }

  const submitHandler=(async(e)=>
  {
    e.preventDefault();
    await loginHandler(username,password)
    .then((res)=>
    {
      console.log(res)
      navigate('/')
    })
    .catch((err)=>
    {
      console.log(err.response?.data)
      throw err
    })
  })

  return (
    <>
    <div className="w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900">
      
    
      <div className="absolute w-[300px] h-[300px] bg-blue-500/20 blur-3xl rounded-full top-20 left-20"></div>
      <div className="absolute w-[300px] h-[300px] bg-pink-500/20 blur-3xl rounded-full bottom-20 right-20"></div>

      <div className="relative w-[350px] p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl">
        
        <h1 className="text-3xl font-semibold text-white text-center mb-6">
          Login
        </h1>

        <form onSubmit={(e)=>submitHandler(e)} className="flex flex-col gap-4">
          
          <input value={username} onChange={(e)=>setUsername(e.target.value)}
            className="w-full px-4 py-3 rounded-full bg-white/10 text-white placeholder:text-white/50 
            outline-none focus:ring-2 focus:ring-blue-500 transition"
            type="text"
            required
            placeholder="Enter username"
          />

          <input value={password} onChange={(e)=>setPassword(e.target.value)}
            className="w-full px-4 py-3 rounded-full bg-white/10 text-white placeholder:text-white/50 
            outline-none focus:ring-2 focus:ring-blue-500 transition"
            type="password"
            required
            placeholder="Enter password"
          />

          <button
            type="submit"
            className="mt-2 py-3 rounded-full bg-blue-500 hover:bg-blue-600 text-white font-medium 
            transition active:scale-95"
          >
            Login
          </button>

        </form>

        <p className="text-sm text-white/50 text-center mt-4">
          Don't have an account? 
          <Link to='/register'><span className="text-blue-400 cursor-pointer ml-1 hover:underline">
            Sign up
          </span>
          </Link>
        </p>

      </div>
    </div>
    </>
  )
}

export default Login
