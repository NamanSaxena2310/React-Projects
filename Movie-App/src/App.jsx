import { useState,useEffect } from 'react'
import { useDebounce } from 'react-use'
import './App.css'
import Search from './components/Search'
import Spinner from './components/Spinner'
import MovieCard from './components/MovieCard'
import { getTrendingMovies, updateSearchCount } from './appwrite'

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
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('')
  const [trendingMovies, setTrendingMovies] = useState([])

  //Debouncing
  useDebounce(()=>setDebouncedSearchTerm(searchTerm), 500 ,[searchTerm])

  //Function to fetch movies from API
  const fetchMovies = async (query = '') =>{
    setIsLoading(false)
    setErrorMessage('')
  try {

    const enppoint = query ?`${API_BASE_URL}/search/movie?query=${encodeURI(query)}` : `${API_BASE_URL}/discover/movie?sort_by=popularity.desc`  

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

    if (query && data.results.length > 0) {
        await updateSearchCount(query,data.results[0])
    }
  } catch (error) {
    console.log("Error Fetching movies")
    setErrorMessage('Error Fetching movies')
  }finally {
    setIsLoading(false)
  }
} 


const loadTrendingMovies = async () => {
  try {
    const movies = await getTrendingMovies()

    setTrendingMovies(movies)
  } catch (error) {
    console.log("")
  }
}

  useEffect(()=>{
    fetchMovies(debouncedSearchTerm)
  },[debouncedSearchTerm])

  useEffect(()=>{
    loadTrendingMovies()
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

      {trendingMovies.length > 0 && (
        <section className='trending'>
          <h2>Trending Movies</h2>

          <ul>
            {trendingMovies.map((movie,index)=> (
              <li key={movie.$id}>
                <p>{index + 1}</p>
                <img src={movie.poster_url} alt={movie.title}/>
              </li>
            ))}
          </ul>
        </section>
      ) }

    <section className='all-movies'>
      <h2>All Movies</h2>

      {isLoading ? (
        <Spinner/>

      ) : errorMessage ? (
        <p className=' text-red-500'>{errorMessage}</p>
      ): (
        <ul>
          {movieList.map((movie)=>(
           <MovieCard key={movie.id} movie={movie} />
          ))}
        </ul>

      )}
    </section>
    </div>
    
   </main>
  )
}

export default App
