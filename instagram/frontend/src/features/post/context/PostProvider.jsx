import React, { createContext, useState } from 'react'

export const PostContext=createContext()
const PostProvider = ({children}) => {

    const[loading,setLoading]=useState(false)
    const[post,setPost]=useState([])
    const[feed,setFeed]=useState([])


  return (
   <>
   <PostContext.Provider value={{loading,setLoading,feed,setFeed,post,setPost}}>{children}</PostContext.Provider>
   </>
  )
}

export default PostProvider
