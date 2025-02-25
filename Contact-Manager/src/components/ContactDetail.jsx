import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom"; // Ensure you import from 'react-router-dom'

function ContactDetail() {
  const location = useLocation()
  const {contact} = location.state ? location.state : {}
  
  if (!contact) {
    if (!contact) {
      return <h2 className="text-center mt-5 text-red-500">No contact details available!</h2>;
    }
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold">Contact Details</h1>
      <p className="text-gray-700 mt-2"><strong>ID:</strong> {contact.id || "N/A"}</p>
      <p className="text-gray-700 mt-2"><strong>Name:</strong> {contact.name || "N/A"}</p>
      <p className="text-gray-700 mt-2"><strong>Email:</strong> {contact.email || "N/A"}</p>
      
      <Link to={'/'}>
      <button
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
      >
        Go Back
      </button>
      </Link>
      
    </div>
  );
}

export default ContactDetail;
