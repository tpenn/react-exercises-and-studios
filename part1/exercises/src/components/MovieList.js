import React from 'react';
import classes from './MovieList.module.css';

class MovieList extends React.Component {
   render() {
      const movies = ["Spirited Away", "My Neighbor Totoro", "Dune", "Howl's Moving Castle"];
      const moviesList = movies.map(name =>
         <li key={name} className={classes.movieText}>{name}</li>
      );

      return (
      <div>
         <h3 className = {classes.movieHeading}>Movies I Watched This Month</h3>
         <ol>
            {moviesList}
         </ol>
      </div>
      );
   }
}

export default MovieList;