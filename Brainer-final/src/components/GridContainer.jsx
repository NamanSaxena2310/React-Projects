import React, { useContext } from 'react'
import GridBlock from './GridBlock'
import { GameContext } from '../context/GameContext'

const GridContainer = () => {
  const { numberOfGrids } = useContext(GameContext)
  const totalBlocks = numberOfGrids * numberOfGrids

  return (
    <div
      className="grid gap-1 max-w-[700px] mx-auto my-20"
      style={{
        gridTemplateColumns: `repeat(${numberOfGrids}, 1fr)`
      }}
    >
      {Array.from({ length: totalBlocks }).map((_, index) => (
        <GridBlock key={index} />
      ))}
    </div>
  )
}

export default GridContainer
