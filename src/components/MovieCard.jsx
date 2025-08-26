function MovieCard({ movie }) {
  return (
    <div className="bg-slate-100 rounded-lg shadow p-4">
      <h1 className="text-amber-600 font-bold">{movie.name}</h1>
      <p className="text-amber-950">{movie.genres.join(", ")}</p>
      {movie.image ? (
        <img src={movie.image.medium} alt={movie.name} className="w-full h-64 object-cover rounded-md mt-2" />
      ) : (
        <p className="mt-2 text-gray-500">No image available</p>
      )}
    </div>
  )
}
export default MovieCard;