import React, { useRef, useState } from 'react'
import usePost from '../post/hooks/usePost'
import { useNavigate } from 'react-router'
import Loading from '../../components/Loading'

const CreatePost = () => {

const[caption,setCaption]=useState()
const postImageCreateRef=useRef(null)

const{loading,createPostHandler}=usePost()
const navigate=useNavigate()

const submitHandler=((e)=>
{
    e.preventDefault()
    const file=postImageCreateRef.current.files[0]

    createPostHandler(file,caption)
    navigate('/')
})
console.log(caption)

if(loading){
    return <Loading/>
}
  return (
  <>
  <div className="w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900">
      
    
      <div className="absolute w-[300px] h-[300px] bg-blue-500/20 blur-3xl rounded-full top-20 left-20"></div>
      <div className="absolute w-[300px] h-[300px] bg-pink-500/20 blur-3xl rounded-full bottom-20 right-20"></div>

      <div className="relative w-[350px] p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl">
        
        <h1 className="text-3xl font-semibold text-white text-center mb-6">
          Create Post
        </h1>

        <form onSubmit={(e)=>submitHandler(e)} className="flex flex-col gap-4">
          
          <label className='w-full px-4 py-3 rounded-full bg-white/10 text-white placeholder:text-white/50 
            outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-150 cursor-pointer active:scale-90' htmlFor="file">Select file</label>
         <input ref={postImageCreateRef}
          hidden
          required
          type="file"
          name='file'
          id='file'/>

          <input value={caption} onChange={(e)=>setCaption(e.target.value)}
            className="w-full px-4 py-3 rounded-full bg-white/10 text-white placeholder:text-white/50 
            outline-none focus:ring-2 focus:ring-blue-500 transition"
            type="text"
            name='caption'
            required
            id='caption'
            placeholder="Enter caption"
          />

          <button
            type="submit"
            className="mt-2 py-3 cursor-pointer rounded-full bg-blue-500 hover:bg-blue-600 text-white font-medium 
            transition active:scale-95"
          >
            Create
          </button>

        </form>
      </div>
    </div>
  </>
  )
}

export default CreatePost
