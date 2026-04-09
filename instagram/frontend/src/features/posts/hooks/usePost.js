import { useContext } from "react";
import { PostContext } from "../context/PostProvider";
import { getFeed } from "../services/post.api";

export const usePost=(()=>
{
    const context=useContext(PostContext)
const{loading,setLoading,post,setPost,feed,setFeed}=context

    const feedHandler=(async()=>
{
    setLoading(true)
    try{
        const response=await getFeed()
        console.log(response)
        setFeed(response.posts)
        return response
    }
    catch(err){
        console.log(err.response?.data)
        throw err
    }
    finally{
        setLoading(false)
    }
})
    return{loading,feed,feedHandler,post}
})