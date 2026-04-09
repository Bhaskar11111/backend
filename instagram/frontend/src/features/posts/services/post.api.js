import axios from "axios";
const api=axios.create({
    baseURL:'http://localhost:3000/test/post',
    withCredentials:true
})

export const getFeed=(async()=>
{
    try{
        const response=await api.get('/feed')
        // console.log(response.data);
        
        return response.data

    }
    catch(err){
        console.log(err.response?.data)
        throw err
    }
})