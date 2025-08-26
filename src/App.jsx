import { useState,useEffect } from 'react'
import MovieCard from './components/MovieCard'
import SearchBar from './components/SearchBar'
function App() {
const[movies ,setMovies]=useState([])
const[search,setSearch]=useState('')
useEffect(()=>{
  fetch("https://api.tvmaze.com/shows")
  .then(r=>r.json())
  .then(data=>setMovies(data))
},[])
 const filtered=movies.filter(movie=>(
  movie.name.toLowerCase().includes(search.toLowerCase())
))
  return (
 <div>
  <h1 className='font-extrabold text-center text-amber-500 m-5'>Movies Api</h1>
  <SearchBar search={search} setSearch={setSearch}/>
  <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 '>
   {filtered.map(movie=>(
    <MovieCard key={movie.id} movie={movie}/>
  ))}
  </div>
  
 </div>
  
  )
}

export default App
