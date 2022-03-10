import { useState } from "react";
import "./App.css";
import MovieList from "./components/MovieList";
import Navigation from "./components/Navigation";
import { moviesData } from "./Constants/data";
function App() {
  const [movies, setMovies] = useState(moviesData);
  const [search, setSearch] = useState("");

  return (
    <div>
      <Navigation
        movies={movies}
        setMovies={setMovies}
        search={search}
        setSearch={setSearch}
      />
      <MovieList movies={movies} search={search} />
    </div>
  );
}

export default App;
