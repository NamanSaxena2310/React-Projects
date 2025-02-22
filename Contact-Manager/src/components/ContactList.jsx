import React from 'react';
import ContactCard from "./ContactCard";

function ContactList({ contactList }) {
  return (
    <div className="max-w-md mx-auto mt-6">
      {contactList.map((contact) => (
        <ContactCard key={contact.id} contact={contact} />
      ))}
    </div>
  );
}

export default ContactList;
