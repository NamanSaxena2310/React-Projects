import React, { useContext, useState } from 'react'
import { GameContext } from '../context/GameContext'

const NameInput = () => {
  const [name,setName] = useState('')
  const {playerName,setPlayerName} = useContext(GameContext)

  const onChangeHandler = (e)=>{
    setName(e.target.value)
    
  } 

  const onClickHandler = ()=>{
      setPlayerName(name)
      setName('')
      
  }

  console.log(playerName)

  return (
    <div className='flex justify-center items-center h-[80px]  mt-2   '>
    <div className='flex  w-[30%]'>
      <input value={name} onChange={(e)=>onChangeHandler(e)} placeholder='Enter your name' className='mr-5'/>
      <button onClick={()=>onClickHandler()} className='p-2 border rounded bg-gray-300  '>Submit</button>
    </div>
          
    </div>
  )
}

export default NameInput
