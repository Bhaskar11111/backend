import React, { createContext, useState } from 'react'
import { getFeed } from '../services/post.api'

export const PostContext=createContext()
const PostProvider = ({children}) => {
const[loading,setLoading]=useState(false)
const[feed,setFeed]=useState(null)
const[post,setPost]=useState(null)

  return (
   <PostContext.Provider value={{loading,setLoading,feed,setFeed,post,setPost}}>{children}</PostContext.Provider>
  )
}

export default PostProvider
