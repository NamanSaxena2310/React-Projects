import React from 'react';
import ContactCard from "./ContactCard";

function ContactList({ contacts, setContacts }) {
  return (
    <div className="max-w-md mx-auto mt-6">
      {contacts.map((contact) => (
        <ContactCard key={contact.id} contact={contact} contacts={contacts} setContacts ={setContacts} />
      ))}
    </div>
  );
}

export default ContactList;
