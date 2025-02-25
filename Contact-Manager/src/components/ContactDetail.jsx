import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"; // Ensure you import from 'react-router-dom'

function ContactDetail() {
  const [detail, setDetail] = useState(null); // Start with null to handle loading state
  const { id } = useParams(); // Get ID from URL

  useEffect(() => {
    // Retrieve contacts from localStorage
    const storedContacts = localStorage.getItem("contacts");
    
    if (storedContacts) {
      const allContacts = JSON.parse(storedContacts);

      // Find contact (ensure both ID and stored ID are strings for comparison)
      const foundContact = allContacts.find((c) => String(c.id) === id);

      setDetail(foundContact || {}); // Set to found contact or empty object
    }
  }, [id]); // Include 'id' in dependencies

  // Show loading state while fetching data
  if (!detail) {
    return <h2>Loading contact details...</h2>;
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold">Contact Details</h1>
      <p className="text-gray-700 mt-2"><strong>ID:</strong> {detail.id || "N/A"}</p>
      <p className="text-gray-700 mt-2"><strong>Name:</strong> {detail.name || "N/A"}</p>
      <p className="text-gray-700 mt-2"><strong>Email:</strong> {detail.email || "N/A"}</p>
      
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
