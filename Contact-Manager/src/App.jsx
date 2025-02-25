import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import Header from './components/Header'
import AddContact from './components/AddContact'
import ContactList from './components/ContactList'
import ContactDetail from './components/ContactDetail'

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
       <Routes>
        <Route path='/' element= {<ContactList contacts={contacts} setContacts= {setContacts}  />}/>
        <Route path='/add' element= {<AddContact setContacts ={setContacts} />}/>
        <Route path='/details/:id' element = {<ContactDetail contacts={contacts} />} />
       </Routes>
       
       {/* <AddContact  setContacts ={setContacts} />
       <ContactList contacts={contacts} setContacts= {setContacts}/> */}

    </div>
  )
}

export default App
