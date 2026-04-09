import React, { useContext, useEffect } from 'react'
import Post from '../../components/Post'
import { usePost } from '../posts/hooks/usePost'

const Feed = () => {
    const{loading,feedHandler,feed}=usePost()

    useEffect(()=>
    {
        feedHandler()
    },[])

    console.log(feed);

    if(loading || !feed) return(<h1>Loading...</h1>)
  return (
   <>
   <div className="w-full text-white min-h-screen bg-black/95 flex p-3 flex-col items-center justify-center gap-3">
   {feed.map((elem,indx)=>
{
    return <Post key={indx} feed={feed} user={elem.user} post={elem}/>
})}
   </div>
   </>
  )
}

export default Feed
