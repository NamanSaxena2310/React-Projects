import React, { useContext } from 'react'
import Topbar from '../components/Topbar'
import NameInput from '../components/NameInput'
import { GameContext } from '../context/GameContext'

const Home = () => {
  const {playerName} = useContext(GameContext)
  return (
    <div>
      <Topbar/>
     {playerName ? <p className='text-center mt-10 text-3xl'>Hello <span className='text-[#00d3bb]'>{playerName}</span> </p> : <NameInput/> } 
    </div>
  )
}

export default Home
