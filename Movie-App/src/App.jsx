import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Search from './components/Search'

function App() {
  const [searchTerm,setSearchterm] = useState('')

  useEffect(()=>{

  },[])

  return (
   <main>
    <div className= "pattern" />

    <div className='wrapper'>
      <header>
      <img src='./hero-img.png' alt='Hero Banner' />
        <h1>Find <span className='text-gradient'>Movies</span> You'll Enjoy Without Hassle</h1>
      </header>

      <Search searchTerm ={searchTerm} setSearchterm ={setSearchterm} />
    </div>

    <h1>{searchTerm}</h1>

    
   </main>
  )
}

export default App
