import React, { useState } from 'react'
import './App.css'
import Header from './components/Header'
import AddContact from './components/AddContact'
import ContactList from './components/ContactList'

function App() {
  
  const contactList = [
    {
      id: 1,
      name:"Naman",
      email:"n@gmail.com"
    },
    {
      id: 2,
      name:"Hiya",
      email:"n@gmail.com"
    }
  ]

  return (
    <div>
      <Header/>
      <AddContact/>
      <ContactList contactList ={contactList}/>
    </div>
  )
}

export default App
