import React, { useContext } from 'react'
import Topbar from '../components/Topbar'
import NameInput from '../components/NameInput'
import { GameContext } from '../context/GameContext'

const Home = () => {
  const {playerName} = useContext(GameContext)
  return (
    <div>
      <Topbar/>
     {playerName ? "Hello Naman" : <NameInput/> } 
    </div>
  )
}

export default Home
