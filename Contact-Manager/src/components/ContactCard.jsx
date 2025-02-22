import React from 'react';

function ContactCard({ contact, contacts,setContacts }) {
  
  const deleteContact = ()=>{
      const newList = contacts.filter((perContact)=> perContact.id !== contact.id)
      setContacts(newList)
  }

  return (
    <div className="w-full p-4 border border-gray-200 rounded-md my-2 shadow hover:shadow-lg transition mx-auto text-center">
      <h3 className="text-lg font-semibold">{contact.name}</h3>
      <p className="text-gray-500 text-sm">{contact.email}</p>
      <button onClick={deleteContact} className="text-red-500 hover:text-red-700 focus:outline-none mt-2 cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 inline-block"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5-4h4a1 1 0 011 1v1H9V4a1 1 0 011-1z"
          />
        </svg>
      </button>
    </div>
  );
}

export default ContactCard;
