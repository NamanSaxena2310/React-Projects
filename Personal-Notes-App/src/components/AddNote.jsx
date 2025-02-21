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
    <div className='mt-10'>
      <input value={title} onChange={(e)=>{
        setTitle(e.target.value)
      }} type='text' className='border' placeholder='Enter your Title here '/>
      <input value={date} onChange={(e)=>{
        setDate(e.target.value)
      }} className='border' type='date'/>
      <textarea value={content} onChange={(e)=>{
        setContent(e.target.value)
      }} placeholder='Enter your content here ' className='border mt-5 block' rows={5} cols={50}></textarea>

      <button onClick={submit}>{selectedNote ? 'Update' : 'Submit'}</button>
    </div>
  )
}

export default AddNote
