import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {
        directors.map((director, index) => {
          return (
            <div key={index}>
              <h2>{director.name}</h2>
              {director.movies.map((movie, index) => <h4>{movie}</h4>)}
            </div>)
        })
      }
    </div>
  )
}

export default Directors
