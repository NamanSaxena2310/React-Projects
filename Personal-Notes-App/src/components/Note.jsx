import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext'

function Note({note}) {
  const {deleteNote,selectedNote,setSelectedNote} = useContext(GlobalContext)
  console.log(selectedNote)
  return (
    <div className='border p-3 m-5'>
    <h1>{note.title}</h1>
    <p>{note.content}</p>
    <p>{note.date}</p>
    <button className='mr-1' onClick={()=>{
      deleteNote(note.id)
    }}>Complete</button>
    <button onClick={()=>{
      setSelectedNote(note)
    }}>Edit</button>
  </div>
  )
}

export default Note
