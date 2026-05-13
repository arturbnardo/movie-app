import type { Movie } from "../types/movie.types";
import { useMovieContext } from "../contexts/MovieContext";
import type { MouseEvent } from "react";

interface MovieCardProps {
  movie: Movie;
}

function MovieCard({ movie }: MovieCardProps) {
  const { isFavorite, addToFavorites, removeFromFavorites } = useMovieContext();

  const favorite = isFavorite(movie.id);

  function handleFavMovie(e: MouseEvent<HTMLButtonElement>) {
    e.preventDefault();

    if (favorite) {
      removeFromFavorites(movie.id);
    } else {
      addToFavorites(movie);
    }
  }

  return (
    <div className="group relative rounded-lg overflow-hidden bg-[#1a1a1a] transition-transform duration-200 flex flex-col text-[0.9rem] md:text-base hover:-translate-y-1 max-w-[320px] w-full">
      <div className="relative aspect-2/3 w-full">
        <img
          className="h-full w-full object-cover"
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />

        <div className="absolute inset-0 bg-linear-to-b from-black/10 to-black/80 opacity-0 transition-opacity duration-200 flex flex-col justify-end p-4 group-hover:opacity-100">
          <button
            className={`absolute top-4 right-4 text-white text-[1.2rem] md:text-2xl p-2 bg-black/50 rounded-full w-8 h-8 md:w-10 md:h-10 flex items-center justify-center transition-colors duration-200 hover:bg-black/80 cursor-pointer 
              ${
                favorite
                  ? "bg-red-500 text-white hover:bg-red-600"
                  : "bg-black/50 text-white hover:bg-black/80"
              }`}
            onClick={handleFavMovie}
          >
            ♥
          </button>
        </div>
      </div>

      <div className="p-3 md:p-4 flex flex-col gap-2 flex-1">
        <h3 className="text-base text-white">{movie.title}</h3>
        <p className="text-[#999] text-sm">
          {movie.release_date?.split("-")[0]}
        </p>
      </div>
    </div>
  );
}

export default MovieCard;
