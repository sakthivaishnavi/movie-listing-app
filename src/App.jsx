import MovieCard from './components/MovieCard.jsx'
import Navbar from './components/Navbar.jsx'
import { useState,useEffect } from 'react'

const App = () => {

  const [moviesList, setMovieList] = useState([])

  useEffect(() => {
    async function callMovieApi() {
      const result = await fetch('/movieApi')

      const moviesData = await result.json()

      setMovieList(moviesData.results)
    }
    callMovieApi()
  },[])



  return(
    <div>
    <Navbar />
    <main className='p-5'>
      <div className='row'>
          {moviesList.map((movie) => {
          return <div className='col-4' key={movie.id}>
            <MovieCard title={movie.title} image = {"https://image.tmdb.org/t/p/original/" + movie.poster_path} desc={movie.overview.substring(0, 150)} />
            </div>
          })}
      
      </div>
    </main>
</div>
  )
}
 

export default App
