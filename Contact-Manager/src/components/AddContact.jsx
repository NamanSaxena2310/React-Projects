import React from 'react';

function AddContact() {
  return (
    <div className="max-w-md mx-auto mt-6">
      <h2 className="text-3xl mb-4 font-semibold">Add Contact</h2>
      <form className="flex flex-col space-y-4">
        <div className="flex flex-col">
          <label className="text-lg font-medium">Name:</label>
          <input className="border border-gray-400 h-10 px-4 rounded-md" type="text" placeholder="Name" name="name" />
        </div>

        <div className="flex flex-col">
          <label className="text-lg font-medium">Email:</label>
          <input className="border border-gray-400 h-10 px-4 rounded-md" type="text" placeholder="Email" name="email" />
        </div>

        {/* Fix button width and center */}
        <div className="flex justify-start">
          <button className="bg-blue-500 shadow-lg shadow-blue-500/50 text-white font-bold px-6 py-3 rounded-md hover:bg-blue-600 transition">
            Add
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddContact;
