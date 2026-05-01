import "./App.css";
import MovieCard from "./Components/MovieCard";

function App() {
  return (
    <div>
      <MovieCard movie={{ title: "Example Title", releaseDate: "2024" }} />
    </div>
  );
}

export default App;
