import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext'

function Note({note}) {
  const {deleteNote,selectedNote,setSelectedNote} = useContext(GlobalContext)
  console.log(selectedNote)
  return (
    <div className='border p-3 m-5 rounded-3xl bg-slate-100'>
    <h1 className='mb-2 font-bold text-2xl '>{note.title}</h1>
    <p>{note.content}</p>
    <p>{note.date}</p>
    <button className='mr-1 border p-3 rounded-2xl bg-green-300 cursor-pointer mt-3' onClick={()=>{
      deleteNote(note.id)
    }}>Complete</button>
    <button className='mr-1 border p-3 rounded-2xl bg-amber-400 cursor-pointer' onClick={()=>{
      setSelectedNote(note)
    }}>Edit</button>
  </div>
  )
}

export default Note
