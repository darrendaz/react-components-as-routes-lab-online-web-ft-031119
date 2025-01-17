import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {
        actors.map(actor => {
          return (
            <div className="actor-list">
              <h1>{actor.name}</h1>
              {
                actor.movies.map(movie => {
                  return <h3>{movie}</h3>
                })
              }
            </div>
          )
        })
      }
    </div>
  )
}

export default Actors;
