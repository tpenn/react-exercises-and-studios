import React from 'react'
import styles from './Description.css';

export function RecipeAuthor() {
    const authorLink  = 'https://www.forksoverknives.com/recipes/vegan-pasta-noodles/vegan-potato-gnocchi-with-mushrooms-and-greens/';
    const authorName  = 'Forks Over Knives';
    const authorPhoto = 'https://www.forksoverknives.com/wp-content/uploads/logo-white.svg';

    return (
        <div className = {styles.recipeAuthorBlock}>
           <img src={authorPhoto} alt = "Reasonable alt text" className={styles.imageUpdates} />
           <div>
              <h3>{authorName}</h3>
              <a href={authorLink}>Website</a> 
           </div>
        </div>
     );
}

export default class RecipeDescription extends React.Component {
    render() {
        return (
            <div> 
                <div>
                    <h1>Vegan Potato Gnocchi with Mushrooms and Greens</h1>
                    <p>Delicious plant based recipe!</p>
                </div>
                <RecipeAuthor />
            </div>
        )
    }
}