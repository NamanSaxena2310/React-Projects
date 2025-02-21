import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext'
import Note from './Note'

function NotesList() {

  const {notes} = useContext(GlobalContext)
  console.log(notes)
  return (
    <div className='flex w-full border border-black h-content align-center' >
    {
      notes.map((note)=><Note note= {note}/>)
    }
    </div>
  )
}

export default NotesList
