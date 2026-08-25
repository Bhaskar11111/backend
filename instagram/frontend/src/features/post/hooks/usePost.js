import { useContext, useEffect } from "react"
import { PostContext } from "../context/PostProvider"
import { createPost, getFeed, likePost, unlikePost } from "../services/post.api"

const usePost=(()=>
{
    const context=useContext(PostContext)
    const{loading,setLoading,feed,setFeed,post,setPost}=context

    const feedHandler=(async()=>
    {
        setLoading(true)
        try{
            const response=await getFeed()
            setFeed(response.posts)
            console.log(response.posts)
            return response.posts
        }
        catch(err){
            console.log(err.response?.data)
            throw err
        }
        finally{
            setLoading(false)
        }
    })
    
    const createPostHandler=(async(image,caption)=>
        {
            setLoading(true)
            try{
                const response=await createPost(image,caption)
            setFeed([response.post,...feed])
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
        
    const likeHandler=(async(postId)=>
    {
        setLoading(true)
        try{
            const response=likePost(postId)
            await feedHandler()
        }
        catch(err)
        {
            console.log(err.response?.data)
            throw err
        }
        finally{
            setLoading(false)
        }
    })
    
    const unlikeHandler=(async(postId)=>
        {
            setLoading(true)
            try{
                const response=unlikePost(postId)
                await feedHandler()
                
        }
        catch(err)
        {
            console.log(err.response?.data)
            throw err
        }
        finally{
            setLoading(false)
        }
    })    

        return{loading,feed,feedHandler,createPostHandler,likeHandler,unlikeHandler}
        
    })
export default usePost