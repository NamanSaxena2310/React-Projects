import React, { useContext, useState } from 'react'
import { GlobalContext } from '../context/GlobalContext'

function AddNote() {
  const [title,setTitle]= useState('')
  const [content,setContent]= useState('')
  const [date,setDate]= useState(null)

  const {addNote} = useContext(GlobalContext)

  const newNote = {
    id: Math.floor(Math.random()*1000000),
    title,
    content,
    date
  }

  const submit = ()=>{
    addNote(newNote)
  }

  return (
    <div className='mt-10'>
      <input onChange={(e)=>{
        setTitle(e.target.value)
      }} type='text' className='border' placeholder='Enter your Title here '/>
      <input onChange={(e)=>{
        setDate(e.target.value)
      }} className='border' type='date'/>
      <textarea onChange={(e)=>{
        setContent(e.target.value)
      }} placeholder='Enter your content here ' className='border mt-5 block' rows={5} cols={50}></textarea>

      <button onClick={submit}>Add</button>
    </div>
  )
}

export default AddNote
