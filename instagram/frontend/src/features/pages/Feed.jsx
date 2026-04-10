import React, { useEffect } from 'react'
import Post from '../../components/Post'
import usePost from '../post/hooks/usePost'

const Feed = () => {

    const {loading,feed,feedHandler}=usePost()

    useEffect(()=>
    {
        feedHandler()
    },[])

    // console.log(feed)

  return (
   <>
      <div className="w-full text-white min-h-screen bg-black/95 flex p-3 flex-col items-center justify-center gap-3">
     {feed.map((elem,indx)=>
    {
        return <Post key={indx} user={elem.user} post={elem}/>
    })}
      </div>
   </>
  )
}

export default Feed
