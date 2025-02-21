import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import NotesList from './components/NotesList'
import AddNote from './components/AddNote'

function App() {


  return (
    <>
      <Header/>
      <NotesList/>
      <AddNote/>
    </>
  )
}

export default App
