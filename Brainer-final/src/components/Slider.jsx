import React, { useContext } from 'react'
import { GameContext } from '../context/GameContext'

const Slider = () => {
  const {numberOfGrids,setNumberOfGrids} = useContext(GameContext)
  return (
    <div className='flex  justify-between p-2 gap-4'>
      <input type="range" min={4} max={8} step={1} defaultValue={4} onChange={(e)=> setNumberOfGrids(e.target.value)} className="range range-accent" />
      <p className='font-bold text-md'>{numberOfGrids}</p>
    </div>
  )
}

export default Slider
