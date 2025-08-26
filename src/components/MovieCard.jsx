function MovieCard({ movie }) {
  return (
    <div>
      <h1>{movie.name}</h1>
      <p>{movie.genres.join(", ")}</p>
      {movie.image ? (
        <img src={movie.image.medium} alt={movie.name} />
      ) : (
        <p>No image available</p>  // fallback if null
      )}
    </div>
  )
}
