import React, { useContext, useEffect, useState } from 'react'
import { GlobalContext } from '../context/GlobalContext'

function AddNote() {
  const [title,setTitle]= useState('')
  const [content,setContent]= useState('')
  const [date,setDate]= useState(null)

  const {addNote,selectedNote,setSelectedNote,editNote} = useContext(GlobalContext)

  useEffect(()=>{
    if (selectedNote) {
      setTitle(selectedNote.title)
      setContent(selectedNote.content)
      setDate(selectedNote.date)
    }else{
      setTitle('')
      setContent('')
      setDate('')
    }
   
  },[selectedNote])


 
  const submit = ()=>{
    if (selectedNote) {
        editNote({id:selectedNote.id, note:{title,content,date}})
        setSelectedNote(null)
    } else {
      addNote({
        id: Math.floor(Math.random() * 1000000),
        title,
        content,
        date,
      });

      setContent('')
      setDate('')
      setTitle('')
    }
    
  }

  return (
    <>
     <h1 className='text-4xl font-semibold text-center'>
      Add New Note
    </h1>
<div className="flex justify-center items-center">
      <div className="mt-10 p-6 border rounded-lg shadow-lg">

        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          className="border p-2 w-full"
          placeholder="Enter your Title here"
        />
        <input
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="border p-2 w-full mt-4"
          type="date"
        />
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Enter your content here"
          className="border p-2 w-full mt-4 block"
          rows={5}
          cols={50}
        ></textarea>
  
        <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded" onClick={submit}>
          {selectedNote ? "Update" : "Submit"}
        </button>
      </div>
    </div>
    </>
    
  );
  
}

export default AddNote
