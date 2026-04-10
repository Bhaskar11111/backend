import { useContext } from "react"
import { PostContext } from "../context/PostProvider"
import { getFeed } from "../services/post.api"

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
    return{loading,feed,feedHandler}
    
})

export default usePost