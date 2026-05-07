import type React from "react";
import { useState } from "react";
import MovieCard from "../Components/MovieCard";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  const movies = [
    { id: 1, title: "John Wick", releaseDate: "2020", url: "..." },
    { id: 2, title: "Terminator", releaseDate: "2015", url: "..." },
    { id: 3, title: "The Matrix", releaseDate: "2010", url: "..." },
  ];

  function handleSearch(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    setSearchQuery("");
  }

  return (
    <div className="py-4 sm:p-8 w-full">
      <form
        onSubmit={handleSearch}
        className="max-w-2xl mt-0 mx-auto mb-4 sm:mb-8 flex gap-4 px-4"
      >
        <input
          type="text"
          placeholder="Search for movies..."
          className="flex-1 py-3 px-4 border-0 rounded bg-[#333] text-white text-base focus:outline-none focus:ring-2 focus:ring-[#666]"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button
          type="submit"
          className="py-3 px-6 bg-[#e50914] text-white rounded font-medium transition-colors duration-200 whitespace-nowrap hover:bg-[#f40612]"
        >
          Search
        </button>
      </form>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6 p-4 w-full">
        {movies.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
}

export default Home;
