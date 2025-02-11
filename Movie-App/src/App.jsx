import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Search from './components/Search'
import Spinner from './components/Spinner'

const API_BASE_URL = 'https://api.themoviedb.org/3'

const API_KEY = import.meta.env.VITE_TMDB_API_KEY

const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization : `Bearer ${API_KEY}`
  }
}

function App() {
  const [searchTerm,setSearchterm] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [movieList, setMovieList] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  //Function to fetch movies from API
  const fetchMovies = async () =>{
    setIsLoading(false)
    setErrorMessage('')
  try {

    const enppoint = `${API_BASE_URL}/discover/movie?sort_by=popularity.desc`

    const response = await fetch(enppoint,API_OPTIONS)
    
    if (!response.ok) {
      throw new Error("Unable to fetch movies at this point")
    }

    const data = await response.json()
    
    if (data.Response === 'False') {
      setErrorMessage(data.Error || 'Unable to fetch movies at this point')
      setMovieList([])
      return
    }
    
    setMovieList(data.results || [])
    
  } catch (error) {
    console.log("Error Fetching movies")
    setErrorMessage('Error Fetching movies')
  }finally {
    setIsLoading(false)
  }
} 


  useEffect(()=>{
    fetchMovies()
  },[])

  return (
   <main>
    <div className= "pattern" />

    <div className='wrapper'>
      <header>
      <img src='./hero-img.png' alt='Hero Banner' />
        <h1>Find <span className='text-gradient'>Movies</span> You'll Enjoy Without Hassle</h1>
        
      <Search searchTerm ={searchTerm} setSearchterm ={setSearchterm} />
      </header>

    </div>

    <section className='all-movies'>
      <h2 className='mt-[40px] '>All Movies</h2>

      {isLoading ? (
        <Spinner/>

      ) : errorMessage ? (
        <p className=' text-red-500'>{errorMessage}</p>
      ): (
        <ul>
          {movieList.map((movie)=>(
            <p key={movie.id} className='text-white'>{movie.title}</p>
          ))}
        </ul>

      )}
    </section>

    
   </main>
  )
}

export default App
