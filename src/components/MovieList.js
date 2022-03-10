import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ movies, search }) => {
  return (
    <div className="movielist">
      {movies
        .filter((movie) =>
          movie.name.toUpperCase().includes(search.toUpperCase())
        )
        .map((movie) => (
          <MovieCard movie={movie} />
        ))}
    </div>
  );
};

export default MovieList;
