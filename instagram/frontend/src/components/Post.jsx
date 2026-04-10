import React from 'react'

const Post = ({user,post}) => {
   
  return (
    <>
     <div className="parent border border-amber-50 overflow-hidden min-w-[27vw] max-w-[27vw] rounded-2xl h-[90vh] bg-red-200 flex flex-col">
    <div className="header flex items-center gap-2 w-full p-2 bg-zinc-800">
        <div className="profile p-[3px] w-[7vh] h-[7vh]  inset-0   bg-[conic-gradient(from_0deg,#6228d7,#ee2a7b,#f9ce34,#6228d7)] aspect-square rounded-full overflow-hidden overflow-hidden">
            <img className='w-full rounded-full h-full object-cover' src={user.profilePicture} alt="" />
        </div>
        <h1>{user.username}</h1>
    </div>
    <div className="content flex-1 bg-yellow-400">
        <img className='w-full h-full object-cover' src={post.imageUrl} alt="" />
    </div>
    <div className="footer w-full p-2 bg-zinc-800 mt-auto">
        <div className="w-full bg-zinc-800 justify-between flex gap-3 p-1">
            <div className="left-icons flex gap-3">
                <h1 className='text-white text-3xl'><i className={`${post.isLiked?`ri-heart-fill text-red-500`:'ri-heart-line '}`}></i></h1>
            <h1 className='text-white text-3xl'><i className="ri-chat-3-line"></i></h1>
            <h1 className='text-white text-3xl'><i className="ri-share-2-line"></i></h1>
            </div>
            <div className="right-icons">
                <h1 className='text-white text-3xl'><i className="ri-bookmark-line"></i></h1>
            </div>
        </div>

        <div className="caption text-white bg-zinc-800 w-full p-2">
            <h1>{post.caption}</h1>
        </div>
    </div>
    </div>
    </>
  )
}

export default Post
