import React, { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header'
import AddContact from './components/AddContact'
import ContactList from './components/ContactList'

function App() {
  
  const [contacts,setContacts] = useState(
    ()=>{
      const storedContacts= JSON.parse(localStorage.getItem('contacts'))
      return storedContacts ? storedContacts : [] 
    }
  )


  useEffect(()=>{
    localStorage.setItem("contacts",JSON.stringify(contacts))
   
  },[contacts])

  return (
    <div>
      <Header/>
      <AddContact  setContacts ={setContacts} />
      <ContactList contacts={contacts} setContacts= {setContacts}/>
    </div>
  )
}

export default App
