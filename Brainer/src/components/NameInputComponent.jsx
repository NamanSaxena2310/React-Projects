import React,{useState} from 'react'
import { Link } from 'react-router';

function NameInputComponent() {
  const [playerName,setPlayerName] = useState('')
  console.log(playerName)
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="grid grid-cols-6 gap-4 ">
        {/* Input takes 6 columns */}
        <input
          type="text"
          onChange={(e)=> setPlayerName(e.target.value)}
          placeholder="Enter Your Name"
          className="p-4 col-span-4 text-2xl bg-slate-800 text-slate-400 border border-amber-50 rounded-md"
        />
        
        {/* Button takes 2 columns */}
        <Link to={'/timer'} state={playerName}>
        <button  className="col-span-2 bg-blue-500 text-white text-xl font-bold px-6 py-4 rounded-md hover:bg-blue-600 transition">
          GO!
        </button>
        </Link>
      
      </div>
    </div>
  );
  
}

export default NameInputComponent
