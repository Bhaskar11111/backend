import axios from "axios";

const api=axios.create({
    baseURL:'http://localhost:3000/test/auth',
    withCredentials:true
})

export const loginUser=(async(username,password)=>
{
   try{ const res=await api.post('/login',{
        username:username,
        password
    })
    return res.data

}
catch(err)
{
    console.log(err.response?.data)
    throw err
}

})

export const registerUser=(async(username,email,password)=>
{
    const res=await api.post('/register',{
        username:username,
        email:email,
        password:password
    })
    .then((res)=>
    {
        return res.data
    })
    .catch(err)
    {
        console.log(err.response?.data)
        throw err
    }
})

export const getUser=(async()=>
{
    const res=await api.post('/getUser')
    .then((res)=>
    {
        return res.data
    })
    .catch(err)
    {   
        console.log(err.resp?.data)
    }
})