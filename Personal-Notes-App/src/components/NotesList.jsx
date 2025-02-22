import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext'
import Note from './Note'

function NotesList() {

  const {notes} = useContext(GlobalContext)
  console.log(notes)
  return (
    <div className='grid grid-cols-4 w-content h-content align-center' >
    {
      notes   ? notes.map((note)=><Note key={note.id} note= {note}/>) : <p>No Notes to Display</p>
    }
    </div>
  )
}

export default NotesList
