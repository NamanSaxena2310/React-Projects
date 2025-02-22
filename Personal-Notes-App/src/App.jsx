import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import NotesList from './components/NotesList'
import AddNote from './components/AddNote'
import { GlobalContext, GlobalProvider } from './context/GlobalContext'


function App() {


  return (
    <GlobalProvider>
      <Header/>
      <NotesList/>
      <AddNote/>
    </GlobalProvider>
  )
}

export default App
