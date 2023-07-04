import React from 'react';
import classes from './MovieList.module.css';

class MovieList extends React.Component {
   render() {
      const movies = ["Spirited Away", "My Neighbor Totoro", "Pride and Prejudice", "Howl's Moving Castle"];
      return (
      <div>
         <h3 className = {classes.movieHeading}>Movies I Watched This Month</h3>
         <ol>
            <li className={classes.movieText}>{movies[0]}</li>
            <li className={classes.movieText}>{movies[1]}</li>
            <li className={classes.movieText}>{movies[2]}</li>
            <li className={classes.movieText}>{movies[3]}</li>
         </ol>
      </div>
      );
   }
}

export default MovieList;