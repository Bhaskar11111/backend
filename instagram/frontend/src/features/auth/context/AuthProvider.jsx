import React, { createContext, useState } from 'react'
import { loginUser, registerUser } from '../services/auth.api'

export const AuthContext=createContext()
const AuthProvider = (props) => {

    const[user,setUser]=useState(null)
    const[loading,setLoading]=useState(false)

    const loginHandler=(async(username,password)=>
    {
    setLoading(true)
        try{
            const res=await loginUser(username,password)
            setUser(res.user)
            return res
        }
        catch(err)
        {
            console.log(err)
        }
        finally{
            setLoading(false)
        }
    })

    const registerHandler=(async(username,email,password)=>
    {
    setLoading(true)
       try{
        const res=await registerUser(username,email,password)
        return res;
       }
       catch(err)
       {
        console.log(err.response)
        throw err
       }
       finally{
        setLoading(false)
       }
    })

  return (
    <>
    <AuthContext.Provider value={{user,loading,loginHandler,registerHandler}}>
        {props.children}
    </AuthContext.Provider>
    </>
  )
}

export default AuthProvider
