import React, { useContext } from 'react'
import { GameContext } from '../context/GameContext'

const Slider = () => {
  const {numberOfGrids,setNumberOfGrids} = useContext(GameContext)
  return (
    <div className='flex border justify-between p-2'>
      <input type='range' min={4} max={12} step={2} defaultValue={4} onChange={(e)=> setNumberOfGrids(e.target.value)} />
      <p>{numberOfGrids}</p>
    </div>
  )
}

export default Slider
