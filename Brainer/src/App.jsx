import { useState } from 'react'

import './App.css'
import NameInputComponent from './components/NameInputComponent'
import { BrowserRouter } from 'react-router'
import { Routes,Route } from 'react-router'
import TimerComponent from './components/TimerComponent'
import Game from './components/Game'


function App() {
  

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<NameInputComponent />}/>
        <Route path='/timer' element={<TimerComponent />}/>
        <Route path='/game' element={<Game/>}/>
      </Routes>
    </BrowserRouter>
      
    
   
      
    </>
  )
}

export default App
