import { useState,useEffect } from 'react'
import MovieCard from './components/MovieCard'
import SearchBar from './components/SearchBar'
function App() {
const[movies ,setMovies]=useState([])
const[search,setSearch]=useState([])
useEffect(()=>{
  fetch("https://api.tvmaze.com/shows")
  .then(r=>r.json())
  .then(data=>setMovies(data))
})
 const filtered=movies.filter(movie=>(
  movie.name.toLowerCase().includes(setSearch.toLowerCase())
))
  return (
 <div>
  <SearchBar search={search} setSearch={setSearch}/>
  <MovieCard movies={filtered} />
 </div>
  
  )
}

export default App
