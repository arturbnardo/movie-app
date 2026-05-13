import { useMovieContext } from "../contexts/MovieContext";
import MovieCard from "../Components/MovieCard";

function Favorites() {
  const { favorites } = useMovieContext();

  if (favorites.length > 0) {
    return (
      <div className="p-8 w-full ">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,320px))] justify-center gap-6 p-4 w-full">
          {favorites.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="text-center py-16 px-8 bg-gray-900 rounded-xl my-8 mx-auto max-w-2xl">
      <h2 className="mb-4 text-3xl text-[#e50914]">No favorite movies</h2>

      <p className="text-[#999] text-lg">
        Start adding movies to your favorites and they will appear here.
      </p>
    </div>
  );
}

export default Favorites;
