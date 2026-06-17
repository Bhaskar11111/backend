import axios from "axios"

const api=axios.create({
    baseURL:'http://localhost:3000/test/post',
    withCredentials:true
})
export const getFeed=(async()=>
{
    const response=await api.get('/feed')
    return response.data
})

export const createPost=(async(image,caption)=>
{
    const formData=new FormData()
    formData.append('image',image)
    formData.append('caption',caption)

    const response=await api.post('/create',formData)
    return response.data
})

export const likePost=(async(postId)=>
{
    const response=await api.post('/like'+postId)
    return response.data
})

export const unlikePost=(async(postId)=>
{
    const response=await api.post('/unlike'+postId)
    return response.data
})