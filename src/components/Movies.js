import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
      {movies.map((movie, index) => {
        return (
          <div className="movie" key={index}>
            <h4>Title: {movie.title}</h4>
            <p>Duration: {movie.time} minutes</p>
            <p>Metscore: {movie.metascore}</p>
            {movie.genres.map((genre, index) => <small key={index} >{genre}</small>)}
          </div>
        )
      })}
    </div>
  );
};

export default Movies;
