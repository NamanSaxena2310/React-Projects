import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Score from './pages/Score'

function App() {
  

  return (
    <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/score' element={<Score />}/>
    </Routes>
  )
}

export default App
