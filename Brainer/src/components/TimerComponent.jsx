import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router'

function TimerComponent() {
  const [timer,setTimer] = useState(5)
  const location = useLocation()
  const navigate = useNavigate()
  const  playerName = location.state
  useEffect(()=>{
    if (timer !== 0) {
      setTimeout(()=>{
        setTimer((timer) => timer - 1 )
      },1000)
    }else{
      navigate('/game')
    }
   
  },[timer])
  return (
    <div className="text-center text-white text-2xl sm:text-4xl font-bold p-6 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg shadow-lg animate-fadeIn">
  Hi <span className="text-yellow-300">{playerName}</span>, Your Game Starts in 
  <span className="text-red-400 animate-pulse"> {timer} </span> seconds
</div>

  )
}

export default TimerComponent
