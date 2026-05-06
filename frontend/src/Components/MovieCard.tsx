import type { Movie } from "../types/movie.types";

interface MovieCardProps {
  movie: Movie;
}

function MovieCard({ movie }: MovieCardProps) {
  function handleFavMovie() {
    alert("clicked!");
  }

  return (
    <div className="group relative rounded-lg overflow-hidden bg-[#1a1a1a] transition-transform duration-200 flex flex-col hover:-translate-y-1">
      <div className="relative aspect-[2/3] w-full">
        <img
          className="h-full w-full object-cover"
          src={movie.url}
          alt={movie.title}
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/80 opacity-0 transition-opacity duration-200 flex flex-col justify-end p-4 group-hover:opacity-100">
          <button
            className="absolute top-4 right-4 text-white text-2xl p-2 bg-black/50 rounded-full w-10 h-10 flex items-center justify-center transition-colors duration-200 hover:bg-black/80"
            onClick={handleFavMovie}
          >
            ♥
          </button>
        </div>
      </div>

      <div className="p-4 flex flex-col gap-2 flex-1">
        <h3 className="text-base">{movie.title}</h3>
        <p className="text-[#999] text-sm">{movie.releaseDate}</p>
      </div>
    </div>
  );
}

export default MovieCard;
