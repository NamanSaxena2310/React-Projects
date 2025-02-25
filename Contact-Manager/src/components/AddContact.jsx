import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router';

function AddContact({setContacts}) {

  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const navigate = useNavigate()

  // Creating new Contact
  const newContact = {
    id: Math.floor(Math.random() * 100000),
    name,
    email
  }

  const submitForm = (e)=>{
    e.preventDefault()
    if (name === "" || email === "") {
      alert("Please Fill All the details")
    } else {
      setContacts((prevContacts)=> [ newContact ,...prevContacts])
      setName("")
      setEmail("")
      navigate('/')
    }
  }
  return (
    <div className="max-w-md mx-auto mt-6">
      <h2 className="text-3xl mb-4 font-semibold">Add Contact</h2>
      <form className="flex flex-col space-y-4">
        <div className="flex flex-col">
          <label className="text-lg font-medium">Name:</label>
          <input onChange={(e)=> setName(e.target.value)} className="border border-gray-400 h-10 px-4 rounded-md" type="text" placeholder="Name" value={name} name="name" />
        </div>

        <div className="flex flex-col">
          <label className="text-lg font-medium">Email:</label>
          <input onChange={(e)=>setEmail(e.target.value)} className="border border-gray-400 h-10 px-4 rounded-md" type="text" value={email} placeholder="Email" name="email" />
        </div>

        {/* Fix button width and center */}
        <div className="flex justify-start">
        
        <button onClick={submitForm} className="bg-blue-500 shadow-lg shadow-blue-500/50 text-white font-bold px-6 py-3 rounded-md hover:bg-blue-600 transition">
            Add
          </button>
        
          
        </div>
      </form>
    </div>
  );
}

export default AddContact;
