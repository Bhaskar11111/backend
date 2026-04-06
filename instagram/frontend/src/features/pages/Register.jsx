import React, { useState } from 'react'
import { Link } from 'react-router'
import axios from 'axios'

const Register = () => {

  const[email,setEmail]=useState('')
  const[username,setUsername]=useState('')
  const[password,setPassword]=useState('')


 const submitHandler=((e)=>
{
  e.preventDefault()
  
})

  return (
    <>
    <div className="w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900">
      
    
      <div className="absolute w-[300px] h-[300px] bg-blue-500/20 blur-3xl rounded-full top-20 left-20"></div>
      <div className="absolute w-[300px] h-[300px] bg-pink-500/20 blur-3xl rounded-full bottom-20 right-20"></div>

      <div className="relative w-[350px] p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl">
        
        <h1 className="text-3xl font-semibold text-white text-center mb-6">
          Register
        </h1>

        <form onSubmit={(e)=>submitHandler(e)} className="flex flex-col gap-4">
          
          <input onInput={(e)=>setEmail(e.target.value)}
            className="w-full px-4 py-3 rounded-full bg-white/10 text-white placeholder:text-white/50 
            outline-none focus:ring-2 focus:ring-blue-500 transition"
            type="email"
            required
            placeholder="Enter email"
          />
          <input onInput={(e)=>setUsername(e.target.value)}
            className="w-full px-4 py-3 rounded-full bg-white/10 text-white placeholder:text-white/50 
            outline-none focus:ring-2 focus:ring-blue-500 transition"
            type="text"
            required
            placeholder="Enter username"
          />

          <input onInput={(e)=>setPassword(e.target.value)}
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
            Register
          </button>

        </form>

        <p className="text-sm text-white/50 text-center mt-4">
          Already Registered? 
          <Link to='/login'><span className="text-blue-400 cursor-pointer ml-1 hover:underline">
            Sign in
          </span>
          </Link>
        </p>

      </div>
    </div>
    </>
  )
}

export default Register
