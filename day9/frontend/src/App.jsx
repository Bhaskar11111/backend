import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
const App = () => {
  const [notes,setNotes]=useState([])

  
   const fetchNotes=(()=>
  {
     axios.get('http://localhost:3000/api/notes').
  then((res)=>
  {
    console.log(res.data.notes)
    setNotes(res.data.notes)
  })
  })

  const submitHandler=(async(e)=>
  {
    e.preventDefault()
    const {title,status,description,age}=e.target.elements
    console.log(title.value,status.value,description.value,age.value)

   await axios.post('http://localhost:3000/api/notes',
    {
      title:title.value,
      status:status.value,
      description:description.value,
      age:age.value
    }
  )
  .then((res)=>
    {
      fetchNotes()

    })
    
  })

  const deletHandler=((id)=>
  {  
    axios.delete('http://localhost:3000/api/notes/'+id)
    .then((res)=>
    {
      fetchNotes()
    })
  })

  useEffect(()=>
  {
    fetchNotes()
  },[])

  return (
    <>
    <div className="w-full h-screen p-3 bg-zinc-800">

      <form onSubmit={(e)=>submitHandler(e)} className='flex gap-2 mb-3'>
        <input name='title' className='text-white/90 ring-0 border-0 bg-zinc-600 p-2 rounded-md' type="text" placeholder='title' />
        <input name='status' className='text-white/90 bg-zinc-600 p-2 rounded-md' type="text" placeholder='status' />
        <input name='description' className='text-white/90 bg-zinc-600 p-2 rounded-md' type="text" placeholder='description' />
        <input name='age' className='text-white/90 bg-zinc-600 p-2 rounded-md' type="number" placeholder='age' />
        <button className='text-white/90 px-3 py-1 rounded-md bg-blue-500 cursor-pointer active:scale-95'>Submit</button>
      </form>
    <div className="flex flex-wrap gap-3 ">
      
      {notes.map((elem)=>
      {
        return<>
        <div className="w-[20vw] flex gap-2 rounded-md flex-col items-center p-2 bg-zinc-500">
        <h1 className='text-white/90 font-semibold text-2xl '>{elem.title}</h1>
        <h1 className='text-white/70 text-xl'>{elem.status}</h1>
        <h1 className='text-zinc-700 font-xs m-auto truncate '>{elem.description}</h1>
        <h1 className='text-white/70'>{elem.age}</h1>
        <button onClick={()=>deletHandler(elem._id)} className='text-white/90 px-3 py-1 rounded-md bg-red-500 cursor-pointer active:scale-95 mt-2'>Delete</button>
      </div>
      </>
      })}
      
    </div>
    </div>
    </>
  )
}

export default App
