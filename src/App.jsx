import { useState,useEffect } from 'react'
import MovieCard from './components/MovieCard'
import SearchBar from './components/SearchBar'
function App() {
const[movies ,setMovies]=useState([])
useEffect(()=>{
  fetch("")
})
  return (
   <div>
    <SearchBar />
    <MovieCard/>
   </div>
  )
}

export default App
