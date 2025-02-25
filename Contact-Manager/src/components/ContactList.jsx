import React from 'react';
import { Link } from 'react-router-dom';
import ContactCard from "./ContactCard";

function ContactList({ contacts, setContacts }) {

  return (
    <div className="max-w-md mx-auto mt-6">
      <h1>Contact List</h1>
      {contacts.map((contact) => (
        <ContactCard key={contact.id} contact={contact} contacts={contacts} setContacts ={setContacts} />
      ))}
      <Link to="/add">
      <button  className="bg-blue-500 shadow-lg shadow-blue-500/50 text-white font-bold px-6 py-3 rounded-md hover:bg-blue-600 transition">
            Add New Contact
        </button>
      </Link>
     
    </div>
  );
}

export default ContactList;
