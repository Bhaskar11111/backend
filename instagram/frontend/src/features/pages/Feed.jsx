import React, { useEffect } from 'react'
import Post from '../../components/Post'
import usePost from '../post/hooks/usePost'
import {useNavigate} from 'react-router'
import Loading from '../../components/Loading'
const Feed = () => {
  
  const {loading,feed,feedHandler,likeHandler,unlikeHandler}=usePost()
  
  const navigate=useNavigate()
  useEffect(()=>
    {
      feedHandler()
    },[])
    
    // console.log(feed)
    if(loading)
    {
      return <Loading/>
    }
  return (
   <>
      <div className="w-full text-white min-h-screen bg-black/95 flex p-3 relative flex-col items-center justify-center gap-3">
      <div className="w-[90%] fixed z-99 top-2  flex items-center justify-between p-2 ">
        <h1 className='text-xl font-semibold'>{`Instagram`}</h1>
        <button onClick={()=>navigate('/create-post')} className='bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] rounded-xl px-5 py-2 font-semibold cursor-pointer hover:shadow-2xl active:scale-95 transition-all duration-100'>Create Post</button>
      </div>
     {feed.reverse().map((elem,indx)=>
    {
        return <Post key={indx} loading={loading} likeHandler={likeHandler} unlikeHandler={unlikeHandler} user={elem.user} post={elem}/>
    })}
      </div>
   </>
  )
}

export default Feed
